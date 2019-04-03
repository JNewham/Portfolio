<template>
  <div>
    <div class="row">
      <div class="columns large-3 medium-3">
        <div class="row">
          <div class="columns large-12 sidebar">
            <p id="description-box"></p>
            <a href="mailto:contact@jnewham.co.uk" class="contact">contact@jnewham.co.uk</a>
          </div>
        </div>

        <div class="columns large-1 medium-0"></div>
      </div>

      <div class="columns large-8 medium-8">
        <div class="body-container">
          <div class="row">
            <div class="columns large-12 medium-8">
              <h1>loremips</h1>
            </div>
          </div>

          <div class="row">
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="typeWriter"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
          </div>

          <div class="row">
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large-4">
              <a href="123">
                <div @mouseover="description = 'Vestibulum posuere bibendum pulvinar. Fusce tincidunt metus id tristique dictum. Nullam lacus ex, pulvinar et porttitor vel, pellentesque ac turpis. In viverra, magna id rutrum mollis, tortor sapien vulputate eros, vitae porta tortor felis ut libero.'"  @mouseout="description = ''" class="thumbnail-container">
                  <img src="https://via.placeholder.com/150">
                </div>
              </a>
            </div>
            <div class="columns large 4">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    typeWriter: function() {
        var i = 0;
        var txt = 'Lorem ipsum dummy text blabla.';
        var speed = 10;
    //    var description = 'literally all of the things';
      console.log("something")
      if (i < txt.length) {
        document.getElementById("description-box").innerHTML += txt.charAt(i);
         i++;
      }
    }
  }
}
</script>
