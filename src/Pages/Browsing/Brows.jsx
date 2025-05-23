import React from 'react';
import { useNavigate } from 'react-router';

const Brows = ({ index,singleData }) => {
    const navigate = useNavigate()
    const { _id, title, name, location, roomType, amount, availability } = singleData
    return (
        <tr className='hover:bg-gray-200 duration-200'>
            <td>
                {index + 1}
            </td>
            <td>
                <h1 className="flex items-center">
                    <div className="">{name}</div>
                </h1>
            </td>
            <td>
                {title}
            </td>
            <td>{roomType}</td>
            <td>{location}</td>
            <td>${amount}</td>
            <td className={`${ (availability === "Available") && "text-green-900" }`}>{availability}</td>
            <th className='flex justify-center gap-2'>
                <button onClick={() => navigate(`/details/${_id}`)} className="btn  bg-[#DC143C] duration-200 text-white btn-sm">See More</button>
            </th>
        </tr>
    );
};

export default Brows;