import React, { useState } from 'react'
import { Button, Modal, Form, DatePicker, TimePicker } from 'antd'
import styled from 'styled-components'
import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useDispatch } from 'react-redux'
//import { addEntry } from '../store/actions/entryActions'

const NewEntryButton = () => {
    const dispatch = useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false)

    const showModal = () => setIsModalVisible(true)

    const handleCancel = () => setIsModalVisible(false)

    const onFinish = (fieldsValue) => {
        const values = {
            'date': fieldsValue['date'].format('YYYY-MM-DD'),
            'sleepTime': fieldsValue['sleep-time'].format('HH:mm:ss'),
            'wakeupTime': fieldsValue['wakeup-time'].format('HH:mm:ss'),
        };

        // calculate the duration
        let startTime = moment(values.sleepTime, "HH:mm:ss")
        let endTime = moment(values.wakeupTime, "HH:mm:ss")

        let dif = moment.duration(endTime.diff(startTime))

        if (endTime.isBefore(startTime)) {
            startTime = moment(values.sleepTime, "HH:mm:ss").format("hh:mm:ss A")
            endTime = moment(values.wakeupTime + ' PM', "hh:mm:ss A").format("HH:mm:ss")

            startTime = moment(startTime, 'HH:mm:ss')
            endTime = moment(endTime, 'HH:mm:ss')

            dif = moment.duration(endTime.diff(startTime))
        }

        values.duration = [dif.hours(), dif.minutes(), dif.seconds()].join(':')

        //dispatch(addEntry(values))

        handleCancel()
    };

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    }

    const config = {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please select time!',
            },
        ],
    }

    return (
        <>
            <div>
                <StyledButton shape='round' size="large" ghost={true} onClick={showModal}>
                    <PlusOutlined />
                    New Entry
                </StyledButton>
            </div>
            <Modal title="Add new entry" footer={null} visible={isModalVisible} onCancel={handleCancel} maskStyle={{ backdropFilter: 'blur(1.5px)' }}>
                <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                    <Form.Item name="date" label="Date" {...config}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="sleep-time" label="Sleep Time" {...config}>
                        <TimePicker />
                    </Form.Item>
                    <Form.Item name="wakeup-time" label="Wake-up Time" {...config}>
                        <TimePicker />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: {
                                span: 24,
                                offset: 0,
                            },
                            sm: {
                                span: 16,
                                offset: 8,
                            },
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

const StyledButton = styled(Button)`
    height: 100% !important;
    font-size: 1.5rem !important;
    color: #90a8f7 !important;
    padding: 0.5rem 1.5rem !important;
    border: 2px solid #465EAD !important;
    border-radius: 24px !important;

    &:hover {
        color: white !important;
    }
`

export default NewEntryButton