import './App.css';
import Theory from './components/Theory';
import Animation from './components/Animation';
import Simulation from './components/Simulation';
import SelfEvaluation from './components/Self_Evaluation';
import Reference from './components/Reference';
import Feedback from './components/Feedback';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Theory' element={<Theory />}/>
        <Route path='/Animation' element={<Animation />}/>
        <Route path='/Simulation' element={<Simulation />}/>
        <Route path='/SelfEvaluation' element={<SelfEvaluation />}/>
        <Route path='/Reference' element={<Reference />}/> 
        <Route path='/Feedback' element={<Feedback />}/>
      </Routes> 
      
        
    </div>
  );
}

export default App;
