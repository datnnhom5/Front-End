import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCateAll } from "../../api/categoryAPI";
import { get, edit, getAll } from "../../api/productAPI";
export default function DetailProduct(props) {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await get(id);
                setProducts(data);
            } catch (error) { }
        };
        getProducts();
    }, []);
    const [productsAll, setProductsAll] = useState([]);
    useEffect(() => {
        const getProductsAll = async () => {
            try {
                const { data } = await getAll();
                setProductsAll(data);
            } catch (error) { }
        };
        getProductsAll();
    }, []);
    console.log(productsAll);
    console.log(products);
    return (
        <div >
            <div className="container">
                <div classname="row">
                    <div classname="col-4" >
                        <img src={products.image}  width="400px;" />
                    </div>
                    <div className="col-8">
                        <div>
                            <p className="fs-2">{products.name}</p>
                            <p className="fs-4">{products.price}</p>
                        </div>
                    </div>

                </div>
                {productsAll.filter(productsAll => productsAll.cate_id == products.cate_id).map((item) => (
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

    );
}
