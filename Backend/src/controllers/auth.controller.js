import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const { email, fullName, password } = req.body;
    try {

        if (!email || !fullName || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        const user = await User.findOne({ email });

        if (user) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });
        if (newUser) {
            // Generate token and set it in the cookie
            generateToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePict: newUser.profilePict

            })
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credential" });
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePict: user.profilepict
        });
    }

    catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Internal server Error" });
    }
};
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in Logout controller", error.message);
        res.status(500).json({ message: "internal server error" });
    }

};

export const updateProfile = async (res, req) => {
    try {
        const { profilePict } = req.body;
        const userId = req.user_id;

        if (!profilePict) {
            return res.status(400).json({ message: "Profile Pict is required" });


        }

        const uploadResponse = await cloudinary.uploader.upload(profilePict)
        const updateUser = await User.findByIdAndUpdate(userId, { profilepict: uploadResponse.secure_url }, { new: true });

        res.status(200).json(updateUser);
    } catch (error) {
        console.log("Error update profile:", error);
        res.status(500).json({ message: "Internal server error" });
    }

};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Internal server Error" });
    }
};