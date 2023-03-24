import { useState } from "react";

export const useQuote = ( initialValue = 1 ) => {

    const [ counter, setCounter ] = useState( initialValue )

    const nextQuote = () => {
        setCounter( Math.ceil(Math.random()*5) );
    }

    return {
        counter,
        nextQuote,
    }

}