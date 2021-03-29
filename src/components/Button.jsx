import React from 'react'

const Button = ({index, onClick, item, value}) => {
  return (
    <button 
      key={item.id} 
      onClick={()=> onClick(index)}
      className={`job-btn ${index === value && 'active-btn'}`}
    >
      {item.company}
    </button>
  )
}

export default Button
