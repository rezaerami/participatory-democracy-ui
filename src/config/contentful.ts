import axios from 'axios';
import { ENDPOINTS } from 'constants/endpoints';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_API_TOKEN}`,
  },
});

const contentfulClient = (body: any): any =>
  client.post(ENDPOINTS.CONTENTFUL.GRAPHQL(), JSON.stringify(body));

export default contentfulClient;
