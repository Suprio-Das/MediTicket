import Marquee from "react-fast-marquee";

const Home = () => {
    const dummyNotice = [
        {
            name: "The seat limit of Dengue Department is full. For emergency, contact MediTicket office."
        },
        {
            name: "Don't trust the outsources. We do everything in legal way no third party required."
        },
        {
            name: "Apply as Nurse - There are open vacancies in Medicine Department."
        }
    ]
    return (
        <div>
            {/* Notice Board */}
            <div>
                <div className="bg-gray-200 p-2 flex items-center">
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