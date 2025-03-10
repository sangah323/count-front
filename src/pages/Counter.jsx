import { useEffect, useState } from "react"
import { countReducer } from "../reducer/counterReducer"
import { getCount, postCount } from "../api"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        ;(async() => {
            const count = await getCount();
            setCount(count)
        })()
    }, [])

    const handleDispatch = async(action) => {
        try {
            const newValue = countReducer(count, action);
            const value = await postCount(newValue);
            setCount(value);
        } catch (error) {
            console.log("Counter 기능 실패...", error);
        }
    }
    
    return (
        <>
            {count}
            <button onClick={() => handleDispatch({type: INCREMENT})}>+</button>
            <button onClick={() => handleDispatch({type: DECREMENT})}>-</button>
        </>
    )
}