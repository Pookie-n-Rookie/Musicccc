import './App.css';
import Loading from './components/Loading';
import Home from './components/Home';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoading);
      return () => window.removeEventListener('load', handleLoading);
    }
  }, []);

  if (isLoading)
    return 
   <Loading/>
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
