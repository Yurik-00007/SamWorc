import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";

function App() {
    const init:number=0
    const inc:number=1
    const maxValue:number=5
    const [value,setValue]=useState<number>(init)
    const firsteFunc=()=>{
        if(value<maxValue)
        setValue(value+inc)
    }
    const secondFunc=()=>{
        setValue(init)
    }
    return (
        <div className={s.App}>
           <Counter maxValue={maxValue} value={value} firstFunc={firsteFunc} secondFunc={secondFunc}/>
{/*
           <div>
               <span><Inc value={value}/></span><span><Reset/></span>
           </div>
           */}
        </div>

    );
}



export default App;
