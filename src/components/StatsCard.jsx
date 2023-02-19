import React from 'react'
import styled from 'styled-components'

const StatsCard = ({ title, value }) => {
    return (
        <Card>
            <Title>
                <h4>{title}</h4>
            </Title>
            <Value>
                <h3>{value}</h3>
            </Value>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #37395C;
    width: 11rem;
    min-height: 11.5rem;
    border-radius: 24px;
    padding: 1rem;

    h3, h4 {
        color: white;
    }

`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;

    h4 {
        font-size: .9rem;
        line-height: 1.4;
    }

`

const Value = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;

    h3 {
        font-size: 1.4rem;
        font-weight: 700;
    }
`

export default StatsCard