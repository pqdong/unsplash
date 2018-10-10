import fetch from 'isomorphic-unfetch'

export const API = 'https://api.unsplash.com'
export const API_VERSION = 'v1'
export const ACCESS_KEY =
  'b9c4628951461ba6be789fca757011a824a91d353af8255ed586cb00fc560108'
export const SECRET_KEY =
  'b422889eccd2d97370d89c2d33a66f15cc07a9e2fc5d0ddb8bbcad87cc7ab8eb'

export const fetchPublic = (endpoint, options = {}) => {
  const finalOptions = Object.assign({}, options, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      'Accept-Version': API_VERSION,
    },
  })

  return fetch(`${API}${endpoint}`, finalOptions)
}
