import { defineStore } from 'pinia'

export const useUserTypeStore = defineStore('UserType', {
  state: () => {
    return {
      name: 'user',
      types: [
        'A person',
        'A researcher',
        'A community organisation'
      ],
      goals: [
        'improve my online skills',
        'help',
        'work for you',
        'learn about the digital divide',
        'donate'
      ],
      hasChanged: false,
    }
  },
})
