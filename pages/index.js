import Head from "next/head";
import styles from "../styles/Home.module.css";

import SearchMovie from "../components/SearchMovie";
import SeriesList from "../components/SeriesList";
import PaginateSeries from "../components/PaginateSeries";
import ToolBar from "../components/ToolBar";
import Loading from "../components/Loading";
import { Suspense } from "react";
import SeriesStateProvider from "../store/state";

export default function Home() {
  const isServer = typeof window === "undefined";
  return (
    <div className={styles.container}>
      <Head>
        <title>Series App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Suspense fallback={<Loading />}> */}
        {console.log("IS-server", isServer)}
        <SeriesStateProvider>
          {/* <h1 className={styles.title}>Series App</h1> */}
          <ToolBar />
          <SearchMovie />
          <SeriesList />
          {/* <PaginateSeries /> */}
        </SeriesStateProvider>
        {/* </Suspense> */}
      </main>
    </div>
  );
}
