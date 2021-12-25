import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useEther from './hooks/useEther';
import Button from '@material-ui/core/Button';
import Page from './components/Page';

const App = () => {

  const [value, setValue] = useState(0)
  const [users, setUsers] = useState({
    jonh: {
      cat: 'yes',
      dog: 'no'
    },
    peter: {
      cat: 'no',
      dog: 'no'
    }
  })

  useEffect(() => {
    console.log('users', users)
  }, [ value ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          variant="contained"
          onClick={() => {
            setValue(value + 1)
            setUsers({...users, [value]: value})
          }}
        >
          {value}
        </Button>
        <Page text={JSON.stringify({users})}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
