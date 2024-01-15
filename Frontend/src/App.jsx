import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login logic:', username, password);
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signup logic:', username, password);
  };

  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      {isLogin ? (
        <div>
          <h1>Login Page</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLogin(false)} style={{ cursor: 'pointer', color: 'blue' }}>
              Sign up here
            </span>
          </p>
        </div>
      ) : (
        <div>
          <h1>Signup Page</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: '10px', margin: '10px' }}
            />
          </label>
          <br />
          <button onClick={handleSignup}>Sign up</button>
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)} style={{ cursor: 'pointer', color: 'blue' }}>
              Login here
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
