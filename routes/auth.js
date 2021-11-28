const router = require("express").Router();
const contactValidation = require("../validation").contactValidation;
const contact = require("../models").contactModel;

router.use((req, res, next) => {
  console.log("A request is coming in to auth.js");
  next();
});

router.get("/testAPI", (req, res) => {
  const msgObj = {
    message: "Test API is working.",
  };
  return res.json(msgObj);
});

router.post("/method", async (req, res) => {
  console.log("contact!!!");
  const { error } = contactValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newContact = new contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    need: req.body.need,
  });

  try {
    const savedContact = await newContact.save();
    res.status(200).send({
      message: "success",
      savedobject: savedContact,
    });
  } catch (err) {
    res.status(400).send("Contact not saved.");
  }
});

module.exports = router;
