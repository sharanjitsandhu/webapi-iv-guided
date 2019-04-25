require("dotenv").config(); //reads .env and merges it into process.env

const server = require("./api/server.js");

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

// hosting service might assign a port dynamically
// Environment variables are system wide and constant(donot change)
