import axios from 'axios';

export const createObj = async (object) => {
    await axios.post('/api/', object);
};

export const displayAll = async () => {
    let temp = await axios.get('/api/');
    return temp.data
};

export const updateObj = async (object) => {
    await axios.patch('/api/' + object.id, object);
};

export const deleteObj = async (object) => {
    await axios.delete('/api/' + object.id);
};

export const findObj = async (keyword) => {
    let temp = await axios.get('/api/' + keyword);
    return temp.data
};