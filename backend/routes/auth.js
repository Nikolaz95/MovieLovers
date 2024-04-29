import express from "express";
import { allUsers, deleteUser, getUserDetails, getUserProfile, loginUser, logout, registerUser, /* updatePassword, */ updateProfile, updateUser, uploadAvatarProfile } from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);



router
    .route("/me")
    .get(isAuthenticatedUser, getUserProfile)
    .put(isAuthenticatedUser, uploadAvatarProfile);

router
    .route("/me/update")
    .put(isAuthenticatedUser, updateProfile)
/* .put(isAuthenticatedUser, uploadAvatarProfile); */





router
    .route("/admin/users")
    .get(isAuthenticatedUser, authorizeRoles("admin"), allUsers);

router
    .route("/admin/users/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);



export default router;