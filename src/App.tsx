import "./App.css";
import { Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="site">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <div className="container">
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
