import { List, Tag } from "antd"
import { CalendarFilled } from "@ant-design/icons"
import { PostMetadata } from "../../dtos/PostData"
import Link from "next/link"
import Image from "next/image"
import Anchor from "./Anchor"


export interface Props {
  articleMetadataList: PostMetadata[]
}

export default function ArticlePreviewList(props: Props) {
  const { articleMetadataList } = props
  
  return (
    <List
      itemLayout="vertical"
      size="large"
      split={false}
      dataSource={articleMetadataList}
      renderItem={ (post: PostMetadata) => (
        <Anchor href={`/blog/${post.slug}`}>
          <List.Item
            key={post.slug}
            extra={
              <img
                className="article-preview-image" 
                alt=""
                src={post.hero}/>
            }
          >
            <h3 className="article-preview-title">
              { post.title }
            </h3>
            {
              post.date &&
                <h4>
                  <CalendarFilled /> {post.date}
                </h4>
            }
            <p className="article-preview-excerpt">
              {post.excerpt}
            </p>
            {
              post?.tags?.length &&
              <p>
                {post.tags.map((tag: string) => (
                  <Tag>{tag}</Tag>
                ))}
              </p>
            }
          </List.Item>
        </Anchor>
      )}
    />
  )
}