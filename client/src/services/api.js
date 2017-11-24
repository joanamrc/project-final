import axios from 'axios'

export const getJson = () => {
	const url = 'http://localhost:3005/products'
	return axios.get(url)
		.then (response => {
			return response.data
		})
} 

export const getSingleJson = (productTitle) => {
	const url = `http://localhost:3005/products/${productTitle}`
	return axios.get(url)
		.then (response => {
			return response.data
		})
}

