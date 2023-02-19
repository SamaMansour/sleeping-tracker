import React from 'react'
import StatsCard from './StatsCard'

const MoreThanEightHours = ({ data }) => {
    let count = 0

    data.forEach(item => {
        let durationHour = +(item.duration.split(':')[0])
        let durationMinute = +(item.duration.split(':')[1])

        if (durationHour > 8 || (durationHour === 8 && durationMinute > 0)) count++
    })

    count = `${count} of ${data.length} ${data.length > 1 ? 'Days' : 'Day'}`

    return <StatsCard title="More Than 8 Hours" value={count} />
}

export default MoreThanEightHours