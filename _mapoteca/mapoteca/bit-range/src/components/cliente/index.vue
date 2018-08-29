<template lang="html">
  <div>
  <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-dense">
    <div class="md-toolbar-container">
      <h2 class="md-title">Clientes</h2>
    </div>
  </md-whiteframe>
  
  <button id="show-modal" @click="showModal = true">Show Modal</button>

<md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
 <modal></modal>
 <md-dialog-actions>
    <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
    <md-button class="md-primary" @click.native="closeDialog('dialog2')">Create</md-button>
  </md-dialog-actions>
</md-dialog>

<md-button class="md-fab md-fab-bottom-right" id="fab" @click.native="openDialog('dialog2')">
  <md-icon>add</md-icon>
</md-button>
</div>
  
</template>

<script>
import Modal from './modal.vue'
export default {
  components: {Modal},
  data: {
    showModal: false
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    },
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
