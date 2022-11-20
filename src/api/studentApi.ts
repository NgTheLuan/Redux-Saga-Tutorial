import { ListResponse } from './../models/common';
import { IStudent } from './../models/student';
import axiosClient from './axiosClient';

const studentApi = {
  getAll(): Promise<ListResponse<IStudent>> {
    const url = '/students';
    return axiosClient.get(url);
  },

  getById(id: IStudent): Promise<IStudent> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  add(data: IStudent): Promise<ListResponse<IStudent>> {
    const url = '/students';
    return axiosClient.post(url, data);
  },

  update(data: IStudent): Promise<IStudent> {
    const url = '/students';
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
