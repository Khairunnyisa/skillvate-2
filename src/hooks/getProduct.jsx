import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetProduct = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["product"],
    enabled: condition,

    queryFn: async () => {
      const res = await apiUrl.get("/api/trainings?populate=*");

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetProduct;