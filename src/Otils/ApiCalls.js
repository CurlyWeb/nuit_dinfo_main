import axios from "axios";
const url = "https://1f31-41-229-82-254.ngrok.io";

export const PostData = async (path, data) => {
    debugger;
  await axios
    .post(url + path, data)
    .then((res) => {
     
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const GetData = async (path, data) => {
  await axios
    .get(url + path)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const UpdateData = async (path, data) => {
  await axios
    .put(url + path)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const DeleteData = async (path, data) => {
    await axios
      .delete(url + path)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  };
  
  