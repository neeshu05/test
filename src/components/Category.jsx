import React from 'react'
import '../static/css/category.css'
function Category( { categories, getCategory }) {
    function handleClick(category){
        getCategory(category)
    }
  return (
    <div className='category_container'>
        {
            categories.map(category => {
                return(
                    <div>
                        <button onClick={() => { handleClick(category)}} className='creative-button'>{category}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Category