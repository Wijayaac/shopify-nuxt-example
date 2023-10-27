/**
 * API Endpoint
 *
 * * Purpose: Get checkout URL from an existing cart
 * @param {string} cartId
 *
 * Example:
 *```
 * fetch('/.netlify/functions/get-checkout-url', {
 *   method: 'POST',
 *   body: JSON.stringify({ cartId: '12345' })
 * })
 * ```
 */

const { postToShopify } = require('./utils/postToShopify')

exports.handler = async (event) => {
  const { cartId } = JSON.parse(event.body)

  try {
    console.log('--------------------------------')
    console.log('Retrieving checkout url...')
    console.log('--------------------------------')
    const shopifyResponse = await postToShopify({
      query: `
				query checkoutURL($cartId: ID!) {
					cart(id: $cartId) {
						checkoutUrl
					}
				}
				`,
      variables: {
        cartId,
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse),
    }
  } catch (error) {
    console.log(error)
  }
}
