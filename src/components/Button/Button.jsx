
import React, {useSate} from "react"
import './Button.css'

function Button({text,className, action}){
    return(
        <>
        <button className={className} onClick={action}>{text}</button>
        </>
    )
}

export default Button