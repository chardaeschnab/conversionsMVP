import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom"; //import Routes and Route from react router dom

// import each page here in this format that links to file folder for that page
import Start from "./pages/Start";
import Step from "./pages/Step";
import FooterNavbar from "./components/FooterNavbar";
import AdminList from "./pages/AdminList";
import Create from "./pages/Create";
import Edit from "./pages/Edit";


function App() {
  return (
    <>
      <div
        className="bg-cover bg-repeat bg-center min-h-screen flex flex-col"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f")',
        }}
      >
        <div className="flex-grow overflow-auto pb-20">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/steps/:id" element={<Step />} />
            <Route path="/admin" element={<AdminList />} />
            <Route path="/create" element={<Create />} />
            <Route path="/steps/:id/edit" element={<Edit />} />          
          </Routes>
        </div>
        <FooterNavbar />
      </div>
    </>
  );
}

export default App;
