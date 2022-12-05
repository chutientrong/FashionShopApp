export const API_BASE_URL = "http://192.168.1.60:5000";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

// End Points
export const SIGNIN = getApiUrl("/api/v1/login");
export const SIGNUP = getApiUrl("/api/v1/users/register");
export const LOGOUT = getApiUrl("/api/v1/logout");
export const RESET_PASSWORD = getApiUrl("/api/v1/resetpassword");
export const GET_ONE = getApiUrl("/api/v1/me");
export const UPDATE_USER = getApiUrl("/api/v1/updateme");
export const GET_ALL_USER = getApiUrl("/api/v1/");
export const GET_SERVICE = getApiUrl("/api/v1/services");
