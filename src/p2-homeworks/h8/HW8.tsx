import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

export type InitialStateType = {
    people: Array<UserType>
    sorted: 'unsorted' | 'up' | 'down' | 18
}

const initialPeople: InitialStateType = {
    people: [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55}
    ],
    sorted: 'unsorted'
}

function HW8() {
    const [people, setPeople] = useState<InitialStateType>(initialPeople)
    const finalPeople = people.people.map((p: UserType) => (
        <div className={style.person} key={p._id}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            Homework 8:
            <div className={style.personsWrapper}>
                <div>{finalPeople}</div>
                <div className={style.buttonsWrapper}>
                    <div><SuperButton className={people.sorted === 'up' ? style.pressedButton : ''} onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton className={people.sorted === 'down' ? style.pressedButton : ''} onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton className={people.sorted === 18 ? style.pressedButton : ''} onClick={check18}>check 18</SuperButton></div>
                </div>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
