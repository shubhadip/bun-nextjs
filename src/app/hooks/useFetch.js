'use client';
import { useEffect, useState, useCallback } from "react"

const useFetch = (url) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async (url) => {
		setLoading(true);
		try {
			let response = await fetch(url);
			response = await response.json();
			setLoading(false);
			setData(response);
		}catch(e) {
			setData(e)
			setLoading(false);
			setError(e);
		}

				
	},[])

	useEffect(() => {
		if(url) {
			fetchData(url);
		}
	}, [fetchData, url]);

	return [error, loading, data];
}

export default useFetch