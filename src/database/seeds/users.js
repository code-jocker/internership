import db from "../models/index.js";
import bcrypt from "bcrypt";

import User from "../models/users.js";

export const seedUsers = async () => {
    const hashpassword = await bcrypt.hash("password123", 10);
    const users = [
        {
            fullname: "irakoze nadine alliance",
            email: "nadine@gmail.com.com",
            phonenumber: "0738857833",
            location: "Muhanga",
            gender:"female",
            password: hashpassword,
            age:13,
            date_of_birth: "2001-01-01",
            type: "customer"
        },
            {
            fullname: "shyaka clever",
            email: "nadine@gmail.com.com",
            phonenumber: "0738857833",
            location: "nyamirambo",
            gender:"male",
            password: hashpassword,
            age:20,
            date_of_birth: "2006-01-01",
            type: "seller"
        },
            {
            fullname: "code jocker",
            email: "code@gmail.com.com",
            phonenumber: "0738857833",
            location: "kicukiro",
            gender:"male",
            password: hashpassword,
            age:16,
            date_of_birth: "2010-01-10",
            type: "admin"
        }
    ];
    
    await User.bulkCreate(users, {ignoreDuplicates: true});
};


