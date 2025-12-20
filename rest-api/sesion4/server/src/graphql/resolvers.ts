import {
  City,
  deleteHotel,
  getCities,
  getHotel,
  getHotelList,
  Hotel,
  HotelEdit,
  insertHotel,
  updateHotel,
} from '#db/index.js';

interface SaveHotelArgs {
  hotel: HotelEdit;
}

export const resolvers = {
  hotels: async (): Promise<Hotel[]> => {
    const hotels = await getHotelList();
    return hotels;
  },

  hotel: async (args: { id: string }): Promise<Hotel> => {
    const hotel = await getHotel(args.id);
    return hotel;
  },

  saveHotel: async (args: SaveHotelArgs): Promise<boolean> => {
    if (args.hotel.id) {
      await updateHotel(args.hotel);
    } else {
      await insertHotel(args.hotel);
    }
    return true;
  },

  cities: async (): Promise<City[]> => {
    const cities = await getCities();
    return cities;
  },

  deleteHotel: async (args: { id: string }): Promise<boolean> => {
    return await deleteHotel(args.id);
  },
};
