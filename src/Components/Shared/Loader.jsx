import Lottie from 'lottie-react';
import LoaderLottie from '../../assets/Loader.json';

const Loader = () => {
    return (
        <div className='min-h-[100vh-120px] flex justify-center items-center'>
            <Lottie animationData={LoaderLottie}></Lottie>
        </div>
    );
};

export default Loader;