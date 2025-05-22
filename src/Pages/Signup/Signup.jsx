import React, { use } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const Signup = () => {

    const { createAccout, setUserData, googleAccount, ProfileUpdate } = use(AuthContext)
    const Navigate = useNavigate()

    const SignupHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { name, email, photo, password } = Object.fromEntries(formData.entries())
        console.log(name, email, photo, password);

        const pass = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        if (!pass.test(password)) {
            toast.error('🦄 Password must be at least 6 characters, include uppercase and lowercase letter !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
            return
        }

        createAccout(email, password)
            .then(result => {
                console.log(result.user);
                const profile = {
                    displayName: name,
                    photoURL: photo
                }

                ProfileUpdate(profile)
                    .then(result => {
                        console.log(result.user);
                        toast.success('🦄 Profile create Successfully', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce
                        });
                        setUserData(result.user)
                        Navigate("/")
                    })
                    .catch(error => {
                        toast.error(`${error.code}`, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce
                        });
                    })

            })
            .catch(error => {
                // console.log(error.message);
                toast.error(`${error.code}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            })
    }

    const googleHander = () => {
        googleAccount()
            .then(result => {
                setUserData(result.user)
                toast.success('Google Login Successfully !', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
                Navigate("/")
            })
            .catch(error => {
                toast.error(`${error.code}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            })
    }
    return (
        <div className="hero px-6 my-4 md:my-10">
            <Helmet>
                <title>Roommate Hunt || Signup</title>
            </Helmet>
            <div className="card bg-white w-full border-[#372727] border-[2px] max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">

                    <h1 className="text-5xl font-bold text-center mb-5">Signup now!</h1>
                    <button onClick={googleHander} className="btn bg-white text-black border-gray-300">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-800" />
                        <p className="px-3 dark:text-gray-800">OR</p>
                        <hr className="w-full dark:text-gray-800" />
                    </div>
                    <form onSubmit={SignupHandler} className="fieldset w-full mx-auto">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter Your Email" />
                        <label className="label">PhotoURL </label>
                        <input type="text" name='photo' className="input" placeholder="Enter Your PhotoURL " />
                        <label className="label">Password </label>
                        <input type="password" name='password' className="input" placeholder="Enter Your Password" />
                        <button type='submit' className="btn text-white bg-[#DC143C] mt-4">Login</button>
                        <p className="text-sm text-center dark:text-gray-400">Already have an account ?
                            <Link to={"/login"} rel="noopener noreferrer" className="text-blue-600 focus:underline hover:underline"> Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;