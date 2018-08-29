<template>
  <header class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">{{ title }}</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <md-list>
          <md-list-item>Perfil</md-list-item>
          <md-list-item>
            <router-link to="/categories">Categorias</router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/products">Produtos</router-link>
          </md-list-item>
          <md-list-item>Sair</md-list-item>
        </md-list>
    </md-sidenav>
    <md-row>
     <router-view></router-view>
    </md-row>
  </header>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Ecommerce Bonina'
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
