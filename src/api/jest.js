import mockData from '../matrix.json';

const headers = {
  'Content-Type': 'application/json',
};

const jest = {
  async fetch({ file }) {
    // const url = 'http://localhost:8080/' + file;
    // const response = await fetch(url, {
    //   method: 'GET',
    //   headers,
    // });

    // const data = await response.json();
    // return data;

    return Promise.resolve(mockData);
  },
};

export default jest;
