import {get,post} from '../main.js'
export async function getSwiperList(data) {
	return await get('/resources/getSwiperList', data)
}
