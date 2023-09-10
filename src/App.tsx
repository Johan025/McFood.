import React from 'react';
import Navbar from './pages/Navbar';
import Accueil from './pages/Accueil';
import Nouveautés from './pages/Nouveautés';
import Services from './pages/Services';
import Offres from './pages/Offres';
import App_mobile from './pages/App_mobile';

const App : React.FC= () => {
  return (
    <div>
         <Navbar/> 
         <Accueil/> 
         <Nouveautés/> 
         <Services/> 
         <Offres/> 
         <App_mobile/> 
    </div>
  );
};

export default App;