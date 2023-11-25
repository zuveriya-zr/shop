import React, { useState, useEffect } from "react";
import AdminNav from "../../../component/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { getCatgeories } from "../../../functions/cat-f";
import {
  getSub,
  updateSub,
} from "../../../functions/sub-f";

import { useNavigate, useParams } from "react-router-dom";
const SubUpdate = () => {
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    allCatLoad();

    singleSubLoad();
  }, []);

  const allCatLoad = () =>
    getCatgeories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log("err in backend geting all cat", err));

  const singleSubLoad = () =>
    getSub(slug)
      .then((res) => {
        setName(res.data.name);
        setParent(res.data.parent);
        console.log("backend res==>", res.data.name,"Parent Cat id ==>",res.data.parent);
      })
      .catch((err) => console.log("err in backend geting all cat", err));
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateSub(slug, { name,parent }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} is updated..!!`);
        navigate("/admin-dash/sub");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <div className="container-fluid d-flex space-x-2">
      <div className="user_nav">
        <AdminNav />
      </div>
      <div className="user_dash container-fluid ">
        {loading ? (
          <p className="text-danger font-bold text-xl">Loading....</p>
        ) : (
          <p className="text-xl font-bold">Sub Category Update Page</p>
        )}
        <form onSubmit={handleSubmit} className=" mt-2 p-3 flex flex-col ">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Select Category
          </Typography>
         
          <select
              name="category"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                    
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          <br />
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Enter Sub Category to Create 
          </Typography>
          <Input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Category"
          />
          <Button
            disabled={!name}
            size="lg"
            type="submit"
            color="green"
            className=" w-50 mx-auto mt-3  justify-center group h-15"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SubUpdate;
