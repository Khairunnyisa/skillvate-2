import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetWhy = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["why"],
    enabled: condition,

    queryFn: async () => {
      const res = await apiUrl.get("/api/whies");

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetWhy;