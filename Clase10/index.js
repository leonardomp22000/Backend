require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");
const port = process.env.PORT || 8080;

db.connect()
  .then(() => {
    console.log("conexion exitosa");
    server.listen(port, () => {
      console.log(`Server is running ar http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("DB conection error: ", error);
  });
