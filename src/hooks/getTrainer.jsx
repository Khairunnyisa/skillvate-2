import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetTrainer = ({ condition = false }) => {
  return useQuery({
    queryKey: ["trainer"],
    enabled: condition,
    gcTime: 0,

    queryFn: async () => {
      const res = await apiUrl.get(
        "/api/trainers?populate=*"
      );

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetTrainer;