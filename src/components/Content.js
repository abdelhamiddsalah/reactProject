import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Content = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const styles = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    color: isDarkMode ? '#fff' : '#000',
    padding: '20px',
    minHeight: '100vh',
  };

  return (
    <div style={styles}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>This is a simple example of using Context API in React.</p>
    </div>
  );
};

export default Content;
