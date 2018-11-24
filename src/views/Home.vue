<template lang="jade">
  div(class="home")
    div(@click="buttonHandler1") button1
    div(@click="buttonHandler2") button2
    toast(v-model="isShow", text="我是提示信息", type="text", :time="2000", position="middle")
</template>


<script>
  import {mapState, mapActions} from 'vuex'
  import HelloWorld from '@/components/HelloWorld.vue'
  import api from '@/api'
  import {Toast} from 'vux'

  export default {
    name: 'home',
    components: {
      HelloWorld,
      Toast
    },
    data() {
      return {
        myData: [],
        isShow: false
      }
    },
    computed: {
      ...mapState(['wholeData'])
    },
    created() {
      this.findItemSpu()
    },
    methods: {
      ...mapActions(['setWholeData']),
      buttonHandler1() {
        console.log(this.wholeData)
        this.isShow = true
      },
      buttonHandler2() {
        this.setWholeData([1, 2, 3, 4])
      },
      findItemSpu() {
        const _this = this
        this.axios({
          url: api.findItemSpu,
          method: 'post',
          params: {a: '123'},
          success(res) {
            console.log(res)
            _this.myData = res.data.data
            _this.setWholeData(res.data.data)
          },
          failed() {
          }
        })
      }
    }
  }
</script>
