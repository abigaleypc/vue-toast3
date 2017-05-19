<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="showToast()">点我</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a);
  },
  methods: {
    showToast: function (event) {
        this.$toast("已经点击啦，2.5s后消失"); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.vue-toast {
    width: 100px;
    background: #fcc;
    padding: 24px;
    margin: .5rem 0 1rem 0;
    border-radius: 2px;
}
</style>
