import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme} from './bll/themeReducer';


function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes)
    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeTheme(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <div>
                <SuperRadio options={themes} value={theme} onChangeOption={onChangeCallback}/>
            </div>
            <div>
                <SuperSelect options={themes} value={theme} onChangeOption={onChangeCallback}/>
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
