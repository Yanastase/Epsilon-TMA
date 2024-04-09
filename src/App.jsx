import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


const AuthPage = ({ loggedIn, setLoggedIn }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'test@example.com' && password === 'password') {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};


const HomePage = ({ loggedIn, email }) => {
  
  if (!loggedIn) {
    return <Redirect to="/" />;
  }

  
  return (
    <div className="home-container">
      <h1>Bienvenue, {email}!</h1>
      <p>Ceci est votre espace privé.</p>
      {<input type="file" name="file" id="file" accept=".pdf, .jpg, .jpeg, .png, .gif"></input>}
    </div>
  );
};


const App = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [email, setEmail] = useState('');

  return (
    <Router>
      <div className="app">
        <Route exact path="/">
          <AuthPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/home">
          <HomePage loggedIn={loggedIn} email={email} />
        </Route>
      </div>
    </Router>
  );
};

export default App;