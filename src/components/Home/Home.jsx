import React, { useContext} from 'react';
import { FeaturedJobsContext } from '../../App';
import FeaturedJobs from './FeaturedJobs';
import Cover from './Cover';
import JobCategory from './JobCategory';


const Home = () => {
   
    const featuredJobs = useContext(FeaturedJobsContext);

    return (
        <>
{/* Cover Section */}
            <Cover></Cover>

{/* Job Category List Section */}
            <JobCategory></JobCategory>

{/* Featured Jobs Section */}
            <section className='my-32 container mx-auto'>
                <div className='text-center my-8'>
                    <h1 className='text-5xl font-bold my-5'>Featured Jobs</h1>
                    <p className='color-gray font-medium'>Explore Featured jobs section to build your future with thousands of job opportunities</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mx-3 md:mx-0'>
                    {
                        featuredJobs.map(singleFeaturedJob =>
                            <FeaturedJobs
                                key={singleFeaturedJob.id}
                                singleFeaturedJob={singleFeaturedJob}
                            ></FeaturedJobs>
                        )
                    }
                </div>
                <div className='text-center my-4'>
                    <button className='btn bg-color-gradient my-8'>Show All Jobs</button>
                </div>
            </section>
        </>
    );
};

export default Home;