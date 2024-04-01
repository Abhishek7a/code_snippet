import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import MainNavbar from './Components/MainNavbar';
import Navbars from './pages/Navbars';
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

import CodeNavbar1 from './pages/codeNavbars/CodeNavbar1';
import CodeNavbar2 from './pages/codeNavbars/CodeNavbar2';
import CodeNavbar3 from './pages/codeNavbars/CodeNavbar3';
import CodeNavbar4 from './pages/codeNavbars/CodeNavbar4';
import CodeNavbar5 from './pages/codeNavbars/CodeNavbar5';
import CodeSidebar1 from './pages/codeSidebars/CodeSidebar1';
import CodeSidebar2 from './pages/codeSidebars/CodeSidebar2';
import CodeSidebar3 from './pages/codeSidebars/CodeSidebar3';
import CodeFooter1 from './pages/codeFooter/CodeFooter1';
import CodeFooter2 from './pages/codeFooter/CodeFooter2';
import CodeFooter3 from './pages/codeFooter/CodeFooter3';
import CodeFooter4 from './pages/codeFooter/CodeFooter4';
import CodeAccordion1 from './pages/codeAccordions/CodeAccordion1';
import CodeAccordion2 from './pages/codeAccordions/CodeAccordion2';
import CodeEcommerce1 from './pages/codeEcommerce/CodeEcommerce1';
import CodeEcommerce2 from './pages/codeEcommerce/CodeEcommerce2';
import CodeCheckout1 from './pages/codeCheckout/CodeCheckout1';
import CodeCheckout2 from './pages/codeCheckout/CodeCheckout2';
import CodeEmail1 from './pages/codeEmails/CodeEmail1';
import CodeEmail2 from './pages/codeEmails/CodeEmail2';
import CodeCard1 from './pages/codeCards/CodeCard1';
import CodeCard2 from './pages/codeCards/CodeCard2';
import CodeCard3 from './pages/codeCards/CodeCard3';
import CodeCard4 from './pages/codeCards/CodeCard4';
import CodeCard5 from './pages/codeCards/CodeCard5';
import CodeDialogbox1 from './pages/codeDialogbox/CodeDialogbox1';
import CodeDialogbox2 from './pages/codeDialogbox/CodeDialogbox2';
import CodeDialogbox3 from './pages/codeDialogbox/CodeDialogbox3';
import CodeLogin2 from './pages/codeLogin/CodeLogin2';
import CodeLogin5 from './pages/codeLogin/CodeLogin5';
import CodeLogin8 from './pages/codeLogin/CodeLogin8';

function App() {
  const NavBar = MainNavbar(Navbars);
  const SideBar = MainNavbar(Sidebars);
  const DashBoard = MainNavbar(Dashboards);
  const Accordions = MainNavbar(accordions);
  const CheckOuts = MainNavbar(Checkouts);
  const Ecommerce = MainNavbar(ecommerce);
  const Footers = MainNavbar(footers);
  const Login = MainNavbar(login);
  const Cards = MainNavbar(cards);
  const Forms = MainNavbar(forms);
  const PageNotFound = MainNavbar(pageNotFound);
  const Email = MainNavbar(email);
  const DialogBox = MainNavbar(dialogBox);
  const Template = MainNavbar(template);
  const Animation = MainNavbar(animation);

  return (
    <>
      <AppProvider>
        <ToastContainer />
        <Router>
        <Navbar />
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

            <Route exact path='/codeNavbar1' element={<CodeNavbar1 />} />
            <Route exact path='/codeNavbar2' element={<CodeNavbar2 />} />
            <Route exact path='/codeNavbar3' element={<CodeNavbar3 />} />
            <Route exact path='/codeNavbar4' element={<CodeNavbar4 />} />
            <Route exact path='/codeNavbar5' element={<CodeNavbar5 />} />

            <Route exact path='/codeSidebar1' element={<CodeSidebar1 />} />
            <Route exact path='/codeSidebar2' element={<CodeSidebar2 />} />
            <Route exact path='/codeSidebar3' element={<CodeSidebar3 />} />

            <Route exact path='/codeFooter1' element={<CodeFooter1 />} />
            <Route exact path='/codeFooter2' element={<CodeFooter2 />} />
            <Route exact path='/codeFooter3' element={<CodeFooter3 />} />
            <Route exact path='/codeFooter4' element={<CodeFooter4 />} />

            <Route exact path='/codeAccordion1' element={<CodeAccordion1 />} />
            <Route exact path='/codeAccordion2' element={<CodeAccordion2 />} />

            <Route exact path='/codeEcommerce1' element={<CodeEcommerce1 />} />
            <Route exact path='/codeEcommerce2' element={<CodeEcommerce2 />} />

            <Route exact path='/codeCheckout1' element={<CodeCheckout1 />} />
            <Route exact path='/codeCheckout2' element={<CodeCheckout2 />} />

            <Route exact path='/codeEmail1' element={<CodeEmail1 />} />
            <Route exact path='/codeEmail2' element={<CodeEmail2 />} />

            <Route exact path='/codeCard1' element={<CodeCard1 />} />
            <Route exact path='/codeCard2' element={<CodeCard2 />} />
            <Route exact path='/codeCard3' element={<CodeCard3 />} />
            <Route exact path='/codeCard4' element={<CodeCard4 />} />
            <Route exact path='/codeCard5' element={<CodeCard5 />} />

            <Route exact path='/codeDialogbox1' element={<CodeDialogbox1 />} />
            <Route exact path='/codeDialogbox2' element={<CodeDialogbox2 />} />
            <Route exact path='/codeDialogbox3' element={<CodeDialogbox3 />} />
            
            <Route exact path='/codeLogin2' element={<CodeLogin2 />} />
            <Route exact path='/codeLogin5' element={<CodeLogin5 />} />
            <Route exact path='/codeLogin8' element={<CodeLogin8 />} />

            <Route path='*' element={<NavBar />} />
          </Routes>
          <Footer />
        </Router >
      </AppProvider>
    </>

  );
}

export default App;

