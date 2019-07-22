<template>
  <div>
    <div class="row head gradient">
        <div class="columns large-8 medium-8 small-12">
          <img class="logo" src="~/assets/img/logo.png">
          <p><span v-if="hasProp('First')">{{ userData.First }} n</span><span v-else>N</span>ow more than ever refugees need our help. </br>Help save lives <a href="#">TODAY</a></p>
          <a href=""><button>Download Guide</button></a>
        </div>
        <div class="head-image-collapsed">
          <img src="~/assets/img/head.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hasPageTitle from '~/mixins/hasPageTitle'

export default {
  mixins: [hasPageTitle]
}
</script>
