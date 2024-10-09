import React from 'react'
import './Login.css';
import { auth, provider } from '../../FirebaseConfig';
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react'
import { GithubAuthProvider, signInWithRedirect} from "firebase/auth";

function Login() {
    const [user, setUser] = useState(null);

    const signInWithGoogle = async () => {
        try {   
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            window.location.assign("/chat")
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };
    const signInWithGithub = async () => {
        try {
            const githubProvider = new GithubAuthProvider(); 
            const result = await signInWithPopup(auth, githubProvider); 
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log("GitHub sign-in successful:", user);
            setUser(user);
            window.location.assign("/chat");
        } catch (error) {
            console.error("Error signing in with GitHub", error);
        }
    };
    return (
        <>
        <div className='login bg-white pt-[8%]'>
            <div className='upper flex flex-col'>
                <div className='heading text-center justify-center'>
                    <h1 className='text-3xl bg-white '>Welcome back</h1>
                </div>
                <div className='bg-white text-center justify-center pt-[25px]'>
                    <input type='text' placeholder='Email address or phone number*' className='bg-white border-2 border-custom-green w-[24.5%] h-[50px] placeholder:pl-[10px]'></input>
                </div>
                <div className='bg-white text-center justify-center pt-[25px]'>
                    <button className='text-white bg-[#10A37F] w-[24.5%] h-[50px] rounded-md'>Continue</button>
                </div>
                <div className='bg-white text-center justify-center pt-[25px]'>
                    <p>Don't have an account? <span className='text-[#10A37F] hover:underline cursor-pointer'> Sign Up</span></p>
                </div>
                <div className='bg-white justify-center text-center pt-[25px]'>
                    <p>OR</p>
                </div>
            </div>
            <div className='lower bg-white pt-[25px] flex flex-col items-center justify-center'>
                <div className='bg-white flex gap-[5px]  pl-[10px] items-center justify-start border-2 border-custom-green w-[330px] h-[50px] cursor-pointer'>
                    <div className='bg-white'><img src='./images/google.svg' className='object-fit:contain w-[20px] h-[20px]'></img></div>
                    <div className='bg-white'><p onClick={signInWithGoogle}>Continue with Google</p></div>
                </div>
                <div className='bg-white flex gap-[5px] pl-[10px] items-center justify-start mt-[25px] border-2 border-custom-green w-[330px] h-[50px] cursor-pointer'>
                    <div className='bg-white'><img src='./images/git.png' className='object-fit:contain w-[20px] h-[20px]'></img></div>
                    <div className='bg-white'><p onClick={signInWithGithub}>Continue with Github</p></div>
                </div>
                <div className='bg-white flex gap-[5px] pl-[10px] items-center justify-start mt-[25px] border-2 border-custom-green w-[330px] h-[50px] cursor-pointer'>
                    <div className='bg-white'><img src='./images/apple.svg' className='object-fit:contain w-[20px] h-[20px]'></img></div>
                    <div className='bg-white'><p onClick={signInWithGoogle}>Continue with Apple</p></div>
                </div>
                <div className='bg-white text-center justify-center pt-[25px]'>
                    <p className='text-[#10A37F]'>Terms of Use | Privacy Policy</p>
                </div>
            </div>
        </div>
        </>
    )   
}

export default Login
