const headers = {
  'Content-Type': 'application/json',
};

const jest = {
  async fetch({ id }) {
    const url = 'http://localhost:5000/api/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    const data = await response.json();
    return data;
  },
};

export default jest;
