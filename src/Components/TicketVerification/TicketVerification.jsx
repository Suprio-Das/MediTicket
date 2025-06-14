import Lottie from "lottie-react";
import VerifiedBadge from '../../assets/VerifiedBadge.json';
import { useLoaderData } from "react-router";

const TicketVerification = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
            <div>
                <div className="flex items-center justify-center">
                    <Lottie animationData={VerifiedBadge} className="w-21"></Lottie>
                </div>
                <div>
                    <h1>This Ticket is the official product of MediTicket.</h1>
                </div>
            </div>
        </div>
    );
};

export default TicketVerification;