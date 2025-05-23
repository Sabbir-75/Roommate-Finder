import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const singkeData = useLoaderData()
    console.log(singkeData);
    return (
        <div>
            id: {singkeData._id}
        </div>
    );
};

export default Update;