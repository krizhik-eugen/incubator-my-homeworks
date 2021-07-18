import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}
let disabled: boolean = false
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        disabled = false
        let newName = e.currentTarget.value.trim()
        if (newName.length === 0) {
            setError('Name is required !!!');
            disabled = true
        }
        setName(newName)
    }

    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name.length > 0) {
            addUser()
            setName('')
        }
    }

    const addUser = () => {
        setError('')
        if (name.length === 0) {
            setError('Name is required !!!')
            disabled = true
        } else {
            disabled = false
            addUserCallback(name);
            alert(`Hello ${name}!`)
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onEnterPress={onEnterPress}
            error={error}
            totalUsers={totalUsers}
            disabled={disabled}
        />
    )
}

export default GreetingContainer
