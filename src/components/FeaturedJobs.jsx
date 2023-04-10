import React from 'react';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJobs = ({singleFeaturedJob}) => {
    const { company_logo, title, company_name, placement, duty, salary, location, id} = singleFeaturedJob;
    return (
        <div className='border shadow rounded p-8'>
            <img src={company_logo} alt="company-logo" />
            <h1 className='text-2xl font-bold mt-8'>{title}</h1>
            <h5 className='text-base font-medium color-gray my-3'>{company_name}</h5>
            <div className='flex justify-start items-center gap-4 my-5'>
                <button className='border py-2 px-5 rounded border-[#7E90FE] color-gradient'>{placement}</button>
                <button className='border py-2 px-5 rounded border-[#7E90FE] color-gradient'>{duty}</button>
            </div>
            <div className='flex justify-start items-center gap-6 my-4'>
                <div className='flex items-center gap-2 color-gray'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <h5 className=''>{location}</h5>
                </div>
                <div className='flex items-center gap-2 color-gray'>
                    <CurrencyDollarIcon className='w-6 h-6 ' />
                    <h5> Salary: {salary}</h5>
                </div>
            </div>
            <Link to={`../jobDetails/${id}`}>
                <button className='btn bg-color-gradient mt-4 '>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobs;