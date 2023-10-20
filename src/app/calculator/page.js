'use client';
import { useState } from 'react';

const operators = ["+","*","-","÷",'%'];
const numbers = ["1","2","3","4","5","6","7","8","9","0"];
const elements =  ["C", "+/-", "%", "÷", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+"];


const compute = values =>  {
    if(values.length <3) return null
    const operand1 = values[0]
    const operator = values[1]
    const operand2 = values[2]

    switch(operator) {
        case '+': {
            const newVal = parseInt(operand1) + parseInt(operand2)
            return newVal
        };
        case '-': {
            const newVal = parseInt(operand1) - parseInt(operand2)
            return newVal
        };
        case '*': {
            const newVal = parseInt(operand1) * parseInt(operand2)
            return newVal
        };
        case '÷': {
            const newVal = parseInt(operand1) / parseInt(operand2)
            return newVal
        };

        case '%': {
            const newVal = parseInt(operand1) % parseInt(operand2)
            return newVal
        };
        
    }
}
const Calculator = () => {
    const [current, setCurrent] = useState("0");
    const [values, setValues] = useState([0]);
    
    const rowcss = 'p-2 text-center';
    
    const handleClick =(e) => {
        const newVal = e;
        if(operators.includes(newVal)) {
            if(operators.includes(values[values.length - 1])) {
                if(newVal === operators.includes(values[values.length - 1])) return 
                const temp = values;
                temp.pop()
                setValues([...temp, newVal])
            }
            if(current === "0" && !!newVal) {
                const cp = compute(values)
                if(cp) {
                    const newValues = [cp, newVal];
                    setValues(newValues);
                    setCurrent(cp)
                }else {
                    const p = [...values, newVal]
                    setValues(p)
                }
            }else if(current !== "0") {
                const cp = compute(values);
                if(cp) {
                    const newValues = [cp, newVal];
                    setValues(newValues);
                    setCurrent(cp)
                }else {
                    const newValues = [...values, newVal];
                    setValues(newValues);
                }
                
            }
        }else if(numbers.includes(newVal)) {
            if(current === "0" && newVal) {
                if(operators.includes(values[values.length - 1])) {
                    setCurrent(newVal)
                    setValues((values) => [...values, newVal])
                }else{
                    setCurrent(newVal)
                    const newValues = [newVal]
                    setValues(newValues)
                }
            }else if(current !== "0") {
                if(operators.includes(values[values.length - 1])) {
                    setCurrent(newVal)
                    setValues((values) => [...values, newVal])
                }else {
                    const newCurrent = `${current}${parseInt(newVal)}`;
                    const temp = values
                    setCurrent(newCurrent);
                    temp.pop();
                    setValues([...temp, parseInt(newCurrent)])
                }
                
            }
        };

    };

    return (
        <div className="w-[400px] border rounded-lg">
            <div className='w-full text-right p-10 text-[60px]'>
                {current}
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-4">
                {
                    elements.map((i) => {
                        return <div onClick={() => handleClick(i)} key={i} className={[rowcss].join('')}>{i}</div>
                    })
                }
            </div>
            <div className="grid grid-cols-4 grid-flow-row gap-0 border-t">
                <div className={[rowcss," grid col-span-2 border-r"].join(' ')}>0</div>
                <div className={[rowcss,"  border-r"].join(' ')}>.</div>
                <div className={[rowcss].join(' ')}>=</div>
            </div>
        </div>
    )
}

export default Calculator;