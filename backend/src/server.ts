import app from "./app";

import { environment, port } from "./config";

app.listen(port, () => {
  console.log(
    `✅ Server started successfully on PORT : ${port} in ${environment} mode.`
  );
});
