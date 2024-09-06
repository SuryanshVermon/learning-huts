import express from "express";
import { DonarController, NgoController } from "../controllers";
import { generate } from "../ngo_data/generateNgo";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API working" });
});
router.get("/generate", generate);
router.post("/donar", DonarController.addDonar);
router.post("/search", DonarController.searchDonars);
router.post("/ngo", NgoController.searchNgo);
export default router;
