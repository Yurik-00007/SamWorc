import React, {useState} from 'react';
import s from './App.module.css';
import {Counter} from "./components/Counter";

function App() {
    const [value,setValue]=useState(0)
    const firsteFunc=()=>{
        if(value<5)
        setValue(value+1)
    }
    const secondFunc=()=>{
        setValue(0)
    }
    return (
        <div className={s.App}>
           <Counter value={value} firstFunc={firsteFunc} secondFunc={secondFunc}/>
{/*
           <div>
               <span><Inc value={value}/></span><span><Reset/></span>
           </div>
           */}
        </div>

    );
}



export default App;
