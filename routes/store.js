const express = require('express');
const router = require("express").Router();
let Store = require("../models/store");

//Get all the exercises
router.get("/", (req, res) => {
  Store.find({})
  .then((data) => {
    console.log('data:', data);
    res.json(data);
  })
  .catch((error) => {
    console.log('error: ', error);
  })
});

//Add an exercise
router.post("/", (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  const address = req.body.address;
  const image = req.body.image;

  const newStore = new Store({
    name,
    city,
    address,
    image,
  });

  newStore
    .save()
    .then(() => res.json("Store added"))
    .catch((err) => res.status(400).json("error: " + err));
});

//Get specific exercise
router.get("/:id", (req, res) => {
  Store.findById(req.params.id)
    .then((store) => res.json(store))
    .catch((err) => res.status(400).json("error: " + err));
});

//Delete specific exercise
router.delete("/:id", (req, res) => {
  Store.findByIdAndDelete(req.params.id)
    .then(() => res.json("Store deleted"))
    .catch((err) => res.status(400).json("error: " + err));
});

//Update specific exercise
router.patch("/:id", (req, res) => {
  Store.findById(req.params.id)
  .then(store => {
   store.name = req.body.name;
   store.city = req.body.city;
   store.address = req.body.address;
   store.image = req.body.image;

   store.save()
   .then(() => res.json("store update"))
   .catch((err) => res.status(400).json("error: " + err));
  })
  .catch((err) => res.status(400).json("error: " + err));
});




module.exports = router;
