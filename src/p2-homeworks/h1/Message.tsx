import React from 'react';
import styles from './Message.module.css';

type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div className={styles.message}>
            <img src={props.avatar} alt="avatar"/>
            <div className={styles.corner}/>
            <div className={styles.chat}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.message}</div>
                <div className={styles.time}>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
