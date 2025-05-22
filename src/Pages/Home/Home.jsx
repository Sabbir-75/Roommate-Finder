import React, { use } from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData } from 'react-router';
import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet';
import ShortData from '../../Components/ShortData/ShortData';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
    const { sortData } = use(AuthContext)
    const loaderdata = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Roommate Hunt || Home</title>
            </Helmet>
            <Marquee pauseOnHover={true}>
                <p className='py-3 text-base text-white font-semibold bg-[#DC143C]'>"Find Your Perfect Roommate Today! | Safe, Verified Profiles Only | Search by Budget, Location & Lifestyle | Browse Rooms & Apartments Nearby | Chat, Connect, and Match Instantly | No More Awkward Roommate Situations | Easy Sign-Up, Fast Matches | Join Thousands Finding the Right Fit! | Save Time, Avoid Scams | Start Your Shared Living Journey Now!"</p>
            </Marquee>
            <div className='max-w-[1250px] mx-auto'>
                <Slider loaderdata={loaderdata}></Slider>
                <div className='my-4 md:my-10 '>
                    <h1 className='text-center mb-8 text-4xl font-semibold'>Featured <span className='text-[#DC143C]'>Roommates</span></h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                        {
                            sortData.map(data => <ShortData key={data._id} data={data}></ShortData>)
                        }
                    </div>
                </div>
                

            </div>

        </div>
    );
};

export default Home;