import { PropsWithChildren } from "react"
import { LinkOutlined } from "@ant-design/icons"
import Anchor from "./Anchor"

export interface Props extends PropsWithChildren<any> {
  
}

export default function SectionHeading(props: Props) {

  return (
    <div className="sectionHeading">
      <h2>
        <span className="underline">
          { props.children }
        </span>
        <Anchor href="">
          <LinkOutlined />
        </Anchor>
      </h2>
    </div>
  )
}