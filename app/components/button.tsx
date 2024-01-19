import React from 'react'


type Button = {
    text: string;
    onClick?: () => void;
    width: string;
    height: string;
    type: "button" | "submit" | "reset";
    margin:string
  };


function Button({text,onClick,width,height,type,margin}:Button) {
  return (
    <div >
      <button type={type} onClick={onClick}  className={`${width} ${height} ${margin} border-2 px-4 py-1 uppercase text-xl rounded-md text-center text-white`}>{text}</button>  
    </div>
  )
}

export default Button