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
                    <Marquee pauseOnHover={true} speed={100}>
                        {
                            dummyNotice.map((notice, index) => <span key={index} className="mr-16">{notice.name}</span>)
                        }
                    </Marquee>
                </div>
            </div>
            {/* Ticket Section */}
            <section className="p-2">
                {/* Ticket Input */}
                <div>
                    <h1>Ticket Input - Left Layout</h1>
                </div>
                {/* Ticket Print */}
                <div>
                    <h1>Ticket Output - Right Layout</h1>
                </div>
            </section>
        </div>
    );
};

export default Home;