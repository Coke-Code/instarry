<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        Instarry
      </h1>
      <h2 class="subtitle">
        Kunkka&#39;s personal blog
      </h2>
      <h2 class="subtitle">
        Comming soon...
      </h2>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: '发射台 - 异星',
      meta: [{
        hid: 'description',
        name: 'description',
        content: '冒险家陆陆续续着陆,又踏上新的冒险旅途'
      }]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
