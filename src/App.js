import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './components/splash/SplashScreen';
import Login from './components/login/Login';
import Main from './components/main/index';
import Category from './components/main/category/category';
import CategoryProducts from './components/main/category/CategoryProducts';

function App() {
  return (
    <div className="w-100">
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/categories"
          element={
            <Main routeName="Category">
              <Category />
            </Main>
          }
        />
        <Route
          path="/categories/:slug"
          element={
            <Main routeName="Category">
              <CategoryProducts />
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
