import Lottie from "lottie-react";
import VerifiedBadge from '../../assets/VerifiedBadge.json';

const TicketVerification = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
            <div>
                <div>
                    <Lottie animationData={VerifiedBadge} className="w-21"></Lottie>
                </div>
            </div>
        </div>
    );
};

export default TicketVerification;