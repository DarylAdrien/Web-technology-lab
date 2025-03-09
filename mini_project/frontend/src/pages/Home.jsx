import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ProductList from "../components/ProductList";
import ShopServices from '../components/ShopServices';
import NewandTrending from '../components/WhatsNewTrending';

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductList />
      <ShopServices />
      <NewandTrending />
      <Footer />
    </>
  );
};

export default Home;