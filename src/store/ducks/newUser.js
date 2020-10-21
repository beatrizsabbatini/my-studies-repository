// Action Types
export const Types = {
  NEW_USER_REQUEST: "newUser/new user request",
  NEW_USER_SUCCESS: "newUser/new user success",
  NEW_USER_ERRORS: "newUser/new user errors",
};
//Initial state
const initialState = {
  loading: false,
  errors: undefined
};
//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.NEW_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
        userData: action.payload
      };
    case Types.NEW_USER_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
      };

    case Types.NEW_USER_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };


    default:
      return state;
  }
}

// Action Creators
export function newUserRequest(userData) {
  return {
    type: Types.NEW_USER_REQUEST,
    payload: userData
  };
}

export function newUserSuccess() {
  return {
    type: Types.NEW_USER_SUCCESS,
  };
}

export function newUserErrors(errors) {
  return {
    type: Types.NEW_USER_ERRORS,
    payload: errors
  };
}
