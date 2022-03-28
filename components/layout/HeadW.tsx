import Head from "next/head";

export interface Props {
    title: string
}

export default function HeadW (props: Props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}