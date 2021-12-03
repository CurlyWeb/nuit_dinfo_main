import {
  PostData,
  GetData,
  DeleteData,
  UpdateData,
} from "../../Otils/ApiCalls";
export const LoginAction = (data) => async (dispatch) => {
  await PostData("/api/auth/login", data)
    .then((res) => {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          username: "test test",
          email: "test@gmail.com",
        },
      });
      localStorage.setItem("jwt", res.TOKEN);
    })
    .catch((err) => {
      console.log(err);
    });
};
