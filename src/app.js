import express, { response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import firestore from "./firebase";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", async (req, res) => {
  console.log("call strat server");

  try {
    const fsRef = await firestore.collection("Boards");

    await fsRef.get().then((response) =>
      response.forEach((doc) => {
        console.log(doc.data().title);
      })
    );
  } catch (e) {
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});
