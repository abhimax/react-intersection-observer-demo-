import { useEffect, useMemo, useRef, useState } from "react";
import useElementOnScreen from "./hooks/useElementOnScreen";
function App() {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    targetRef
  );

  return (
    <>
      <h1 className="header">
        {!isVisible ? "Not in viewport" : "In viewport"}
      </h1>
      <div className="gap"></div>
      <img
        alt="intersection"
        src="src/assets/intersection.png"
        ref={targetRef}
      />
    </>
  );
}

export default App;
