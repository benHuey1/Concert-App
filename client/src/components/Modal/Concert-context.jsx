import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ConcertContext = createContext();

export const ConcertProvider = ({ children }) => {
  const [concertCart, setConcertCart] = useState([]);

  return (
    <ConcertContext.Provider value={{ concertCart, setConcertCart }}>
      {children}
    </ConcertContext.Provider>
  );
};

createContext.propTypes = {
    children: PropTypes.string.isRequired,
  };