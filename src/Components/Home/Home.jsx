import Marquee from "react-fast-marquee";
import TicketLottie from '../../assets/Ticket-Lottie.json'
import DataLoadingLottie from '../../assets/DataLoading.json'
import Lottie from "lottie-react";
import Ticket from "./Ticket";
import moment from "moment";
import { useEffect, useState } from "react";

const Home = () => {
    const [ticket, setTicket] = useState(null);
    const [rooms, setRooms] = useState(null);
    const [newTicket, setNewTicket] = useState(null);

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

    useEffect(() => {
        // fetching current rooms capacity
        fetch('https://mediticketserver.onrender.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data[0]))
    }, [ticket])

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

        // Room Capacity Update
        if (room[room.length - 1] === 'M') {
            const roomCapacityString = rooms.Medicine;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: currentCapacity,
                Skin: rooms.Skin,
                Eye: rooms.Eye,
                Dental: rooms.Dental,
                Dialysis: rooms.Dialysis,
                NeuroMedicine: rooms.NeuroMedicine
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        else if (room[room.length - 1] === 'S') {
            const roomCapacityString = rooms.Skin;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: rooms.Medicine,
                Skin: currentCapacity,
                Eye: rooms.Eye,
                Dental: rooms.Dental,
                Dialysis: rooms.Dialysis,
                NeuroMedicine: rooms.NeuroMedicine
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        else if (room[room.length - 1] === 'E') {
            const roomCapacityString = rooms.Eye;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: rooms.Medicine,
                Skin: rooms.Skin,
                Eye: currentCapacity,
                Dental: rooms.Dental,
                Dialysis: rooms.Dialysis,
                NeuroMedicine: rooms.NeuroMedicine
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        else if (room[room.length - 1] === 'D') {
            const roomCapacityString = rooms.Dental;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: rooms.Medicine,
                Skin: rooms.Skin,
                Eye: rooms.Eye,
                Dental: currentCapacity,
                Dialysis: rooms.Dialysis,
                NeuroMedicine: rooms.NeuroMedicine
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        else if (room[room.length - 1] === 'Di') {
            const roomCapacityString = rooms.Dialysis;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: rooms.Medicine,
                Skin: rooms.Skin,
                Eye: rooms.Eye,
                Dental: rooms.Dental,
                Dialysis: currentCapacity,
                NeuroMedicine: rooms.NeuroMedicine
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        else if (room[room.length - 1] === 'N') {
            const roomCapacityString = rooms.NeuroMedicine;
            const roomCapacity = parseInt(roomCapacityString);
            const currentCapacity = roomCapacity - 1;
            const updatedRoomCapcity = {
                Medicine: rooms.Medicine,
                Skin: rooms.Skin,
                Eye: rooms.Eye,
                Dental: rooms.Dental,
                Dialysis: rooms.Dialysis,
                NeuroMedicine: currentCapacity
            }
            fetch('https://mediticketserver.onrender.com/rooms', {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedRoomCapcity)
            })
        }
        const ticketInfo = { name, age, department, room, patientCase, gender, price, fullDate, ticketTime };

        setTicket(ticketInfo);

        // Sending Ticket data to server
        fetch('https://mediticketserver.onrender.com/tickets', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(ticketInfo)
        })
            .then(res => res.json())
            .then(data => setNewTicket(data))

        // Clearing the Form After Submission
        form.reset();
    }
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
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Name here" name="name" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Age</legend>
                                <input type="number" className="input w-full outline-1" placeholder="Type Patient Age here" name="age" required />
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                            {/* Department and Room No.----------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Department</legend>
                                <select defaultValue="Select a Department" className="select w-full outline-1" name="department" required>
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
                                <select defaultValue="Select a Room" className="select w-full outline-1" name="room" required>
                                    <option disabled={true}>Select a Room</option>
                                    <option disabled={rooms?.Medicine <= 0}>101-M</option>
                                    <option disabled={rooms?.Skin <= 0}>201-S</option>
                                    <option disabled={rooms?.Eye <= 0}>202-E</option>
                                    <option disabled={rooms?.Dental <= 0}>203-D</option>
                                    <option disabled={rooms?.Dialysis <= 0}>301-Di</option>
                                    <option disabled={rooms?.NeuroMedicine <= 0}>401-N</option>
                                </select>
                            </fieldset>
                            {/* Patient Name and Age------------------------------------------------------------------ */}

                            {/* Patient Case and Gender--------------------------------------------------------------- */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Enter Patient Case</legend>
                                <input type="text" className="input w-full outline-1" placeholder="Type Patient Case here" name="case" required />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Select Gender</legend>
                                <select defaultValue="Select a Gender" className="select w-full outline-1" name="gender" required>
                                    <option disabled={true}>Select a Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </fieldset>
                            {/* Patient Case and Gender--------------------------------------------------------------- */}

                            <button
                                disabled={
                                    rooms?.Medicine <= 0 &&
                                    rooms?.Skin <= 0 &&
                                    rooms?.Eye <= 0 &&
                                    rooms?.Dental <= 0 &&
                                    rooms?.Dialysis <= 0 &&
                                    rooms?.NeuroMedicine <= 0
                                }
                                className="btn bg-[#275596] text-white font-normal col-span-2"
                            >
                                Generate Ticket
                            </button>
                        </form>
                    </div>
                    {/* Ticket Print */}
                    <div className="col-span-1 border-l-2 p-5">
                        <h1 className="text-lg font-semibold">Download or Print Ticket</h1>
                        {
                            newTicket ? <Ticket newTicket={newTicket}></Ticket> : <span><Lottie animationData={DataLoadingLottie}></Lottie></span>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;