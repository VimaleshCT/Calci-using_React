import React from "react";
import Outrow from './Outrow.css';

const Outputrow = (props) =>{
   return(
    <div>
               {/* <input type='text' readOnly className="screen"  style={props.textSize} value={props.value} /> */}
               <input type='text' readOnly className="screen"  value={props.in}/>
               <input type='text' readOnly className="screen"  value={props.value}/>
    </div>
   )
}

export default Outputrow;
