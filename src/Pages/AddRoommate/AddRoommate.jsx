import React, { use } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddRoommate = () => {
    const {userData} = use(AuthContext)
    const roommateFinderHandler = (e) => {
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const newFormData = Object.fromEntries(formData.entries())
      console.log(newFormData);
    }
    return (
        <div className="hero my-10 px-4">
             <Helmet>
                <title>Roommate Hunt || Find Roommate</title>
            </Helmet>
            <div className="card bg-white w-full border-[#372727] border-[2px] max-w-xl shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center mb-5">Find Roommate</h1>
                    <form onSubmit={roommateFinderHandler} className="fieldset">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div>
                                <label className="label">Title </label>
                                <input required type="text" name='title' className="input" placeholder="Enter Title" />
                            </div>
                            <div>
                                <label className="label">Location</label>
                                <input required type="text" name='location' className="input" placeholder="Enter Location" />
                            </div>
                            <div>
                                <label className="label">Rent Amount</label>
                                <input required type="number" name='amount' className="input" placeholder="Enter Rent Amount" />
                            </div>
                            <div className='text-gray-600'>
                                <label className="label"> Room Type</label>
                                <select
                                    required
                                    name="roomType"
                                    className="input"
                                >
                                    <option>Select a room type</option>
                                    <option value="single">Single</option>
                                    <option value="shared">Shared</option>
                                    <option value="double">Double</option>
                                </select>
                            </div>
                            <div className='text-gray-600'>
                                <label className="label">Lifestyle Preferences</label>
                                <select
                                    required
                                    name="lifestyle"
                                    className="input"
                                >
                                    <option>Select a Lifestyle Preferences</option>
                                    <option value="single">Pets</option>
                                    <option value="shared">Smoking</option>
                                    <option value="double">Night </option>
                                    <option value="double">Owl </option>
                                </select>
                            </div>
                            <div className='text-gray-700'>
                                <label className="label">
                                    Description
                                </label>
                                <textarea
                                    required
                                    name="description"
                                    rows={1}
                                    className="input"
                                    placeholder="Write details about the room..."
                                ></textarea>
                            </div>
                            <div>
                                <label className="label">Contact Info</label>
                                <input required type="number" name='contact' className="input" placeholder="Contact Info" />
                            </div>
                            <div className='text-gray-600'>
                                <label className="label">Availability </label>
                                <select
                                    required
                                    name="availability "
                                    className="input"
                                >
                                    <option>Availability </option>
                                    <option value="single">Available</option>
                                    <option value="shared">Not available</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">User Email</label>
                                <input required type="email" name='email' className="input" value={userData?.email} />
                            </div>
                            <div>
                                <label className="label">User Name</label>
                                <input required type="text" name='name' className="input" value={userData?.displayName} />
                            </div>

                        </div>
                        <button type='submit' className="btn text-white bg-[#DC143C] mt-4">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoommate;