import axios from 'axios';
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.

const getData = async () => {
  try {
    const { data } = await axios.get('/api/vehicles.json');

    const promises = data.map((vehicle) => request(vehicle.apiUrl));
    return Promise.all(promises)
      .then((results) => {
        console.log(
          results.filter((vehicle) => vehicle && vehicle.price)
        );
        return results
          .filter((vehicle) => vehicle && vehicle.price) // [4 vehicle]
          .map((vehicle) => {
            return {
              ...data.find((car) => car.id === vehicle.id),
              ...vehicle,
            };
          });
      })
      .catch((error) => {
        return error;
      });
  } catch (error) { }
};
export default getData;
