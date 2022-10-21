import React from 'react'

const Skill = (props) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#222323] rounded-lg py-4 h-[150px] '>
        <img className = "max-h-[48px] mb-2" src={props.logo} alt={props.title} />
        <p className='text-gray-300'> {props.title}</p>
    </div>
  )
}

export default Skill