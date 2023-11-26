const admin = require("../firebase");
const User = require("../models/user");

exports.authChecking = async (req, res, next) => {
  //we need token of user from frontend
  // console.log(req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken);
    // console.log("Firebase user is authentcated ==>", firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.json({
      err: "Invalid User Token or expired",
    });
  }
};

// we will check whether user role is admin

exports.adminCheck = async (req, res, next) => {
  //we need user email
  const { email } = req.user;

  const adminUser = await User.findOne({ email });
  // console.log("admin details==>", adminUser);

  if (adminUser.role !== "admin") {
    res.status(403).json({
      err: "This is Admin Page You Can't Access it",
    });
  } else {
    next();
  }
};
