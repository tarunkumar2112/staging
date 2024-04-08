// src/components/Blog.js
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function Blog({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.metadata.title} className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.metadata.title}</h2>
            <p className="text-gray-600">{post.metadata.description}</p>
            <img src={post.metadata.image} alt={post.metadata.title} className="mt-4 rounded-lg" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      metadata: data
    };
  });

  return {
    props: {
      posts
    }
  };
}

export default Blog;
