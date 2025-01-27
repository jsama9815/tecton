<template>
    <div class="mainBoxHome">
        <navBar />
        <!-- <div class="navBarBox"></div> -->
        <div class="informationBox">
            <p class="paragraphLower">"La arquitectura</p>
            <p class="paragraphUpper">es la voluntad de la epoca <br /> traducida a espacio"</p>
            <p class="paragraphLower2">Mies Van Der Rohe</p>
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

.mainBoxHome{
    background-image: url('../../public/Portada.png');
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.9);
}
.informationBox {
    bottom: 10%;
    left: 5%;
    position:absolute;
    height: 20%;
    width: 22%;
}
.informationBox p {
    color: white;
}
.paragraphLower{
    font-size: 15px;
    font-family: 'Montserrat-Regular';
    font-weight: 700;
    margin: 0;
    padding-bottom: 5px;
}
.paragraphUpper {
    font-family: 'Montserrat-Light';
    font-size: 30px;
    margin: 0;
    padding-bottom: 5px;
}
.paragraphLower2{
    position: absolute;
    right: 8%;
    font-size: 15px;
    font-family: 'Montserrat-Regular';
    font-weight: 700;
    margin: 0;
}
</style>
