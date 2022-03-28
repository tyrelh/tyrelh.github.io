import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import Link from "next/link"
import {
    GetStaticPaths,
    GetStaticPathsResult,
    GetStaticProps,
    GetStaticPropsResult
} from "next/types"
import { PostData, PostMetadataList } from "../../dtos/PostData"
import HeadW from "../../components/layout/HeadW"

export default function PostPage(post: PostData) {


    return (<>
        <HeadW title={post.title}/>

        <Link href="/">
            back
        </Link>
        <h2>{post.title}</h2>
        <div>{post.date}</div>
        <img src={post.hero} alt="" />
        <div>
            <div dangerouslySetInnerHTML={{ __html: marked(post.content)}}></div>
        </div>
    </>)
}
  
export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
    const files = fs.readdirSync(path.join("posts"))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params: {slug}}): Promise<GetStaticPropsResult<PostData>>  => {
    const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8")

    const { data: frontmatter, content } = matter(markdownWithMeta)

    const postData: PostData = {
        title: frontmatter?.title,
        slug: slug as string,
        date: frontmatter?.date,
        excerpt: frontmatter?.excerpt,
        hero: frontmatter?.hero,
        content: content 
    }


    return {
        props: {
            ...postData
        }
    }
}