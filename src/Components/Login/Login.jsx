import Logo from '../../assets/MediTicket.png';
const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Handle Login Function Clicked');
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
                        <input type="text" className="input w-full" placeholder="Enter email..." />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input w-full" placeholder="Type password..." />
                    </fieldset>
                    <input type="submit" className='btn w-full mt-2 bg-[#275596] text-white' value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;