const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("Home");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "email already exists" })
        }
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);
        const userCreated = await User.create({ username, email, phone, password });

        res.status(200).json({
            msg: "Registration Successful!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        //res.status(400).json({ msg: "page not found" })
        next(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        const user = await bcrypt.compare(password, userExist.password);
        if (user) {
            res.status(200).json({
                msg: "Login Successful!",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }else{
            res.status(400).json({message:"Invalid email or password."});
        }

    } catch (error) {
        res.status(500).json("internal server error")
    }
};


const user = async(req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
};
module.exports = { home, register, login, user };