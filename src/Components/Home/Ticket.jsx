import MediTicketLogo from '../../assets/MediTicketFavicon.png'
import TicketQR from '../../assets/qrcode.png'

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
            {/* Table */}
            <h1 className='text-center my-2 underline text-sm'>Patient Ticket</h1>
            <table className='table text-xs'>
                <tr>
                    <td>Reg No.</td>
                    <td>123444444444</td>
                    <td>Date</td>
                    <td>2025-05.17</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>Suprio Das</td>
                    <td>Age</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>Department</td>
                    <td>Eye</td>
                    <td>Room No.</td>
                    <td>210</td>
                </tr>
                <tr>
                    <td>Case</td>
                    <td>Ezyness</td>
                    <td>Gender</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td colSpan="3">500.00</td>
                </tr>
            </table>

            {/* QR Code Section */}
            <div>
                <img src={TicketQR} alt="TicketQR" className='w-16 h-16 mx-auto' />
            </div>
        </div>
    );
};

export default Ticket;