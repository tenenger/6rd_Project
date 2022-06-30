import { useQuery } from "react-query";

import { UserService } from "@src/services";

const useRequest = () => {
  return useQuery("me", UserService.me, {
    refetchInterval: 500,
  });
};

export default useRequest;
