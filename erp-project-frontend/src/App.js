import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListEmployee />}></Route>
            <Route path='/employees' element={<ListEmployee />}></Route>
            <Route path='/add-employee' element={<CreateEmployee />}></Route>
            <Route path='/edit-employee' element={<UpdateEmployee />}>
              <Route index element={<UpdateEmployee />} />
              <Route path=':id' element={<UpdateEmployee />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
