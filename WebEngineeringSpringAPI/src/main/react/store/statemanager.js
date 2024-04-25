import {create} from 'zustand';

const useApodStore = create((set) => ({
    apodData: null,
    date: new Date().toISOString().split('T')[0],
    count: '',
    results: [],
    startDate: '',
    endDate: '',
    setApodData: (data) => set({ apodData: data }),
    setDate: (date) => set({ date }),
    setCount: (count) => set({ count }),
    setResults: (results) => set({ results }),
    setStartDate: (startDate) => set({ startDate }),
    setEndDate: (endDate) => set({ endDate }),
    fetchApod: async (queryDate = '') => {
        const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
        // let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
        let url =`/get/nasaapodapi`
        if (queryDate) {
            url += `?date=${queryDate}`;
        }
        console.log(url)
        try {
            const response = await fetch(url);
            const data = await response.json();
            set({ apodData: data });
        } catch (error) {
            console.error("Failed to fetch APOD data:", error);
        }
    },
    fetchApodCount: async (count) => {
        const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
        // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
        let url =`/get/nasaapodapi?count=${count}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            set({ results: Array.isArray(data) ? data : [data] });
        } catch (error) {
            console.error("Failed to fetch APOD data:", error);
        }
    },
    fetchApodDateRange: async (startDate, endDate) => {
        const apiKey = 'JVxN7pjB45luFSxGwHkTLntxg7wPrMAS8yra2F74'; // Replace with your actual API key
        // const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${endDate}`;
        let url =`/get/nasaapodapi?start_date=${startDate}&end_date=${endDate}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            set({ results: Array.isArray(data) ? data : [data] });
        } catch (error) {
            console.error("Failed to fetch APOD data:", error);
        }
    }
}));

export default useApodStore;
