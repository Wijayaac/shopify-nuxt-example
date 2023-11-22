/**
 * Get Menu Navigation API Endpoint
 *
 * * Purpose: Retrieve data on a specific product
 * @param {string} menuHandle - kebab-cased-menu-name
 *
 * Example:
 * ```
 * fetch('/.netlify/functions/get-header-menu', {
 *   method: 'POST',
 *   body: JSON.stringify({ menuHandle: 'main-menu' })
 * })
 * ```
 */

const { postToShopify } = require('./utils/postToShopify')

exports.handler = async (event) => {
  const { menuHandle } = JSON.parse(event.body)

  try {
    console.log('--------------------------------')
    console.log('Retrieving menu details...')
    console.log('--------------------------------')
    const shopifyResponse = await postToShopify({
      query: `
				query getHeaderMenu($handle: String!) {
					menu(handle: $handle) {
						items {
							id
							title
							url
						}
					}
				}
			`,
      variables: {
        handle: menuHandle,
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
