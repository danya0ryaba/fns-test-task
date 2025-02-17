import { array, date, number, object, string } from "yup";

export const userSchema = object({
    post: string(),
    name: string().required('Укажите наименование'),
    department: string().required('Укажите отдел'),

    date_open: date().required('Выберите дату открытия'),
    date_close: date().required('Выберите дату закрытия'),
    sex: string().required('Выберите пол'),
    education: string().required('Укажите образование'),

    salary: array(),
    from: number(),
    to: number(),
    region: string().required('Укажите регион'),
    address: string().required('Введите полный адрес. Например, Походный проезд, 3с1'),
    metro: string(),
    experience: string().required('Укажите опыт'),
    schedule: string().required('Укажите график работы'),
    type: string().required('Выберите тип занятости'),

    responsibilities: string(),
    skills: string(),
    advantages: string(),
});