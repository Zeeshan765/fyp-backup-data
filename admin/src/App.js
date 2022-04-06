import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/usersList/UserList';
import User from './pages/user/User';
import Login from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/NewProductForm/NewProduct';
import ComponentList from './pages/componentList/ComponentList';
import NewComponent from './pages/NewComponentForm/NewComponent';
import EditComponent from './pages/EditComponent/EditComponent';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Route path='/login' exact component={Login} />
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Home} />

            <Route path='/users' exact component={UserList} />
            <Route path='/user/:userId' exact component={User} />
            <Route path='/products' exact component={ProductList} />
            <Route path='/product/:id' exact component={Product} />
            <Route path='/newproduct' exact component={NewProduct} />
            <Route path='/components' exact component={ComponentList} />
            <Route path='/newcomponent' exact component={NewComponent} />
            <Route path='/component/:id' exact component={EditComponent} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
