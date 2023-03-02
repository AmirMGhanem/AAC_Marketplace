<template>
  <div>
    <Comp/>
  </div>
</template>

<script>

import Comp  from '@/components/home/Comp'

  export default {
    components: {
      Comp
    },
    computed:{
      user() {
            return this.$store.state.user
        }
    }

  }
</script>

<style scoped>

</style>