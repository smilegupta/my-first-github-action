function getPreferences (key) {
  const preferences = {
    'experiments.1cc_enable_shopify_taxes': 'test'
  }

  if (key in preferences) {
    return preferences[key]
  } else {
    return null
  }
}

export const enableShopifyTaxes = () => {
  return getPreferences('experiments.1cc_enable_shopify_taxes') === 'test'
}
