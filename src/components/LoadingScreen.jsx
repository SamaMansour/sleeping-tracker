import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@chakra-ui/react';


const LoadingScreen = () => {
   
    return (
        <Container>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #2A2A42;

    span {
        color: #465EAD;
        margin-top: 1rem;
        font-size: 1rem
    }
`

export default LoadingScreen