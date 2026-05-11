import { useState, useEffect } from "react";

export default function UseDebounce(value, delay){
    const [debouncedValue, setDedouncedValue] = useState(value);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setDedouncedValue(value);
        }, delay);

        return ()=>{
            clearTimeout(timer) ;
        }
    },[value, delay])

    return  debouncedValue;

}