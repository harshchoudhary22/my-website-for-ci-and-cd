const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

router.get("/contact", (req, res) => {
    res.render("contact", { title: "Contact" });
});

router.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    res.send("Form submitted successfully!");
});

module.exports = router;