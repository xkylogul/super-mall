import {request} from './network'
export function getCategory () {
  return request({
    url: 'api/wh/category'
  })
}

export function getSubcategory (maitKey) {
  return request({
    url: 'api/wh/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail (miniWallkey, type) {
  return request({
    url: 'api/wh/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
