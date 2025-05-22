import Marquee from "react-fast-marquee";
import TicketLottie from '../../assets/Ticket-Lottie.json'
import DataLoadingLottie from '../../assets/DataLoading.json'
import Lottie from "lottie-react";
import Ticket from "./Ticket";
import moment from "moment";
import { useState } from "react";

const Home = () => {
    const [ticket, setTicket] = useState({});

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
    ];

    let defaultRegNo = '202505191234'; // 2025-Year, 05-Day, 19-Month, 1234-random number

    // Handling Ticket Form
    const handleTicketGenerate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const age = form.age.value;
        const department = form.department.value;
        const patientCase = form.case.value;
        const gender = form.gender.value;
        const room = form.room.value;
        const price = 500;

        // Getting Current Date and Time
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const fullDate = `${year}-${month}-${day}`;
        const ticketTime = moment().format('MMMM Do YYYY, h:mm:ss a');

        // Reg no. from date
        const incDay = day + 1;
        const regNo = `${year}${month}${incDay}`

        const ticketInfo = { regNo, name, age, department, room, patientCase, gender, price, fullDate, ticketTime };

        setTicket(ticketInfo);
    }
    console.log(ticket);
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
                        <form className="grid lg:grid-cols-2 grid-cols-1 gap-5" onSubmit={handleTicketGenerate}>

                            {/* Patient Name and Age----------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Name</legend>
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Name here" name="name" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Age</legend>
                                <input type="number" className="input w-full outline-1" placeholder="Type Patient Age here" name="age" />
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                            {/* Department and Room No.----------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Department</legend>
                                <select defaultValue="Select a Department" className="select w-full outline-1" name="department">
                                    <option disabled={true}>Select a Department</option>
                                    <option>Medicine</option>
                                    <option>Skin</option>
                                    <option>Eye</option>
                                    <option>Dental</option>
                                    <option>Dialysis</option>
                                    <option>Neuro Medicine</option>
                                </select>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Room No.</legend>
                                <select defaultValue="Select a Room" className="select w-full outline-1" name="room">
                                    <option disabled={true}>Select a Room</option>
                                    <option>101-M (50)</option>
                                    <option>201-S (50)</option>
                                    <option>202-E (50)</option>
                                    <option>203-D (50)</option>
                                    <option>301-D (50)</option>
                                    <option>401-N (50)</option>
                                </select>
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                            {/* Patient Case and Gender--------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Case</legend>
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Case here" name="case" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Gender</legend>
                                <select defaultValue="Select a Gender" className="select w-full outline-1" name="gender">
                                    <option disabled={true}>Select a Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </fieldset>
                            {/* Patient Case and Gender--------------------------------------------------------------- */}

                            <button className="btn bg-[#275596] text-white font-normal col-span-2">Generate Ticket</button>
                        </form>
                    </div>
                    {/* Ticket Print */}
                    <div className="col-span-1 border-l-2 p-5">
                        <h1 className="text-lg font-semibold">Download or Print Ticket</h1>
                        {
                            ticket.length > 0 ? <Ticket ticket={ticket}></Ticket> : <span><Lottie animationData={DataLoadingLottie}></Lottie></span>
                        }
                        <div>
                            <button type="submit" className={`btn bg-[#275596] mt-2 text-white w-full ${ticket.length > 0 ? 'block' : 'hidden'}`}>Print</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;