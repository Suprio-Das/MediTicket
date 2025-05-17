import Marquee from "react-fast-marquee";
import TicketLottie from '../../assets/Ticket-Lottie.json'
import Lottie from "lottie-react";

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
                <h1 className="lg:text-4xl text-xl font-semibold text-center my-3 flex items-center justify-center gap-2">Generate Ticket <Lottie animationData={TicketLottie} className="w-18" /></h1>
                <div className="grid lg:grid-cols-3 grid-cols-1 border-2">
                    {/* Ticket Input */}
                    <div className="col-span-2 p-5">
                        <h1 className="text-lg font-semibold">Input Patient Information</h1>
                        {/* Patient Information Form */}
                        <form className="grid lg:grid-cols-2 grid-cols-1 gap-5">

                            {/* Patient Name and Age----------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Name</legend>
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Name here" name="name" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Age</legend>
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Age here" name="age" />
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                            {/* Department and Room No.----------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Department</legend>
                                <select defaultValue="Select a Department" className="select" name="department">
                                    <option disabled={true}>Select a Department</option>
                                    <option>Medicine</option>
                                    <option>Skin</option>
                                    <option>Eye</option>
                                    <option>Dental</option>
                                    <option>Dialysis</option>
                                    <option>Neuro Medicine</option>
                                </select>
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                        </form>
                    </div>
                    {/* Ticket Print */}
                    <div className="col-span-1 border-l-2 p-5">
                        <h1 className="text-lg font-semibold">Download or Print Ticket</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;