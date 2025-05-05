const { Inngest } = require("inngest");

const inngest = new Inngest({
  name: "My JS App (Dev)",
  env: process.env.INNGEST_ENV || "dev",
});

module.exports = { inngest };
