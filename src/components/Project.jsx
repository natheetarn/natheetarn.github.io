import React from 'react'
const Project = (props) => {
  if (props.index %2 === 0){
  return (
    <div className='w-full h-auto bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] flex flex-col md:flex-row rounded-md'>
      <a href={props.link} target={'_blank'} rel='noreferrer'>
      <img src={props.poster} alt = 'white pic' className='h-auto md:max-w-[450px] rounded-md mx-auto  my-auto  
      sm:grayscale hover:grayscale-0 tansition duration-500 cursor-pointer '>
      </img>
      </a>
      <div className='px-4 py-4'>
      <h1 className='text-black text-2xl mx-4 my-4 font-bold'>
        {props.title}
      </h1>
      <p className='text-black px-4'>
        {props.desc}
      </p>
      </div>
    </div>
  )
  }
  return (
    <div className='w-full h-auto bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] flex flex-col md:flex-row-reverse rounded-md'>
      <a href={props.link} target={'_blank'} rel='noreferrer'>
      <img src={props.poster} alt = 'white pic' className='h-auto md:max-w-[450px] rounded-md mx-auto  my-auto 
      sm:grayscale hover:grayscale-0 tansition duration-500 cursor-pointer '>
      </img>
      </a>
      <div className='px-4 py-4'>
      <h1 className='text-black text-2xl mx-4 my-4 font-bold'>
        {props.title}
      </h1>
      <p className='text-black px-4'>
        {props.desc}
      </p>
      </div>
    </div>
  )
}

export default Project