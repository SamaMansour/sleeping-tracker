import React from 'react'
import styled from 'styled-components';
import { Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
//import { signOut } from '../store/actions/authActions';

const AccountArea = () => {
    const dispatch = useDispatch()

    const handleSignOut = () => {
        //dispatch(signOut())
    }


    return (
        <Container>
          <Menu>
            <MenuItem key="0">
                <a href="#">Export Report</a>
            </MenuItem>
            <MenuDivider />
            <MenuItem key="0">
                <a href="#" onClick={handleSignOut}>Logout</a>
            </MenuItem>
          </Menu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
`




export default AccountArea