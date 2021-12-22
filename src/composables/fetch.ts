import { createFetch, useFetch } from '@vueuse/core'

export const placeholderFetch = createFetch({ baseUrl: 'https://jsonplaceholder.typicode.com' })

export const yesNoFetch = useFetch('https://yesno.wtf/api').get().json()
