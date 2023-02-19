import React from 'react'
import StatsCard from './StatsCard'

const LessThanSixHours = ({ data }) => {
    let count = 0

    data.forEach(item => {
        let duration = +(item.duration.split(':')[0])

        if (duration < 6) count++
    })

    count = `${count} of ${data.length} ${data.length > 1 ? 'Days' : 'Day'}`

    return <StatsCard title="Less Than 6 Hours" value={count} />
}

export default LessThanSixHours