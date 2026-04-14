import express from 'express';  
import { getAllUsers, createUser, singleUserUser, updateUser, deleteUser } from '../controllers/users.js';


const userRoutes = express.Routes();

userRoutes.get('/getAllUsers', getAllUsers);
userRoutes.get('/createUser/:id', createUser);
userRoutes.get('/getsingleUser/:id', singleUserUser);
userRoutes.get('/updateUser/:id', updateUser);
userRoutes.get('/deleteUser/:id', deleteUser);


export default userRoutes;
