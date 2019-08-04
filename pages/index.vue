<template>
  <div>
    <div class="row">
      <div class="columns large-4 medium-4">
        <div class="row">
          <div class="columns large-12 sidebar">
            <p id="description-box"></p>
            <p class="about">Frequent Designer,<br>Occasional Developer</p>
            <a href="mailto:contact@jnewham.co.uk" class="contact">+ contact@jnewham.co.uk</a>
          </div>
        </div>
      </div>

      <div class="columns large-8 medium-8">
        <div class="body-container">
          <div class="row">
            <div class="columns large-12 medium-8">
              <h1>JNewham</h1>
            </div>
          </div>


          <div class="row">
            <div class="columns large-4">
                <div class="thumbnail-me-container" @mouseover="typeWriter('Hey, I\'m Josh. For the last 3 years I\'ve been based in London as a digital designer predominately for the third sector working with major charities and causes.')">
                  <img src="~/assets/img/me-thumb.jpg">
                </div>
            </div>

            <div class="columns large-4">
              <a href="work/blind-veterans" @mouseover="typeWriter('Blind Veterans UK - Pitch work detailing a scalable donation gateway.')">
                <div class="thumbnail-container">
                  <img src="~/assets/img/BV-Thumbnail.jpg">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="work/LATA" @mouseover="typeWriter('Latin American Travel Association - Complete admin section aesthetical overhaul followed by a front end redesign')">
                <div class="thumbnail-container">
                  <img src="~/assets/img/LATA-Thumbnail.jpg">
                </div>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="columns large-4">
              <a href="work/LWC" @mouseover="typeWriter('Lend with Care - Front end redesign, restructure and new CMS implementation (Prismic).')">
                <div class="thumbnail-container">
                  <img src="~/assets/img/LWC-Thumbnail.jpg">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="work/greenpeace" @mouseover="typeWriter('Greenpeace - Single page microsite for Greenpeace\'s high value Linkedin campaign to go along with driver emails and direct mailing.')">
                <div class="thumbnail-container">
                  <img src="~/assets/img/GP-Thumbnail.jpg">
                </div>
              </a>
            </div>
            <div class="columns large-4"></div>
          </div>

          <div class="row">
            <div class="columns large-4">
              <a href="work/QI" @mouseover="typeWriter('QueerIdeas -  A third sector blog by Mark Philips both designed and built by me.')">
                <div class="thumbnail-container">
                  <img src="~/assets/img/QI-Thumbnail.jpg">
                </div>
              </a>
            </div>
            <div class="columns large-4"></div>
            <div class="columns large 4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        prevWord: null,
        timer: null
      }
    },
    methods: {
      typeWriter: function(word) {
        if (this.timer !== null) {
          clearInterval(this.timer);
          this.timer = null;
        }

        var i = 0;
        var prevWord = this.prevWord;

        if(prevWord !== word){
          document.getElementById("description-box").innerHTML=null;
          this.timer = setInterval(function(){
            document.getElementById("description-box").innerHTML+=word[i];
            i++;
            if(word[i] === undefined || i > word.length - 1){
              clearInterval(this.timer)
              this.timer = null;
            }
          }.bind(this),1)
        }
        this.prevWord = word;
      }
    }
  }
</script>
