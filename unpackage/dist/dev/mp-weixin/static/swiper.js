import {get,post} from '../main.js'
export async function getRotationChartList(data) {
	return await get('/rotationChart/getRotationChartList', data)
}
