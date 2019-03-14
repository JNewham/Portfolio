<template>
<div class="tabs">

   <div class="tab">
       <input type="radio" id="tab-1" name="tab-group-1">
       <label for="tab-1" class="tab-1">Monthly Donation</label>

       <div class="content">
          <p>Choose an amount</p>
          <span>
            <input type="radio" id="price-1" name="tab-group-2">
            <label for="price-1" class="price-1"><span v-if="hasProp('Don1')">{{ userData.Don1 }}</span><span v-else>£5</span></label>
          </span>
          <span>
            <input type="radio" id="price-2" name="tab-group-2" checked>
            <label for="price-2" class="price-2"><span v-if="hasProp('Don2')">{{ userData.Don2 }}</span><span v-else>£15</span></label>
          </span>
          <span>
            <input type="radio" id="price-3" name="tab-group-2">
            <label for="price-3" class="price-3"><span v-if="hasProp('Don3')">{{ userData.Don3 }}</span><span v-else>£25</span></label>
          </span>
          <p style="margin-top:20px;">- or -</p>

          <div class="input-group">
            <span class="input-group-label">£</span>
            <input class="input-group-field" type="number">
          </div>

            <button>Submit</button>

            <div class="disclaimer">
              <img class="lock" src="~assets/img/alarm-clock-security.svg">
              <p>Your details are kept secure and will never be shared with anyone else.</p>
          </div>
       </div>
   </div>

   <div class="tab">
       <input type="radio" id="tab-2" name="tab-group-1" checked>
       <label for="tab-2" class="tab-2">Single Donation</label>

       <div class="content">
          <p>Choose an amount</p>
          <span>
            <input type="radio" id="price-4" name="tab-group-2">
            <label for="price-4" class="price-1">£3</label>
          </span>
          <span>
            <input type="radio" id="price-5" name="tab-group-2">
            <label for="price-5" class="price-2">£5</label>
          </span>
          <span>
            <input type="radio" id="price-6" name="tab-group-2">
            <label for="price-6" class="price-3">£10</label>
          </span>
          <p style="margin-top:20px;">- or -</p>

          <div class="input-group">
            <span class="input-group-label">£</span>
            <input class="input-group-field" type="number">
          </div>

            <button>Submit Submit</button>

            <div class="disclaimer">
              <img class="lock" src="~assets/img/alarm-clock-security.svg">
              <p>Your details are kept secure and will never be shared with anyone else.</p>
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
