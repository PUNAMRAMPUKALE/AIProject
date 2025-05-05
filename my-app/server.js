const { serve } = require("inngest/express"); // or "inngest/next" if you're using Next.js
const { inngest } = require("./inngest");
const { helloWorld } = require("./inngest/hello");

serve({
  client: inngest,
  functions: [helloWorld],
});
