export interface ErrorMessage {
  code?: string;
  message: string;
}

export interface BaseApiResponse<T> {
  data?: T;
  error?: ErrorMessage;
}
