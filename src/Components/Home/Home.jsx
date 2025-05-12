import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div>
            {/* Notice Board */}
            <div>
                <div className="bg-gray-200 p-2">
                    <button className="btn bg-[#275596] outline-0 text-white">Notice: </button>
                    <Marquee>
                        I can be a React component, multiple React components, or just some text.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Home;