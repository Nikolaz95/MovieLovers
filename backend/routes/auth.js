import express from "express";
import { allUsers, deleteAccount, deleteUser, getUserDetails, getUserProfile, loginUser, logout, registerUser, updateProfile, updateUser } from "../controllers/authControllers.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
const router = express.Router();


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);



router
    .route("/me")
    .get(isAuthenticatedUser, getUserProfile);

router
    .route("/me/update")
    .put(isAuthenticatedUser, updateProfile)
    /* .put(isAuthenticatedUser, uploadAvatarProfile) */
    .delete(isAuthenticatedUser, deleteAccount);



/* admin router */

router
    .route("/admin/users")
    .get(isAuthenticatedUser, authorizeRoles("admin"), allUsers);

router
    .route("/admin/users/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);



export default router;