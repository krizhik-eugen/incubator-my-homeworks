import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    disabled: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, disabled} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.correct;
    return (
        <div className={s.input_wrapper}>
            <div>
                <input placeholder={'Enter your name'} value={name} onChange={setNameCallback} className={inputClass}/>
                <button disabled={disabled} onClick={addUser}>add</button>
                <span className={s.totalUsers}>{totalUsers}</span>
            </div>
            <div className={s.error_message}>
                <span>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
