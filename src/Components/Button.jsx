import React from 'react'

const Button = ({content , cls,img}) => {
  return (
   <button className={`${cls}`}>
    
    {content}
     {img}
    </button>
  )
}

export default Button
