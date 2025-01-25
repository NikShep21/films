'use client'
import styles from './Switcher.module.scss'
import { useState } from 'react'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'
import DropDownSwitch from './DropDownSwitch/DropDownSwitch'

interface TypeProps{
    typeSwitcher?:'dropDown' | 'default'
    params:string[],
    funcChangeState:Function,
    className?:string,
    
}
const Switcher = ({typeSwitcher = 'default', params, funcChangeState, className = ''}:TypeProps) =>{
    
    return(
    <>
       {
        typeSwitcher === 'default' ?
        <ToggleSwitch params={params} funcChangeState={funcChangeState}/>
        :
        <DropDownSwitch params={params} funcChangeState={funcChangeState}/>
       }
    </>
    )
}
export default Switcher