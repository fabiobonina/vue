<template lang="html">
<div>
    <form>
      <md-input-container>
        <label>Note</label>
        <md-textarea></md-textarea>
      </md-input-container>
    </form>
  </md-dialog-content>

  </md-toolbar>
</div>
  
</template>

<script>
export default {
  methods: {
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    onOpen () {
      console.log('Opened')
    },
    onClose (type) {
      console.log('Closed', type)
    }
  }
}
</script>

<style lang="css">
</style>
