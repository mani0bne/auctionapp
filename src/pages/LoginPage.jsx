import { useState } from 'react'
import InputField from '../components/login/InputField'
import SocialLogin from '../components/login/SocialLogin'



const LoginPage=()=> {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin/>

      <p className="separator"><span>or</span></p>
      <form action="#" className='login-form'>
        <InputField type="email" placeholder="Email address"/>
        <InputField type="password" placeholder="Password"/>

        <a href="" className='forgot-password-link'>Forgot Password?</a>
        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="signup-prompt">
        Don't have an account? <a href="#" className='signup-link'>Sign up</a>
      </p>
    </div>

      
  )
}

export default LoginPage;
