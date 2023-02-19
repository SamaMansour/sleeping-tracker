import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AverageSleepDuration from './AverageSleepDuration'
import AverageSleepWakeUpTimes from './AverageSleepWakeUpTimes'
import LessThanSixHours from './LessThanSixHours'
import MoreThanEightHours from './MoreThanEightHours'

const StatsCards = () => {
    const entriesData = useSelector(state => state.entry.entries)

    return (
        <Container>
            <AverageSleepDuration data={entriesData} />
            <AverageSleepWakeUpTimes data={entriesData} />
            <LessThanSixHours data={entriesData} />
            <MoreThanEightHours data={entriesData} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
`

export default StatsCards