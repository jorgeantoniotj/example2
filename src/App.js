import './App.css';
import { useState, useEffect } from 'react'
import Amplify, { Auth } from 'aws-amplify'

Amplify.configure({
    region: "region",
    userPoolId: "userPoolId",
    userPoolWebClientId: "userPoolWebClientId",
    oauth: {
        domain: "domain",
        scope: [
            'phone',
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin',
        ],
        scopeInline: 'phone,email,profile,openid,aws.cognito.signin.user.admin',
        redirectSignIn: "http://localhost:3000",
        redirectSignOut: "http://localhost:3000",
        responseType: 'code'
  }
})

function App() {
  const [data, setData] = useState('')

  const google = ()=>{
    Auth.federatedSignIn({provider: "Google"})
  }

  const facebook = ()=>{
    Auth.federatedSignIn({provider: "Facebook"})
  }

  const apple = ()=>{
    Auth.federatedSignIn({provider: "SignInWithApple"})
  }

  const loadData = ()=>{
    setData('data')
  }

  useEffect(()=>{
    loadData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={facebook}>FACEBOOK</button><br/>
        <button onClick={google}>GOOGLE</button><br/>
        <button onClick={apple}>APPLE ID</button>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
