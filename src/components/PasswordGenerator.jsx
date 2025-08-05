import { useEffect, useState } from "react";


function PasswordGenerator() {

    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);

    function passwordGeneratorFunction(){
        let randomStr=""
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(numberAllowed) str += "0123456789";
        if(symbolAllowed) str += "!@#$%&()+{}";
        
        for(let i=0;i<length;i++){
            let index = Math.floor(Math.random()*str.length)
            randomStr+= str.charAt(index)
        }
        setPassword(randomStr)
    }
    
    
    useEffect(()=>{passwordGeneratorFunction()},[length, numberAllowed, symbolAllowed, setPassword])
    

    return <div className="password-generator">
        <div className="top">
            <input type="text" value={password} readOnly/>
            <button className="btn copy-btn" >Copy</button>
            <button className="btn" onClick={()=>passwordGeneratorFunction()}><i className="fa-solid fa-rotate-right"></i></button>
        </div>
        <div className="bottom">
            <input type="range" value={length} min={4} max={16} onChange={(e)=>setLength(e.target.value)}/>
            <label>{length}</label>
            <input type="checkbox" id="number" onChange={()=>{setNumberAllowed((n)=>!n)}} defaultChecked={numberAllowed}/>
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="symbol" onChange={()=>{setSymbolAllowed((n)=>!n)}} defaultChecked={symbolAllowed}/>
            <label htmlFor="symbol">Symbol</label>
        </div>
    </div>
}

export default PasswordGenerator;