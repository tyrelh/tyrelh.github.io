import { PropsWithChildren } from "react"

export interface Props extends PropsWithChildren<any> {
  
}

export default function Title(props: Props) {

  return (
    <div className="heading">
      <h1>
        { props.children }
      </h1>
    </div>
  )
}