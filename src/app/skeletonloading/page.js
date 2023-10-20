'use client';

import { useEffect, useState } from 'react';
import styles from './style.module.css';

const SkeletonLoading = () => {
    const [applied, setApplied] = useState(true)
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setApplied(!applied)
    //     }, 6000)
    // }, [applied])
    
    return (
        <div className={[styles.testing, 'bg-white h-screen'].join(' ')}>
            <ul className='flex flex-wrap items-center justify-center gap-10 pt-4'>
            <li key={2} className='w-[320px] h-[240px]  rounded-lg border-slate-400 border p-6'>
                    <div className='flex flex-row'>
                        <div className={['w-[50px] h-[50px] rounded-full', applied ? styles.skeleton : null].join(' ')}></div>
                        <div className='ml-4 mr-2 w-[20%]'>
                            <p className={['my-1 w-full h-[4px]', applied ? styles.skeletonText : null].join(' ')}></p>
                            <p className={['my-1 w-full h-[4px]', applied ? styles.skeletonText : null].join(' ')}></p>
                            <p className={['my-1 w-full h-[4px]', applied ? styles.skeletonText : null].join(' ')}></p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className={['w-full h-[4px] my-2', applied ? styles.skeletonText : null].join(' ')}></p>
                        <p className={['w-full h-[4px] my-2', applied ? styles.skeletonText : null].join(' ')}></p>
                        <p className={['w-full h-[4px] my-2', applied ? styles.skeletonText : null].join(' ')}></p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SkeletonLoading;