import {Errors, Inputs, ValidValues} from "../interfaces"

export const validation = (input: Inputs) => {

    const errors: Errors = {
        reference: "",
        name: "",
        last_name: "",
        phone: "",
    }

    const values: ValidValues = {
        errors,
        isValidated: true,
    }

    const {reference, name, last_name, phone} = input;

    if (reference.length < 3) {
        errors.reference = "ingrese una referencia mayor a 3 caracteres";
    }

    if (name.length < 3) {
        errors.name = "ingrese un nombre mayor a 3 caracteres";
    }

    if (last_name.length < 3) {
        errors.last_name = "ingrese un apellido mayor a 3 caracteres";
    }

    if (phone.length < 10 || phone.length > 10 ) {
        errors.phone = "El número telefónico debe contener 10 números";
    } 

    if (!errors.reference && !errors.name && !errors.last_name && !errors.phone) {
        values.isValidated = false;
    }

    return values;
}