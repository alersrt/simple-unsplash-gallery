import { DEFAULT_PHOTOS_URL, getPhotoUri } from '../constants/apiUnsplash'

const params = {
  headers: {
    Authorization: 'Client-ID ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
  },
}

/**
 * Fetches list of photos.
 * @returns {Promise<Response | never>}
 */
export let fetchPhotos = () => fetch(DEFAULT_PHOTOS_URL, params).then(response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}).then(response => response.json())

/**
 * Fetches photo.
 * @param id
 * @returns {Promise<Response | never>}
 */
export let fetchPhoto = id => fetch(getPhotoUri(id), params).then(response => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}).then(response => response.json())