import React from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1> Welcome to Sleep Tracker App!</h1>
      
      <Button colorScheme='orange' >Get Started</Button>
     
    </div>
  )
}

export default HomePage;