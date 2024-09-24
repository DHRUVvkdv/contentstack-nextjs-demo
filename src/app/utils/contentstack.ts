import * as Contentstack from 'contentstack'

if (!process.env.CONTENTSTACK_API_KEY) {
  throw new Error('CONTENTSTACK_API_KEY is not defined')
}

if (!process.env.CONTENTSTACK_DELIVERY_TOKEN) {
  throw new Error('CONTENTSTACK_DELIVERY_TOKEN is not defined')
}

if (!process.env.CONTENTSTACK_ENVIRONMENT) {
  throw new Error('CONTENTSTACK_ENVIRONMENT is not defined')
}

const Stack = Contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: process.env.CONTENTSTACK_ENVIRONMENT,
})

export default Stack