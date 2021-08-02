import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";
import s from './Header.module.css'


function Header() {
    const [hide, setHide] = useState<boolean>(false)
    return (
        <div className={s.navbarWrapper}>
            <div className={s.link} onClick={() => setHide(!hide)}>Menu</div>
            {hide ? <div className={s.navbar}>
                <div className={s.link}>
                    <NavLink activeClassName={s.active} to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink activeClassName={s.active} to={PATH.JUNIOR}>Junior</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink activeClassName={s.active} to={PATH.JUNIORPLUS}>Junior Plus</NavLink>
                </div>
            </div> : ''}
        </div>
    );
}

export default Header
