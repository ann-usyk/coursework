import './App.css';
import ClearTrash from "./InteractivePage/ClearTrash";
import React from "react";
import Header from "./HeaderPage/Header";
import Home from "./HomePage/Home";
import {loaded} from "./InteractivePage/ClearTrash"
import {Routes, Route} from "react-router-dom";
import News from "./NewsPages/News";
import {Error404} from "./ErrorPage/Error404";
import CarouselBox from "./PhotoGalleryPage/CarouselBox";
import ZeroWaste1 from "./NewsPages/ZeroWaste1";
import ZeroWaste2 from "./NewsPages/ZeroWaste2";
import ZeroWaste3 from "./NewsPages/ZeroWaste3";
import AddNews from "./NewsPages/AddNews";
import ViewNews from "./NewsPages/ViewNews";
import Toast from "./toast";

function App() {
    return (
        <div className="App" onLoad={loaded}>
            <Routes>
                <Route element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/clearTrash" element={<ClearTrash/>}/>
                    <Route path="/news">
                        <Route index element={<News/>}/>
                        <Route path=":id" element={<ViewNews/>}/>
                         <Route path=":id/edit" element={<AddNews/>}/>
                        <Route path="new" element={<AddNews/>}/>
                    </Route>
                    <Route path="/carousel" element={<CarouselBox/>}/>
                    <Route path="/alliance" element={<ZeroWaste1/>}/>
                    <Route path="/what_we_do" element={<ZeroWaste2/>}/>
                    <Route path="/cities" element={<ZeroWaste3/>}/>
                    <Route path="*" element={<Error404 />}/>
                </Route>
            </Routes>
            <Toast/>
        </div>
    );
}

export default App;
