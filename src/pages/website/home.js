import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from 'react';
import "../../public/css/slider.css";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed :2000
};
export default function HomePage(props) {

    return (
        <div className="container-fluid">
            <div className="container-xxl home-slider">
                <Slider  {...settings}>
                    <div>
                        <img src="https://images.wallpaperscraft.com/image/jaguar_340_jaguar_car_217421_1680x1050.jpg" />
                    </div>
                    <div>
                        <img src="https://images.wallpaperscraft.com/image/hills_field_trees_217410_1680x1050.jpg" />
                    </div>
                    <div>
                        <img src="https://images.wallpaperscraft.com/image/sun_birds_silhouettes_217405_1680x1050.jpg" />
                    </div>
                </Slider>
            </div>
            <div className="container">
                <div className="row">
                    {props.data.map((item) => (

                        <div className="col-3 home-card-product">
                            <div className="card" style={{ width: '18rem' }}>
                                <div className="home-box-image-product">
                                    <img src={item.image} className="card-img-top home-img-product" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to={`/DetailProduct/${item.id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
}
