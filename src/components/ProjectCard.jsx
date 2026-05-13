import React from 'react'

const ProjectCard = ({image, title, description, link}) => {
  return (
    <div className='bg-gray-800 text-white p-6 rounded-lg shadow-lg'>
      {image && <img src={image} alt={title} className='w-full h-auto mb-4 rounded-lg' />}
      <h3 className='text-xl font-bold mb-2'>{title}</h3>
      <p className='text-gray-300'>{description}</p>
    </div>
  )
}

export default ProjectCard