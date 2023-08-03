import { $instance } from './baseURL';

export const getTransactionsRequest = async () => {
    const {data} = await $instance.get('/transactions');
    return data;
};

export const addTransactionsRequest = async (formData) => {
    const {data} = await $instance.post('/transactions', formData);
    return data;
};

export const patchTransactionsRequest = async (transactionId) => {
    const {data} = await $instance.patch(`/transactions/${transactionId}`);
    return data;
};

export const deleteTransactionsRequest = async (transactionId) => {
    const {data} = await $instance.delete(`/transactions/${transactionId}`);
    return data;
};