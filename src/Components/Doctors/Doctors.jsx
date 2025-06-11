import DoctorsData from '../../../public/Doctors.json'
const Doctors = () => {
    const { Medicine, Dental, Dialysis, Eye, NeuroMedicine, Skin } = DoctorsData.departments;
    return (
        <div className="mx-auto doctors p-5">
            <h1 className="text-center text-3xl font-semibold">Our Doctors</h1>
            <p className="text-center">Our team is made up of caring professionals who deliver high-quality services.</p>
            <section>
                {/* Medicine Department */}
                <h1 className="lg:text-xl text-lg font-semibold">Medicine Department</h1>
                <p className="w-[3%] border-b-2 border-blue-800"></p>
                <div className='my-18 grid grid-cols-3 gap-5'>
                    {
                        Medicine.map((doctor, index) => <div className='shadow-md p-2 bg-white relative h-48 border-2 border-[#275596] rounded-xl' key={index}>
                            <div className='absolute -top-14 left-[35%]'>
                                <img src={doctor.profile_picture} alt="" className='w-28 h-28 rounded-full border-4 border-[#275596]' />
                            </div>
                            <div className='text-center mt-18'>
                                <p><span className='font-semibold'>Name:</span> {doctor.name}</p>
                                <p><span className='font-semibold'>Degree:</span> {doctor.degree}</p>
                                <p><span className='font-semibold'>Chamber:</span> {doctor.chamber}</p>
                            </div>
                        </div>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Doctors;