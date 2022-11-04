import React, {useState} from 'react';
import {Button} from "./Button";
import s from'./Counter.module.css'


type CounterType={
    value:number
    firstFunc:()=>void
    secondFunc:()=>void
    maxValue:number
}

export const Counter=(props:CounterType)=>{
    const{value,firstFunc,secondFunc,maxValue}=props
    const callBackInsHandler=()=>{
        if(value<maxValue) {
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
    const [error,setError]=useState<string|null>('Click Inc')
/*
    const[disabled,setDisable]=useState(true)
*/


    return(
        <div className={s.Counter}>
            <div className={(value===maxValue)?s.valueMax:s.value}>{value}</div>
            <div className={s.box}>
                <Button maxValue={maxValue}  name={'Inc'} callBack={callBackInsHandler} value={value}/>
                <Button maxValue={maxValue} name={'Reset'} callBack={callBackResetHandler} value={value} />
                {/*<div className={s.errorMessage}>Click Reset</div>*/}
                {error && <div className={s.errorMessage}>{error}</div>}
            </div>
        </div>
    

    )
}