import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours: number;
  minutes: number;
  seconds: number;
  amPm: string;
}

const Timer: React.FC<{ deadlineString: string; unit: 'hours' | 'days' }> = ({
  deadlineString,
  unit,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    amPm: '',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date(deadlineString);
      const now = new Date();

      const isSameDay = deadline.getDate() === now.getDate();

      if (isSameDay) {
        // Handle deadlines on the same day (ensure unit is hours)
        unit = 'hours';
        const difference = deadline.getTime() - now.getTime();
        if (difference <= 0) {
          return; // Expired deadline
        }

        const totalSeconds = Math.floor(difference / 1000);
        const hours = Math.floor(totalSeconds / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = Math.floor(totalSeconds % 60);
        const amPm = hours < 12 ? 'AM' : 'PM';
        setTimeLeft({ hours: hours % 12, minutes, seconds, amPm });
      } else {
        // Handle deadlines on different days (use provided unit)
        if (unit === 'hours') {
          const difference = deadline.getTime() - now.getTime();
          if (difference <= 0) {
            return; // Expired deadline
          }

          const totalSeconds = Math.floor(difference / 1000);
          const hours = Math.floor(totalSeconds / (60 * 60));
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
          const seconds = Math.floor(totalSeconds % 60);
          const amPm = hours < 12 ? 'AM' : 'PM';
          setTimeLeft({ hours: hours % 12, minutes, seconds, amPm });
        } else {
          console.error('Invalid unit provided. Accepted values: "hours" or "days"');
        }
      }
    };

    calculateTimeLeft();

    const intervalId = setInterval(calculateTimeLeft, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [deadlineString, unit]);

  const { days, hours, minutes, seconds, amPm } = timeLeft;

  const formattedTime = `${days ? days + 'd ' : ''}${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;

  return (
    <div className="p-1 bg-gray-800 rounded-xl w-36 text-center">
      {formattedTime}
    </div>
  );
};

export default Timer;
