import { getComments, getUsers, getProducts } from "./api.js";

const productsData = getProducts().then((products) => products);

const usersData = getUsers().then((users) => users);

const commentsData = getComments().then((comments) => comments);

export { productsData, usersData, commentsData };
