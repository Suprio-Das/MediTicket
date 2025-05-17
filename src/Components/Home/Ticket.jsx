import MediTicketLogo from '../../assets/MediTicketFavicon.png'

const Ticket = () => {
    return (
        <div className='border-1 p-2 rounded-xs mt-5'>
            {/* Header Section */}
            <div className='flex justify-between items-center'>
                <div>
                    <img src={MediTicketLogo} alt="MediTicketLogo" className='w-8' />
                </div>
                <div className='text-center'>
                    <h1>MediTicket Govt. Medical</h1>
                    <p className='text-xs'>Chattogram, Bangladesh</p>
                    <p className='text-xs'>Phone: 01610-2433** Fax: 031-610022</p>
                </div>
                <div>
                    <img src={MediTicketLogo} alt="MediTicketLogo" className='w-8' />
                </div>
            </div>
            <p className='text-xs text-center'>Email: mediticket@gmail.com Website: mediticket.gov.bd</p>
        </div>
    );
};

export default Ticket;