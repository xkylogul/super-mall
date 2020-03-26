const actions = {
  addCart (context, payload) {
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
      // eslint-disable-next-line no-undef
      context.commit('addCounter', oldProduct)
    } else {
      payload.count = 1
      context.commit('addToCart', payload)
    }
  }
}
export default actions
