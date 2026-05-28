import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetPartner = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["partner"],
    enabled: condition,
    gcTime: 0,

    queryFn: async () => {
      const res = await apiUrl.get(
        "/api/partners?populate=*"
      );

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetPartner;