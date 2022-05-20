import React, { createContext, useContext, useState } from "react";
import Usercontext, { UserState } from "./store";

const ConsumerComponent = () => {
  const userState = useContext(Usercontext);
  return (
    <div>
      <div>context.first {userState.first}</div>
      <div>contect.last {userState.last}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, userSet] = useState<UserState>({ first: "Jack", last: "Doe" });
  return (
    <Usercontext.Provider value={user}>
      <h2>This is the UseContextComponent</h2>
      <h3>Consumer ConsumerComponent</h3>
      <ConsumerComponent />
      <h3>Change the context</h3>
      <button
        onClick={() => {
            const rnd=Math.random().toString().slice(2,4)
          userSet({ first: "Pepe "+rnd, last: "Mendez "+rnd });
        }}
      >
        change the context value
      </button>
    </Usercontext.Provider>
  );
};

export default UseContextComponent;
