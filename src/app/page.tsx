import BlogPostList from '../components/BlogPostList'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <BlogPostList />
    </div>
  )
}