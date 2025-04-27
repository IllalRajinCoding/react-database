import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import List from './Component/ListKota';
import Page from './Component/Page';
import Login from './Component/Login';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/kabkota" element={<List />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;