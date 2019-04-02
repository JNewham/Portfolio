<template>
  <div>
    <div class="row">
      <div class="columns large-3 medium-3">
        <div class="row">
          <div class="columns large-12 sidebar">
            <p>{{ description }}</p>
            <a href="mailto:contact@jnewham.co.uk" class="contact">contact@jnewham.co.uk</a>
          </div>
        </div>

        <div class="columns large-1 medium-0"></div>
      </div>

      <div class="columns large-8 medium-8">
        <div class="body-container">
          <div class="row">
            <div class="columns large-12 medium-8">
              <h1> {{ txt }}</h1>
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
    data () {
      return {
        description: null,
        i: 0,
        speed: 10;
      }
    }
  }
</script>
