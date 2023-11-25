import React, { useEffect, useState } from "react";
import AdminNav from "../../../component/nav/AdminNav";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { createProd } from "../../../functions/prod-f";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCatSubs, getCatgeories } from "../../../functions/cat-f";
const initialState = {
  title: "",
  description: "",
  price: "",
  categories: [],
  categorgy: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
};

const ProdCreate = () => {
  const [values, setValues] = useState(initialState);
  const [showSub, setShowSub] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const [subOptions, setSubOptions] = useState([]);
  const {
    title,
    description,
    price,
    category,
    categories,
    subs,
    shipping,
    quantity,
    images,
  } = values;

  useEffect(() => {
    allCatLoad();
  }, []);

  const allCatLoad = () =>
    getCatgeories()
      .then((res) => setValues({ ...values, categories: res.data }))
      .catch((err) => console.log("err in backend geting all cat", err));

  const handleChange = (e) => {
    // title => laptop
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleCatChange = (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    //geting cat
    getCatSubs(e.target.value).then((res) => {
      console.log("SUB OPTIONS ON CATGORY CLICK", res);
      setSubOptions(res.data);
      setShowSub(true);
    })
    .catch((err)=> console.log(err.message))
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProd(values, user.token)
      .then((res) => {
        console.log("backend prod api ==>", res);
        toast.success(`${res.data.title} is created..!!`);
        window.location.reload();
      })
      .catch((err) => {
        console.log("prod create backend error ==>", err);
        toast.error(err.response.data.err);
      });
  };

  return (
    <div className="container-fluid d-flex space-x-2">
      <div className="user_nav">
        <AdminNav />
      </div>
      <div className="container  ">
        <Card color="transparent" shadow={false}>
          <Typography
            className="text-center w-[50%] mx-auto rounded-md bg-yellow-100 p-2 my-2"
            variant="h4"
            color="blue-gray"
          >
            Add New Product
          </Typography>

          <form onSubmit={handleSubmit} className="mt-8 mb-2 w-[70%] mx-auto">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Product Title
              </Typography>
              <Input
                value={title}
                name="title"
                onChange={handleChange}
                placeholder="Enter Title"
                type="text"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Product Description
              </Typography>
              <Input
                value={description}
                name="description"
                onChange={handleChange}
                placeholder="Enter Product Description"
                type="text"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Product Price
              </Typography>
              <Input
                value={price}
                name="price"
                onChange={handleChange}
                placeholder="Enter in INR (max 5 digits)"
                type="number"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Select Category
              </Typography>
              <select
                name="category"
                className="form-control"
                onChange={handleCatChange}
              >
                <option>Please select</option>
                {categories.length > 0 &&
                  categories.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
              </select>
              {showSub && (
                <div>
                  <Select
                    placeholder="Please Select"
                    value={subs}
                    onChangeCapture={(value) =>
                      setValues({ ...values, subs: value })
                    }
                    name="category"
                    className="form-control"
                  >
                    {subOptions.length > 0 &&
                      subOptions.map((s) => (
                        <Option key={s._id} value={s._id}>
                          {s.name}
                        </Option>
                      ))}
                  </Select>
                </div>
              )}
              {/* {JSON.stringify(values.subs)} */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Quantity
              </Typography>
              <Input
                type="number"
                value={quantity}
                name="quantity"
                onChange={handleChange}
                placeholder="Enter Available stock"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Shipping Available?
              </Typography>
              <select
                value={shipping}
                name="shipping"
                onChange={handleChange}
                className="form-control"
              >
                <option>Please select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <Button type="submit" className="mt-6 bg-orange-300">
              Add Product
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProdCreate;
