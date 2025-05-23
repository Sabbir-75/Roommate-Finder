import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Brows from './Brows';
import { Helmet } from 'react-helmet';

const Browsing = () => {
    const { allData } = use(AuthContext)
    return (
        <div className="max-w-[1200px] my-4 md:my-10 mx-auto overflow-x-auto border-2 border-[#FF5577] rounded-lg">
            <Helmet>
                <title>Roommate Hunt || MyListing</title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='bg-[#FF5577] text-black font-bold'>
                        <th>NO</th>
                        <th>NAME</th>
                        <th>TITLE</th>
                        <th>ROOM TYPE</th>
                        <th>LOCATION</th>
                        <th>PRICE</th>
                        <th>AVAILABILITY</th>
                        <th className='flex justify-center'>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((singleData, index) => <Brows key={singleData._id} index={index} singleData={singleData}></Brows>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Browsing;