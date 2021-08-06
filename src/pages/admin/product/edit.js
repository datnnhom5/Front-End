import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";
import firebase from "../../../firebase";

const EditProductForm = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const history = useHistory();

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {}
    };
    getProduct();
  }, []);

  const onSubmit = (data) => {
    // console.log(data);
    // const productImage = data.image[0];
    // let storageRef = firebase.storage().ref(`image/product/${productImage.name}`);
    // storageRef.put(productImage).then(function () {
    //   storageRef.getDownloadURL().then((url) => {
    //     console.log(url);
        const newItem = {
          id: Math.random().toString(7).substring(5),
          ...data,
        };

        console.log(newItem);
    props.onEdit(newItem);
    history.push("/admin/products");
    //   })

    // })
    
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">cập nhật sản phẩm</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên sản phẩm</label>
          <input
            type="text"
            defaultValue={product.name}
            className="form-control"
            {...register("name", { required: true, minLength: 6 })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-danger">
              Bắt buộc phải nhập trường này và độ dài ít nhất phải 6 ký tự
            </span>
          )}
        </div>
        <div className="mb-3">
          {/* <label className="form-label" >Ảnh</label> */}
          {/* <input
            type="file"
            defaultValue={product.image}
            className="form-control"
            // {...register("image")}
          /> */}
          <img src={product.image} width="150px" />

        

        </div>

        <div className="mb-3">
          <label className="form-label">Giá sản phẩm</label>
          <input
            type="number"
            defaultValue={product.price}
            className="form-control"
            {...register("price", { required: true, min: 1 })}
          />
          {errors.price && 
          <span className="d-block mt-2 text-danger">
            Bắt buộc phải nhập trường này và giá tối thiểu = 1
            </span>}
        </div>

        <div className="mb-3">
          <select
            className="form-control"
            {...register("status")}
            defaultValue={product.status}
          >
            <option value="true">Hết hàng</option>
            <option value="false">Còn hàng</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>
    </>
  );
};
export default EditProductForm;
