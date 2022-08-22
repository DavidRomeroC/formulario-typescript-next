import { SetStateAction } from "react";

export interface Inputs {
    reference: string;
    name: string;
    last_name: string;
    phone: string;
}

export interface Props {
    setInput: React.Dispatch<SetStateAction<Inputs>>;
    input: Inputs;
    reference?: string;
    name?: string;
    last_name?: string;
    phone?: string;
}