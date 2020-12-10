import defaultUser from '../utils/default-user';
import axios from 'axios';

export const URL = "http://localhost:8080/";
export const API_URL = "http://localhost:8080/api";
export const my_app = axios.create({ baseURL: API_URL });

export async function signIn(username, password) {
  try {
    const requestURL = API_URL + '/login';
    const requestOptions = {
      method: "POST",
      headers: new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Content-Type': 'application/json',                  
      }),
      body: JSON.stringify({ username, password }),
    }

    return fetch(requestURL, requestOptions)
            .then(response => response.json())
            .then(responseData => {
              return {
                isOk: true,
                data: defaultUser,
                token: responseData.token
              };
            })
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request
    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to create account"
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to change password"
    }
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true
    };
  }
  catch {
    return {
      isOk: false,
      message: "Failed to reset password"
    };
  }
}
