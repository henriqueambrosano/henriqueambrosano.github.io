import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/index'
import { About, Contact, Header, Home, Projects, Services, Skills, ScrollUpBtn } from './imports'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <ScrollUpBtn />
    </Provider>
  );
}

export default App;
