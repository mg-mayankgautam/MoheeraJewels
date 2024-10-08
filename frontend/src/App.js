import logo from './logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Collection from './components/Collection/Collection';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import OurStory from './components/OurStory/OurStory';
import Bespoke from './components/Bespoke/Bespoke';
import CustomEngRings from './components/Home/CustomEngRings/CustomEngRings';
import Cart from './components/Cart/Cart';
import AdminLogin from './AdminPages/AdminLogin';
import RequireAuth from './components/RequireAuth';
import AdmindashBoard from './AdminPages/AdmindashBoard';
import BookAppointment from './components/BookAppointment/BookAppointment';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import LabGuidance from './components/LabGuidance/LabGuidance';

function App() {


  return (

    <ShoppingCartProvider>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="ourstory" element={<OurStory />} />
          <Route path="collection" element={<Collection />} />
          <Route path="bespokeprocess" element={<Bespoke />} />
          <Route path="customengagementrings" element={<CustomEngRings />} />
          <Route path="bookanappointment" element={<BookAppointment />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="faqs" element={<Faq />} />
          <Route path="labdiamondsguidance" element={<LabGuidance />} />
          {/* <Route path="cart" element={<Cart />} /> */}

          {/* <Route path="search/:value" element={<SearchPage searchValue={searchValue} setSearchValue={setSearchValue} />}/> */}

          <Route path="admin" element={<AdminLogin />} />

          <Route element={<RequireAuth />}>
            <Route path="admindashboard" element={<AdmindashBoard />} />

          </Route>

        </Route>

      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
