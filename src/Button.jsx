import React from "react"

const Button=(props)=>{
  return( <button onClick={props.fun}>{props.name}</button> )
}
export default Button;