const usersSchema = require("../Schema/user");
const bcrypt = require("bcrypt");

exports.register = async function (req, res) {
  try {
    let newuser = new usersSchema(req.body);
    const hashedpasswored = await bcrypt.hash(req.body.password, 10);
    newuser.password = hashedpasswored;
    let creatuser = await newuser.save();

    res.json({ message: "user created succrssfully", User: creatuser });
  } catch (err) {
    res.json({ error: err });
  }
};

exports.login = async function (req, res) {
  try {
    let user = await usersSchema.findOne({ email: req.body.email });
    if (!user) {
      res.json({ message: "user not found, invaild email or password" });
    }
    // const { password } = req.body;
    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordCheck === true) {
      res.json({ message: "user logged in successfully" });
    } else {
      res.json({ message: "user email or password is invaild" });
    }
  } catch (err) {
    res.json({ error: err });
  }
};

// if(passwordCheck === false){
//   res.json({message:"user email or password invaild"})
// }
