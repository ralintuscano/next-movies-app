import Head from "next/head";
import styles from "../styles/Home.module.css";

import SearchMovie from "../components/SearchMovie";
import SeriesList from "../components/SeriesList";
import PaginateSeries from "../components/PaginateSeries";
import Loading from "../components/Loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Series App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Suspense fallback={<Loading />}> */}
        <h1 className={styles.title}>Series App</h1>
        <SearchMovie />
        <SeriesList />
        <PaginateSeries />
        {/* </Suspense> */}
      </main>
    </div>
  );
}
