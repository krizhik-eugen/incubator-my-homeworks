import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {InitialStateType} from "../../HW8";

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
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
})

test('sort name up', () => {
    const newState: InitialStateType = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    expect(newState.people[0].name).toBe('Александр')
    expect(newState.people[5].name).toBe('Кот')
})
test('sort name down', () => {
    const newState: InitialStateType = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState.people[0].name).toBe('Кот')
    expect(newState.people[5].name).toBe('Александр')


})
test('check age 18', () => {
    const newState: InitialStateType = homeWorkReducer(initialState, {type: 'check', payload: 18})
    const filteredState = newState.people.filter(p => (p.age < 18))
    expect(filteredState.length).toBe(0)

})
