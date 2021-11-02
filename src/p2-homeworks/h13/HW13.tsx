import React from 'react';
import s from './HW13.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme} from './bll/themeReducer';
import Request from './Request';


function HW13() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes)
    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeTheme(option))
    }

    return (
        <div>
            <hr/>
            <span>
                homeworks 13
            </span>
            <Request/>
            <hr/>
        </div>
    );
}

export default HW13;
