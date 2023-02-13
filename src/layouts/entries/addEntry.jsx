import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, HookForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { SingleDatepicker} from "chakra-dayzed-datepicker"
import TimePickerItem from "../../components/timePicker";
import { createEntry } from "../../redux/actions/entry";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

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
  const [successful, setSuccessful] = useState(false);
  var duration = (parseInt(time[1].split(':'))-parseInt(time[0].split(':')));

  const dispatch = useDispatch();

  const handleSaveEntry = (e) => {
    e.preventDefault();
    console.log(parseInt(time[1].split(':'))-parseInt(time[0].split(':')));
    console.log(time[1]);
    console.log(duration);

    setSuccessful(false);

    dispatch(createEntry(date, time, duration))
      .then(() => {
        setSuccessful(true);
        console.log("sent");
        
      })
      .catch(() => {
        setSuccessful(false);
      });
    
  };

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        console.log(parseInt(time[1].split(':'))-parseInt(time[0].split(':')));
        console.log(time[1]);
        console.log(duration);
        resolve()
      }, 3000)
    })

  }

  

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={12}>
        <form onSubmit={handleSaveEntry}>
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
            <TimeRangePicker className='form-control' onChange={ setTime} value={time} />
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