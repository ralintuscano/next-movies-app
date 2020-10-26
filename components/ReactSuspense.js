import React, { Suspense } from "react";
import Loading from "./Loading";

function ReactSuspense({ children }) {
  return <Suspense fallback={console.log("loading...")}>{children}</Suspense>;
}

export default ReactSuspense;
