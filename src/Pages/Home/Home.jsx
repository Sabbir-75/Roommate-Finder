import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { useLoaderData } from 'react-router';
import Marquee from 'react-fast-marquee';
import { Helmet } from 'react-helmet';

const Home = () => {
    const loaderdata = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>Roommate Hunt || home</title>
            </Helmet>
            <Marquee pauseOnHover={true}>
                <p className='py-3 text-base text-white font-semibold bg-[#DC143C]'>"Find Your Perfect Roommate Today! | Safe, Verified Profiles Only | Search by Budget, Location & Lifestyle | Browse Rooms & Apartments Nearby | Chat, Connect, and Match Instantly | No More Awkward Roommate Situations | Easy Sign-Up, Fast Matches | Join Thousands Finding the Right Fit! | Save Time, Avoid Scams | Start Your Shared Living Journey Now!"</p>
            </Marquee>
            <Slider loaderdata={loaderdata}></Slider>
        </div>
    );
};

export default Home;