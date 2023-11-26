import React from "react";
import { Avatar, Badge, Input } from "@material-tailwind/react";
import Resizer from "react-image-file-resizer";
import { useSelector } from "react-redux";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/solid";
const FileUpload = ({ values, setValues, setLoading }) => {
  const allfiles = values.images;
  const { user } = useSelector((state) => ({ ...state }));

  const handleFileUpload = (e) => {
    const files = e.target.files;
    //    console.log(e.target.files)
    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log("image url-===>",uri)
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                {
                  image: uri,
                },
                {
                  headers: {
                    authtoken: user ? user.token : " ",
                  },
                }
              )
              .then((res) => {
                console.log("image uploaded ==>", res);
                setLoading(false);
                allfiles.push(res.data);
                setValues({ ...values, images: allfiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("image upload err =>", err);
              });
          },
          "base 64"
        );
      }
    }
  };

  const handleRemove = (public_id) => {
    setLoading(true);
    console.log("remove image ==>", public_id);
    axios
    .post(
      `${process.env.REACT_APP_API}/removeimage`,
      {
        public_id,
      },
      {
        headers: {
          authtoken: user ? user.token : " ",
        },
      }
    )
    .then((res) => {
        console.log("deleted image ==>", res);
        setLoading(false);
        const {images} =values
        let filterImage=images.filter((item) =>{
            return item.public_id !== public_id
        })

        setValues({ ...values, images: filterImage });
      })
      .catch((err) => {
        setLoading(false);
        console.log("image upload err =>", err);
      });
  };
  return (
    <div>
      <div className="p-2 mb-1">
        {values.images &&
          values.images.map((image) => (
            <Badge
              key={image.public_id}
              onClick={() => handleRemove(image.public_id)}
              content={
                <XMarkIcon className="h-4 w-4 text-white " strokeWidth={2.5} />
              }
              className="bg-gradient-to-tr cursor-pointer from-red-400 to-red-600 border-2 border-white shadow-md"
            >
              <Avatar
                variant="rounded"
                src={image.url}
                size="xxl"
                className="border border-green-500 m-3 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
              />
            </Badge>
          ))}
      </div>
      <Input
        type="file"
        
        multiple
        accept="images/*"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUpload;
