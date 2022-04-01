export class CreateUserDTO {
    name: string;
    email: string;
    password: string;
    cpf: string;
    cellPhone:number;
    crmCrp?: string;
    specialty?: string;
    street?: string;
    number?: number;
    neighborhood?: string;
    city?: string;
    satate?:string;
    value?: number;
    phone?:number;
    gender?: string;
    description?: string;
    courses?: string;
    healthPlan?: string;
    bathroomSpecific?: boolean;
    linkedin?: string;
}