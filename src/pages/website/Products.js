import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { get, edit } from "../../api/productAPI";
export default function Products(props) {
    console.log(props.data);

    // const { id } = useParams();
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const getProducts = async () => {
    //         try {
    //             const { data } = await get(id);
    //             setProducts(data);
    //         } catch (error) { }
    //     };
    //     getProducts();
    // }, []);
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: 280 }}>
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                                <span className="fs-4">Danh Mục</span>
                            </a>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                {props.categoryData.map((cate) => (
                                    <li>
                                        <Link to={`/ProductCate/${cate.id}`} classname="nav-link link-dark">
                                            {cate.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            {props.data.map((item) => (
                                <div className="col-3 card-product">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <div className="products-box-image-product">
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
            </div>
        </div>

    );
}
