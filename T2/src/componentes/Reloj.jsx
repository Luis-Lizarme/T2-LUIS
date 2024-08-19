import React, { useState, useEffect } from 'react';

const TiempoActual = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
      setCurrentDate(now.toLocaleDateString());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-and-date-container">
      <h2>Conoce lugares sorprendentes</h2>
      <div className="current-time">{currentTime}</div>
      <div className="current-date">{currentDate}</div>
    </div>
  );
};

export default TiempoActual;
