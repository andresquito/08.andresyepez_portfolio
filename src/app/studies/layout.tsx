import { ReactNode } from "react";

export default function LayoutNavBar({
    children
}:{
    children:ReactNode;
}){
    return(
        <>
        <h1 className="bg-orange-500 text-[40px]">Probando LayoutNavBar</h1>
        {children}
        </>

    )
}