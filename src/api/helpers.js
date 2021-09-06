import axios from 'axios';

/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */
export async function request(apiUrl) {
  try {
    const { data } = await axios.get(apiUrl);

    return data;
  } catch (error) {
    return null;
  }
}
