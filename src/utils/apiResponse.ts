export class ApiSuccess {
  static ok(message: string, data: any = {}, status_code = 200) {
    return { success: true, message, data, status_code };
  }
}

export class ApiError {
  static badRequest(message: string, status_code = 400) {
    return { success: false, message, status_code };
  }

  static notFound(message: string, status_code = 404) {
    return { success: false, message, status_code };
  }

  static internal(message: string, status_code = 500) {
    return { success: false, message, status_code };
  }
}
