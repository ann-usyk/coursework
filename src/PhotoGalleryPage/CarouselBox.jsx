import React from "react";
import './carousel.css'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselBox extends React.Component{

    render() {
        return (
           <Carousel className="carousel-box">
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-02/merlin_215397606_fd707b09-0e9d-43e8-a8e6-6861a1ba5ec4-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>Ukrainian sappers  burying unexploded ordinance his team found near a school to be destroyed in part of Ukraine’s Kherson region that was previously occupied by Russian forces, on Oct. 24.</h5>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-03/merlin_215172696_1347e315-dfe9-4067-ada7-46722dc24668-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>A former cardiology clinic in Chernihiv that was damaged by a Russian missile strike in March, on Oct. 19.</h5>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-05/merlin_215136612_5ac649d2-d37d-4904-adff-3f04ca89c563-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>Empty Russian ammunition boxes and some live artillery shells lying scattered around a firing position in the village of Kamianka in the Kharkiv region on Oct. 19.</h5>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-04/merlin_215397456_0415e8c1-7235-4ade-820d-d406201b71e8-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>
                           A team of Ukrainian sappers preparing on Oct. 24 to clear a building in part of Ukraine’s Kherson region of possible explosives and booby traps. The building was previously occupied by Russian forces.
                       </h5>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-06/merlin_215332572_467595f3-ff16-4f06-88db-3f994aa63aac-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>A man walking past a destroyed apartment block that was hit by a Russian missile earlier in the month, on Oct. 24.</h5>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <img className=" image--carbox" src={"https://static01.nyt.com/images/2022/10/27/world/27-Ukraine-Photo-Update-07/merlin_215397618_ceab2ed2-853a-4a17-88b1-f7900622ffba-superJumbo.jpg?quality=75&auto=webp"} alt=""/>
                   <Carousel.Caption>
                       <h5>A controlled detonation by Ukrainian sappers destroying unexploded ordinance found near a school in a part of Ukraine’s Kherson region that was previously occupied by Russian forces, on Oct. 24.</h5>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}