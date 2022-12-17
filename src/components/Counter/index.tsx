import { useState } from "react";

export const Counter = ({ value }: { value: number }) => {
  const [counter, setCounter] = useState(value);

  const onClickHandler = () => setCounter(counter + 1);

  return (
    <>
      <h1>Counter app</h1>
      <h2> {counter} </h2>
      <button onClick={onClickHandler}>+1</button>
    </>
  );
};
