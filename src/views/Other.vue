<template>
  <div>
    单独的路由
    <div>
      <Button type="primary" style="margin-left: 100px" @click="reback">返回</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Other',
  methods: {
    reback() {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
