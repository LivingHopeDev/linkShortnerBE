import type { Request, Response } from "express";
import { UrlService } from "../services/url.service";
import { ApiError } from "../utils/apiResponse";
export class UrlController {
  static async shorten(req: Request, res: Response) {
    try {
      const { url } = req.body;
      const result = await UrlService.shortenUrl(url);
      res.status(result.status_code).json(result);
    } catch (err: any) {
      const error = err.status_code ? err : ApiError.internal("Server error");
      res.status(error.status_code).json(error);
    }
  }

  static async redirect(req: Request, res: Response) {
    try {
      const { code } = req.params;
      if (!code) {
        return res
          .status(400)
          .json(ApiError.badRequest("URL code is required"));
      }
      const originalUrl = await UrlService.getOriginalUrl(code);
      res.redirect(302, originalUrl);
    } catch (err: any) {
      const error = err.status_code ? err : ApiError.internal("Server error");
      res.status(error.status_code).json(error);
    }
  }

  static async getInfo(req: Request, res: Response) {
    try {
      const { code } = req.params;
      if (!code) {
        return res
          .status(400)
          .json(ApiError.badRequest("URL code is required"));
      }
      const result = await UrlService.getUrlInfo(code);
      res.status(result.status_code).json(result);
    } catch (err: any) {
      const error = err.status_code ? err : ApiError.internal("Server error");
      res.status(error.status_code).json(error);
    }
  }
}
