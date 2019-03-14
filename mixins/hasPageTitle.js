export default {

  computed: {
    userData () {
      const key = this.$route.hash.substr(1)

      if (typeof this.$contentJSON[key] !== 'undefined') {
        return this.$contentJSON[key]
      }

      return null
    },
  },

  methods: {
    hasProp (propName) {
      return this.userData && typeof this.userData[propName] !== 'undefined'
    },
  },
}
