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
import { getSubs, createSub, removeSub } from "../../../functions/sub-f";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Loader from "../../../component/Loader";
const SubCatCreate = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    allCatLoad();
    allSubLoad();
  }, []);

  const allCatLoad = () =>
    getCatgeories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log("err in backend geting all cat", err));
      const allSubLoad = () =>
      getSubs()
      .then((res) => setSubs(res.data))
      .catch((err) => console.log("err in backend geting all sub cat", err));

  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createSub({ name, parent: category }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`${res.data.name} is created..!!`);
        allCatLoad();
        getSubs()
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = (slug) => {
    // show some alert
    // const check = window.confirm("Do you want to delete?")
    // console.log(check,slug)
    if (window.confirm("Do you want to delete?")) {
      setLoading(true);
      //delete the category
      removeSub(slug, user.token)
        .then((res) => {
          setLoading(false);
          toast.error(`${res.data.name} is deleted..!!!`);
          getSubs()
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.status === 400) toast.error(err.response.data);
        });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid d-flex space-x-2">
      <div className="user_nav">
        <AdminNav />
      </div>
      <div className="user_dash container-fluid ">
        {loading ? (
          <Loader />
        ) : (
          <p className="text-xl font-bold">Sub Category Page</p>
        )}
        <form onSubmit={handleSubmit} className=" mt-2 p-3 flex flex-col ">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Select Category
          </Typography>
       <select onChange={(e) => setCategory(e.target.value)}>
        <option>Please Select Category</option>
        {categories.length >0 && categories.map((c) => (
          <option key={c._id} value={c._id}>{c.name}</option>
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
            Create
          </Button>
        </form>
        <hr className="border-b-4 border-l-0 border-t-0 border-r-0 border-solid  border-amber-500" />
        <Input
          autoFocus
          type="search"
          value={keyword}
          onChange={handleSearch}
          placeholder="Enter Category"
        />
        {subs.filter(searched(keyword)).map((s) => (
          <>
         
          <div
            className="w-full md:w-auto d-flex bg-slate-50 border-gray-200 border-2 m-3 p-3 rounded-md hover:bg-gray-50 hover:border-inner  hover:shadow-inner "
            key={s._id}
          >
            <span className="flex-1">
              <p className="text-lg ">
                <b>Sub Category: </b>
                <u>{s.name}</u>
                
              </p>
            </span>
            <span className="d-flex space-x-3">
            <Link to={`/admin-dash/sub/${s.slug}`}>
            <Button className="d-flex group  relative  bg-blue-300 text-black font-bold h-9 text-center p-2">
                Edit
                <PencilSquareIcon className="mx-2 group-hover:text-white relative h-4" />
              </Button>
            </Link>
              <Button onClick={()=> handleRemove(s.slug)}  className="d-flex   relative  bg-red-500 text-white font-bold h-9 text-center p-2">
                Delete
                <TrashIcon className="mx-2  relative h-4" />
              </Button>
            </span>
          </div>
          </>
         
        ))}
      </div>
    </div>
  );
};

export default SubCatCreate;
