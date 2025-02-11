"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFirestore, collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgZEbdAxVzupkvQWB5OZ16rRYpf2YLeNE",
  authDomain: "unseen-agency.firebaseapp.com",
  projectId: "unseen-agency",
  storageBucket: "unseen-agency.appspot.com",
  messagingSenderId: "687413055184",
  appId: "1:687413055184:web:e0c192cae1e9c2b698d8d5",
  measurementId: "G-403QLVZD1G",
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
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const itemsData: GalleryItem[] = querySnapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => ({
            ...doc.data() as Omit<GalleryItem, "id">,
            id: doc.id, // Use Firestore document ID
          })
        );
        setGalleryItems(itemsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
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
    <section className="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50">
              <h5 className="bottom-line mb-25">Featured Gallery</h5>
              <h2>Explore our Popular Gallery Items</h2>
            </div>
          </div>
        </div>
        <div className="grid row">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 grid-item">
              <div className="z-gallery mb-30">
                <div className="z-gallery__thumb mb-20">
                  <Image
                    className="img-fluid"
                    src={item.imageUrl}
                    alt={item.title}
                    width={400} // Set an appropriate width
                    height={300} // Set an appropriate height
                    layout="responsive" // Makes the image responsive
                  />
                  <div className="feedback-tag">4.8(256)</div>
                  <div className="heart-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                </div>
                <div className="z-gallery__content">
                  <h4 className="sub-title mb-20">
                    <a href="gallery-details.html">{item.title}</a>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 mt-20 text-center mb-20">
            <a href="/gallery" className="theme_btn">
              All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
