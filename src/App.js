import React,{useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Projects I have worked on or contributed to.',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [currentPage, setCurrentPage] = useState('About');
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      ></Nav>
      <main>

      {currentPage === 'About' &&
        <>
        <About></About>
        </>
        }
      {currentPage === 'Contact' &&
        <>
        <ContactForm></ContactForm>
        </>
        }
      {/* {currentPage === 'Portfolio' &&
        <Portfolio></Portfolio>}
      {currentPage === 'Resume' &&
        <Resume></Resume>} */}
      
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;