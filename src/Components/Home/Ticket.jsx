import html2pdf from 'html2pdf.js';
import MediTicketLogo from '../../assets/MediTicketFavicon.png'
import QRCodeStyling from 'qr-code-styling';
import { useEffect } from 'react';

const Ticket = ({ newTicket }) => {
    const { regNo, name, age, department, room, patientCase, gender, price, fullDate, ticketTime } = newTicket;
    // Export ticket as PDF
    const exportTicket = () => {
        var element = document.getElementById('ticket');
        var opt = {
            margin: 1,
            filename: `${regNo}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        // New Promise-based usage:
        html2pdf().from(element).set(opt).save();
    }
    // Generating QR Code
    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 64,
            height: 64,
            type: "svg",
            data: "https://www.facebook.com/",
            dotsOptions: {
                color: "#4267b2",
                type: "rounded"
            },
            backgroundOptions: {
                color: "#e9ebee",
            }
        });

        const qrContainer = document.getElementById("qr_code");
        if (qrContainer) {
            qrContainer.innerHTML = "";
            qrCode.append(qrContainer);
        }
    }, [newTicket]);
    return (
        <div>
            <div className='border-1 p-3 rounded-xs mt-5' id='ticket'>
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
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Reg No.</td>
                            <td>{regNo}</td>
                            <td>Date</td>
                            <td>{fullDate}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                            <td>Age</td>
                            <td>{age}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>{department}</td>
                            <td>Room No.</td>
                            <td>{room}</td>
                        </tr>
                        <tr>
                            <td>Case</td>
                            <td>{patientCase}</td>
                            <td>Gender</td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td colSpan="3">{price}</td>
                        </tr>
                    </tbody>
                </table>

                {/* QR Code Section */}
                <div id='qr_code' className='my-2 flex justify-center'>

                </div>

                {/* Footer */}
                <div>
                    <p className='text-xs text-center'>N:B: Kindly preserve this slip for future visits.</p>
                    <p className='text-xs text-center'>{ticketTime}</p>
                    <p className='text-xs text-center'>Developed and Maintained by Suprio Das</p>
                </div>
            </div>
            <div>
                <button onClick={exportTicket} className={`btn bg-[#275596] mt-2 text-white w-full ${newTicket ? 'block' : 'hidden'}`}>Print</button>
            </div>
        </div>
    );
};

export default Ticket;