import axios from "src/configs/axiosConfig";

export const getPieces = async (setData, setLoading) => {
  setLoading(true);
  await axios
    .get(`/api/pieces`)
    .then((res) => {
      if (res) {
        if (res.data) {
          if (res.data.length) {
            return setData(res.data);
          }
        }
        setData([]);
      }
    })
    .catch((err) => {
      console.error("Erro na requisição: ", err);
    });
  setLoading(false);
};
