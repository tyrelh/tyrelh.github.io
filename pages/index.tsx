import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { GetStaticProps, GetStaticPropsResult } from 'next'
import Head from 'next/head'
import { PostMetadata, PostMetadataList } from "../dtos/PostMetadata"
import Post from "../components/PostPreview"

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>superflux</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {posts.map((post: PostMetadata, index: number) => (
          <div key={`post${index}`}>
          
          <h3>{post?.title}</h3>
          <Post post={post} />
          </div>
        ))}
      </div>

    </>
  )
}

export const getStaticProps: GetStaticProps = async (context): Promise<GetStaticPropsResult<PostMetadataList>>  => {
  // get files from posts dir
  const files = fs.readdirSync(path.join("posts"))

  // get slug and frontmatter from posts
  const posts = files.map(filename => {

    // create slug
    const slug = filename.replace(".md", "")

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8")
    const {data:frontmatter} = matter(markdownWithMeta)

    const metadata: PostMetadata = {
      title: frontmatter?.title,
      slug: slug,
      date: frontmatter?.date,
      hero: frontmatter?.hero,
      excerpt: frontmatter?.excerpt
    }
    return metadata
  })



  return {
    props: {
      posts: posts
    }
  }
}