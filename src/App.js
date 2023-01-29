import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Checkout from './pages/Checkout';

import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './utils/store';

import oreo from './assets/images/oreo.jpg';
import loungeChair from './assets/images/lounge-chair.jpg';
import lostAndFound from './assets/images/lost-and-found.jpg';
import tShirt from './assets/images/t-shirt.jpg';

import './App.css';

const categories = ["food", "furniture", "book", "clothes"]
const products = [
  {
    id: 1,
    name: "Oreo",
    category: "food",
    description: "Oreo is a brand of sandwich cookie consisting of two biscuits or cookie pieces with a sweet creme filling.",
    price: 3.79,
    image: oreo
  },
  {
    id: 2,
    name: "Lounge Chair",
    category: "furniture",
    description: "A lounge chair that screams “easy street” in every sense.",
    price: 499,
    image: loungeChair
  },
  {
    id: 3,
    name: "Lost and Found",
    category: "book",
    description: "What is a boy to do when a lost penguin shows up at his door?",
    price: 24.95,
    image: lostAndFound
  },
  {
    id: 4,
    name: "T-shirt",
    category: "clothes",
    description: "Super soft crew neck short sleeve tee. Cute Mickey Mouse on front",
    price: 48,
    image: tShirt
  }
]

function App() {
  return (
    <div>
      <Router>
        <Provider store={store}>
          <Header categories={categories}/>
          <Routes>
            <Route
              path="/"
              element={<Home products={products}/>}
            />
            <Route
              path="/products/:id"
              element={<Detail products={products}/>}
            />
            <Route
              path="/checkout"
              element={<Checkout />}
            />
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
