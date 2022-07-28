import React from 'react'

export default function SearchBar(props) {
    const { onSearch } = props;
  return (
    <div>
        <input type="text" placeholder='search🔎' onChange={(e) => onSearch(e)}  />
    </div>
  )
}
