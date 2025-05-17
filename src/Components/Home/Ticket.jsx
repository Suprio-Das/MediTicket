import MediTicketLogo from '../../assets/MediTicketFavicon.png'

const Ticket = () => {
    return (
        <div>
            {/* Header Section */}
            <div>
                <img src={MediTicketLogo} alt="MediTicketLogo" className='w-8' />
                <div>
                    <h1>MediTicket Govt. Medical</h1>
                    <p className='text-xs'>Chattogram, Bangladesh</p>
                    <p className='text-xs'>Phone: 01610-2433** Fax: 031-610022</p>
                    <p className='text-xs'>Email: mediticket@gmail.com Website: mediticket.gov.bd</p>
                </div>
            </div>
        </div>
    );
};

export default Ticket;