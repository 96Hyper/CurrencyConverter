import { useEffect , useState } from "react";
// API = https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.4/v1/currencies.json

function useCurrencyInfo(currency){
   const [data , setData] = useState({})
   
   
   
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.10.4/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
        
    }, [currency ])
    
    return data
}

export default useCurrencyInfo; 