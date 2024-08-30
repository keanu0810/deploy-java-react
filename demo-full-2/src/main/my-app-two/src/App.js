import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [msg, setMsg] =useState('');
  //api/hi 로 가져온 인사말 msg 에 useEffect로 넣어서 메세지 확인 axios
  

useEffect(() => {
  axios.get('/api/hi')
  .then(response => {
    setMsg(response.data)
  })

}, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
