import {FC, useState} from "react"
import { Props } from "../../interfaces"

export const InputPhone: FC<Props> = ({setInput, input, phone}) => {

    const [error, setError] = useState(false)
    
    const handleBlur = () => {
        phone ? setError(true) : setError(false)
    }

    return (
        <div>
            <input 
            name="phone" 
            placeholder="Número" 
            type="number" 
            value={input.phone} 
            onChange={(e) => setInput ({...input, [e.target.name]: e.target.value})} 
            onBlur={handleBlur}
            />
            {(error) ? <p>{phone}</p> : null}
        </div>
    )
}
