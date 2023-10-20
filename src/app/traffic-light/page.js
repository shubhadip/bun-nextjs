'use client';

import { useEffect, useState, useRef } from "react";

const lightValues = [{
    timer: 10,
    color:'rose'
},{
    timer: 4,
    color: 'yellow'
},{
    timer: 10,
    color: 'green'
}]

const bgClass = {
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    rose: 'bg-rose-600',
}

const commonClass = `flex items-center justify-center h-[64px] w-[64px] rounded-full`;

export default function TrafficLight() {

    const [currentValue, setValue] = useState(null);
    const [time, setTimer] = useState()
    const timerRef = useRef(null);

    useEffect(() => {
        setValue(lightValues[0].color);
        setTimer(lightValues[0].timer);
    },[])


    useEffect(() => {
        if(currentValue) {
            timerRef.current = setInterval(()=> {
                setTimer((timer) => timer - 1);
            },1000)
        }

    }, [currentValue])

    useEffect(() => {
        if(time === 0 && timerRef.current && currentValue) {
            clearInterval(timerRef.current);
            const nextVal = lightValues[lightValues.findIndex(i => i.color === currentValue) + 1];
            if(nextVal) {
                setValue(nextVal.color);
                setTimer(nextVal.timer);
            }else {
                clearInterval(timerRef.current);
            }
        }

    },[currentValue, time]);
    
    
    const classVal = bgClass[currentValue];

    return (
        <div className="flex items-center justify-center gap-10">
            {
                Object.keys(bgClass).map((i) => {
                    return (
                        <div key={i} className={[commonClass , currentValue === i ? classVal : 'bg-white'].join(' ')}>
                    <span>{time}</span>
                </div>
                    )
                })
            }
        </div>
    )
}