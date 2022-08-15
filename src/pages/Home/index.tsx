import React from 'react';
import Header from '../../components/Header/Header';
import Shelf  from '../../components/Shelf';


const Home: React.FC = () => {
  return (
    <div>
        <Header/>
        <div className='container'>
          <Shelf/>
        </div>
    </div>
  );
}

export default Home;