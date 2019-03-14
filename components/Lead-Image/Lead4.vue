<template>
  <div>
    <div class="row head gradient">
      <div class="row spacer"></div>
        <div class="columns large-8 medium-8 small-12">
          <h1>FAMILI ES FORCED TO FLEE THEIR HOMES</h1>
          <p>Now more than ever refugees need our help. </br>Help save lives <a href="#">TODAY</a></p>
          <button>Download Guide</button>
        </div>
      <div class="head-image-collapsed">
        <img src="~/assets/img/head.png">
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
