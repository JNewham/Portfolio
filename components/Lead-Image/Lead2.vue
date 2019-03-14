<template>
<div>
  <div class="row expanded head gradient">

    <div class="row">
      <div class="columns large-8 medium-8 small-12">
        <img class="logo" src="~/assets/img/logo.png">
        <p><span v-if="hasProp('First')">{{ userData.First }} n</span><span v-else>N</span>ow more than ever refugees need our help. </br>Help save lives <a href="#">TODAY</a></p>
        <a href=""><button>Download Guide</button></a>
      </div>
    </div>
  </div>

  <div class="head-image">
    <img src="~/assets/img/head.png">
  </div>
</div>
</template>

<script>
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  mixins: [hasPageTitle]
}
</script>
