import React, { Suspense } from "react";
import Loading from "./Loading";

function ReactSuspense({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default ReactSuspense;
