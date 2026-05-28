

import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetAboutUs = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["about-us"],
    enabled: condition,
    gcTime: 0, 
    queryFn: async () => {
      const res = await apiUrl.get(
        `/api/about`
      );
      return res.data.data;
    },
    onError: handlingError,
  });
};

export default useGetAboutUs;
