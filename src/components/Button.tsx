import React from 'react';
import s from './Button.module.css'
type ButtonType={
    name:string;
    callBack:()=>void
    value:number
    maxValue:number
}

export const Button=(props:ButtonType)=>{
    const {name,callBack,value,maxValue}=props
    const onClickHandler=()=>{
        callBack()
    }
    return(
        <button  className={(value<maxValue)? s.button: s.isDone} onClick={onClickHandler}>
            {name}
        </button>
    )


}