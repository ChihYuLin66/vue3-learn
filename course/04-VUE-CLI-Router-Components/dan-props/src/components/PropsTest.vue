<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'hi ~'
    },    
    str: {
      type: String,
      default: 'hi ~'
    },
    bool: {
      type: Boolean,
      default: true
    },
    num: {
      type: Number,
      default: 100
    },
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => ({})
    },
    foo: {
      type: Function,
      default: () => {}
    },
  },
  setup(props) {

    return {
      props
    }
  }
}
</script>

<template>
  <!-- <h1>{{ props.msg }}</h1> -->
  <p>{{ props.str }}</p>
  <p>{{ props.bool }}</p>
  <p>{{ props.num }}</p>
  <p>{{ props.arr }}</p>
  <p>{{ props.obj }}</p>
  <p>{{ props.foo }}</p>
</template>

<style>
h1 {
  color: blue;
}
</style>