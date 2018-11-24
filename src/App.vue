<template lang="jade">
  -var c = 'app'
  -var wrap = c + '__wrap'
  -var content = c + '__content'

  div(class="#{wrap}")
    m-header
    div(class="#{content}") content
    m-footer
    //div(id="nav")
      router-link(to="/") Home |
      router-link(to="/about") About
    //div(@click="buttonHandler") button

    //drawer(:show.sync="isShowDrawer", showMode="overlay", @on-hide="onHide")
      div(slot="drawer")
        div(class="aaa") 123123123
      div
        router-view

</template>
<script>
  import {Drawer} from 'vux'
  import MHeader from './components/MHeader'
  import MFooter from './components/MFooter'

  export default {
    components: {Drawer, MHeader, MFooter},
    data() {
      return {
        isShowDrawer: false
      }
    },
    methods: {
      buttonHandler() {
        this.isShowDrawer = !this.isShowDrawer
        console.log(this.isShowDrawer)
      },
      onHide() {
        console.log(123)
      }
    }
  }
</script>
<style>
  body {
    margin: 0;
    padding: 0;
  }
  @c app {
    @d wrap {

    }
    @d content {
      padding: 1rem;
      height: 2000px;
    }
  }
</style>
