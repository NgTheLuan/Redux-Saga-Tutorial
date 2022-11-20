import { ICity } from 'models';
import { ListResponse } from './../models/common';
import axiosClient from './axiosClient';

const cityApi = {
  getAll(): Promise<ListResponse<ICity>> {
    const url = '/cities';
    return axiosClient.get(url);
  },
};

export default cityApi;
