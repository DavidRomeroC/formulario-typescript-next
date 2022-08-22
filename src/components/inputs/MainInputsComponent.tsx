import { useState } from "react"
import { validation } from "../../helpers/inputsValidation"
import { Inputs } from "../../interfaces"
import { InputLastName } from "./InputLastName"
import { InputName } from "./InputName"
import { InputPhone } from "./InputPhone"
import { InputReference } from "./InputReference"

export const MainInputsComponent = () => {

    const [input, setInput] = useState<Inputs>({
        reference: "",
        name: "",
        last_name: "",
        phone: "",
    })

    const {errors, isValidated} = validation(input);

    const {reference, name, last_name, phone} = errors;

    const handleSubmit = () => {
        console.log("Datos enviados")
    }

    return (
        <div style={{
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <InputReference setInput={setInput} input={input} reference={reference} />
            <InputName setInput={setInput} input={input} name={name} />
            <InputLastName setInput={setInput} input={input} last_name={last_name} />
            <InputPhone setInput={setInput} input={input} phone={phone} />
            <button disabled={isValidated} onClick={handleSubmit} >Siguiente</button>
        </div>
    )
}
