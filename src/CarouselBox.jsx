import React, {Component} from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "./carousel/pexels-stein-egil-liland-3408744.jpg"
import photo2 from "./carousel/pexels-luis-del-río-15286.jpg"
import photo3 from "./carousel/pexels-frans-van-heerden-624015.jpg"
import photo4 from "./carousel/pexels-jaime-reimer-2662116.jpg"
import photo5 from "./carousel/pexels-eberhard-grossgasteiger-572897.jpg"

export default class CarouselBox extends Component {
    render() {
        return (
           <Carousel className="vw-100">
               <Carousel.Item>
                   <img
                       className="d-block" style={{width:100+'vw'}}
                       src={photo1}
                       alt="Photo1"
                   />
                   <Carousel.Caption>
                       <h3>Photo 1 an name there</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis?</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block" style={{width:100+'vw'}}
                       src={photo2}
                       alt="Photo2"
                   />
                   <Carousel.Caption>
                       <h3>Photo 1 an name there</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis?</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block " style={{width:100+'vw'}}
                       src={photo3}
                       alt="Photo3"
                   />
                   <Carousel.Caption>
                       <h3>Photo 1 an name there</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis?</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block" style={{width:100+'vw'}}
                       src={photo4}
                       alt="Photo4"
                   />
                   <Carousel.Caption>
                       <h3>Photo 1 an name there</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis?</p>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img
                       className="d-block " style={{width:100+'vw'}}
                       src={photo5}
                       alt="Photo5"
                   />
                   <Carousel.Caption>
                       <h3>Photo 1 an name there</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, perspiciatis?</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        );
    }
}