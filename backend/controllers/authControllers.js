import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import User from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/sendToken.js";


//register user => /api/register

export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
    });

    console.log("*************");
    console.log(user);
    console.log("*************");


    sendToken(user, 201, res)
});


//login user => /api/login

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email) {
        return next(new ErrorHandler('Please enter your Email !!!', 400))
    }

    if (!password) {
        return next(new ErrorHandler('Please enter your Password', 400))
    }


    //find user in the database 
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new ErrorHandler('Invalid Email', 401))
    }

    //check if password is correct 

    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Password', 401))
    }

    sendToken(user, 201, res)
});


//logout user => /api/logout
export const logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });

    res.status(200).json({
        message: "Logged Out",
    });
});


// Get current user profile  =>  /api/me
export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req?.user?._id);

    res.status(200).json({
        user,
    });
});

/* // Update paswword  =>  /api/password/update
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req?.user?._id).select("+password");

    //check the previous  user password

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword)

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400))
    }

    user.password = req.body.password;
    user.save();

    res.status(200).json({
        success: true,
    });
}); */



// Update User Profile  =>  /api/me/update
export const updateProfile = catchAsyncErrors(async (req, res, next) => {

    //update username and email 

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }

    const user = await User.findByIdAndUpdate(req.user._id, newUserData, {
        new: true,
    });
    // Update password
    const updatePassword = await User.findById(req.user._id).select('+password');

    const isPasswordMatched = await updatePassword.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler('Old password is incorrect', 400));
    }

    updatePassword.password = req.body.password;
    await updatePassword.save();

    res.status(200).json({
        user,
        success: true,
    });
});


// Get all users - admin   =>  /api/admin/users
export const allUsers = catchAsyncErrors(async (req, res, next) => {

    const users = await User.find();

    res.status(200).json({
        users,
    });
});



// Get  user details - admin   =>  /api/admin/users/:id
export const getUserDetails = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`User not find with id: ${req.params.id}`, 404)
        );
    }

    res.status(200).json({
        user,
    });
});


// Update User Details - admin  =>  /api/admin/user/:id
export const updateUser = catchAsyncErrors(async (req, res, next) => {

    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
    });

    res.status(200).json({
        user,
    });
});


// Delete User - ADMIN  =>  /api/admin/users/:id
export const deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorHandler(`User not found with id: ${req.params.id}`, 404)
        );
    }

    // Remove user avatar from cloudinary
    if (user?.avatar?.public_id) {
        await delete_file(user?.avatar?.public_id);
    }

    await user.deleteOne();

    res.status(200).json({
        success: true,
    });
});
