import React from 'react'
import StatsCard from './StatsCard'
import { calculateAverageOfTimes } from '../utils'

const AverageSleepWakeUpTimes = ({ data }) => {
    const sleepTimes = []
    const wakeUpTimes = []
    let value

    if (!data.length) {
        sleepTimes.push('0:0')
        wakeUpTimes.push('0:0')

        value = 'S: 0 W: 0'
    } else {
        data.forEach(item => {
            sleepTimes.push(item.sleepTime)
            wakeUpTimes.push(item.wakeupTime)
        })

        const averageSleepTime = calculateAverageOfTimes(sleepTimes)
        const averageWakeUpTime = calculateAverageOfTimes(wakeUpTimes)

        value = `S: ${averageSleepTime} W: ${averageWakeUpTime}`
    }

    return <StatsCard title="Average Sleep - Wake Up Times" value={value} />
}

export default AverageSleepWakeUpTimes