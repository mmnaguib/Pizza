import { Component } from 'react';
import {GlobalStyle} from './globalStyle';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import { productData, productDataTwo } from './components/Products/data';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <GlobalStyle />
        <Hero />
        <Products heading='Choose Your Favorite' data ={productData}/>
        <Features />
        <Products heading='Choose Your Favorite' data ={productDataTwo}/>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
