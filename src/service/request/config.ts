// const ENV_BASE_NAME = import.meta.env.VITE_APP_BASE_NAME

// let BASE_URL: string
// const TIME_OUT = 5000

// if (ENV_BASE_NAME === 'development') {
//   BASE_URL = 'https://api.apiopen.top'
// } else if (ENV_BASE_NAME === 'production') {
//   BASE_URL = 'https://api.apiopen.top'
// }

// export { BASE_URL, TIME_OUT }

// vue-cli
let BASE_URL: string
const TIME_OUT = 5000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://api.apiopen.top'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://api.apiopen.top'
}

export { BASE_URL, TIME_OUT }
