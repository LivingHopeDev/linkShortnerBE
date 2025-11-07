import { nanoid } from "nanoid";
import { isValidUrl } from "../utils/urlValidator";
import { ApiError, ApiSuccess } from "../utils/apiResponse";
interface UrlRecord {
  originalUrl: string;
  createdAt: Date;
  visitCount: number;
}

export class UrlService {
  private static urlMap: Map<string, UrlRecord> = new Map();

  static async shortenUrl(url: string) {
    if (!isValidUrl(url)) throw ApiError.badRequest("Invalid URL format");

    const code = nanoid(6);
    const record = { originalUrl: url, createdAt: new Date(), visitCount: 0 };
    this.urlMap.set(code, record);

    const shortUrl = `http://localhost:5000/${code}`;
    return ApiSuccess.ok("URL shortened successfully", { shortUrl });
  }

  static async getOriginalUrl(code: string) {
    const record = this.urlMap.get(code);
    if (!record) throw ApiError.notFound("URL not found");

    record.visitCount++;
    return record.originalUrl;
  }

  static async getUrlInfo(code: string) {
    const record = this.urlMap.get(code);
    if (!record) throw ApiError.notFound("URL not found");

    return ApiSuccess.ok("URL info retrieved", {
      originalUrl: record.originalUrl,
      createdAt: record.createdAt,
      visitCount: record.visitCount,
    });
  }
}
