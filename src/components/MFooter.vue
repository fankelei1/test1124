<template lang="jade">
  -var c = 'm-footer'
  -var wrap = c + '__wrap'

  div(class="#{wrap}")
    div footer


</template>

<script>
  export default {
    name: 'm-footer',
    computed: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
  @c m-footer {
    @d wrap {
      padding: 1rem;
      color: white black;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  }
</style>
