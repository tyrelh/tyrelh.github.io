import React, { PropsWithChildren } from "react";
import Link from "next/link"
import "./Anchor.module.scss";

export interface Props extends PropsWithChildren<any> {
    href: string,
    children: JSX.Element
}

export default function Anchor(props: Props) {

    function buildAnchor() {
        switch (props.href.charAt(0)) {
        //   case "#":
        //     return <Link to={this.props.href}>{this.props.children}</Link>;
        //   case "/":
        //     return <NavLink to={this.props.href}>{this.props.children}</NavLink>;
          default:
            return (
                <a href={props.href} target="_blank" rel="noopener noreferrer">
                    {props.children}
                </a>
            )
        }
        console.log(props.href)
    };

    return(
        <span className="anchor">
            { buildAnchor() }
        </span>
    )
}