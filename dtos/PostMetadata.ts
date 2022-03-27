export interface PostMetadata {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    hero: string;
}

export interface PostMetadataList {
    posts: PostMetadata[]
}