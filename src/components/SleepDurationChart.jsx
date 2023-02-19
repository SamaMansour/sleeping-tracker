import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Line } from '@ant-design/charts'
import { Tabs } from 'antd'
import { splitArrayByPeriod } from '../utils'
import moment from 'moment'

const SleepDurationChart = () => {
    const entriesData = useSelector(state => state.entry.entries)

    const entriesOfWeek = splitArrayByPeriod(entriesData, 'week')[0]
    const entriesOfMonth = splitArrayByPeriod(entriesData, 'month')[0]
    const entriesOfYear = splitArrayByPeriod(entriesData, 'year')[0]

    const formatChartData = (arr) => {
        if (arr.length) {
            arr = arr.reverse()

            return arr.map(entry => ({
                Date: moment(entry.date).format('MMM Do'),
                Duration: +(entry.duration.split(':')[0]) + (+(entry.duration.split(':')[1] / 60).toFixed(1))
            }))
        }
        else return arr
    }

    let weekData = formatChartData(entriesOfWeek)
    let monthData = formatChartData(entriesOfMonth)
    let yearData = formatChartData(entriesOfYear)

    let weekConfig, monthConfig, yearConfig

    weekConfig = {
        data: weekData,
        padding: 'auto',
        xField: 'Date',
        yField: 'Duration',
        xAxis: { tickCount: 7 },
        smooth: true,
        lineWidth: 1,
    }

    monthConfig = {
        data: monthData,
        padding: 'auto',
        xField: 'Date',
        yField: 'Duration',
        xAxis: { tickCount: 30 },
        smooth: true,
    }

    yearConfig = {
        data: yearData,
        padding: 'auto',
        xField: 'Date',
        yField: 'Duration',
        xAxis: { tickCount: 100 },
        smooth: true,
    }

    const { TabPane } = Tabs

    return (
        <Container>
            <h2>Sleep Duration</h2>
            <Tabs defaultActiveKey="1" tabBarStyle={{ color: '#8ec8ff90' }}>
                <TabPane tab="WEEK" key="1">
                    <ChartContainer>
                        <Line {...weekConfig} />
                    </ChartContainer>
                </TabPane>
                <TabPane tab="MONTH" key="2">
                    <ChartContainer>
                        <Line {...monthConfig} />
                    </ChartContainer>
                </TabPane>
                <TabPane tab="YEAR" key="3">
                    <ChartContainer>
                        <Line {...yearConfig} />
                    </ChartContainer>
                </TabPane>
            </Tabs>
        </Container>
    )
}

const Container = styled.div`
    h2 {
        color: white;
        font-size: 1.62500rem;
        font-weight: 700
    }

    .ant-tabs-nav::before {
        border: none;
    }

`

const ChartContainer = styled.div`
    margin-top: 1rem;
    max-height: 100%;
    background: #2e2e48;
    border-radius: 24px;

    canvas {
        padding: 1rem;
    }
`

export default SleepDurationChart