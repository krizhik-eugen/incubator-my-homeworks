import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from './HW11.module.css'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {

    const [values, setValues] = React.useState<number[]>([20, 50]);
    const [dis, setDis] = React.useState<boolean>(false)
    const setValue1 = (val1: number) => {
        setValues([val1, values[1]])
    }

    return (
        <div>
            <hr/>
            Homework 11:
            <div className={s.commonContainer}>
                <div className={s.rangeContainer}>
                    <span className={s.valueStatus}>{values[0]}</span>
                    <SuperRange
                        value={values[0]}
                        onChange={(e) => {
                            if (+e.currentTarget.value < values[1]) {
                                setDis(false)
                                setValue1(+e.currentTarget.value)
                            }
                        }}
                        disabled={dis}
                    />
                </div>
                <div className={s.rangeContainer}>
                    <span className={s.valueStatus}>{values[0]}</span>
                    <div style={{width: '300px'}}>
                        <SuperDoubleRange
                            min={values[0]}
                            max={values[1]}
                            onChangeRange={setValues}
                            values={values}
                            disabled={values[0] >= values[1]}/>
                    </div>
                    <span className={s.valueStatus}>{values[1]}</span>
                </div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
