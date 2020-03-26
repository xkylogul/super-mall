import {request} from './network'
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods (type, page) {
  return request({
    url: '/api/wh/home/data',
    params: {
      type,
      page
    }
  })
}
