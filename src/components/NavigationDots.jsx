/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
import React from 'react'



const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
      {['home','about','work','skills','contact','testinomials'].map((item,index)=>(
    
        <a href={`#${item}`}
        key={item+index}
        className='app__navigation-dot'
        style={active===item ? {backgroundColor:'#313BAC' } : {}}
         onClick={()=>setToggle(false)} />
      
         
    
     
      ))}
    </div>
  )
}

export default NavigationDots
