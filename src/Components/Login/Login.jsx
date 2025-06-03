import Lottie from 'lottie-react';
import loginLottie from '../../assets/LoginLottie.json';
const Login = () => {
    return (
        <div className='min-h-[calc(100vh-85px)] flex items-center justify-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                {/* Lottie Animation */}
                <div>
                    <Lottie animationData={loginLottie} className='w-[500px]'></Lottie>
                </div>
                {/* Login Form */}
                <div>
                    <h1>Login Form</h1>
                </div>
            </div>
        </div>
    );
};

export default Login;