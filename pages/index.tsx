import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { PostMetadata, PostMetadataList } from "../dtos/PostData"
import PostPreview from "../components/PostPreview"
import { sortPostsByDate } from "../utils/dateUtils"
import HeadW from "../components/layout/HeadW"
import Anchor from "../components/elements/Anchor"


export default function Home({ posts }) {
  return (
    <>
      <HeadW title="superflux"/>

      <h1>
        Hi, I'm Tyrel.
      </h1>

      <p>
        A software engineer constantly learning new skills and technologies. I work for <Anchor href="https://www.giftbit.com">Giftbit</Anchor> building great web services. You can see some of my work below as well as on my Github.
      </p>

      <div>
        {posts.map((post: PostMetadata, index: number) => (
          <div key={`post${index}`}>
            <PostPreview post={post} />
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
      posts: posts.sort(sortPostsByDate)
    }
  }
}