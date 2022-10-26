import './App.css';
import ClearTrash from "./ClearTrash";
import Header from "./Header";
import Home from "./Home";
import {loaded} from "./ClearTrash"
import {Routes,Route} from "react-router-dom";
import News from "./News";

function App() {

  return (
    <div className="App" onLoad={loaded}>
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path="clearTrash" element={<ClearTrash/>}/>
                <Route path="*" element={<div>Test</div>}/>
                <Route path="news" element={<News/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
