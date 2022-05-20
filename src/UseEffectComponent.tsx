import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [val, valSet] = useState(1);
  useEffect(() => {
    console.log("useEffect");
    const timer = window.setInterval(() => {
      valSet(val + 1);
    }, 1000);
    return () => {
      console.log("useEffect cleanup");
      window.clearInterval(timer);
    };
  }, [val]);

  return (
    <>
      <h2>UseEffectComponent</h2>
      <div>{val}</div>
    </>
  );
};

export default UseEffectComponent;
