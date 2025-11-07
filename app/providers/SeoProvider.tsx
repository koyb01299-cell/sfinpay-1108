"use client";

import Head from "next/head";
import seoConfig from "../../next-seo.config";

/**
 * 🚀 SeoProvider — next-seo 대체 (App Router 호환)
 * next/head 기반 수동 메타 삽입 방식
 */
export default function SeoProvider(): JSX.Element {
    const {
        titleTemplate,
        defaultTitle,
        description,
        canonical,
        openGraph,
        twitter,
    } = seoConfig;

    const title =
        titleTemplate?.replace("%s", defaultTitle ?? "") ?? defaultTitle;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* 🔹 OpenGraph */}
            {openGraph && (
                <>
                    <meta property="og:type" content={openGraph.type} />
                    <meta property="og:locale" content={openGraph.locale} />
                    <meta property="og:site_name" content={openGraph.siteName} />
                    <meta property="og:title" content={openGraph.title} />
                    <meta property="og:description" content={openGraph.description} />
                    <meta property="og:url" content={openGraph.url} />
                    {openGraph.images?.map((img, i) => (
                        <meta key={i} property="og:image" content={img.url} />
                    ))}
                </>
            )}

            {/* 🔹 Twitter */}
            {twitter && (
                <>
                    <meta name="twitter:card" content={twitter.cardType} />
                    <meta name="twitter:site" content={twitter.site} />
                    <meta name="twitter:creator" content={twitter.handle} />
                </>
            )}
        </Head>
    );
}
