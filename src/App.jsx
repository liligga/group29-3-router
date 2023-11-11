import {Routes, Route} from 'react-router-dom'

import "./App.css";
import MainPage from "./pages/MainPage";
import PostsPage from "./pages/PostsPage";
import OnePostPage from "./pages/OnePostPage";
import Navbar from './components/Navbar';

function App() {
  return ( <>
    <Navbar />
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/posts' element={<PostsPage />} />
      <Route path='/posts/:id' element={<OnePostPage />} />
    </Routes>
  </>);
}

export default App;
