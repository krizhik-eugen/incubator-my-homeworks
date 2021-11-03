import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import SuperRange from '../c7-SuperRange/SuperRange'
import s from '../c8-SuperDoubleRange/SuperDoubleRange.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = {
    onChangeRange: (values: number[]) => void
    values: number[]
    min: number
    max: number
    disabled: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<DefaultInputPropsType & SuperDoubleRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChangeRange,
        className,
        values,
        min,
        max,
        disabled,
        ...restProps
        // min, max, step, disable, ...
    }
) => {

    // const [dis, setDis] = useState<boolean>(false)

    const onChangeRangeMin = (e: number) => onChangeRange([e, values[1]]);
    const onChangeRangeMax = (e: number) => onChangeRange([values[0], e]);

    return (
        <div className={s.doubleRangeWrapper}>
            <div>
                <SuperRange
                    value={values[0]}
                    disabled={disabled}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (+e.currentTarget.value < values[1]) {
                            // setDis(false);
                            onChangeRangeMin(+e.currentTarget.value)
                        }
                    }}
                />
            </div>
            <div className={s.fakeTrack}></div>
            <div>
                <SuperRange
                    className={s.range}
                    value={values[1]}
                    disabled={disabled}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (+e.currentTarget.value > values[0]) {
                            // setDis(false);
                            onChangeRangeMax(+e.currentTarget.value)
                        }
                    }}/>
            </div>
        </div>
    )
}

export default SuperDoubleRange
