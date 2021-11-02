/*import Slider from '@material-ui/core/Slider';
import withStyles from '@material-ui/core/styles/withStyles';*/
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import SuperRange from '../c7-SuperRange/SuperRange'
import s from "../c7-SuperRange/SuperRange.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = {
    onChangeRange: (values: number[]) => void
    values: number[]
    min: number
    max: number
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
        ...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const [dis, setDis] = useState<boolean>(false)

    const onChangeRangeMin = (e: number) => onChangeRange([e, values[1]]);
    const onChangeRangeMax = (e: number) => onChangeRange([values[0], e]);

   /* const CustomSlider = withStyles({
        root: {
            color: "#6f8eff",
            height: 3,
            padding: "13px 0",
        },
        track: {
            height: 4,
            borderRadius: 2,
        },
        thumb: {
            height: 20,
            width: 20,
            backgroundColor: "#fff",
            border: "1px solid currentColor",
            marginTop: -9,
            marginLeft: -11,
            boxShadow: "#ebebeb 0 2px 2px",
            "&:focus, &:hover, &$active": {
                boxShadow: "#ccc 0 2px 3px 1px",
            },
            color: "#fff",
        },
    })(Slider)*/


    return (
        <div className={s.rangeWrapper}>
            <div >
                <SuperRange
                    /*style={{position: 'absolute', zIndex: 2}}*/
                    value={values[0]}
                    disabled={dis}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (+e.currentTarget.value < values[1]) {
                            setDis(false);
                            onChangeRangeMin(+e.currentTarget.value)
                        }
                    }}
                />
            </div>

            <div >
                <SuperRange
                   /* style={{position: "absolute", zIndex: 2}}*/
                    className={s.range}
                    value={values[1]}
                    disabled={dis}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (+e.currentTarget.value > values[0]) {
                            setDis(false);
                            onChangeRangeMax(+e.currentTarget.value)
                        }
                    }}/>
            </div>
        </div>
    )
}

export default SuperDoubleRange
