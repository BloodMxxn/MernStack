const mongoose = require("mongoose");

module.exports = {
  connect: () => {
    mongoose
      .connect(process.env.DB_URI)
      .then(() => {
        console.warn("> Database connected successfully !");
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
