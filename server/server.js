import express from "express";

const app = express();

app.get("/api/login", (reg, res) => {

    res.json({
        username: "admin",
        fullName: "Noen andre person",
    })
});
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
