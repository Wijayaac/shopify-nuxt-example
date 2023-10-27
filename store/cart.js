import { formatCurrency } from '../utils/currency'

export const state = () => ({
  base: {
    id: '',
    lines: {
      edges: [],
    },
    estimatedCost: {
      subtotalAmount: {},
      totalAmount: {},
    },
  },
  checkoutUrl: '',
})

export const getters = {
  id: (state) => {
    return state.base?.id ? state.base.id : ''
  },
  items: (state) => {
    if (state.base && state.base.lines) {
      return state.base.lines.edges
    } else {
      return []
    }
  },
  size: (_, getters) => {
    if (getters.items.length > 0) {
      return getters.items.reduce((acc, cv) => {
        return acc + cv.node.quantity
      }, 0)
    } else {
      return 0
    }
  },
  subtotal: (state) => {
    if (state.base && state.base.estimatedCost) {
      const subtotal = state.base.estimatedCost.subtotalAmount

      return formatCurrency(subtotal.amount, subtotal.currencyCode)
    }
  },
  tax: (state) => {
    if (state.base && state.base.estimatedCost) {
      const tax = state.base.estimatedCost.totalTaxAmount
        ? state.base.estimatedCost.totalTaxAmount
        : {
            amount: 0,
            currencyCode: 'USD',
          }

      return formatCurrency(tax.amount, tax.currencyCode)
    }
  },
  total: (state) => {
    if (state.base && state.base.estimatedCost) {
      const total = state.base.estimatedCost.totalAmount

      return formatCurrency(total.amount, total.currencyCode)
    }
  },
  checkoutUrl: (state) => {
    return state.checkoutUrl
  },
}

export const mutations = {
  setBase(state, response) {
    state.base = response
  },
  setId(state, id) {
    state.base.id = id
  },
  setCheckoutUrl(state, url) {
    state.checkoutUrl = url
  },
}

export const actions = {
  updateBase({ commit }, response) {
    window.localStorage.removeItem('shopifyNuxtCart')
    window.localStorage.setItem('shopifyNuxtCart', JSON.stringify(response))
    commit('setBase', response)
  },
  updateId({ commit }, id) {
    window.localStorage.removeItem('shopifyNuxtCartId')
    window.localStorage.setItem('shopifyNuxtCartId', id)
    commit('setId', id)
  },
  updateCheckoutURL({ commit }, url) {
    window.localStorage.removeItem('shopifyNuxtCheckoutUrl')
    window.localStorage.setItem('shopifyNuxtCheckoutUrl', url)
    commit('setCheckoutUrl', url)
  },
}
