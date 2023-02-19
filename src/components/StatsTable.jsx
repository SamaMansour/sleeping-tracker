import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StatsTable = () => {
    const entriesData = useSelector(state => state.entry.entries)

    const showContent = () => {
        return (
            entriesData.length ? entriesData.map(entry => (
                <tr key={entry._id}>
                    <td>{entry.date}</td>
                    <td>{entry.sleepTime}</td>
                    <td>{entry.wakeupTime}</td>
                    <td>{entry.duration.split(':')[0]}h {entry.duration.split(':')[1]}m</td>
                </tr>
            )) : (
                <tr>
                    <div style={{ marginLeft: '0.4rem' }}>
                        &nbsp; No data
                    </div>
                </tr>
            )
        )
    }

    return (
        <Container>
            <h2>Sleep Stats</h2>
            <Table>
                <thead align="left">
                    <th>Date</th>
                    <th>Time of Sleep</th>
                    <th>Wake-up Time</th>
                    <th>Sleep Duration</th>
                </thead>
                <tbody>
                    {showContent()}
                </tbody>
            </Table>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        margin-left: 1rem;
        color: white;
        font-size: 1.62500rem;
        font-weight: 700
    }
`

const Table = styled.table`
    width: 100%;
    border-collapse: separate; 
    border-spacing: 0 1rem;

    th {
        color: white;
        font-size: 1rem;
        font-weight: 400;
        
        &:first-child {
            padding: 0 1rem;
        }
    }

    tr {
        color: #9595C5;
        font-size: 1rem;

        &:hover {
            td {
                background-color: #363654ab;
            }
        }

        td {
            background-color: #363654;
            padding: 1.5rem 1rem;

            &:first-child {
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
            }
            &:last-child {
                border-top-right-radius: 24px;
                border-bottom-right-radius: 24px;
            }        
        }
    }
`

export default StatsTable