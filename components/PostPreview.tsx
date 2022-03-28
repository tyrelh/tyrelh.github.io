import { PostMetadata } from "../dtos/PostData";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Anchor from "./elements/Anchor";

export interface Props {
  post: PostMetadata;
}

export default function PostPreview(props: Props) {
  const post: PostMetadata = props.post;

  return (
    <Anchor href={`/blog/${post.slug}`}>
      <Card
        hoverable
        style={{
          width: 340,
          margin: "20px",
        }}
        cover={<img src={post.hero} alt="" />}>
        <Meta title={post.title} description={post.excerpt} />
      </Card>
    </Anchor>
  );
}
