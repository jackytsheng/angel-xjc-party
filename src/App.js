import React, { useEffect, useState } from 'react';
import Home from './Home';
import Loading from './Loading';

const App = () => {
  const [loadState, setLoadState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadState(false);
    }, 2500);
  }, []);

  return loadState ? <Loading /> : <Home />;
};

export default App;
