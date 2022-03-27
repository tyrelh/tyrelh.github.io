import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

export default function HeaderW() {
    return (
        <Header>
            <h1 style={{color: "white"}}>
                <Link href="/">
                    superflux
                </Link>
            </h1>
        </Header>
    )
}