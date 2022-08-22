export interface Errors {
    reference: string;
    name: string;
    last_name: string;
    phone: string;
}

export interface ValidValues {
    errors: Errors;
    isValidated: boolean;
}