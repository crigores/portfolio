import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

const BarbershopContext = createContext();

export function BarbershopContextProvider({ children }) {
  const [isLogged, setIsLogged] = useState()

  const barbershopContext = {
    isLogged
  };

  return (
    <BarbershopContext.Provider value={barbershopContext}>{children}</BarbershopContext.Provider>
  );
}

BarbershopContextProvider.propTypes = {
  children: PropTypes.node
}

export default BarbershopContext;
