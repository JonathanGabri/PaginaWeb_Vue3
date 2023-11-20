<template>
	<div class="home">
		<div class="row mx-0">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Vue logo" src="../assets/img/cyberfuel.svg" />
					<h2 class="text-center text-lg-start">
						Conéctate con amigos y el resto del mundo usando Mazebook
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									placeholder="Ingresa tu email" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									placeholder="Contraseña" />
							</div>
						</form>
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Crear cuenta</button>
					</template>
				</card-comp>
			</div>
		</div>
	</div>
</template>

<script>
import CardComp from '../components/CardComp.vue'
// @ is an alias to /src

export default {
	name: 'HomeView',
		components: {
			CardComp,
		},

		data() {
			return {
				btnArray: [
					{
						txt: 'Iniciar sesión',
						class: 'btn-primary',
					},
					{
						txt: 'Has olvidado tu contraseña?',
						class: '',
					},
				],
			}
		},
  }
</script>

<style scoped>
h2 {
  max-width: 470px
  ;
  margin: auto;
  font-size: 1.8rem;
}
.home {
  max-width: 895px; /* establecemos el ancho máximo  de home a 895 píxeles */
  margin: auto; /* centramos el elemento horizontalmente dentro de su contenedor */
}
.img-cont {
  display: flex; /* estalecemos el contenido de la img como flex para ajustar el tamaño y la posición */
  flex-direction: column; /* establece los elementos uno debajo del otro */
}

img {
  max-width: 315px; /* establecemos el ancho máximo del elemento a 315 píxeles */
  margin: 1em auto 0 auto;
}

.card-comp {
  max-width: 398px;
  margin-top: 2.6em;
}
.btn-success{ 
margin: auto;
min-width: 195px;
}

@media (min-width: 992px) {
  .home {
    margin: 4em auto;
  }
  img {
    margin: 0;
    margin-top: 5.6em;
  }
  h2 {
    margin: 0;
    margin-top: -0.8em;
    margin-left: 0.8em;
  }
}
</style>