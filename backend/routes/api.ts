import { Router } from "express";
import { list, get } from "../controllers/images"

const router = Router();

router.get("/", list)
router.get("/image", list);
router.get("/image/:id", get);

export default router;
