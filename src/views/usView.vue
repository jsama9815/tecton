<template>
  <div class="usMainBox">
    <navBar />
    <div class="usItemsBox">
        <p class="usParagraph">Nosotros</p>
        <div class="imgBox">
        </div>
        <div class="textAboutUsBox">
            <p class="textAboutUs">“Somos un estudio multidisciplinario especializado en arquitectura y construcción. 
                Nuestro objetivo es llevar al cliente el diseño y materialización de sus sueños a un precio justo.
                Abarcamos proyectos de diferentes escalas: desde mobiliario e interiorismos, hasta edificios y desarrollos a nivel urbano.
                Nuestro equipo está integrado por arquitectos, ingenieros, técnicos y trabajadores de la construcción.”
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
export default {
    components: {
        navBar
    }
}
</script>

<style scoped>
.usMainBox {
    background-color: black;
    height: 100vh;
}
.usItemsBox{
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    color:white;
}
.usParagraph {
    font-size: 35px;
    margin: 0;
    padding: 0 0 2% 4%;
    font-family: 'Montserrat-Light';
}
.imgBox{
    width: 100%;
    height: 350px;
    background-image: url('../../public/usPhoto.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.textAboutUsBox {
    width: 70%;
    padding:2% 0 0 4%;
}
.textAboutUs {
    font-size: 17px;
    font-family: 'Montserrat-Light';
    margin: 0;
}
</style>