<template>

<div>
    <div>
        <template>
            <v-container fluid>
                <v-layout row wrap justify-center>
                    <v-flex xs12 sm6>
                        <v-card>
                            <v-card dark class="orange">
                                <v-card-text class="text-md-center"><h5 class="white--text">#Sky::Hub#</h5></v-card-text>
                            </v-card>
                            <v-card-text>
                                <v-container fluid>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <v-text-field label="Usuario" v-model="newUser.user" required prepend-icon="account_circle"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Nome" v-model="newUser.name" hint="Nome completo" required prepend-icon="account_box"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="E-mail" v-model="newUser.email" :rules="[rules.required, rules.email]" prepend-icon="email"></v-text-field>
                                        </v-flex>
                                        
                                        <v-flex xs12>
                                            <v-text-field label="Senha" v-model="newUser.password" hint="At least 6 characters" min="6"
                                                :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" counter prepend-icon="lock"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Confimar Senha" v-model="newUser.password_confirmation" hint="At least 6 characters" min="6"
                                                :append-icon="e2 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e2 = !e2)" :type="e2 ? 'password' : 'text'" counter prepend-icon="lock"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-text-field label="Phone" v-model="newUser.phone" prepend-icon="phone"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12>
                                            <small>*campos obrigatório</small>
                                        </v-flex>
                                        <v-alert error :value="temErros">
                                            <p v-for="error in errorMessage">{{ error }}</p>
                                        </v-alert>
                                    </v-layout>
                                </v-container>
                                
                            </v-card-text>
                            <v-toolbar class="orange" dark><v-spacer></v-spacer>
                                <v-toolbar-title>
                                    <v-btn flat dark @click.prevent="register" :class="{ 'loading': isLoading }">
                                        <span>Registre-se </span>
                                        <v-icon dark>save</v-icon>
                                    </v-btn>
                                </v-toolbar-title>
                            </v-toolbar>
                            <div class="ui message">
                                <br>
                                <h6>Já está registado? <router-link to="/login">Conecte-se</router-link></h6>
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

    export default {
        name: 'register',
        data () {
            return {
                newUser: { name: '', user: '', email: '', password: '', password_confirmation: '', phone: '', avatar: '' },
                errorMessage: [],
                isLoading: false,
                rules: {
                    required: (value) => !!value || 'exemplo@email.com',
                    email: (value) => {
                        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'E-mail invalido.'
                    }
                },
                e1: true,
                e2: true,
            }
        },
        computed: {
            temErros () {
                return this.errorMessage.length > 0
            }
        },
        methods: {
            register () {                
                this.errorMessage = []
                if(this.isFormValid()){
                    this.isLoading = true
                    this.newUser.avatar= "http://www.gravatar.com/avatar/"+md5(this.newUser.email)+"?d=identicon"
                    this.newUser.password= md5(this.newUser.password)
                    this.newUser.password_confirmation= md5(this.newUser.password_confirmation)
                    var formData = this.toFormData(this.newUser);
                    axios.post("http://localhost/codephp/skyhubnovo/api/apiUsuarios.php?action=create", formData).then((response) => {
                        this.newUser = { name: '', user: '', email: '', password: '', password_confirmation: '', phone: '', avatar: '' };
                        if(response.data.error){
                            this.errorMessage.push(response.data.message);
                        } else{
                            this.$router.push('/login')
                        }
                    });
                }
            },

            isEmpty () {
                if(this.newUser.name.length == 0 || this.newUser.email.length == 0 || this.newUser.password.length == 0 || this.newUser.password_confirmation.length == 0){
                    return true;
                }
                return false;
            },
            passwordValid () {
                if(this.newUser.password.length < 6 || this.newUser.password_confirmation.length < 6){
                    return false;
                }
                if(this.newUser.password !== this.newUser.password_confirmation){
                    return false;
                }
                return true;
            },
            isFormValid(){
                if(this.isEmpty()){
                    this.errorMessage.push('Por favor, preencha todos os campos')
                    return false
                }
                if(!this.passwordValid()){
                    this.errorMessage.push('senha incorreta')
                    return false
                }
                return true
            },
            toFormData: function(obj){
                var form_data = new FormData();
                    for ( var key in obj ){
                        form_data.append(key, obj[key]);
                    }
                    return form_data;
            },
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