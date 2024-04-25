export interface RegisterPayload {
  email: string;
  password: string;
  // refreshToken:boolean
}
export interface RegisterResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
