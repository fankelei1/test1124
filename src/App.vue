<template lang="jade">
  -var c = 'app'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    //div(id="nav")
      router-link(to="/") Home |
      router-link(to="/about") About
    div(@click="buttonHandler") button
    drawer(:show.sync="isShowDrawer", showMode="push")
      div(slot="drawer")
        div(class="aaa") 123
      div
        router-view
</template>
<script>
  import {Drawer} from 'vux'

  export default {
    components: {
      Drawer
    },
    data() {
      return {
        isShowDrawer: false
      }
    },
    methods: {
      buttonHandler() {
        this.isShowDrawer = !this.isShowDrawer
        console.log(this.isShowDrawer)
      }
    }
  }
</script>
<style>
  @c app {
    @d wrap {
      width: 100%;
      min-height: 300px;
      overflow-x: hidden;
    }
  }
  .vux-drawer {

  }
  .vux-drawer > .vux-drawer-content {
    width: 200px;
    height: 400px !important;
    background: orange !important;
  }
  .vux-drawer > .vux-drawer-body > .drawer-mask {
    height: 400px !important;
  }
</style>
