<template>
    <h1>Hello</h1>
</template>



<script>
    export default {
      data () {
        return {
            unwatchPushId: null
        }
      },
      mounted () {
        this.$OneSignal.push(() => console.log(this.$OneSignal))
      },
      beforeDestroy () {
        if (this.unwatchPushId) {
          this.unwatchPushId()
          this.unwatchPushId = null
        }
      }
    }
</script>
