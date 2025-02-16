import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import './CustomDateInput.css'; // Подключите свой CSS файл для стилей
import style from './InputDate.module.scss'

interface CustomDateInputProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

export const InputDate: React.FC<CustomDateInputProps> = ({ selectedDate, onDateChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="custom-date-input">
            <input
                type="text"
                value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                onClick={handleToggle}
                readOnly
                placeholder="Выберите дату"
            />
            {isOpen && (
                <div className="calendar-container">
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            onDateChange(date);
                            handleClose();
                        }}
                        onClickOutside={handleClose}
                        inline
                    />
                </div>
            )}
        </div>
    );
};

// const App: React.FC = () => {
//     const [date, setDate] = useState<Date | null>(null);

//     return (
//         <div>
//             <h1>Кастомный инпут с календарем</h1>
//             <CustomDateInput selectedDate={date} onDateChange={setDate} />
//             <p>Выбранная дата: {date?.toLocaleDateString()}</p>
//         </div>
//     );
// };

// export default App;
