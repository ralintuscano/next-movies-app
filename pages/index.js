import Head from "next/head";
import styles from "../styles/Home.module.css";

import SearchMovie from "../components/SearchMovie";
import SeriesList from "../components/SeriesList";
import ToolBar from "../components/ToolBar";
import Loading from "../components/Loading";
import SeriesStateProvider from "../store/state";
import dynamic from "next/dynamic";

export default function Home() {
  const isServer = typeof window === "undefined";

  const ReactSuspense = dynamic(() => import("../components/ReactSuspense"), {
    ssr: false,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Series App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <Suspense fallback={<h1>LOADING......</h1>}> */}
        {/* {console.log("IS-server", isServer)} */}
        <SeriesStateProvider>
          <ReactSuspense>
            <ToolBar />
            <SearchMovie />
            {/* <ReactSuspense> */}
            <SeriesList />
            {/* </ReactSuspense> */}
          </ReactSuspense>
        </SeriesStateProvider>
        {/* </Suspense> */}
      </main>
    </div>
  );
}
