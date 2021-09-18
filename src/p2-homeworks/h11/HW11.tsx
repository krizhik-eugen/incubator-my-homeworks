import Slider from '@material-ui/core/Slider'
import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

function HW11() {

    const [value, setValue] = React.useState<number[]>([20, 37]);

    const setValue1 = (val1: number) => {
        setValue([val1, value[1]])
    }

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number[]);

    };

    const muiTheme = createMuiTheme({
            overrides: {
                MuiSlider: {
                    thumb: {
                        boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
                        border: '1px solid #000000',
                        height: '36px',
                        width: '16px',
                        borderRadius: '3px',
                        backgroundColor: '#05a9ca',
                        cursor: 'pointer',
                        appearance: 'none',
                        marginTop: '-14px',
                    },
                    track: {
                        appearance: 'none',
                        margin: '18px 0',
                        width: '300px',
                        height: '0',
                        background: '#367ebd',
                        /*width: '100%',
                        height: '8.4px',
                        cursor: 'pointer',
                        boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
                        background: '#3071a9',
                        borderRadius: '1.3px',
                        border: '0.2px solid #010101',*/
                    }
                    ,
                    rail: {
                        width: '100%',
                        height: '7px',
                        cursor: 'pointer',
                        boxShadow: '1px 1px 1px #000000, 0px 0px 1px #0d0d0d',
                        backgroundColor: '#3071a9',
                        borderRadius: '1.3px',
                        border: '0.2px solid #010101',
                        opacity: '100%',
                    }
                }
            }
        })
    ;

    // const [dis, setDis] = React.useState<boolean>(false)


    return (
        <div>
            <hr/>
            Homework 11:
            <div style={{display: "flex", flexDirection: 'column'}}>
                <div style={{display: 'inline-flex', margin: '10px 0'}}>
                    <span style={{display: 'block', width: '30px', margin: '5px 10px'}}>{value[0]}</span>
                    <SuperRange
                        onChangeRange={setValue1}
                        // onChange={(e) => {
                        //     if (+e.currentTarget.value < value[1]) {
                        //         setDis(false)
                        //         setValue1(+e.currentTarget.value)
                        //     }
                        // }}
                        value={value[0]}
                        // disabled={dis}
                    />
                </div>
                <div style={{display: 'inline-flex'}}>
                    <span style={{display: 'block', width: '30px', margin: '5px 10px'}}>{value[0]}</span>

                    <div style={{width: '300px'}}>
                        <ThemeProvider theme={muiTheme}>
                            <Slider
                                onChange={handleChange}
                                value={value}
                                // disabled={dis}
                            />
                        </ThemeProvider>
                    </div>
                    <span style={{display: 'block', width: '30px', margin: '0 10px'}}>{value[1]}</span>
                </div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
