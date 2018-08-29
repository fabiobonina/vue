<template>
  <div id="app">

    <input type="search" v-model="buscar" placeholder="Buscar jogo">
    <ul>
      <li  v-for="jogo in buscarJogo">
        {{ jogo.titulo }}
      </li>
    </ul>
    
    <ul>
      <li  v-for="jogo in melhoresJogos">
        {{ jogo.titulo }}
      </li>
    </ul>

    <input type="range" min="0"max="10" v-model="minimo">

    <p>{{ $data }}</p>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      minimo: 5,
      buscar: '',
      jogos:[{
            titulo: 'Battlefield 1', 
            genero: 'FPS',
            podularidade: 9,
        },
        {
            titulo: 'Civilization VI', 
            genero: 'Estrategia',
            podularidade: 10,
        },
        {
            titulo: 'Resident Evit 7', 
            genero: 'Survivl Horror',
            podularidade: 7,
        },
      ]
    }
  },
  methods: {
    agregarTarefa: function () {
      this.tarefas.push({
        titulo: this.novaTarefa,
        prioridade: false,
        antiguidade: 0,
        });
      this.novaTarefa = null;
    }
  },
  computed: {
    melhoresJogos(){
      return this.jogos.filter((jogo) => jogo.podularidade >= this.minimo );
    },
    buscarJogo(){
      return this.jogos.filter((jogo) => jogo.titulo.includes(this.buscar));
    },
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
</style>
