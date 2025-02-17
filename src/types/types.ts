export type CardRequestType = {
    id: string,
    post: string,
    name: string,
    department: string,
    date_open: string,
    date_close: string,
    sex: string,
    education: string,
    salary: string,
    from: string,
    to: string,
    region: string,
    address: string,
    metro: string,
    experience: string,
    schedule: string,
    type: string,
    responsibilities: string,
    skills: string,
    advantages: string
}

export type CardRequestTypeWithoutId = Omit<CardRequestType, 'id'>