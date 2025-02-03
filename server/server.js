require("dotenv").config();
const app = require("./app");
const database = require("./utils/configs/database");

database.connect();
app.listen(process.env.PORT, () => {
  console.log("> Server Running on port:", process.env.PORT);
});
