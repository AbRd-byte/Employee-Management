import api from "./axios";

import { API } from "../constants/api.constants";

import type {
  RegistrationRequest,
  RegistrationResponse,
} from "../interfaces/auth.interface";

export const registerUser = async (
  data: RegistrationRequest,
): Promise<RegistrationResponse> => {
  const response = await api.post<RegistrationResponse>(API.REGISTER, data);

  return response.data;
};
