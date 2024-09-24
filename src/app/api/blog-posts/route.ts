import { NextResponse } from 'next/server'
import Stack from '@/lib/contentstack'
import { BlogPost } from '@/models/BlogPost'

export async function GET() {
  try {
    const query = Stack.ContentType('blog_post').Query()
    const result = await query.toJSON().find()
    return NextResponse.json({ entries: result[0] as BlogPost[] })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 })
  }
}
//check to see GitHub is working