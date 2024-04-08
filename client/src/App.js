import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from "axios";
import Loader from "./components/loader";



import Home from './Pages/Home';
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './Pages/Admin';
import Login from './Pages/Admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());

    } catch (error) {
      dispatch(HideLoading());
    }
  }
  useEffect(() => {


    if (!portfolioData) { getPortfolioData(); }

  }, [getPortfolioData, portfolioData]);
  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData])

  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
