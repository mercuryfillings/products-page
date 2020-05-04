import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './Header'
import Search from './Search'
import Sort from './Sort'
import Products from './Products'
import Details from './Details'
import data from './Data.json'

function App() {
  const [productData, updateProductData] = useState([])
  const [search, setSearch] = useState([])
  
  useEffect(() => {
    const apiCall = async () => {
      updateProductData(data)
    }
    apiCall()
  }, [])

  function handleChange(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Search onChange={handleChange}/>
            <Sort />
            <Products search={search} data={productData}/>
          </Route>
        <Route path='/product/:id' exact>
            <Details data={productData}/>
        </Route>
        </Switch>
      </main>
    </div >
  );
}

export default App;
