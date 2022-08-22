import { FC, useState } from "react"
import { Props } from "../../interfaces"

export const InputReference: FC<Props> = ({setInput, input, reference}) => {

    const [error, setError] = useState(false)
    
    const handleBlur = () => {
        reference ? setError(true) : setError(false)
    }
    
    return (
        <div>
            <input 
            name="reference" 
            placeholder="Referencia"
            type="text"
            value={input.reference} 
            onChange={(e) => setInput ({...input, [e.target.name]: e.target.value})}
            onBlur={handleBlur}
            />
            {(error) ? <p>{reference}</p> : null}
        </div>
    )
}
