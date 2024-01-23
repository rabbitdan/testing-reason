import { defineStore } from 'pinia'

export const useMenuStore = defineStore('Menu', {
  state: () => {
    return {
      name: 'main',
      items: [
        {
          url: 'home',
          text: 'Home'
        },
        {
          url: 'what',
          text: 'What we do'
        },
        {
          url: 'divide',
          text: 'The digital divide'
        },
        {
          url: 'involved',
          text: 'Get involved'
        },
        {
          url: 'network',
          text: 'Our network'
        },
        {
          url: 'insights',
          text: 'Insights'
        },
      ],
      hasChanged: false,
    }
  },
})
