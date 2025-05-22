import React, { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Brows from './Brows';

const Browsing = () => {
    const { allData } = use(AuthContext)
    return (
        <div className='max-w-[1250px] mx-auto my-4 md:my-10'>
            <h1 className='text-center mb-8 text-4xl font-semibold'>Featured <span className='text-[#DC143C]'>Roommates</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2'>
                {
                    allData.map(data => <Brows key={data._id} data={data}></Brows>)
                }
            </div>
        </div>
    );
};

export default Browsing;