import Lottie from "lottie-react";
import VerifiedBadge from '../../assets/VerifiedBadge.json';
import NotValid from '../../assets/NotValid.json';
import { useLoaderData, useParams } from "react-router";

const TicketVerification = () => {
    const data = useLoaderData();
    const params = useParams();
    const visitedRegNo = parseInt(params.regNo);
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
            <div>
                <div className="flex items-center justify-center">
                    {
                        (data.regNo === visitedRegNo) ? <Lottie animationData={VerifiedBadge} className="w-21"></Lottie> : <Lottie animationData={NotValid} className="w-21"></Lottie>
                    }
                </div>
                <div>
                    <h1>
                        {
                            (data.regNo === visitedRegNo) ? 'This Ticket is the official product of MediTicket.' : 'This Ticket seems an unofficial product. Please contact helpline.'
                        }
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TicketVerification;