<template>
  <div class="container">
    <img src="@/assets/img/TodoLegal.png" alt="" width="45%" />
    <div class="título">Crear Cuenta Gratis</div>
    <hr class="line" />
    <div class="text">
      Ingrese los siguientes datos para registrarte como un nuevo usuario.
    </div>
    <form action="">
      <div class="input-container ic2">
        <input
          class="input"
          type="text"
          id="username"
          name="username"
          placeholder=" "
          v-model="form.username"
        />
        <div class="cut"></div>
        <label class="placeholder">Cédula</label>
      </div>

      <div>
        <div class="input-container ic2">
          <input
            class="input"
            type="text"
            placeholder=" "
            name="password"
            id="password"
            v-model="form.password"
          />
          <div class="cut"></div>
          <label class="placeholder">Contraseña</label>
        </div>
      </div>
      <div>
        <div class="input-container ic2">
          <input
            class="input"
            type="text"
            placeholder=" "
            name="confirmPassword"
            id="confirmPassword"
            v-model="form.confirmPassword"
          />
          <div class="cut"></div>
          <label class="placeholder">Confirmar Contraseña</label>
        </div>
      </div>
      <div class="container-button">
        <input
          class="button"
          type="button"
          v-on:click="guardar()"
          value="Registrarme"
        />
        <div class="container-imgbutton">
          <img src="@/assets/img/flecha.png" width="100%" />
        </div>
      </div>
    </form>
    <div role="alert" v-if="error2" class="alert">
      Ester usuario ya se encuentra registrado registre otro usuario.
    </div>
    <div role="alert" v-if="error" class="alert">
      Las contraseñas no coinciden
    </div>
    <div class="text3">Examen by TodoLegal</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Cuenta",

  components: {},
  data: function () {
    return {
      form: {
        name: "Pedro",
        lastname: "Perez Lopez",
        phonenumber: "8091010101",
        email: "xxx.xx@todolegal.com",
        username: "",
        password: "",
      },
      error: false,
      error2: false,
    };
  },

  methods: {
    guardar() {
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
        })
        .catch((e) => {
          console.log(e);
          this.error2 = true;
        });
      if (this.form.password === this.form.confirmPassword) {
        const access_token = {
          token: console.data.data.access_token,
        };
        axios
          .post(
            "https://90h9amptse.execute-api.us-east-1.amazonaws.com/user",
            access_token,
            this.form
          )
          .then((data) => {
            localStorage.name = data.data.name;
            localStorage.lastname = data.data.lastname;
            localStorage.username = data.data.username;
            this.$router.push("inicio");
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
            //alert("error");
          });
      } else {
        this.error = true;
      }
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
.text3 {
  width: 60%;
  margin: 15% 0% 3% 20%;
  justify-content: center;
  color: #2e3e88;
  font-size: 0.8rem;
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
</style>
