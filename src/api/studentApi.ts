import axiosClient from './axiosClient';

const studentApi = {
  getAll(): Promise<any> {
    const url = '/students';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default studentApi;
