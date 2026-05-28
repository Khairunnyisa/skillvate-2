import { useQuery } from "@tanstack/react-query";
import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";

const useGetFaq = ({
  condition = false,
}) => {
  return useQuery({
    queryKey: ["faq"],
    enabled: condition,

    queryFn: async () => {
      const res = await apiUrl.get("/api/faqs");

      return res.data.data;
    },

    onError: handlingError,
  });
};

export default useGetFaq;