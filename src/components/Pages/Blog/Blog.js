import React from "react";
import BlogPost from "../../BlogPost/BlogPost";

const Blog = () => {
  return (
    <div>
      <div className="room pt-5">
        <div className="text-center pt-5">
          <h1 className="text-color">Blog Post</h1>
          <p className="text-color">Home / Blog</p>
        </div>
      </div>
      <div>
        <BlogPost></BlogPost>
      </div>
    </div>
  );
};

export default Blog;
