import React from 'react'
import StatsCard from './StatsCard'
import { calculateAverageOfTimes } from '../utils'

const AverageSleepDuration = ({ data }) => {
    const durations = []
    let formattedAverage

    if (!data.length) {
        durations.push('0:0')

        formattedAverage = 0 + 'h ' + 0 + 'm'
    } else {
        data.forEach(item => durations.push(item.duration))

        const average = calculateAverageOfTimes(durations)
        const splittedAverage = average.split(':')

        const hours = splittedAverage[0].startsWith('0') ? splittedAverage[0][1] : splittedAverage[0]
        const minutes = splittedAverage[1].startsWith('0') ? splittedAverage[1][1] : splittedAverage[1]

        formattedAverage = hours + 'h ' + minutes + 'm'
    }

    return <StatsCard title="Average Sleep Duration" value={formattedAverage} />
}

export default AverageSleepDuration