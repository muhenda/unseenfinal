"use client";

import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import Navbar from '../components/Header/page';
import Footer from '../components/footer/page';
import Subscribe from '../components/subscribe/subscribe';
import PageTitleArea from '../components/about/PageTitleArea';
import Image from 'next/image';
import Link from 'next/link';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgZEbdAxVzupkvQWB5OZ16rRYpf2YLeNE",
  authDomain: "unseen-agency.firebaseapp.com",
  projectId: "unseen-agency",
  storageBucket: "unseen-agency.appspot.com",
  messagingSenderId: "687413055184",
  appId: "1:687413055184:web:e0c192cae1e9c2b698d8d5",
  measurementId: "G-403QLVZD1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'gallery'));
        const itemsData: GalleryItem[] = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          ...doc.data() as Omit<GalleryItem, 'id'>,
          id: doc.id  // Make sure we're using the Firestore document ID
        }));
        setGalleryItems(itemsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />
      <PageTitleArea />
      <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-50">
                <h5 className="bottom-line mb-25">Gallery</h5>
              </div>
            </div>
          </div>
          <div className="grid row">
            {galleryItems.map((item, index) => (
              <div key={item.id || index} className="col-lg-4 col-md-6 grid-item">
                <div className="z-gallery mb-30">
                  <div className="z-gallery__thumb mb-20">
                    <Link href={`/gallery/${item.id}`}>
                      <Image
                        className="img-fluid"
                        src={item.imageUrl}
                        alt={item.title}
                        width={500} // You can adjust the width as needed
                        height={300} // Adjust the height based on your aspect ratio
                        objectFit="cover" // This ensures the image maintains aspect ratio without distortion
                      />
                    </Link>
                    <div className="feedback-tag">4.8(256)</div>
                    <div className="heart-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                  <div className="z-gallery__content">
                    <h4 className="sub-title mb-20">
                      <Link href={`/gallery/${item.id}`}>{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 mt-20 text-center mb-20">
              All
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Gallery;
