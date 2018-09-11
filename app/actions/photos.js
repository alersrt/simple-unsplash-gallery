import { getPhotosUri } from '../constants/apiUnsplash'
import { itemsFetchData } from './items'

const params = {
  headers: {
    Authorization: 'Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
  },
}

export let photosFetchData = page => itemsFetchData(getPhotosUri(page, 10, 'latest'), params)