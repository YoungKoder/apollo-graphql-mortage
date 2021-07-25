import React, { useEffect, useState } from "react";
import Header from "./Header";

export const Languages = ["EN","EN","EN"]
export const HeaderContainer = ()=>{
    const [language,setLanguage] = useState(Languages[0]);

    return(
        <Header language={language} swapLanguage={(lan)=>setLanguage(lan)}/>
    )
}