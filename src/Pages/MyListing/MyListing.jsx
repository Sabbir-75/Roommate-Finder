import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyListing = () => {
    const {userData} = use(AuthContext)
    const useData = useLoaderData()
    const [myListing, setMyListing] = useState(useData)
    useEffect(() => {
        const filteredData = myListing.filter(data => data.email == userData?.email)
        console.log(filteredData);
    },[myListing, userData])
    return (
        <div>
            
        </div>
    );
};

export default MyListing;