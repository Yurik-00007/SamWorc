import React, {useState} from 'react';
import {Button} from "./Button";
import s from'./Counter.module.css'


type CounterType={
    value:number
    firstFunc:()=>void
    secondFunc:()=>void
}

export const Counter=(props:CounterType)=>{
    const{value,firstFunc,secondFunc}=props
    const callBackInsHandler=()=>{
        if(value<5) {
            firstFunc()
            setError(null)
        } else{
            setError('Click Reset')
        }
    }
    const callBackResetHandler=()=>{
        secondFunc()
        setError(null)
    }
    const [error,setError]=useState<string|null>(null)

    return(
        <div className={s.Counter}>
            <div className={s.value}>{value}</div>
            <div className={s.box}>
                <Button  name={'Inc'} callBack={callBackInsHandler} value={value}/>
                <Button name={'Reset'} callBack={callBackResetHandler} value={value} />
                {/*<div className={s.errorMessage}>Click Reset</div>*/}
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
        </div>
    

    )
}