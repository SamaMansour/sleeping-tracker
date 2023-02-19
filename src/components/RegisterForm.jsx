import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm, HookForm } from 'react-hook-form'
import { SingleDatepicker} from "chakra-dayzed-datepicker"

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


const RegisterForm = (props) => {
  const [name, setName] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [username, setUsername] = useState('');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState('');



  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={12}>
      <h2> Signup </h2>
      <form>
        <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="test name" value={name} onChange={handleNameChange}/>
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="test@test.com" value={email} onChange={handleEmailChange} />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="test-username" value={username} onChange={handleUsernameChange} />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="*******"  value={password} onChange={handlePasswordChange} />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Register
          </Button>
      </form>
    </Box>
    </ChakraProvider>
  )
};

export default RegisterForm;