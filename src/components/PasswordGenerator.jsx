import { useState } from "react";


function PasswordGenerator() {

    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [symbolAllowed, setSymbolAllowed] = useState(false);

    function passwordGeneratorFunction(){
        let randomStr=""
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        numberAllowed && (str += "0123456789")
        symbolAllowed && (str += "!@#$%&()+{}")
        
        for(let i=0;i<length;i++){
            let index = Math.floor(Math.random()*str.length)
            randomStr+= str.charAt(index)
        }
        return randomStr;
    }
    return <div className="password-generator">
        <div className="top">
            <input type="text" value={password} readOnly/>
            <button>Copy</button>
        </div>
        <div className="bottom">
            <input type="range" value={length} min={4} max={16} onChange={(e)=>setLength(e.target.value)}/>
            <input type="checkbox" id="number" />
            <label htmlFor="number">Number</label>
            <input type="checkbox" id="symbol"/>
            <label htmlFor="symbol">Symbol</label>
        </div>
    </div>
}

export default PasswordGenerator;