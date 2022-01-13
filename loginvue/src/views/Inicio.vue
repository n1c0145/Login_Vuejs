<template>
  <div class="container">
    <img src="@/assets/img/TodoLegal.png" alt="" width="45%" />
    <div><img src="@/assets/img/visto.png" alt="" width="20%" /></div>

    <div class="título">¡Validacion Exitosa!</div>
    <div class="align">
      <div class="text1-T">Datos Verificados:</div>
      <hr class="line" />
      <div class="text1">Nombres y Apellidos</div>
      <div class="text2">{{ nombre }} {{ apellidos }}</div>
      <div class="text1">Cédula Identidad</div>
      <div class="text2">{{ username }}</div>
    </div>
    <div class="container-button">
      <router-link to="/">
        <div class="button">Finalizar</div>
      </router-link>
      <div class="container-imgbutton">
        <img src="@/assets/img/flecha.png" width="100%" />
      </div>
    </div>
    <div class="text3">Examen by TodoLegal</div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data: function () {
    return {
      nombre: localStorage.name,
      apellidos: localStorage.lastname,
      username: localStorage.username,
    };
  },

  methods: {},
};
</script>




<style scoped>
.container {
  width: 30%;
  margin: 0% 0% 0% 35%;
  background-color: #f7f7f7;
  border: #3d7ade 3px solid;
}
.text3 {
  width: 60%;
  margin: 15% 0% 3% 20%;
  justify-content: center;
  color: #2e3e88;
  font-size: 0.8rem;
}
.container-button {
  display: flex;
  margin: 15% 0% 0% 35%;
}
.container-imgbutton {
  width: 10%;
  height: 20%;
}
.align {
  margin-left: 20%;
  text-align: left;
}
.título {
  font-size: 1.7rem;
  font-weight: bolder;
  letter-spacing: 2px;
  color: #2e3e88;
  margin-top: 5%;
}

.text1-T {
  font-size: 1.2rem;
  font-weight: bolder;

  color: #2e3e88;
  margin-top: 20%;
}
.text1 {
  font-size: 1.2rem;

  color: #2e3e88;
  margin-top: 3%;
}
.text2 {
  font-size: 1.2rem;

  margin-top: 3%;
}
.button {
  width: 50%;
  background-color: #f7f7f7;
  border: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #3d7ade;
}
.line {
  width: 30%;
  background-color: #2e3e88;
  margin-right: 70%;
  height: 3px;
}
</style>