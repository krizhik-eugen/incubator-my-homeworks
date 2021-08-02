import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Mentor',
    message: "Hey, why don't you remember how to use CSS?",
    time: '12:15'
}

function HW1() {
    return (
        <div>
            <hr/>
            Homework 1:

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

        </div>
    )
}

export default HW1
