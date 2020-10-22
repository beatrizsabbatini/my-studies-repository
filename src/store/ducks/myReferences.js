// Action Types
export const Types = {
  GET_MY_REFERENCES_REQUEST: "myReferences/get my references request",
  GET_MY_REFERENCES_SUCCESS: "myReferences/get my references success",
  GET_MY_REFERENCES_ERRORS: "myReferences/get my references errors",
};
//Initial state
const initialState = {
  references: undefined,
  loading: false,
  errors: undefined
};
//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_MY_REFERENCES_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.GET_MY_REFERENCES_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        references: action.payload
      };

    case Types.GET_MY_REFERENCES_ERRORS:
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
export function getMyReferencesRequest() {
  return {
    type: Types.GET_MY_REFERENCES_REQUEST,
  };
}

export function getMyReferencesSuccess(references) {
  return {
    type: Types.GET_MY_REFERENCES_SUCCESS,
    payload: references
  };
}

export function getMyReferencesErrors(errors) {
  return {
    type: Types.GET_MY_REFERENCES_ERRORS,
    payload: errors
  };
}
