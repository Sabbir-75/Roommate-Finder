import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AiFillLike } from 'react-icons/ai';
import { Bounce, toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router';
import { Fade } from 'react-awesome-reveal';

const Details = () => {
    const { userData } = useContext(AuthContext);
    const data = useLoaderData();

    const [likes, setLikes] = useState(data?.like || 0);
    const [postOwnerEmail, setPostOwnerEmail] = useState("");

    useEffect(() => {
        fetch(`https://roommate-finder-server-woad-eight.vercel.app/roommates/${data._id}`)
            .then(res => res.json())
            .then(fetchedPost => {
                setLikes(fetchedPost?.like || 0);
                setPostOwnerEmail(fetchedPost?.email || "");
            });
    }, [data]);

    const likeHandler = (id) => {
        fetch(`https://roommate-finder-server-woad-eight.vercel.app/roommates/${id}/like`, {
            method: 'POST',
        })
            .then(res => res.json())
            .then(updatedPost => {
                if (updatedPost) {
                    setLikes(updatedPost.like);
                    toast.success('You Liked This..!', {
                        position: "top-right",
                        autoClose: 1000,
                        theme: "colored",
                        transition: Bounce
                    });
                }
            });
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow dark:bg-gray-900 dark:text-white">
            <Helmet>
                <title>Roommate Hunt || Details</title>
            </Helmet>

            <div className='text-center mb-4'>
                <p className='max-w-[260px] mx-auto bg-[#DC143C] px-4 py-2 flex justify-center gap-1 text-white rounded-tr-xl rounded-bl-xl'>
                    <AiFillLike size={18} /> {likes} people interested in this post
                </p>
            </div>

            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Name:</strong> {data.name}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Email:</strong> {data.email}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Location:</strong> {data.location}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Amount:</strong> ${data.amount}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Room Type:</strong> {data.roomType}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Lifestyle:</strong> {data.lifestyle}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Description:</strong> {data.description}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>Availability:</strong> <span className='text-blue-800 bg-blue-300 px-2 py-1 rounded-full'>{data.availability}</span></p>

            <button
                onClick={() => likeHandler(data._id)}
                disabled={userData?.email === postOwnerEmail}
                className={`flex gap-1 text-black mb-4 bg-gray-200 border border-black hover:border-blue-800 px-4 py-2 rounded ${userData?.email === postOwnerEmail ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:text-blue-800"} ${likes > 0 ? "text-blue-800 border-blue-800" : ""}`}
            >
                <AiFillLike size={20} /> Like
            </button>

            <Fade cascade>
                {likes > 0 ? (
                    <p className="text-gray-700 dark:text-gray-300 mb-1"><strong>Contact:</strong> {data.contact}</p>
                ) : ""}
            </Fade>

        </div>
    );
};

export default Details;
