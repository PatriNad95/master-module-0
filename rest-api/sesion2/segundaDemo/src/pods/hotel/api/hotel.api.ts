import { Hotel } from './hotel.api-model';
import { Lookup } from '#common/models';
import { mockCities, mockHotelCollection } from './hotel.mock-data';

const hotelListUrl = '/api/hotels';
const citieListsUrl = '/api/cities';

export const getHotel = async (id: string): Promise<Hotel> => {
  //Ejemplo usando axios
  // const { data } = await axios.get<Hotel>(`${hotelListUrl}/${id}`);
  // return data;

  return await fetch(`${hotelListUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const getCities = async (): Promise<Lookup[]> => {
  return await fetch(citieListsUrl)
    .then((res) => res.json())
    .then((data) => data);
};

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  if (hotel.id) {
    // Ejemplo usando axios
    // const response = await axios.put(`${hotelListUrl}/${hotel.id}`, hotel);
    const response = await fetch(`${hotelListUrl}/${hotel.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hotel),
    });
    return response.ok;
  }
};
