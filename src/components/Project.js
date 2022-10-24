import React, { useEffect, useState } from 'react';

const Project = ({ item }) => {

  return (
    <div className='flex flex-col items-center text-center'>
      <div className='mb-8'>
        <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <div  key={item.id}>
      <p className='text-base max-w-md' key={"1"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.ujjwal usj;lds
      </p>
      </div>
      
    </div>  
  
  );
};

export default Project;
