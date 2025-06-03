import { useContext, useState } from 'react';
import Logo from '../../assets/MediTicket.png';
import AuthContext from '../Context/AuthContext';
const Login = () => {
    const [error, setError] = useState({});
    const { handleLoginWithEmailAndPass } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLoginWithEmailAndPass(email, password)
            .then((user) => {
                console.log(user.user)
                setError();
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    return (
        <div className='min-h-[calc(100vh-120px)] flex items-center justify-center login border-t-1 border-[#275596]'>
            <div className='lg:w-2/5 w-[95%] border-1 p-5 rounded-sm bg-white'>
                <h2 className='text-center text-md font-semibold flex flex-col items-center'>
                    Login to
                    <span><img src={Logo} alt="MediTicket Logo" className='w-42' /></span>
                </h2>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="text" className="input w-full" name='email' placeholder="Enter email..." />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input w-full" name='password' placeholder="Type password..." />
                    </fieldset>
                    <input type="submit" className='btn w-full mt-2 bg-[#275596] text-white' value="Login" />
                    <code className={`text-sm text-center mt-2 text-red-600 ${error ? 'block' : 'hidden'}`}>Enter valid email or password.</code>
                </form>
            </div>
        </div>
    );
};

export default Login;