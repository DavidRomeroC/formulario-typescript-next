import { FC, useState } from "react"
import { Props } from "../../interfaces"

export const InputLastName: FC<Props> = ({setInput, input, last_name}) => {

    const [error, setError] = useState(false)
    
    const handleBlur = () => {
        last_name ? setError(true) : setError(false)
    }

    return (
        <div>
            <input 
            name="last_name" 
            placeholder="Apellido"
            type="text"
            value={input.last_name} 
            onChange={(e) => setInput ({...input, [e.target.name]: e.target.value})}
            onBlur={handleBlur}
            />
            {(error) ? <p>{last_name}</p> : null}
        </div>
    )
}
