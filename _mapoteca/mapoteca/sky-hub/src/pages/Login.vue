<template>
<div>   
    <div>
        <template>
            <v-container fluid>
                <v-layout row wrap justify-center>
                    <v-flex xs12 sm6>
                        <v-card>
                            <v-card dark class="orange">
                                <v-card-text class="text-md-center"><h4 class="white--text">#Sky::Hub#</h4></v-card-text>
                            </v-card>
                            <v-card-text>
                                <v-container fluid>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <v-text-field label="Email" v-model="user.email" hint="email@exemplo.com" required prepend-icon="email"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Senha"  v-model="user.password" min="6" prepend-icon="lock"
                                            hint="At least 6 characters" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter 
                                            ></v-text-field>
                                        </v-flex>
                                        
                                        <div class="ui error message" v-if="temErros">
                                            <p v-for="error in errorMessage">{{ error }}</p>
                                        </div>
                                    </v-layout>
                                </v-container>
                            </v-card-text>
                            <v-toolbar class="orange" dark><v-spacer></v-spacer>
                                <v-toolbar-title>
                                    <v-btn flat dark @click.native=" login()">
                                        <span>Logar</span>
                                        <v-icon dark>send</v-icon>
                                    </v-btn>
                                </v-toolbar-title>
                            </v-toolbar>
                            <div class="ui message">
                                <br>
                                <h6>Ainda não está cadastrado? <router-link to="/registro">Registre-se</router-link></h6>
                                <br>
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <p>{{ $data }}</p>
        </template>
    </div>
</div>
</template>

<script>
import md5 from 'md5';
import axios from 'axios';
import {mapGetters} from 'vuex';
export default {
        name: 'login',
        data() {
            return {
                user: { email: '', password: '' },
                errorMessage: [],
                isLoading: false,
                rules: {
                required: (value) => !!value || 'Obrigatório.',
                    email: (value) => {
                        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'E-mail invalido.'
                    }
                },
                e1: true,
            }
        },
        computed: {
            temErros () {
                return this.errorMessage.length > 0
            }
        },
        methods: {
            login() {
                console.log("login")
                this.errorMessage = []
                
                if(this.validarForm()){
                    this.isLoading = true
                    //this.user.password= md5(this.user.password)
                    var formData = this.toFormData(this.user);
                    axios.post('http://localhost/codephp/php/skyhub/api/apiUsuarios.php?action=logar', formData).then((response) => {
                        //console.log(response.data);                        
                        if(response.data.error){
                            this.errorMessage.push(response.data.message);
                            this.isLoading = false;
                        }else{
                            this.$store.dispatch('setUser', response.data.user),
                            this.$router.push('/')
                        }
                    });
                }

            },
            validarForm(){
                if(this.user.email.length > 0 && this.user.password.length > 0){
                    return true
                }
                return false
            },
            toFormData: function(obj){
                var form_data = new FormData();
                    for ( var key in obj ){
                        form_data.append(key, obj[key]);
                    }
                    return form_data;
            },
            clearMassege: function(){
                this.errorMessage = "";
                this.successMessage = "";
            }
        }
    }
</script>

<style scoped>
     .login__container{
        margin-top: 40px;
    }
    .column{
        max-width: 450px;
    }


</style>