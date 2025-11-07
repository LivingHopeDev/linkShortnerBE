# linkshortnerbe

To install dependencies:

```bash
bun install
```

To run:

```bash
bun dev
```

This project was created using `bun init` in bun v1.2.20. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

# 🔗 URL Shortener API (Bun + Express)

A minimal and clean **URL Shortener** backend built using **Bun** and **Express**, following a **Controller → Service → Route** architecture.

This service allows users to:

- Shorten long URLs via a REST API.
- Redirect to the original URL via a short code.
- Retrieve usage info for each short URL (creation time and visit count).

---

## 🧩 Features

✅ Shorten URLs (validated with `http://` or `https://`)  
✅ Redirect users using a short code  
✅ Track usage count and creation timestamp  
✅ Clean, modular code structure (Controller / Service / Route)  
✅ In-memory storage (no DB required)  
✅ CORS-enabled for frontend integration

---

## 🗂️ Project Structure

├── src/
│ ├── controllers/
│ │ └── Url.Controller.ts
│ ├── services/
│ │ └── Url.service.ts
│ ├── routes/
│ │ └── UrlRoutes.ts
│ ├── utils/
│ │ ├── ApiResponse.ts
│ │ └── Url.Validator.ts
│
│ └── index.ts
├── package.json
└── README.md

## API Endpoints

1. Shorten a URL

POST /shorten

Request Body:

{
"url": "https://example.com"
}

Response:

{
"success": true,
"message": "URL shortened successfully",
"data": {
"shortUrl": "http://localhost:5000/abc123"
},
"status_code": 200
}

Errors:

{
"success": false,
"message": "Invalid URL format",
"status_code": 400
}

2. Redirect to Original URL

GET /:code

Redirects the user (HTTP 302) to the original long URL.
If code not found → returns 404 JSON:

{
"success": false,
"message": "URL not found",
"status_code": 404
}

3. Get URL Info

GET /info/:code

Returns metadata for a given short code.

Response:

{
"success": true,
"message": "URL info retrieved",
"data": {
"originalUrl": "https://example.com",
"createdAt": "2025-11-07T12:00:00.000Z",
"visitCount": 4
},
"status_code": 200
}
