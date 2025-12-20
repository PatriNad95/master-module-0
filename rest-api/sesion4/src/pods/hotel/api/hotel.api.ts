import axios from 'axios';
import { Hotel } from './hotel.api-model';
import { Lookup } from '#common/models';
import { graphql } from '#core/api';

const cityListUrl = '/api/cities';

interface GetHotelResponse {
  hotel: Hotel;
}

export const getHotel = async (id: string): Promise<Hotel> => {
  const query = `
    query ($id: ID!) {
      hotel(id: $id) {
        id
        name
        address1
        city
        hotelRating
        shortDescription
        thumbNailUrl
      }
    }
  `;
  const { hotel } = await graphql<GetHotelResponse, { id: string }>({
    query,
    variables: { id },
  });
  return hotel;
};

interface GetCitiesResponse {
  cities: Lookup[];
}

export const getCities = async (): Promise<Lookup[]> => {
  const query = `
    query {
      cities {
        id
        name
      }
    }
  `;

  const { cities } = await graphql<GetCitiesResponse>({
    query,
  });

  return cities;
};

interface SaveHotelResponse {
  saveHotel: boolean;
}

export const saveHotel = async (hotel: Hotel): Promise<boolean> => {
  const query = `
    mutation ($hotel: HotelInput!) {
      saveHotel(hotel: $hotel)
    }
  `;
  const hotelInput = {
    id: hotel.id,
    name: hotel.name,
    address1: hotel.address1,
    city: hotel.city,
    hotelRating: hotel.hotelRating,
    shortDescription: hotel.shortDescription,
  };
  const { saveHotel } = await graphql<
    SaveHotelResponse,
    { hotel: typeof hotelInput }
  >({
    query,
    variables: { hotel: hotelInput },
  });
  return saveHotel;
};
