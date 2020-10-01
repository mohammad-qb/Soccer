import mongoose from "mongoose";
import { playerSchema } from "../models/playersModels";

const Player = mongoose.model("Player", playerSchema);

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, player) => {
    if (err) {
      res.send(err);
    } else {
      res.json( player );
    }
  });
};

export const getPlayers = (req, res) => {
  Player.find({}, (err, player) => {
    if (err) {
      res.send(err);
    } else {
      res.json(player);
    }
  });
};

export const getPlayersWithID = (req, res) => {
  Player.findById(req.params.PlayerId, (err, player) => {
    if (err) {
      res.send(err);
    } else {
      res.json( player );
    }
  });
};

export const updatePlayer = (req, res) => {
  Player.findOneAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true },
    (err, player) => {
      if (err) {
        res.send(err);
      } else {
        res.json( player );
      }
    }
  );
};

export const deletePlayer = (req, res) => {
  Player.remove({ _id: req.params.PlayerId }, (err, player) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Successfuly deleted" });
    }
  });
};
