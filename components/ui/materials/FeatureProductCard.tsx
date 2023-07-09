import React from 'react'

const FeatureProductCard = ({title,resume}: {title:string, resume:string}) => {
  return (
    <div className='my-7'>
        <p className='h3'>{title}  <span className='text-base px-3 '>{resume}</span> </p>

    </div>
  )
}

export default FeatureProductCard