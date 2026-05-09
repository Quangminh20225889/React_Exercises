import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStorage(key, initialValue){
    const [items, setItems] = useState(() =>{
        const storedValue = localStorage.getItem(key);
        if(storedValue) return JSON.parse(storedValue);
        else return initialValue;
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(items))
    },[key,items]);
    return [items,setItems];
}