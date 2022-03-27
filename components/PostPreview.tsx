import Link from "next/link"
import { PostMetadata } from "../dtos/PostMetadata"
import { Card } from "antd"
import Meta from "antd/lib/card/Meta"

export interface Props {
    post: PostMetadata
}

export default function PostPreview(props: Props) {
    const post: PostMetadata = props.post

    return (
        <Link href={`/blog/${post.slug}`}>
            <Card
                hoverable
                style={{width: 340}}
                cover={<img src={post.hero} alt="" />}
            >
                <Meta title={post.title} description={post.excerpt}/>
            </Card>
        </Link>
    )
}