<template>
    <div class="posts container">
        <img src="../assets/img/cyberfuel.svg" alt="Cyberfuel" class="logo" />
        <CardComp 
            class="mt-2 mx-auto single-post"
            picture="https://images.pexels.com/photos/4599050/pexels-photo-4599050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            parrafo="En algun rincon del mundo" 
            :header=" { 
              name: 'Antonio',
              picture: 'https://randomuser.me/api/portraits/men/80.jpg',
              }" 
            :likes="true" />
       
        <CardComp 
            class="mt-2 mx-auto single-post"
            picture="https://images.pexels.com/photos/7924749/pexels-photo-7924749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            parrafo="En algun rincon del mundo" 
            :header=" { 
              name: 'Isabella',
              picture: 'https://randomuser.me/api/portraits/women/81.jpg',
              }"
            :likes="true" />

        <CardComp 
            class="mt-2 mx-auto single-post"
            picture="https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            parrafo="En algun rincon del mundo" 
            :header=" { 
              name: 'Yuki',
              picture: 'https://randomuser.me/api/portraits/women/45.jpg',
              }"
            :likes="true" />
    </div>
</template>

<script>
import CardComp from "../components/CardComp.vue"
export default{
  name: "PostsView",
  components: {
    CardComp
  }
}
</script>


<style scoped>
  .posts { /*mantiene al footer en la parte abajo de la pagina */
    min-height: 60vh;
    margin: auto;
   }
   .logo {
    max-width: 115px;
    padding: 0.2rem;
   }
   .single-post {
    max-width: 550px;
   }

</style>