import { date, number, object, string } from "yup";

export const initialValues = {
    post: '',
    name: '',
    department: '',
    date_open: '',
    date_close: '',
    sex: '',
    education: '',
    salary: '',
    from: '',
    to: '',
    region: '',
    address: '',
    metro: '',
    experience: '',
    schedule: '',
    type: '',
    responsibilities: '',
    skills: '',
    advantages: '',
}

export const sex = ['Мужской', 'Женский']
export const education = ['Высшее', 'Среднее']
export const salary = ['На руки', 'До вычета налогов']
export const schedule = ['Полный день', 'Сменный 5/2', 'Сменный 2/2']
export const type = ['Полная занятость', 'Частичная занятость', 'Стажировка']

export const userSchema = object({
    post: string(),
    name: string().required('Укажите наименование'),
    department: string().required('Укажите отдел'),

    date_open: date().required('Выберите дату открытия'),
    date_close: date().required('Выберите дату закрытия'),
    sex: string().required('Выберите пол'),
    education: string().required('Укажите образование'),

    salary: string(),
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