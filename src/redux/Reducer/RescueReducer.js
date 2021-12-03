const InitState = {
  Rescue: [],
};
const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case action.type == "GET_RESCUES":
      return {
        ...state,
        Rescue: action.payload,
      };
    case action.type == "ADD_RESCUE":
      let newData = state.Rescue.unshift(action.payload);
      return {
        ...state,
        Rescue: newData,
      };
    case action.type == "DELETE_RESCUE": {
      let oldData = state.Rescue;
      let NewData = [];
      oldData.map((data) => {
        if (data.Id != action.payload.Id) {
          NewData.push(data);
        }
      });
      return { ...state, Rescue: newData };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
