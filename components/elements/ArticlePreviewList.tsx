import { List, Tag } from "antd"
import { CalendarFilled } from "@ant-design/icons"
import { PostMetadata } from "../../dtos/PostData"


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
        <List.Item
          extra={
            <img
              className="article-preview-image"
              // alt={item.alt}
              src={post.hero}
            />
          }
        >
          <h3 className="article-preview-title">
            { post.title }
          </h3>
          {
            post.date &&
              <h4 className="article-preview-date">
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
      )}
    />
  )
}