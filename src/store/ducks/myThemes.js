// Action Types
export const Types = {
  GET_THEMES_REQUEST: "myThemes/get themes request",
  GET_THEMES_SUCCESS: "myThemes/get themes success",
  GET_THEMES_ERRORS: "myThemes/get themes errors",
};
//Initial state
const initialState = {
  themes: [],
  loading: false,
  errors: undefined
};
//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_THEMES_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.GET_THEMES_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        themes: action.payload
      };

    case Types.GET_THEMES_ERRORS:
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
export function getThemesRequest() {
  return {
    type: Types.GET_THEMES_REQUEST,
  };
}

export function getThemesSuccess(themes) {
  return {
    type: Types.GET_THEMES_SUCCESS,
    payload: themes
  };
}

export function getThemesErrors(errors) {
  return {
    type: Types.GET_THEMES_ERRORS,
    payload: errors
  };
}

