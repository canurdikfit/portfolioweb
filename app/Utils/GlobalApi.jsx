const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://isimeme.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getSlider = () => axiosClient.get("Sliders?populate=*");
const getAccomplishment = () => axiosClient.get("Accomplishments?populate=*");
const getCareer = () => axiosClient.get("Careers?populate=*");
const getAward = () => axiosClient.get("Awards?populate=*");
const getProject = () => axiosClient.get("Projects?populate=*");
const getTestimonial = () => axiosClient.get("Testimonials?populate=*");
const getProjectbyId = (id) =>
  axiosClient.get("Projects/" + id + "?populate=*");

export default {
  getSlider,
  getAccomplishment,
  getCareer,
  getAward,
  getProject,
  getProjectbyId,
  getTestimonial,
};
