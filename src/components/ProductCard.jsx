import React from 'react'

export default function ProductCard(props) {
    const {info: {name, _id}, onDelete} = props;

  return (
    <div>
        <p>{name}</p>
        <button onClick={() => onDelete(_id)}>Delete</button>

         
    </div>
  )
}

