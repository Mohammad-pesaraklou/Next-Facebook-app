const { default: mongoose } = require("mongoose");

function ConnectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.connect(process.env.DB_URI);
  console.log("Connected to db");
}

export { ConnectDB };
