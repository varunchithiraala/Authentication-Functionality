// Write your JS code here
import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  const setCookieAndNavigateToHome = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  const onClickLoginButton = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      setCookieAndNavigateToHome(data.jwt_token)
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button
        type="button"
        className="login-button"
        onClick={onClickLoginButton}
      >
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
