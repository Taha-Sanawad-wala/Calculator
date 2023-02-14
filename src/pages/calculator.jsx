import React from 'react';
import axios from 'axios';
import "./calculator.css";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
// import axios, {isCancel, AxiosError} from 'axios';

function Calculator(){
    const [result, setResult] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const client={result}
    const navigate=useNavigate()
    
    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
    }
    const clear=()=>{
        setResult("")
            setIsDisabled(false)
    }
    const backspace=()=>{
        setResult(result.slice(0,result.length-1))
    }
    const calculate=async ()=>
        {
        const result = await axios.post("http://127.0.0.1:8000/dummy/",{
            client
          })
        console.log(result.data)
        setResult(result.data)
        if (result.data==="Not Defined"){
            setIsDisabled(true)
            }
        }
    const mcHandler=async ()=>{
        const result = await axios.post("http://127.0.0.1:8000/mchandle/")
        console.log(result.data)
        setResult("")
    }
    const msHandler=async ()=>{
        const result = await axios.post("http://127.0.0.1:8000/mshandle/",{
            client
        })
        console.log(result.data)
        setResult(result.data)
    }
    const mrHandler=async ()=>{
        const result = await axios.post("http://127.0.0.1:8000/mrhandle/",{
            client
        })
        console.log(result.data)
        setResult(result.data)
    }
    const mAddHandler=async()=>{
        const result = await axios.post("http://127.0.0.1:8000/maddhandle/",{
            client
        })
        console.log(result.data)
        setResult(result.data)
    }
    const historyHandler=()=>{
        navigate("/history")
    }
    const reciprocalHandler=()=>{
        setResult(result.concat("**-1"))    
    }
    const squarerHandler=()=>{
        setResult(result.concat("**2")) 
    }
    const rootHandler=()=>{
        setResult(result.concat("**0.5")) 
    }
    return(
        
        <div className="calc">
            <input type="text" placeholder='00' value={result} id="answer"/>
            <input type="button" value="C" onClick={clear} className="button button1 "/> 
            <input type="button" value="←" disabled={isDisabled} onClick={backspace} className="button button1"/>
            <input type="button" value="MC" disabled={isDisabled} onClick={mcHandler} className="button"/>
            <input type="button" value="MR" disabled={isDisabled} onClick={mrHandler} className="button"/>
            <input type="button" value="MS" disabled={isDisabled} onClick={msHandler} className="button"/>
            <input type="button" value="M+" disabled={isDisabled} onClick={mAddHandler} className="button"/>
            <input type="button" value="1/x" disabled={isDisabled} onClick={reciprocalHandler} className="button"/>
            <input type="button" value="x²" disabled={isDisabled} onClick={squarerHandler} className="button"/>  
            <input type="button" value="√x" disabled={isDisabled} onClick={rootHandler} className="button"/>  
            <input type="button" value="%" disabled={isDisabled} onClick={clickHandler} className="button"/>             
            <input type="button" value="9" onClick={clickHandler} className="button"/>
            <input type="button" value="8" onClick={clickHandler} className="button"/>
            <input type="button" value="7" onClick={clickHandler} className="button"/>
            <input type="button" value="*" disabled={isDisabled} onClick={clickHandler} className="button"/>
            <input type="button" value="6" onClick={clickHandler} className="button"/>
            <input type="button" value="5" onClick={clickHandler} className="button"/>
            <input type="button" value="4" onClick={clickHandler} className="button"/>
            <input type="button" value="/" disabled={isDisabled} onClick={clickHandler} className="button"/>
            <input type="button" value="3" onClick={clickHandler} className="button"/>
            <input type="button" value="2" onClick={clickHandler} className="button"/>
            <input type="button" value="1" onClick={clickHandler} className="button"/>
            <input type="button" value="+" disabled={isDisabled} onClick={clickHandler} className="button"/>
            <input type="button" value="." onClick={clickHandler} className="button"/>
            <input type="button" value="0"  onClick={clickHandler} className="button"/>
            <input type="button" value="="  disabled={isDisabled} onClick={calculate} className="button"/>
            <input type="button" value="-" disabled={isDisabled} onClick={clickHandler} className="button"/>
            <input type="button" value="History" onClick={historyHandler} className="button button2"/>
        </div>

// MC = Memory Clear sets the memory to 0
// MR = Memory Recall uses the number in memory, acts as if you had keyed in that number yourself
// MS = Memory Store puts the number on the display into the memory
// M+ = Memory Add takes the number on the display, adds it to the memory, and puts the result into memory
    );

}
export default Calculator;