import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Navbars from './pages/Navbars';
import NavRouter from './router/NavRouter';
import Sidebars from './pages/Sidebars';
import Dashboards from './pages/Dashboards';
import accordions from './pages/Accordions';
import Checkouts from './pages/Checkouts';
import Check from './pages/Check';
import cards from './pages/Cards';
import ecommerce from './pages/Ecommerce';
import footers from './pages/Footers';
import login from './pages/Login';
import forms from './pages/Forms';
import pageNotFound from './pages/PageNotFound';
import email from './pages/Emails';
import dialogBox from './pages/DialogBoxes';
import template from './pages/Templates';
import animation from './pages/Animations';
import Feedback from './pages/Feedback';
import ContributeUs from './pages/ContributeUs';
import Footer from './Components/Footer';

function App() {
  const NavBar = Sidebar(Navbars);
  const SideBar = Sidebar(Sidebars);
  const DashBoard = Sidebar(Dashboards);
  const Accordions = Sidebar(accordions);
  const CheckOuts = Sidebar(Checkouts);
  const Ecommerce = Sidebar(ecommerce);
  const Footers = Sidebar(footers);
  const Login = Sidebar(login);
  const Cards = Sidebar(cards);
  const Forms = Sidebar(forms);
  const PageNotFound = Sidebar(pageNotFound);
  const Email = Sidebar(email);
  const DialogBox = Sidebar(dialogBox);
  const Template = Sidebar(template);
  const Animation = Sidebar(animation);

  return (
    <>
      <AppProvider>
        <ToastContainer />
        <Router>
          <Navbar/>
          <NavRouter />
          <Routes>
            <Route exact path='/' element={<NavBar />} />
            <Route exact path='/feedback' element={<Feedback />} />
            <Route exact path='/Contribute' element={<ContributeUs />} />
            <Route exact path='/sidebar' element={<SideBar />} />
            <Route exact path='/dashboard' element={<DashBoard />} />
            <Route exact path='/accordions' element={<Accordions />} />
            <Route exact path='/checkout' element={<CheckOuts />} />
            <Route exact path='/check' element={<Check />} />
            <Route exact path='/cards' element={<Cards />} />
            <Route exact path='/ecommerce' element={<Ecommerce />} />
            <Route exact path='/footer' element={<Footers />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/forms' element={<Forms />} />
            <Route exact path='/pageNotFound' element={<PageNotFound />} />
            <Route exact path='/email' element={<Email />} />
            <Route exact path='/dialogBox' element={<DialogBox />} />
            <Route exact path='/template' element={<Template />} />
            <Route exact path='/animation' element={<Animation />} />
          </Routes>
          <Footer />
        </Router >
      </AppProvider>
    </>

  );
}

export default App;

