import React from "react";

const UseStateComponent = () => {
  const [arr, arrSet] = React.useState<number[]>([1, 2, 3, 4, 5]);
  const [obj, objSet] = React.useState({});
  const [str, strSet] = React.useState("");
  const [num, numSet] = React.useState(0);
  const [bol, bolSet] = React.useState(false);
  const [und, undSet] = React.useState(undefined);
  const [nul, nulSet] = React.useState(null);
  const [sym, symSet] = React.useState(Symbol());
  const [name, nameSet] = React.useState<string | null>(null);
  return (
    <>
      <h2> This is the UseStateComponent</h2>
      <div>
        <div>arr: {JSON.stringify(arr)}</div>
        <div>str: {str}</div>
        <div>num: {num}</div>
        <div>bol: {bol}</div>
        <div>und: {und}</div>
        <div>nul: {nul}</div>
        <div>name: {name ? JSON.stringify(name) : "No name yet"}</div>
      </div>
      <div>
        <button
          onClick={() => {
            arrSet([...arr, ...[2, 3, 4, 5, 6, 7, 8, 9, 10]]);
            objSet({ ...obj, obj: "obj" });
            strSet(str + "str");
            numSet(num + 1);
            bolSet(!bol);
            undSet(undefined);
            nulSet(null);
            symSet(Symbol());
            nameSet("name");
          }}
        >
          click me
        </button>
      </div>
    </>
  );
};

export default UseStateComponent;
// Language: typescript
