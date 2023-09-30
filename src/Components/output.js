import React from "react";
import Outputrow from "./Outputrow.js";
const Output= (props)=>{
    return(
       <div>
        <Outputrow in={props.user} />
        <Outputrow value={props.answer} />


       </div>
    )
}
export default Output;
