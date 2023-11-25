const User = require("../models/user");

exports.createUpdateUser = async (req, res) => {
  // lets destructure user details from req.user
  const { name, email } = req.user;
  // finding user with particular credential ==> email name id or phone  num anything
  //new : true ==> it will show updated info of user
  const user = await User.findOneAndUpdate({ email }, { name:email.split('@')[0] }, { new: true });

  if (user) {
    // updating user
    res.json(user);
    console.log("USER UPDATED SUCCESSFULY==>", user);
  } else {
    // creating user
    const newUser = await new User({ email, name:email.split('@')[0]  }).save();
    console.log("USER CREATED SUCCESSFULY==>", newUser);
    res.json(newUser);
  }
};

//to get user details for currently logged in user

exports.currentUser = async(req,res)=>{
  //to get one single data or user data we will be using findone
const user= await User.findOne({email:req.user.email})
console.log("current user Email==>",user)
try{
if(user) res.json(user)
}catch(err){
  res.json({
    err:"Current user Info not found"
  })
}

}