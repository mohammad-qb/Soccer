import {
  addNewPlayer,
  getPlayers,
  getPlayersWithID,
  updatePlayer,
  deletePlayer
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getPlayers).post(addNewPlayer);

  app.route("/players/:PlayerId").get(getPlayersWithID).put(updatePlayer).delete(deletePlayer);
};

export default routes;
