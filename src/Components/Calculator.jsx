import React, { useState } from "react";
const Calculator = () => {
    const[value,setValue]=useState("")
    return (

        <>
            <div className=" flex justify-center py-10">
                <div className=" text-black">
                    <div>
                        <input type="text" value={value} placeholder="Enter Here" className="py-3 px-16 rounded-full" />
                    </div>

                </div>
            </div>
<div className="flex justify-center">
           <div className="grid grid-cols-4 gap-4">
            <button type="button" value="DEL" className="bg-orange-600 px-4 py-2 text-white"onClick={(e)=>setValue("")} >DEL</button>
            <button type="button" value="AC" className="bg-orange-600 text-white" onClick={(e)=>setValue(value.slice(0,-1))}>AC</button>
            <button type="button" value="." className="bg-orange-600 text-white" onClick={(e)=>setValue(value+e.target.value)}>.</button> 
            <button type="button" value="*" className="bg-orange-600 text-white" onClick={(e)=>setValue(value+e.target.value)}>*</button>
            <button type="button" value="7" className="bg-white px-4 py-2" onClick={(e)=>setValue(value+e.target.value)}>7</button>
            <button type="button" value="8" className="bg-white" onClick={(e)=>setValue(value+e.target.value)}>8</button>
            <button type="button"value="9" className="bg-white" onClick={(e)=>setValue(value+e.target.value)}>9</button>
            <button type="button" value="/" className="bg-orange-600 text-white" onClick={(e)=>setValue(value+e.target.value)}>/</button>
            <button type="button"value="6" className="bg-white px-4 py-2" onClick={(e)=>setValue(value+e.target.value)}>6</button>
            <button type="button" value="5" className="bg-white" onClick={(e)=>setValue(value+e.target.value)}>5</button>
            <button type="button" value="4" className="bg-white"onClick={(e)=>setValue(value+e.target.value)}>4</button>
            <button type="button" value="+" className="bg-orange-600 text-white"onClick={(e)=>setValue(value+e.target.value)}>+</button>
            <button type="button" value="3" className="bg-white px-4 py-2" onClick={(e)=>setValue(value+e.target.value)}>3</button>
            <button type="button" value="2" className="bg-white" onClick={(e)=>setValue(value+e.target.value)}>2</button>
            <button type="button" value="1" className="bg-white" onClick={(e)=>setValue(value+e.target.value)}>1</button>
            <button type="button" value="-"className="bg-orange-600 text-white" onClick={(e)=>setValue(value+e.target.value)}>-</button>
            <button type="button" value="00" className="bg-white px-4 py-2" onClick={(e)=>setValue(value+e.target.value)}>00</button>
            <button type="button" value="0" className="bg-white"onClick={(e)=>setValue(value+e.target.value)}>0</button>
            <button type="button" value="." className="bg-white"onClick={(e)=>setValue(value+e.target.value)}>.</button>
            <button type="button" value="=" className="bg-orange-600 text-white"onClick={(e)=>setValue(eval(value))}>=</button>
            </div>
            </div>
            
        </>
    );
}
export default Calculator