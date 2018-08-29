<template>
  <main class="phone-viewport">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h1 class="md-title" style="flex: 1">{{ title }}</h1>

      <md-button class="md-icon-button" @click.native="toggleRightSidenav">
        <md-icon>person</md-icon>
      </md-button>
        
      </md-button>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-dense">
        <div class="md-toolbar-container">
          <h3 class="md-title">Menu</h3>
        </div>
      </md-toolbar>
      <md-list>
          <md-list-item>
            <router-link to="/clientes">Clientes</router-link>
          </md-list-item>
          <md-list-item>
            <router-link to="/localidades">Localidades</router-link>
          </md-list-item>
          <md-list-item>Sair</md-list-item>
        </md-list>
    </md-sidenav>

    <md-sidenav class="md-right" ref="rightSidenav" @open="open('Right')" @close="close('Right')">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>

    <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
  </md-sidenav>
     <md-table v-once>
        <md-table-header>
          <md-table-row>
            <md-table-head>Title</md-table-head>
            <md-table-head>Autor</md-table-head>
          </md-table-row>
        </md-table-header>

        <md-table-body>
          <md-table-row v-for="book in books">
            <md-table-cell><a v-bind:href="book.url">{{ book.title }}</a></md-table-cell>
            <md-table-cell>{{ book.autor }}</md-table-cell>
            
          </md-table-row>
        </md-table-body>
      </md-table>
     <router-view></router-view>

  </main>
</template>

<script>
export default {
  name: 'app',
  data: {
    title: 'Hello Vue!'
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style>

</style>
