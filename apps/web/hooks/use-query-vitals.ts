import { useQuery } from "@tanstack/react-query";
import { getVitals } from "@/services/get-vitals";

export const useQueryVitals = () =>
  useQuery({ queryKey: ["vitals"], queryFn: getVitals });
