import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./modules/Home";
import { About } from "./modules/About";
import { Contact } from "./modules/Contact";
import { store } from "./shared/Store";
import ResponsiveAppBar from "./shared/Nav";
import LoginPage from "./shared/LoginPage";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<ProtectedRoute element={Home} />} />
            <Route path="/about" element={<ProtectedRoute element={About} />} />
            <Route
              path="/contact"
              element={<ProtectedRoute element={Contact} />}
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
