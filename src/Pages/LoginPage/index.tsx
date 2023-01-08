
import { PrimaryButton } from 'Components/Buttons'
import NavLogged from 'Components/NavBar/Logged'
import { H1Title, Subtitle } from 'Components/Text'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
	<div className = "LoginPage">
	<NavLogged></NavLogged>
      <div className='InfosContainer'>
        <div className="InfosContainer--TextLayout">
          <H1Title>FIRE PONG</H1Title>
          <Subtitle>Push play to be sent to hell</Subtitle>
        </div>
        <Link to="/registration-page">
			<PrimaryButton className='InfosContainer--PlayButton'>Play</PrimaryButton>
		</Link> 
	</div>
    </div>
  )
}

export default LoginPage