'use client'
import React from "react";

const ScrollToId : React.FC<{text?:string, id:string}> = ({ text, id })=> {
    return (
        <button 
        className="bg-black text-white font-bold py-1 px-4 rounded-full lg:hover:bg-slate-700 mr-1"
        onClick={()=>{
            const elm = document.querySelector(`#${id}`)
            elm?.scrollIntoView({ behavior: 'smooth'});
            elm?.scrollBy({
                left:-10,
                behavior: "smooth",
              })
        }}>
            {text}
        </button>
    );
} 

export default ScrollToId;