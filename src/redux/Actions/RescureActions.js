import { PostData , GetData , DeleteData , UpdateData } from "../../Otils/ApiCalls"
export const NewSaveActions = (data) => async (dispatch) => {
    console.log(data)
    await PostData("/api/rescue/add", data)
      .then((res) => {
          
      dispatch({
          type :"ADD_RESCUE",
          payload : res
      })
        localStorage.setItem("jwt", res.TOKEN);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  