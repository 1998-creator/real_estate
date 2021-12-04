import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e6aaefbca7msh9096a04f78b3d29p1138a7jsn77e40b8589ed'
        },
    });
      
    return data;
  }