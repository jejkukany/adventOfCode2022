import React from 'react'
import {TbChristmasTree} from "react-icons/tb"

function Loading() {
  return (
    <div className="animate-bounce absolute  w-[95%]  top-1/2 left-1/2 ml-[-32px] mt-[-32px]">
        <TbChristmasTree size="64" className="text-indigo-500"></TbChristmasTree>
    </div>
    
  )
}

export default Loading