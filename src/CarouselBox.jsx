import React from "react";
import photo1 from "./carousel/pexels-stein-egil-liland-3408744.jpg"
import photo2 from "./carousel/pexels-luis-del-río-15286.jpg"
import photo3 from "./carousel/pexels-frans-van-heerden-624015.jpg"
import photo4 from "./carousel/pexels-jaime-reimer-2662116.jpg"
import photo5 from "./carousel/pexels-eberhard-grossgasteiger-572897.jpg"
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CarouselBox extends React.Component{

    render() {
        return (
           <Carousel className="carousel-box">
               <Carousel.Item>
                   <img className=" image--carbox" src={photo1} alt=""/>
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={photo2} alt=""/>
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={photo3} alt=""/>
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={photo4} alt=""/>
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={photo5} alt=""/>
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}