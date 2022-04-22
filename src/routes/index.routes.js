const { Router } = require("express");
const router = Router();
const MusicianModel = require("../models/Musician-model");

//Home URL
router.get("/", (req, res) => {
  return res.json({
    error: null,
    data: "Node JS APP is working",
  });
});

//Get all Musicians
router.get("/musicians", async (req, res) => {
  try {
    const musician = await MusicianModel.find({});
    return res.json({
      error: null,
      data: musician,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//Get Musician by id
router.get("/musician/:id", async (req, res) => {
  try {
    const musician = await MusicianModel.find({ _id: req.params.id });
    return res.json({
      error: null,
      data: musician,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//Create new Musician
router.post("/musicians", async (req, res) => {
  const musicianM = new MusicianModel(req.body);

  try {
    await musicianM.save();
    return res.json({
      error: null,
      data: { message: "Musician saved", musician: musicianM },
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

// //UPDATE Musician by id
//TODO: return new user
router.put("/musicians/:id", async (req, res) => {
  try {
    await MusicianModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    return res.json({
      error: null,
      data: { message: "User updated", user: req.body },
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
});

//DELETE Musician by id
router.delete("/musicians/:id", async (req, res) => {
  MusicianModel.findByIdAndRemove(req.params.id, (error, musician) => {
    if (!error) {
      if (!musician)
        return res.status(404).json({
          error: error,
          data: { message: "Musician not found" },
        });
      else
        res.json({
          error: null,
          data: { message: "Musician Removed", musician: musician },
        });
    } else {
      return res.status(500).json({
        error: error,
      });
    }
  });
});

module.exports = router;
