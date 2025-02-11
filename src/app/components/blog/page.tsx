"use client";
import React, { useState, useEffect } from 'react';
import { db } from "../../firebase"; // Ensure this is the correct path to your Firebase config
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

// Type for a single blog item
interface BlogItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: { seconds: number }; // Timestamp field from Firebase
}

const Blog: React.FC = () => {
  const [blogsData, setBlogsData] = useState<BlogItem[]>([]); // State to hold fetched blog data
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch blog data from Firebase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Query the blog collection, ordered by createdAt
        const q = query(collection(db, "blog"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        // Map the documents into a structured array
        const blogsList: BlogItem[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          imageUrl: doc.data().imageUrl,
          createdAt: doc.data().createdAt, // Timestamp field
        }));

        // Set the state with the fetched data
        setBlogsData(blogsList);
      } catch (error) {
        console.error("Error fetching blogs from Firebase:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchBlogs(); // Call the fetch function on component mount
  }, []); // Empty dependency array ensures this runs only once

  return (
    <section className="blog-area mr-100 ml-100">
      <div className="blog-bg gradient-bg pl-100 pr-100 pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <h5 className="bottom-line mb-25">Latest News</h5>
                <h2 className="mb-25">Lots of new Blogs & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Display loading state or blogs */}
            {loading ? (
              <p>Loading...</p>
            ) : blogsData.length === 0 ? (
              <p>No blogs available.</p>
            ) : (
              blogsData.slice(0, 3).map((blog, index) => (
                <div className="col-lg-4 col-md-6" key={blog.id}>
                  <div className="z-blogs mb-30 wow fadeInUp2 animated" data-wow-delay={`${index * 0.1}s`}>
                    <div className="z-blogs__thumb mb-30">
                      {/* Use Next.js Image component with fixed width and dynamic height */}
                      <Image
                        src={blog.imageUrl}
                        alt="blog-img"
                        width={350} // Fixed width
                        height={0}  // Set height to 0 to allow auto-adjustment
                        style={{ objectFit: 'cover', height: 'auto' }}  // Ensure auto height adjustment
                      />
                    </div>
                    <div className="z-blogs__content">
                      <h5 className="mb-25">Online . School . Skill</h5>
                      <h4 className="sub-title mb-15">
                        {blog.title}
                      </h4>
                      <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                        <span>
                          Date: {new Date(blog.createdAt.seconds * 1000).toLocaleDateString()}
                        </span>
                        <span>By Guest Admin</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mt-20 mb-30 wow fadeInUp2 animated" data-wow-delay=".4s">
              <Link href="/blog" className="theme_btn">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
