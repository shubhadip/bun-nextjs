'use client';
import { Files3, Files2 } from "../utils/constant";
import { useState } from 'react';

export const FileExplorer = ({files}) => {
    const [id, setId] = useState(null);

    const handleClick = (name) => {
        if(id === name) {
            setId(null)
        }else {
            setId(name);
        }
    };

    if(files.type === 'folder') {
        return (
            <div>
                <p className="px-4 py-1 font-bold rounded-lg w-fit" onClick={() => handleClick(files.name)}>{files.name}</p>
                {
                    id === files.name && files.data.map(e => {
                        if(e?.data?.length) {
                            return <FileExplorer key={e.name} files={e} />
                        }else {
                            return (
                                <div key={e.name} className="ml-4 text-teal-600">
                                    {e.name}
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }else {
        return (
            <div className="ml-4 text-teal-600">
                {files.name}
            </div>
        )
    }
    
};

const SideBar = () => {
    const data = Files2.data
    return <div>
        {
            data.map((e, index) => {
                return <FileExplorer key={index} files={e} />
            })
        }
    </div>
}
export default SideBar;