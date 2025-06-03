import LoaderLottie from '../../assets/Loader.json';

const Loader = () => {
    return (
        <div className='min-h-[100vh-120px] flex justify-center items-center'>
            <img src={LoaderLottie} alt="" />
        </div>
    );
};

export default Loader;