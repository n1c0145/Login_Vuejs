<template>
  <div class="container">
    <div>
      <img src="@/assets/img/TodoLegal.png" alt="" width="45%" />
    </div>
    <div class="título">Bienvenido Usuario</div>
    <hr class="line" />
    <div class="text">
      Por favor ingresa a tu cuenta ingresando tu número de cédula y contraseña.
      Si no tienes una cuenta en Todolegal, puedes crear una Gratis.
    </div>
    <form v-on:submit.prevent="login">
      <div class="container-input-tooltip">
        <div class="input-container ic2">
          <input
            class="input"
            type="text"
            id="username"
            name="login"
            placeholder=" "
            v-model="username"
          />
          <div class="cut"></div>
          <label class="placeholder">Cédula</label>
        </div>
        <div class="tooltip">
          <img src="@/assets/img/info.png" width="60%" />
          <div class="tooltiptext">
            Tu cédula debe encontrarse vigente para ingresar al sistema
          </div>
        </div>
      </div>

      <div class="input-container ic2">
        <input
          class="input"
          type="text"
          id="password"
          name="login"
          placeholder=" "
          v-model="password"
        />
        <div class="cut"></div>
        <label class="placeholder">Contraseña</label>
      </div>
      <div class="text2">
        <router-link to="/cuenta"
          >No tengo una cuenta crear una GRATIS
        </router-link>
      </div>
      <div class="container-button">
        <input class="button" type="submit" value="CONTINUAR" />
        <div class="container-imgbutton">
          <img src="@/assets/img/flecha.png" width="100%" />
        </div>
      </div>
    </form>

    <div role="alert" v-if="error" class="alert">
      Error de USUARIO o Contraseña. Si no se encuentra registrado registrese
      gratis.
    </div>
    <div class="text3">Examen by TodoLegal</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},

  data: function () {
    return {
      username: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      let json = {
        username: this.username,
        password: this.password,
      };

      axios
        .post(
          "https://90h9amptse.execute-api.us-east-1.amazonaws.com/auth/login",
          json
        )
        .then((data) => {
          console.log(data);

          if (data.data.status == "OK") {
            localStorage.name = data.data.name;
            localStorage.lastname = data.data.lastname;
            localStorage.username = data.data.username;
            this.$router.push("inicio");
            //this.error = false;
          }
        })
        .catch((e) => {
          console.log(e);
          this.error = true;
        });
    },
  },
};
</script>


<style scoped>
.container {
  width: 30%;
  margin: 0% 0% 0% 35%;
  background-color: #f7f7f7;
  border: #3d7ade 3px solid;
}

.título {
  font-size: 1.7rem;
  font-weight: bolder;
  letter-spacing: 2px;
  color: #2e3e88;
  margin-top: 5%;
}

.line {
  width: 30%;
  background-color: #2e3e88;

  height: 3px;
}

.text {
  width: 50%;
  margin: 6% 0% 0% 25%;
  justify-content: center;
  color: #2e3e88;
}
.text2 {
  width: 60%;
  margin: 6% 0% 0% 20%;
  justify-content: center;
  color: #2e3e88;
  font-size: 0.8rem;
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
  margin: 5% 0% 0% 35%;
}
.container-imgbutton {
  width: 10%;
  height: 20%;
}

.button {
  width: 50%;
  background-color: #f7f7f7;
  border: 0;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #3d7ade;
}

.button:hover {
  background-color: #eaeaea;
}

.alert {
  background-color: #e68181;
  color: red;
  border: red 1px solid;
  margin-top: 1%;
}

.input-container {
  height: 50px;
  position: relative;
  width: 60%;
  margin-left: 20%;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #eaeaea;
  border-radius: 10px;
  border: 0;
  box-sizing: border-box;
  color: black;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #f7f7f7;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:focus ~ .placeholder {
  color: #33c3a5;
}

.tooltip {
  margin-top: 7%;
  width: 70px;
  align-content: left;
  position: relative;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: white;
  color: #3d7ade;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  border: black 1px solid;
}
.container-input-tooltip {
  display: flex;
}
</style>