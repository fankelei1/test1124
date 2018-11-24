<template lang="jade">
  -var c = 'm-header'
  -var wrap = c + '__wrap'
  -var header = c + '__header'


  div(class="#{wrap}")
    div(class="#{header}")  header

</template>
<script>
  import {mapState} from 'vuex'
  import api from '@/api'
  import {XHeader, XImg, Popover, Toast} from 'vux'

  export default {}
</script>

<style>
  @c m-header {
    @d wrap {
      color: white black;
      position: fixed;
      width: 100%;
      box-sizing: border-box;
      padding: 1rem;
    }
    @d header {
      color: white yellow;
    }
  }
</style>
