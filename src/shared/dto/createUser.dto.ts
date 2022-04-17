export class CreateUserDTO {
    name: string;
    email: string;
    password: string;
    cpf: string;
    gender?: string;
    cellPhone?:number;
    crmCrp?: string;
    specialty?: string;
    street?: string;
    number?: number;
    neighborhood?: string;
    city?: string;
    satate?:string;
    value?: number;
    phone?:number;
    description?: string;
    courses?: string;
    healthPlan?: string;
    bathroomSpecific?: boolean;
    linkedin?: string;
    attendance?:string;
}