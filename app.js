const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const port = process.env.PORT || 4000;
const app = express();

app.use(helmet());
app.use(cors());

app.listen(port, () => console.log(`\nListening on port ${port}\n`));
