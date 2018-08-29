<template lang="html">
  <md-toolbar>
    <h2 class="md-title">Categorias</h2>
  </md-toolbar>
  <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>Initial value</label>
    <md-input v-model="initialValue"></md-input>
  </md-input-container>

  <md-input-container>
    <label>With label</label>
    <md-input placeholder="My nice placeholder"></md-input>
  </md-input-container>

  <md-input-container md-inline>
    <label>Inline field</label>
    <md-input></md-input>
  </md-input-container>

  <md-input-container>
    <label>Number</label>
    <md-input type="number"></md-input>
  </md-input-container>

  <md-input-container>
    <label>Textarea</label>
    <md-textarea></md-textarea>
  </md-input-container>

  <md-input-container>
    <label>Disabled</label>
    <md-input disabled></md-input>
  </md-input-container>
</form>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
