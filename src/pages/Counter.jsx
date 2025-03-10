import { useEffect, useState } from "react"
import axios from "axios"

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const countReducer = (state, action) => {
        switch (action.type) {
          case INCREMENT:
            return state + 1;
          case DECREMENT:
            return state - 1;
          default:
            return state; 
        }
    };

    const getCounter = async() => {
        const { data } = await axios.get(`${process.env.REACT_APP_BACK_SERVER}/counter`);
        return data.value.value
    }

    useEffect(() => {
        ;(async() => {
            const count = await getCounter();
            setCount(count)
        })()
    }, [])

    
    const postCountApi = async(newValue) => {
        const {data : { value }} = await axios.post(`${process.env.REACT_APP_BACK_SERVER}/counter`, { newValue });
        return value
    }

    const handleDispatch = async(action) => {
        try {
            const newValue = countReducer(count, action);
            const value = await postCountApi(newValue);
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