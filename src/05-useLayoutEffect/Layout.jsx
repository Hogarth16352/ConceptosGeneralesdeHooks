import { useFetch, useQuote } from "../Hooks";
import { LoadingQuote , Quote } from "../03-examples";

export const Layout = () => {

    const { counter , nextQuote } = useQuote();
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];

    console.log( data );

    if( isLoading ){ return ( <h1>Loading...</h1>  ) }

  return (
    <>
        <h1>Breaking Bad Quotes</h1>
        <hr />
        {
          isLoading ? <LoadingQuote /> : <Quote author = { author } quote = { quote } />
        }

        <button 
          className="btn btn-primary" 
          onClick = { nextQuote } >
          Next Quote
        </button>
    </>
  )
}
