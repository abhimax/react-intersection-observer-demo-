import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <h1 className="header">
        {isVisible ? "Not in viewport" : "In viewport"}
      </h1>
    </>
  );
}

export default App;
