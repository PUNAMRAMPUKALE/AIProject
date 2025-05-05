const { inngest } = require("../inngest");

const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello" },
  async ({ event }) => {
    // 🔍 Log incoming event data
    console.log("📥 Event received:", event);

    // Do your processing here...
    const message = `Hello from Inngest in dev!`;
    const user = event.data.user || "anonymous";

    // 🔍 Log the response you're about to return
    console.log("📤 Responding with:", { message, user });

    return {
      body: {
        message,
        user,
      },
    };
  }
);

module.exports = { helloWorld };
