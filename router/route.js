const express = require('express');
const { getAlldata, createAllData ,delateUser} = require('../controller/controll');
const router = express.Router();
const upload = require('../upload');

router.get("/upload", getAlldata);
router.post("/upload",upload.single('file'), createAllData);
router.delete("/upload:id", delateUser);

module.exports = router;