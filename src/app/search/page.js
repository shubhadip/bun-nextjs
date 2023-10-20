
'use client';

import { debounce } from "../utils/helpers";
import { Profiler, useCallback, useEffect, useState } from 'react';

const InputComponent = ({
    init,
    onChange
})  => {
    const [value, setValue] = useState(init || '');

    const handleChange = (e) => {
        const value = e.target.value;
        setValue(value);
        if(onChange) {
            onChange(value);
        }
    }
    return <input type="text" value={value} onChange={handleChange} />
}

const Search = () => {
    const [jokes, setJokes] = useState([]);
    const [debouncedTerm, setDebouncedTerm] = useState('');


    const debounced = useCallback(debounce((value) => {
        const fetchData = async (value) => {
            const apiUrl = `https://v2.jokeapi.dev/joke/Any?contains=${value}&amount=4`
            const response = await fetch(apiUrl);
            const values = await response.json()
            setJokes(values.jokes);
        };

        fetchData(value)
    }, 400),[])


    useEffect(() => {
        if(debouncedTerm) {
            debounced(debouncedTerm)
        }else {
            setJokes([]);
        }

        return () => {
            setJokes([]);
            setDebouncedTerm('');
        }
    },[debounced, debouncedTerm])

    const handleChange = (value) => {
        setDebouncedTerm(value);
    }

    return <>
        <InputComponent init={''} onChange={handleChange} />
        {
            jokes.map((i) => {
                return <p key={i.id}>{i.joke || i.delivery}</p>
            })
        }</>
}

export default Search;