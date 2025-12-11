import axios from 'axios';
import { HotelEntityApi } from './hotel-collection.api-model';
import { mockHotelCollection } from './hotel-collection.mock-data';

let hotelCollection = [...mockHotelCollection];
const url = '/api/hotels';

export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  // Ejemplo usando fetch
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }

  // Ejemplo usando axios
  // const { data } = await axios.get<HotelEntityApi[]>(url);
  // return data;
};

export const deleteHotel = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  return response.ok;
  // Ejemplo usando axios
  // await axios.delete(`${url}/${id}`);
  // return true;
};
