import { Router } from "express";
import { UrlController } from "../controller/url.controller";
const router = Router();

router.post("/shorten", UrlController.shorten);
router.get("/:code", UrlController.redirect);
router.get("/info/:code", UrlController.getInfo);

export default router;
