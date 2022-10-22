const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'becoming a Vue ninja',
      name: 'mohammadali',
      url: 'http://www.youtube.com',
      classes: ['one', 'two']
    }
  },
  methods: {
      greet(time) {
            return `Hello and good ${time}, ${this.name}`
      }
  }
  
}).mount('#app')