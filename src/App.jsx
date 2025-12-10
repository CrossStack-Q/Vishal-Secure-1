import './App.css'
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';

import Navbar from "./components/Header/Navbar"
import HeroSection from './components/Hero/HeroSection';

import data from "./data/blog.json";


export default function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <HeroSection hero={data.hero}/>

      <BlogPage data={data}/>

      <Footer/>
    </div>
  );
}

