/**
 * The main url of the Unsplash api.
 * @type {string}
 */
let BASE_URL = 'https://api.unsplash.com/'

/**
 * Return URI for getting of photos.
 * @param page number of the page.
 * @param perPage photos' amount per page.
 * @param orderBy order of photos, can to get the next values: latest, oldest, popular.
 * @returns {string}
 */

let getPhotosUri1 = function (page, perPage, orderBy) {
  return BASE_URL + 'photos?page=' + page + '&per_page=' + perPage + '&order_by=' + orderBy
}
let getPhotosUri2 = (page, perPage) => getPhotosUri1(page, perPage, 'latest')
let getPhotosUri = page => getPhotosUri2(page, 10, 'latest')

export { getPhotosUri }

/**
 * Return default URI for getting of photos.
 * @type {string}
 */
export let DEFAULT_PHOTOS_URL = getPhotosUri(1, 10, 'latest')

/**
 * Returns URI for photo's getting by its id.
 * @param id identifier of the photo.
 * @returns {string}
 * @constructor
 */
export let getPhotoUri = id => BASE_URL + 'photos/:' + id

