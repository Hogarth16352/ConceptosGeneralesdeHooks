// import { useCounter } from "../Hooks/useCounter";
import { useFetch, useQuote } from "../Hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter , nextQuote } = useQuote();
    // const { counter , increment } = useCounter(1);


    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    console.log( data );

    if( isLoading ){ return ( <h1>Loading...</h1>  ) }

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {

          // isLoading
          // ? (
          //   <div className="alert alert-info text-center">
          //             Loading...
          //   </div>
          // ) : (
          //   <blockquote className="blockquote text-end">
          //     <p className="mb-1"> { quote }</p>
          //     <footer className="blockquote-footer"> { author }</footer>
          //   </blockquote>
          // )
          isLoading ? <LoadingQuote /> : <Quote author = { author } quote = { quote } />
        }

        <button 
          className="btn btn-primary" 
          // onClick = { () => increment() } >
          onClick = { nextQuote } >
          Next Quote
        </button>
    </>
  )
}
