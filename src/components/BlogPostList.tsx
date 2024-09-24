'use client'

import { useState, useEffect } from 'react'
import { BlogPost } from '@/models/BlogPost'

// Utility function to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function BlogPostList() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setIsLoading(true)
        
        // Simulated delay of 2 seconds
        // await delay(1000);
        
        const response = await fetch('/api/blog-posts')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBlogPosts(data.entries)
      } catch (e) {
        console.error('Error fetching blog posts:', e)
        setError('Failed to fetch blog posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchBlogPosts()
  }, [])

  if (isLoading) {
    return <div className="text-blue-500 text-xl font-bold">Loading blog posts...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <ul className="space-y-4">
      {blogPosts.map((post) => (
        <li key={post.uid} className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold">{post.body.children[0].children[0].text}</h2>
          <p className="text-gray-600">
            {post.author[0]._content_type_uid}: {post.author[0].uid}
          </p>
        </li>
      ))}
    </ul>
  )
}