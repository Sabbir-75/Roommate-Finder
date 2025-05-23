import React from 'react';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyData = ({ index, singleData, myListing, setMyListing }) => {
    const { _id, title, location, amount, roomType } = singleData

    const deleteHandler = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/roommates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingData = myListing.filter(data => data._id !== id)
                            setMyListing(remainingData)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <h1 className="flex items-center">
                    <div className="">{title}</div>
                </h1>
            </td>
            <td>
                {roomType}
            </td>
            <td>{location}</td>
            <td>${amount}</td>
            <th className='flex justify-center gap-2'>
                <button className="btn  bg-teal-500 hover:bg-teal-600 duration-200 text-white btn-xs"><RiEdit2Fill /> Update</button>
                <button onClick={() => deleteHandler(_id)} className="btn bg-red-500 hover:bg-red-600 duration-200 text-white btn-xs"><MdDelete /> Delete</button>
            </th>
        </tr>
    );
};

export default MyData;