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
            <div className='max-w-[1230px] mx-auto'>
                <Slider loaderdata={loaderdata}></Slider>
                <div className='my-4 md:my-10 '>
                    <h1 className='text-center mb-8 text-4xl font-semibold'>Featured <span className='text-[#DC143C]'>Roommates</span></h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                        {
                            sortData.map(data => <ShortData key={data._id} data={data}></ShortData>)
                        }
                    </div>
                </div>

                <div className='my-4 md:my-10'>
                    <section className="dark:bg-gray-100 dark:text-gray-800">
                        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked <span className='text-[#DC143C]'>Questions</span></h2>
                            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline"> Q: How do I post a listing to find a roommate?</summary>
                                    <div className="px-4 pb-4">
                                        <p>A: To post a listing, create an account or log in. Then, click on the "Post a Listing" button, fill out the form with details like location, rent, room type, and any preferences, and submit it. Your post will appear on the site for others to view.

                                        </p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">. Q: Can I contact a roommate before sharing personal details?</summary>
                                    <div className="px-4 pb-4">
                                        <p>A: Yes! You can use the built-in messaging feature to chat with other users without revealing your phone number or email. This helps keep your information private until you're comfortable sharing.

                                        </p>
                                    </div>
                                </details>
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer focus:underline">Q: How do I know if a listing is still available?</summary>
                                    <div className="px-4 pb-4">
                                        <p>A: Each listing shows its status — if it's marked as "Available" it's still active. You can also message the poster to confirm availability. Users are encouraged to update or remove their listings once the room is filled.

                                        </p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>

                <div className='my-4 md:my-10'>
                    <div className="flex flex-col max-w-5xl p-8 shadow-sm mx-auto rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex flex-col w-full">
                            <h2 className="text-3xl font-semibold text-center">Peoples review</h2>
                            <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                <div className="flex">
                                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-700">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-400">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-400">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <span className="dark:text-gray-600">3 out of 5</span>
                            </div>
                            <p className="text-sm dark:text-gray-600">861 global ratings</p>
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                        <div className="dark:bg-[#DC143C] h-4 w-5/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                        <div className="dark:bg-[#DC143C] h-4 w-4/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                        <div className="dark:bg-[#DC143C] h-4 w-3/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                        <div className="dark:bg-[#DC143C] h-4 w-2/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                    <div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-300">
                                        <div className="dark:bg-[#DC143C] h-4 w-1/6"></div>
                                    </div>
                                    <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;