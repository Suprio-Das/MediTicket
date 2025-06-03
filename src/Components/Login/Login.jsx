import Lottie from 'lottie-react';
import loginLottie from '../../assets/LoginLottie.json';
const Login = () => {
    return (
        <div>
            <div>
                {/* Lottie Animation */}
                <div>
                    <Lottie animationData={loginLottie} className='w-78'></Lottie>
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