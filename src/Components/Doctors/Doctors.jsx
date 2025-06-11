import DoctorsData from '../../../public/Doctors.json'
const Doctors = () => {
    console.log(DoctorsData)
    return (
        <div className="mx-auto doctors p-5">
            <h1 className="text-center text-3xl font-semibold">Our Doctors</h1>
            <p className="text-center">Our team is made up of caring professionals who deliver high-quality services.</p>
            <section>
                {/* Medicine Department */}
                <h1 className="lg:text-xl text-lg font-semibold">Medicine Department</h1>
                <p className="w-[3%] border-b-2 border-blue-800"></p>
                <div>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Doctors;