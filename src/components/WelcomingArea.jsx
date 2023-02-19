import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import moment from 'moment'

const WelcomingArea = () => {
    const auth = useSelector(state => state.auth)
    const [currentTime, setCurrentTime] = useState(moment().format('MMMM Do YYYY, HH:mm:ss '))

    setInterval(() => {
        setCurrentTime(moment().format('MMMM Do YYYY, HH:mm:ss '))
    }, 1000);

    return (
        <Container>
            <h2>Hello <span>{auth.name}</span> 👋</h2>
            <p>Welcome to SleepTracker!</p>
            <span>{currentTime}</span>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: white;   
        line-height: normal;

        span {
            font-weight: 700;
        }
    }

    p {
        font-size: 1.37500rem;
        color: #9595C5;
        line-height: normal;
    }

    &>span {
        font-size: 1rem;
        font-weight: 300;
        color: #9595C5;
        line-height: normal;

    }

`

export default WelcomingArea