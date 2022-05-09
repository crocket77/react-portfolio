import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav(props) {

  const {
    categories = [],
    setCurrentPage,
    currentPage,
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
  <header  className="my-5">
  <h1>
    <a data-testid="link" href="/">
      Ethan Pfeiffer's Portfolio
    </a>
  </h1>
  <nav>
    <ul className="flex-row">
      
      <li className={`mx-2 ${currentPage==='About' && 'navActive'}`} >
        <span onClick={() => setCurrentPage('About')}>About Me</span>
      </li>

      <li className={`mx-2 ${currentPage==='Contact' && 'navActive'}`} >
        <span onClick={() => setCurrentPage('Contact')}>Contact</span>
      </li>

      <li className={`mx-2 ${currentPage==='Resume' && 'navActive'}`} >
        <span onClick={() => setCurrentPage('Resume')}>Resume</span>
      </li>

      {categories.map((category) => (
        <li className={`mx-2 ${currentCategory.name === category.name && !contactSelected && `navActive`}`}
          key={category.name}
        >
        <span onClick={() => {setCurrentCategory(category); setContactSelected(false);}} >
          {capitalizeFirstLetter(category.name)}
        </span>
        </li>
      ))}
    </ul>
  </nav>
  </header>
  );
}

export default Nav;