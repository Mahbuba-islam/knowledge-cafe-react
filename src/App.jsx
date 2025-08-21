// 📦 Styles
import './App.css';

// 🧩 Components
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';

// 🔔 Toast Notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Blogs />
      <ToastContainer />
    </>
  );
}

export default App;