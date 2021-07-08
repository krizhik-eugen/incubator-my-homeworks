import React from 'react'
import s from './Affair.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affairWrapper}>
            <div className={s.name}>{props.affair.name} </div>
            <div className={s.priority}>{props.affair.priority} </div>

            <div>
                <button className={s.button} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
