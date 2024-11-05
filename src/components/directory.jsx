import React from 'react'
import CategoryItem from "./components/category-item"


const Directory = ({ categories}) => {
  return (
    <div  className="w-full flex flex-wrap justify-between gap-4">
      {categories.map((category) => (
      <CategoryItem category={category} key={category.id}/>
      ))}
        
    </div>
  )
}

export default Directory
