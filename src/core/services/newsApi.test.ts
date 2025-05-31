import axios from 'axios';
import { getWSJNews } from './newsApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getWSJNews', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('handles errors', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Error fetching news'));
    await expect(getWSJNews()).rejects.toThrow('Error fetching news');
  });
});
