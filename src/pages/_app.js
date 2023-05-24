import React from "react";
import Head from "next/head";
import style from "src/styles/global.module.css";
import "src/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "@/layouts/components/pageLayout/PageLayout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Desafio Envolve</title>
        <link rel="icon" href="/envolve.png" />
      </Head>

      <main className={style.main}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </main>
    </>
  );
};

export default App;
