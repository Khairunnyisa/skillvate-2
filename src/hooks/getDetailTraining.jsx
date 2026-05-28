import handlingError from "../utils/errorHandling";
import { apiUrl } from "../api/baseURL";
import { useQuery } from "@tanstack/react-query";

const useGetDetailTraining= ({ condition = false, trainingId }) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["detailTraining", trainingId],
    queryFn: async () => {
      try {
        const res = await apiUrl.get(`/api/sub-trainings/${trainingId}?populate=*`);
        return res.data.data;
      } catch (error) {
        handlingError(error);
        return error;
      }
    },
    gcTime: 0,
    enabled: condition,
  });

  return { data, isLoading, error, refetch };
};

export default useGetDetailTraining;
