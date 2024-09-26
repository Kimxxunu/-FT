import './App.css';
import NotFound from './pages/NotFound/NotFound.jsx';
import Main from './pages/Home/Main.jsx';
import Detail from './pages/Detail/Detail.jsx';
import Information from './pages/Information/Information.jsx';
import Find from './pages/Find/Find.jsx';
import Alliance from './pages/Alliance/Alliance.jsx';
import Review from './pages/Review/Review.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact={true} element={<Main/>} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/Information' element={<Information/>} />
        <Route path='/Find' element={<Find/>} />
        <Route path='/Alliance' element={<Alliance/>} />
        <Route path='/Review' element={<Review/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
     
    </div>
  );
}

export default App;
