
import { FC, useState } from "react"
import { Props } from "../../interfaces"

export const InputName: FC<Props> = ({setInput, input, name}) => {

    const [error, setError] = useState(false)
    
    const handleBlur = () => {
        name ? setError(true) : setError(false)
    }

    return (
        <div>
            <input 
            name="name" 
            placeholder="Nombre"
            type="text"
            value={input.name} 
            onChange={(e) => setInput ({...input, [e.target.name]: e.target.value})}
            onBlur={handleBlur}
            />
            {(error) ? <p>{name}</p> : null}
        </div>
    )
}
