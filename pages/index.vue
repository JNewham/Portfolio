<template>
  <div>
  <leadImage/>
  <div class="row body">
    <div class="columns large-7">
        <div v-if="hasProp('Text') && userData.Text === '1'">
          <p>Consectetur adipiscing elit. Integer ut tincidunt magna. Phasellus porttitor pellentesque cursus. Morbi finibus arcu a ipsum blandit, vitae vehicula lorem euismod. Sed et velit lacinia, posuere elit eget, ultricies ipsum. <a href="#">Donec venenatis feugiat lectus</a>, ut malesuada nulla finibus sit amet. Duis purus nulla, rutrum a arcu ac, laoreet pharetra enim. Aliquam rutrum justo lorem, non interdum risus laoreet in. Morbi augue odio, tincidunt ut viverra id, dignissim nec nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi aliquet malesuada purus vel pulvinar. Donec lobortis tempor pretium.</p>

          <p>Fusce tristique laoreet lorem, non pellentesque tellus. Vestibulum in eros sit amet tellus porttitor venenatis. Nullam sagittis congue elit in faucibus. Nunc et ante ac nisl fringilla pellentesque. Nullam sit amet porttitor libero, ut blandit nisi. Proin scelerisque nulla non maximus commodo. Morbi vel lobortis mauris. Vestibulum porttitor vehicula mauris, vitae pulvinar diam mattis ut.</p>
        </div>

        <div v-else>
          <p>Donec non justo sagittis, euismod mauris quis, rhoncus enim. <strong>Cras venenatis, tellus id venenatis venenatis, dui dui feugiat sem, sit amet aliquet odio arcu vitae justo</strong>. Sed eros felis, facilisis id ante ac, imperdiet sollicitudin felis. Vestibulum pretium vestibulum porta. Nulla erat risus, vulputate vehicula ultrices at, consectetur quis lacus. Phasellus consectetur maximus odio ac efficitur. Vestibulum rhoncus, augue non faucibus porttitor, orci arcu sodales diam, vitae blandit mauris eros in justo. Proin eget eros lorem. Suspendisse ultrices, est nec tincidunt euismod, nulla ex eleifend lorem, vitae laoreet nibh velit eu nibh.</p>
        </div>

        <img v-if="hasProp('Image1') && userData.Image1 === '1'" class="body-img-cap" src="~/assets/img/body/Body-1.jpg">
        <div v-else class="videoWrapper">
          <iframe  src="https://www.youtube.com/embed/hBFgI4D8eEM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      <p><small> picture caption lorem ipsum</small></p>


      <p>Praesent dictum euismod posuere. Donec dapibus viverra leo sit amet rhoncus. Integer rutrum non arcu vitae aliquet. Curabitur convallis convallis tempus. Praesent tincidunt sem nec pulvinar auctor. Duis tincidunt leo ut condimentum eleifend. Suspendisse imperdiet sollicitudin ligula, eget suscipit metus tempor nec. Donec gravida mi ac dapibus rhoncus. Sed turpis orci, volutpat in tincidunt non, sollicitudin ac magna.</p>

      <p>Donec ac sagittis risus. Aliquam aliquet tellus in ipsum ornare tristique. Curabitur laoreet tincidunt ante, et faucibus elit maximus  bibendum. Sed id quam non risus pretium lobortis. Phasellus purus neque, accumsan id ligula at, auctor finibus ligula. Nullam accumsan sagittis augue. Phasellus tincidunt eros convallis, eleifend sapien vitae, dignissim orci. Quisque blandit, lectus vitae porttitor varius, orci ligula tempus erat, vitae tristique felis quam eget urna. Vivamus tempus augue nisi, ut rhoncus mauris auctor eget. Morbi et metus tristique, tincidunt orci vel, condimentum eros. Phasellus sed facilisis odio. Pellentesque id urna et eros malesuada cursus quis quis lorem. Nulla facilisi. Maecenas ut velit auctor, placerat velit vel, pharetra tortor. Aliquam mattis purus in lectus ornare ornare.</p>
    </div>
    </no-ssr>
    <div class="columns large-5">
      <div>
        <forms/>

        <no-ssr>
          <div v-if="hasProp('Image1') && userData.Image1 === '1'" class="videoWrapper">
            <iframe  src="https://www.youtube.com/embed/hBFgI4D8eEM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </no-ssr>
      </div>
    </div>
  </div>

  <readMore/>
  <addendum/>
  </div>
</template>

<script>
import leadImage from '~/components/Lead-Image/Lead2.vue'
import hasPageTitle from '~/mixins/hasPageTitle'
import readMore from '~/components/Related/readMore1.vue'
import addendum from '~/components/Footer/Footer1.vue'
import forms from '~/components/Forms/Form1.vue'


export default {
  components: {
    leadImage,
    readMore,
    addendum,
    forms
  },
  mixins: [hasPageTitle]
}
</script>
