import express from "express"
import * as gameService from "../services/gameServices.js"
import * as database from "../src/database/index.js"
const router = express.Router()

// Ecoute la requête POST /games.
router.post("/", function (req, res) {
  if (!req.body.name) {
    return res.status(404).send("Not found")
  }
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})
router.get("/", function (req, res) {
  const tab= database.getGames()
  const map1 = tab.map(x => (id: ,name:))
  res.json(map1)
})

export default router
