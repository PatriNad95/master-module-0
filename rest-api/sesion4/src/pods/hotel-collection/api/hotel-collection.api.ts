import axios from 'axios';
import { HotelEntityApi } from './hotel-collection.api-model';
import { graphql } from '#core/api';

const url = '/api/hotels';

interface GetHotelCollectionResponse {
  hotels: HotelEntityApi[];
}

export const getHotelCollection = async (): Promise<HotelEntityApi[]> => {
  const query = `
    query {
      hotels {
        id
        name
        shortDescription
        hotelRating
        address1
        thumbNailUrl
      }
    }`;
  const { hotels } = await graphql<GetHotelCollectionResponse>({ query });
  return hotels;
};

interface DeleteHotelResponse {
  deleteHotel: boolean;
}

export const deleteHotel = async (id: string): Promise<boolean> => {
  const query = `
    mutation ($id: ID!) {
      deleteHotel(id: $id)
    }
  `;
  const { deleteHotel } = await graphql<DeleteHotelResponse, { id: string }>({
    query,
    variables: { id },
  });
  return deleteHotel;
};
