import React from 'react';

const Home = () => {
    return (
        <>
            <div className='bg-[#F4F4F4] py-4'>
                <div className='flex justify-center items-center gap-6 container mx-auto py-8'>
                    <div className=''>
                        <h1 className='text-7xl font-bold leading-[90px]'>Let Today<br /> Be The Start Of <span className='color-gradient'> Something New!</span></h1>
                        <p className='color-gray my-8 font-medium'>Explore the opportunities of jobs in thousands with all the <br /> provided information. A future you want. Just find it. Can manage <br /> all your job application, start to finish.</p>
                        <button className='btn bg-color-gradient'>Get Stated</button>
                    </div>
                    <div>
                        <img src="../../public/All Images/person.png" alt="" />
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Home;