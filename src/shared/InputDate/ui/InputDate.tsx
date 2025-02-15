import React, { useState } from 'react';

export const InputDate: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const renderDays = () => {
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        const days = [];
        const totalDays = daysInMonth(month, year);
        const firstDay = firstDayOfMonth(month, year);

        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let i = 1; i <= totalDays; i++) {
            days.push(
                <div key={i} className="day" onClick={() => console.log(`Выбрана дата: ${i}/${month + 1}/${year}`)}>
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                    Предыдущий месяц
                </button>
                <span>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                <button onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                    Следующий месяц
                </button>
            </div>
            <div className="days-grid">{renderDays()}</div>
        </div>
    );
};