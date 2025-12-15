import { getHotelList, Hotel } from '#db/index.js';

export const resolvers = {
  hotels: async (): Promise<Hotel[]> => {
    const hotels = await getHotelList();
    return hotels;
  },
};
