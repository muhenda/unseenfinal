"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Header/page";
import Footer from "../components/footer/page";
import Subscribe from "../components/subscribe/subscribe";
import { db, collection, getDocs, query, orderBy } from "../firebase";

// Define a type for the blog post data
interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: { seconds: number };
  category: string;
  author: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]); // Use the BlogPost type here
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, "blog");
        const blogQuery = query(blogCollection, orderBy("createdAt", "desc"));
        const blogSnapshot = await getDocs(blogQuery);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          imageUrl: doc.data().imageUrl,
          createdAt: doc.data().createdAt,
          category: doc.data().category,
          author: doc.data().author,
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error("Error fetching blogs from Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="page-title-area d-flex align-items-end"
        style={{
          backgroundImage: "url(/assets/img/page-title-bg/01.jpg)",
          paddingTop: "150px",
        }}
      >
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="page-title-wrapper mb-50">
                <h1 className="page-title mb-25">Blog</h1>
                <div className="breadcrumb-list">
                  <ul className="breadcrumb">
                    <li>
                      <Link href="/">Home - Pages -</Link>
                    </li>
                    <li>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "#007bff",
                          padding: 0,
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        Blog
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-area">
        <div className="blog-bg pt-150 pb-120 pt-md-100 pb-md-70 pt-xs-100 pb-xs-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <h2 className="mb-25">Lots of new Blogs & News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Show loading text or blogs */}
              {loading ? (
                <p>Loading...</p>
              ) : blogs.length === 0 ? (
                <p>No blogs available.</p>
              ) : (
                blogs.map((post, index) => (
                  <div className="col-lg-4 col-md-6" key={post.id}>
                    <div className="z-blogs mb-30">
                      <div className="z-blogs__thumb mb-30">
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          width={500}
                          height={300}
                          layout="responsive"
                          priority={index === 0}
                        />
                      </div>
                      <div className="z-blogs__content">
                        <h5 className="mb-25">{post.category || "Category"}</h5>
                        <h4 className="sub-title mb-15">{post.title}</h4>
                        <div className="z-blogs__meta d-sm-flex justify-content-between pt-20">
                          <span>
                            Date: {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
                          </span>
                          <span>By {post.author || "Unknown"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt-20 mb-30">
                <button
                  className="theme_btn"
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subscribe-area footer-bg border-bot pt-145 pb-50 pt-md-90 pt-xs-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="subscribe-wrapper text-center mb-30">
                <h2>Subscribe to our Newsletter & Get every update.</h2>
                <div className="subscribe-form-box pos-rel">
                  <form className="subscribe-form">
                    <input type="text" placeholder="Write Your E-mail" />
                  </form>
                  <button className="sub_btn">Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
};

export default BlogPage;
