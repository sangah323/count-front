import instance from "./axios";

export const getCount = async() => {
    const { data } = await instance.get(`${process.env.REACT_APP_API_URL}/counter`);
    return data.value.value
}

export const postCount = async(newValue) => {
    const {data : { value }} = await instance.post(`${process.env.REACT_APP_API_URL}/counter`, { newValue });
    return value
}