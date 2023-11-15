import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { toast } from 'sonner';

const apiUrl = import.meta.env.VITE_API_URL;

const customFetch = axios.create({
  baseURL: apiUrl,
});

export const useGetData = () => {
  const {
    mutate: getData,
    isLoading,
    data,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: () => customFetch.get('/your-route-url'),
    onSuccess: () => {
      toast.success('We got a response!');
    },
    onError: (error) => {
      toast.error(
        'status : ' + error.response.status + ', msg :' + error.response.data
      );
    },
  });
  return { getData, isLoading, data, isError, isSuccess };
};
