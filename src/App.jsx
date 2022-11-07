import './App.css';
import ClearTrash from "./ClearTrash";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import {loaded} from "./ClearTrash"
import {Routes, Route} from "react-router-dom";
import News from "./News";
import {Error404} from "./Error404";
import CarouselBox from "./CarouselBox";
import ZeroWaste1 from "./news/ZeroWaste1";
import ZeroWaste2 from "./news/ZeroWaste2";
import ZeroWaste3 from "./news/ZeroWaste3";
import News1 from "./news/news1";
import News2 from "./news/news2";
import AddNews from "./AddNews";
import ViewNews from "./ViewNews";
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
                    <Route path="/prynczypy-zero-waste-v-ukrayinskyh-shkolah" element={<News2/>}/>
                    <Route path="/korabel-dlya-sortuvannya-u-lvovi-rezultaty-roboty" element={<News1/>}/>
                    <Route path="*" element={<Error404 />}/>
                </Route>
            </Routes>
            <Toast/>
        </div>
    );
}

export default App;
