import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (c) => {
        setCounter( (value) => value + c );
      },
      [],
    );

    useEffect(() => {
    //   incrementFather();
    }, [incrementFather])
    
    
    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }


  return (
    <>
        <h1>useCallBack Hook: { counter }</h1> 
        <hr />

        <ShowIncrement increment = { incrementFather } />
    </>
  )
}