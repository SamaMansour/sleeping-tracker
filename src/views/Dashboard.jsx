import React, { useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoadingScreen from "../components/LoadingScreen"
import AccountArea from "../components/AccountArea"
import NewEntryButton from "../components/NewEntryButton"
import SleepDurationChart from "../components/SleepDurationChart"
import StatsCards from "../components/StatsCardsList"
import StatsTable from "../components/StatsTable"
import WelcomingArea from "../components/WelcomingArea"

import { loadEntries } from '../store/actions/entryActions'

const Dashboard = () => {
  const auth = useSelector(state => state.auth)
  const isLoading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth._id) dispatch(loadEntries())
  }, [])

  // If the user is not signed in, then redirect them to the login page and do not render the dashboard
  if (!auth._id) return <Redirect to="/auth" />

  // Show the loading screen until async request completes
  if (isLoading) return <LoadingScreen />

  return (
    <Container>
      <Content>
        <Logo>
          <h1>
            <span>Sleep</span>Tracker
          </h1>
        </Logo>
        <WelcomingAreaWrapper>
          <WelcomingArea />
          <NewEntryButton />
        </WelcomingAreaWrapper>
        <SleepDurationChart />
        <Footer>
         
        </Footer>
      </Content>

      <Panel>
        <AccountArea />
        <StatsCards />
        <StatsTable />
      </Panel>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const Content = styled.div`
  padding: 3rem 5rem;
  width: 55%;
  height: calc(100vh + 10rem);
`

const Logo = styled.div`
  h1 {
    font-size: 2.5rem;
    color: white;
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
`

const WelcomingAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6rem 0;
  padding-right: 15rem;
`

const Panel = styled.div`
  padding: 3rem;
  background: #2e2e48;
  width: 45%;
  height: auto;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
`

const Footer = styled.div`
  padding-top: 4rem;

  p, p > a {
    color: #9595c530;
    font-size: 0.75rem;

    a {
      font-weight: 600;

      &:hover {
      color: #9595c540;
      }
    }

  }
`

export default Dashboard