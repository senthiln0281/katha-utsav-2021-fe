import React, {useState, useEffect} from "react";

const Timer = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date('08/31/2021') - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        
        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <React.Fragment>
            <div className='timer'>
                <h3>Registration ends in</h3>
                <div className='timer__time-left'>
                    <span>{timeLeft.days}</span>:<span>{timeLeft.hours}</span>:<span>{timeLeft.minutes}</span>:<span>{timeLeft.seconds}</span>
                    {/*<span>{timeLeft.days} days</span>:<span>{timeLeft.hours} hours</span>:<span>{timeLeft.minutes} minutes</span>:<span>{timeLeft.seconds} seconds</span>*/}

                </div>
            </div>
        </React.Fragment>
    );
}

export default Timer;