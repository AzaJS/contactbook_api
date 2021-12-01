import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactsContextProvider from './contexts/contactsContext';
import List from './components/List/List';
import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Details from './components/Details/Details';

const App = () => {
  return (
    <ContactsContextProvider>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/contacts" element={<List />} />
      <Route path="/add" element={<Add/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/contacts/:id" element={<Details/>} />
    </Routes>
    </BrowserRouter>
    </ContactsContextProvider>
  );
};

export default App;