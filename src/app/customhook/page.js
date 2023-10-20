'use client';
import useFetch from "../hooks/useFetch";

const CustomHook = () => {
    const [error, loading, data] = useFetch('https://jsonplaceholder.typicode.com/todos/1');
    
    if(error) {
        return <div>Something went wrong!!!</div>
    }

    if(loading) {
        return <div>Loading ...</div>
    }

    return <div>{
            JSON.stringify(data)
        }</div>
}
export default CustomHook;