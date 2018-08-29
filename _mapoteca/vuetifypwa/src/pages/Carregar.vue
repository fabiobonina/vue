<template>
    <div>
        
        <main>
            <v-container fluid>
                <div>
                    <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" class="green--text"></v-progress-circular>
                </div>
            </v-container>
            <p> {{$data}}</p>
        </main>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';

  export default {
    //name: 'connected-user',
    data () {
      return {
        userConts: []
      }
    },
    created() {

    },
    computed: mapGetters(['currentUser', 'currentUserCont' ]),
    mounted: function(){
        console.log("bonina");
        this.controler();
    },
    methods: {
      logout () {                
          //    this.presenceRef.child(this.currentUser.uid).remove()
          firebase.auth().signOut()
          this.$store.dispatch("setUser", null)
          this.$router.push('/login')
      },
      controler () {
          firebase.database().ref("users/" + this.currentUser.uid).once("value").then(
          function(snapshot) {
              const data = {
                  'empresa': snapshot.child("empresa").val(),
                  'nivel': snapshot.child("nivel").val(),
                  'nome': snapshot.child("nome").val(),
                  'usuario': snapshot.child("usuario").val()
              }
              var carregar = data
              
              this.userConts.push(data)
                            
              //console.log( data)
              this.$store.dispatch("setUserCont", data)
              //this.$store.dispatch('setUser', user)
              //this.$router.push('/')
          }
      )
      }
    }
 

}
</script>

<style>
</style>