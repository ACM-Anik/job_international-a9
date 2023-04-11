import React from 'react';

const Cover = () => {
    return (
        <div className='bg-[#F4F4F4] pt-4 px-3'>
            <div className='md:flex justify-center items-center gap-6 container mx-auto pt-8'>
                <div className=''>
                    <h1 className='text-5xl md:text-7xl font-bold md:leading-[90px]'>Let Today<br /> Be The Start Of <span className='color-gradient'> Something New!</span></h1>
                    <p className='color-gray my-8 font-medium w-[90%] md:w-[80%]'>Explore the opportunities of jobs in thousands with all the provided information. A future you want. Just find it. Can manage all your job application, start to finish.</p>
                    <button className='btn bg-color-gradient'>Get Stated</button>
                </div>
                <div className=' my-6 md:my-0'>
                    <img src="https://i.ibb.co/JyWGxsC/person.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Cover;