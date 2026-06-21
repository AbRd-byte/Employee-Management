export interface RegistrationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  password: string;
  confirmPassword: string;
}

export interface RegistrationResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface AuthState {
  loading: boolean;
  user: RegistrationResponse | null;
  error: string | null;
}
