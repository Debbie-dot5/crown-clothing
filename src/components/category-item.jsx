import React from 'react'

const CategoryItem = ({ category }) => {
  
    const { imageUrl, title } = category
  return (
    <div 
    className={` relative min-w-30p h-60 flex-1 basis-auto flex items-center justify-center border border-black mx-7.5px mb-15px overflow-hidden hover:cursor-pointer`}>
   <div 
   className="transform transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110 w-full h-full bg-cover bg-center" style={{
    backgroundImage: `url(${imageUrl})`
   }} />
    <div className="absolute h-24 px-6 flex flex-col items-center justify-center bg-white border border-black bg-opacity-70">
       <h2 className="font-bold mx-1.5 text-xl text-gray-800">{title}</h2>
      <p className="font-light text-base">Shop Now</p>
    </div>
</div> 

  )
}

export default CategoryItem
