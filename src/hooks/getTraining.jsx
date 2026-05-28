import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetTraining = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["training"],
    enabled: condition,

    queryFn: async () => {
      const res = await apiUrl.get("/api/sub-trainings?populate=*");

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetTraining;