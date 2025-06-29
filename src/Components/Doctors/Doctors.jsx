import Marquee from 'react-fast-marquee';
import DoctorsData from '../../../public/Doctors.json'
const Doctors = () => {
    const { Medicine, Dental, Dialysis, Eye, NeuroMedicine, Skin } = DoctorsData.departments;
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
            <div className="mx-auto doctors p-5">
                <h1 className="text-center text-3xl font-semibold">Our Doctors</h1>
                <p className="text-center">Our team is made up of caring professionals who deliver high-quality services.</p>
                {/* Medicine Department */}
                <section className='mt-5'>
                    <h1 className="lg:text-xl text-lg font-semibold">Medicine Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            Medicine.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
                {/* Skin Department */}
                <section>
                    <h1 className="lg:text-xl text-lg font-semibold">Skin Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            Skin.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
                {/* Eye Department */}
                <section>
                    <h1 className="lg:text-xl text-lg font-semibold">Eye Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            Eye.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
                {/* Dental Department */}
                <section>
                    <h1 className="lg:text-xl text-lg font-semibold">Dental Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            Dental.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
                {/* Dialysis Department */}
                <section>
                    <h1 className="lg:text-xl text-lg font-semibold">Dialysis Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            Dialysis.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
                {/* Neuro Medicine Department */}
                <section>
                    <h1 className="lg:text-xl text-lg font-semibold">Neuro Medicine Department</h1>
                    <p className="w-[3%] border-b-2 border-blue-800"></p>
                    <div className='my-18 grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-21'>
                        {
                            NeuroMedicine.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                                <div className='absolute -top-14 left-[35%]'>
                                    <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                                </div>
                                <div className='text-center mt-18 lg:text-base text-sm'>
                                    <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                    <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                    <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Doctors;