import React from 'react';
import Header from './header/header'
import Carousel from './carousel/carousel'
import ProfileSection from './profileSection/profileSection'
import MainPortion from './mainPortion/mainPortion'
import Blogs from './blogs/blogs'



function Home() {

  return (
    <div>

      <Carousel /> 
      <ProfileSection />
      <MainPortion />
      <Blogs />
    </div>
    );  
}

export default Home;
