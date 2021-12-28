import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import List from './List';
import Title from './Title';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import fetchNews from '../src/services/newApi';


function App() {
  const scriptElement = <script>alert("ha-ha")</script>;
  const isLoggedIn = true;
  const loginBox = <span>Log in</span>;
  const loguotBox = <span>Log out</span>;
  const colorText = {
    color: '#0b8d17'
  };
  const fontSize = {
    fontSize: '25px'
  };
  const amount = 5;
  const arrLists = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchNews('posts', amount).then(setPosts);
  }, []);
  console.log(posts)
  return (
      <>
        {scriptElement}
        {isLoggedIn ? loguotBox : loginBox}
        <Counter/>
        <Title content="My text"/>
        <List content={posts}/>
      </>
  );

}

export default App;
