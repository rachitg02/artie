import Head from "next/head";

export default function MetaTags({title,description,image}){
    title = 'Artie',
    description = 'A blog website where you can write and read articles written by various people',
    image = 'https://avatars.githubusercontent.com/u/94759785?s=400&u=fe103d994ee5e51d856e184053f91ca9fae77006&v=4'
    return (
        <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rachittwt" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
    </Head>  
    )
}