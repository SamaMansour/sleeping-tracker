import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, HookForm } from 'react-hook-form'
import { SingleDatepicker} from "chakra-dayzed-datepicker"
import TimePickerItem from "../../components/timePicker";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  ChakraProvider,
  CSSReset,
  Box 
} from '@chakra-ui/react'


const AddEntry = (props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(['10:00', '11:00']);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000)
    })
  }

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={12}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='date'>Date</FormLabel>
            <SingleDatepicker
              name="date-input"
              date={date}
              onDateChange={setDate}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor='time'>Sleep & wakeup Time</FormLabel>
              <TimePickerItem value={time} onChange={setTime}/>
          </FormControl>
          <Button mt={4} colorScheme='purple' isLoading={isSubmitting} type='submit'>
            Add Entry
          </Button>
        </form>
    </Box>
    </ChakraProvider>
  )
};

export default AddEntry;