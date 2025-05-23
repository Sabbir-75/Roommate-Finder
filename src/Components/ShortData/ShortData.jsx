import React from 'react';

const ShortData = ({ data }) => {
    const {_id, title, availability, location, roomType, amount, name} = data
    return (
        <div>
            <div className="rounded-md shadow-xl dark:bg-gray-200 border-t-8 border-[#DC143C] dark:text-gray-800">
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold break-words">{title}</h2>
                        <p className="dark:text-gray-800 text-base font-normal">Name: <span className='font-semibold'>{name}</span></p>
                        <p className="dark:text-gray-800 text-base font-normal">Room Type: <span className='font-semibold'>{roomType}</span></p>
                        <p className="dark:text-gray-800 text-base font-normal">Ammount: <span className='font-semibold'>${amount}</span></p>
                        <p className="dark:text-gray-800 text-base font-normal">Location: <span className='font-semibold'>{location}</span></p>
                        <p className="dark:text-gray-800 text-base font-normal">Availability: <span className='font-semibold px-2 py-1 bg-blue-400 text-white rounded-[5px]'>{availability}</span></p>
                    </div>
                    <button type="button" className="flex cursor-pointer items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#DC143C] dark:text-gray-50">See more</button>
                </div>
            </div>
        </div>
    );
};

export default ShortData;