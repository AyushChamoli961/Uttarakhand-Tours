"use client"

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface FaqPropsType{
    title:string;
    desc:string;
}
const Faq = ({title,desc}: FaqPropsType) => {
    const[faq,setFaq] = useState(false)
    return (
        <div>
            <div className=" w-full flex justify-between">
                {/* infomation  */}
                <div>
                    <h1 className=" font-heading font-semibold">{title}</h1>
                    {
                        faq && <p className=" font-text mt-3">{desc}</p>
                    }
                </div>

                {/* button  */}
                <div>
                    <button onClick={() => setFaq(!faq)}>
                        {
                            faq ? <FaMinus /> : <FaPlus />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Faq
