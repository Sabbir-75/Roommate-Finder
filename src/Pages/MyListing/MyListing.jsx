import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyData from './MyData';

const MyListing = () => {
    const { userData } = use(AuthContext)
    const useData = useLoaderData()
    const [myListing, setMyListing] = useState([])
    useEffect(() => {
        const filteredData = useData.filter(data => data.email == userData?.email)
        setMyListing(filteredData)
    }, [useData,userData])
    return (
        <div className="max-w-[1200px] mx-auto overflow-x-auto border-2 border-[#FF5577] rounded-lg">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-[#FF5577] text-black font-bold'>
                        <th>NO</th>
                        <th>TITLE</th>
                        <th>ROOM TYPE</th>
                        <th>LOCATION</th>
                        <th>PRICE</th>
                        <th className='flex justify-center'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myListing.map((singleData, index) => <MyData key={singleData._id} index={index} singleData={singleData} myListing={myListing} setMyListing={setMyListing}></MyData>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyListing;