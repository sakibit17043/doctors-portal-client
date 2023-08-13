import React, { useEffect, useRef, useState } from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, pError] = useSendPasswordResetEmail(
        auth
      );
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [reset,setReset] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user||gUser);
    let signInError;
    useEffect(()=>{
        if (token) {
            navigate(from,{replace:true});
       }
    },[token,from,navigate])

    if(loading||gLoading){
        return <Loading></Loading>
    }
    if(error||gError){
        signInError=<p className='text-red-500'><small>{error?.message||gError?.message}</small></p>
    }
    const onSubmit = (data) =>{
         signInWithEmailAndPassword(data.email, data.password)

    }

    return (
                <div className='flex h-screen justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="input input-bordered w-full max-w-xs"
                                        
                                       {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'

                                            },
                                            pattern: {
                                                value: /^[\w-\.\d*]+@[\w\d]+(\.\w{2,4})$/,
                                                message: 'Provide a valid email'
                                            },
                                        })}
                                        onBlur={(e)=>setReset(e.target.value)}
                                        

                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'

                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            },
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                                    </label>
                                </div>
                                {signInError}
                                <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                              
                            </form>
                            <button onClick={async()=>{
                                     const success = await sendPasswordResetEmail(
                                        reset
                                      );
                                      if (success) {
                                        alert('Sent email');
                                      }
                            }} className='text-center text-indigo-600 btn-link'> <small>Forget Password?</small></button>


                            <p><small>New to Doctors Portal? <Link className='text-indigo-600' to='/signup'>Create New Account</Link></small></p>
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline"
                            >Continue With Google</button>
                        </div>
                    </div>
                </div>
    );
};

export default Login;