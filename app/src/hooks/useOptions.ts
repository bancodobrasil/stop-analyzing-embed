import axios from 'axios';
import { useQuery } from 'react-query';

import { Option } from '../types';

// fetches options and return only choices
const getOptions = async () => {
  const { data } = await axios({
    method: 'get',
    url: `${process.env.REACT_APP_BACKEND_URL}/choice`,
    responseType: 'json',
    withCredentials: true,
  });
  return data.choices;
};

// query for options
export default function useOptions() {
  return useQuery<Option[], Error>('options', getOptions, {
    refetchOnWindowFocus: false,
  });
}
