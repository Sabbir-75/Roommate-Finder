import React, { use } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const Login = () => {
    const location = useLocation()
    const { signin, setUserData, googleAccount } = use(AuthContext)
    const Navigate = useNavigate()
    const loginHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())

        signin(email, password)
            .then(result => {
                toast.success('🦄 Login Successfully', {
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
                Navigate(location.state || "/")
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
                Navigate(location.state || "/")
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
                <title>Roommate Hunt || Login</title>
            </Helmet>
            <div className="card bg-base-100 w-full border-[#372727] border-[2px] max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
                    <button onClick={googleHander} className="btn bg-white text-black border-gray-300">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-800" />
                        <p className="px-3 dark:text-gray-800">OR</p>
                        <hr className="w-full dark:text-gray-800" />
                    </div>
                    <form onSubmit={loginHandler} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn text-white bg-[#DC143C] mt-4">Login</button>
                        <p className="text-sm text-center dark:text-gray-400">Don't have account ?
                            <Link to={"/signup"} rel="noopener noreferrer" className="text-blue-600 focus:underline hover:underline"> Sign up here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;