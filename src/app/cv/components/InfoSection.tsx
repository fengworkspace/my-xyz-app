import React from "react";
type Props = {
    title?:string;
    children: React.ReactNode;
    id: string
}
const InfoSection = ({title,children, id}:Props) => {
    return (
        <div className="bg-slate-200 rounded-xl p-2" id={id}>
            {title?<h2 className="font-bold leading-10 mx-auto w-fit">{title}</h2>:null}
            {children}
        </div>
    );
} 

export default InfoSection