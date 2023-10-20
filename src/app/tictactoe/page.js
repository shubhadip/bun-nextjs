'use client';

import { useState } from 'react';

const C_CLASS = 'o';
const X_CLASS = 'x';

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
export default function TicTacToe() {
    const [circleTurn, setCircleTurn] = useState(true);
    const [selected, setSelected] = useState([null,null,null,null,null,null,null,null,null]);
    const [gameComplete, setGameComplete] = useState(false);
    const [gameWonText, setGameWonText] = useState(null);

    const handleClick = (v) => {
        if(!selected[v]){
            const values = [...selected];
            let currentVal = circleTurn ? 'o' : 'x'
            values[v] = currentVal
            setCircleTurn(!circleTurn);
            setSelected([...values]);

            const gameWon = WINNING_COMBINATIONS.some((i) =>{
                return i.every(o => values[o] === currentVal)
            });

            if(gameWon) {
                setGameWonText(currentVal === 'o' ? 'user1' : 'user2')
                return
            }

            const isGameComplete = values.every((e) => !!e)
            if(isGameComplete) {
                setGameComplete(true);
            }

        }
        
    };

    if(gameWonText) {
        return <div className='text-2xl font-bold text-white text-center w-full'>{`${gameWonText} wins the game`}</div>
    }

    if(gameComplete) {
        return <div className='text-2xl font-bold text-white text-center w-full'>Game Over: Draw</div>
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <p>User 1 : circle</p>
            <p>User 2 : cross</p>
            <div className="grid grid-cols-3 grid-flow-row bg-white w-[360px] h-[360px] my-0 mx-auto">
                {
                    Array(9).fill().map((v,i)=> {
                        return <div onClick={() => handleClick(i)} className=' w-[120px] h-[120px] cell border flex items-center justify-center' key={i} data-cell>
                            <span className='text-black font-bold text-[64px]'>
                                {selected[i]}
                            </span>
                        </div>
                    })

                }
                
            </div>
        </div>
    )
}