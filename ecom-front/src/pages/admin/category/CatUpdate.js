import React, { useState, useEffect } from "react";
import AdminNav from "../../../component/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Button, Input, Typography } from "@material-tailwind/react";
import {  getSingleCat,updateCat } from "../../../functions/cat-f";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../component/Loader";
const CatUpdate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
const {slug}=useParams()
let navigate=useNavigate()


  useEffect(() => {
    singleCatLoad()
  }, []);

  const singleCatLoad = () =>
    getSingleCat(slug)
    
      .then((res) =>{
        setName(res.data.name)
        console.log("backend res==>",res.data.name)
      })
      .catch((err) => console.log("err in backend geting all cat", err));

  const { user } = useSelector((state) => ({ ...state }));
//abcee => cccc
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateCat(slug,{name}, user.token)
    .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} is updated..!!`);
        navigate('/admin-dash/category')
        
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
          <Loader />
        ) : (
          <p className="text-xl  text-center font-bold">Category Update Page</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="w-50 text-center mx-auto mt-2 p-3 flex flex-col "
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Enter new category name
          </Typography>
          <Input
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

export default CatUpdate;
