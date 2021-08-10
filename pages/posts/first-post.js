import React from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Next - First Post</title>
      </Head>
      <h1>This is a first post!</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
};

export default FirstPost;
