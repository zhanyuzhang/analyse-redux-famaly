const defaultState = {
  isPending: true,
  image: null
}

export default function(state = defaultState, action) {
  const { type, payload } = action;

  console.log(type, payload);

  switch(type) {
    case 'GET_DOG_PENDING':
      return defaultState;
    case 'GET_DOG_FULFILLED':
      return {
        isPending: false,
        image: action.payload.message
      }
    default:
      return state;
  }
}