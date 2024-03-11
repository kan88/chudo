import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/header/Header';
import About from './components/about/About';
import Billboard from './components/billboard/Billboard';
import Contacts from './components/contacts/Contacts';
import Teams from './components/teams/Teams';
import Footer from './components/footer/Footer';
import Slider from './components/slider/Slider';
import Reviews from './components/reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Billboard />
      <Teams />
      <Slider />
      <Reviews />
      <Contacts />
      <Footer />

      <Helmet>
        <script
          src="https://ticketscloud.com/static/scripts/widget/tcwidget.js"
          async
        />
      </Helmet>
    </div>
  );
}

export default App;
