'use client'
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { debounce } from "../utils/helpers";


const getData = async (search, page) =>  {
    let response = await fetch(`https://openlibrary.org/search.json?q=${search}&page=${page}`);
    response = await response.json();
    return response.docs;
}

const InfinteScroll = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const fetchRef = useRef(null);

    const fetchData = useCallback(debounce(async (val) => {
        const response = await getData(val,1);
        setData(response);
        setLoading(false);
    }, 500),[])

    const newData = useCallback(async (val) => {
        setLoading(true)
        const response = await getData(search, val)
        setData([...data, ...response]);
        setPage(val);
        setLoading(false)
    }, [search, data]);

    useEffect(() => {
        const observer = new IntersectionObserver(async (entries) => {
            const obs = entries[0];            
            if(obs.isIntersecting) {
                newData(page + 1);
            }
        })
        if(data.length) {
            observer.observe(fetchRef.current)
        }
        return () => { observer.disconnect()}
    },[data, page, newData])
    
    useEffect(() => {
        if(search) {
            setLoading(true);
            fetchData(search)
        }else {
            setData([]);
            setSearch('');
        }
    },[search, fetchData])

    const handleChange = (e) => {
        const val = e.target.value;
        setSearch(val);
    };

    return (
        <div className="mt-4 mx-auto w-[480px]">
            <input type="text" value={search} onChange={handleChange} className="text-black w-[240px] py-4 px-2 rounded-lg" />
            <div>
                {
                    loading ? <div className="font-bold text-4xl">Loading ...</div> :(
                        <ul>
                            {(data || []).map((o, index) => {
                                    return <li className="py-2 px-4 my-4 border rounded" key={`${o.key}`}>{o.title}</li>
                            })}
                            {data.length && !loading ? <p ref={fetchRef}>get more</p> : null}
                        </ul>
                    )
                }

            </div>
        </div>
    )
}

export default InfinteScroll;