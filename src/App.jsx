import { useEffect, useMemo, useRef, useState } from "react";
function App() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries; // const entry = entries[0];
    setIsVisible(entry.isIntersecting);
    console.log("callback!!");
  };
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    console.log("useEffect!!");
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

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
