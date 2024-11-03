import apiService from "./apiService"

const register = (params) => {
  return apiService.post('/api/Account/v1/register', params)
}

export const configService = {
    register,
}
