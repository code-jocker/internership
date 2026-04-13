
import express from "express";
import sequelize from "./src/config/db.js";
const app=express();
const PORT=process.env.PORT||8000;

app.use(express.json())

sequelize.authenticate().then(()=>sequelize.sync())
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Database connect successfully 🔥🔥🔥🔥🔥🔥🔥🔥🔥" );
        console.log(`Our server is running on http://localhost:${PORT} `);
    });
})
.catch((err)=>{
    console.log("Server failed to start",err)
    process.exit(1);
}
);

