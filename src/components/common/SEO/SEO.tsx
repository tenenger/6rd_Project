import React from "react";
import Head from "next/head";

const SEO = ({ itemName, thumbnail, url }: any) => {
  return (
    <Head>
      <title>{itemName}</title>
      <meta property="og:title" content={itemName} />
      <meta property="og:description" content="COUPANG" />
      <meta property="og:image" content={`https:${thumbnail}`} />
      <meta property="og:url" content={`https://coupang/vp${url}`} />
    </Head>
  );
};

export default SEO;
