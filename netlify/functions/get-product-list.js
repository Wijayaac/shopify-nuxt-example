/**
 * API Endpoint
 *
 * Purpose: Fetch first 100 products of the store
 *
 * Example:
 * ```
 * fetch('/.netlify/functions/get-product-list', {
 *   method: 'POST'
 * })
 * ```
 *
 * ! POST method is intentional for future enhancement
 *
 * TODO: Add enhancement for pagination
 */

const { postToShopify } = require('./utils/postToShopify')

exports.handler = async () => {
  try {
    console.log('--------------------------------')
    console.log('Retrieving product list...')
    console.log('--------------------------------')
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList {
          products(sortKey: TITLE, first: 10) {
            edges {
              node {
                id
                handle
                description
                title
                productType
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}
