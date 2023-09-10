import React from 'react';
import Navbar from './pages/Navbar';
import Accueil from './pages/Accueil';
import Nouveautés from './pages/Nouveautés';
import Services from './pages/Services';
import Offres from './pages/Offres';

const App : React.FC= () => {
  return (
    <div className="w-100">
         <Navbar/> 
         <Accueil/> 
         <Nouveautés/> 
         <Services/> 
         <Offres/> 
    </div>
  );
};

export default App;