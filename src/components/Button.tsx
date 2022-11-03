import React from 'react';
import s from './Button.module.css'
type ButtonType={
    name:string;
    callBack:()=>void
    value:number
}

export const Button=(props:ButtonType)=>{
    const {name,callBack,value}=props
    const onClickHandler=()=>{
        callBack()
    }
    return(
        <button className={(value<5)? s.button: s.isDone} onClick={onClickHandler}>
            {name}
        </button>
    )


}