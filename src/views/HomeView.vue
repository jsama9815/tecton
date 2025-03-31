<template>
    <div class="mainBoxHome">
        <div class="informationBox">
            <p class="paragraphLower">" {{ $t('home.phrase1') }}</p>
            <p class="paragraphUpper">{{ $t('home.phrase2') }} <br /> {{ $t('home.phrase3') }} "</p>
            <p class="paragraphLower2">{{ $t('home.phrase4') }}</p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.mainBoxHome{
    background-image: url('/Portada.avif');
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
@media (max-width: 1024px) { 
    .mainBoxHome{
        height: 90vh;
    }
    .informationBox {
        bottom: 2%;
        height: 20%;
        width: 80%;
    }
    .paragraphLower{
        padding-bottom: 0px;
        font-size: 20px;
    }
    .paragraphUpper {
        padding-bottom: 5px;
        font-size: 35px;
    }
    .paragraphLower2{
        font-size: 20px;
        position: absolute;
        right: 38%;
    }
}
@media (max-width: 768px){
    .mainBoxHome{
        height: 90vh;
    }
    .informationBox {
        bottom: 10%;
        left: 5%;
        height: 20%;
        width: 90%;
    }
    .paragraphLower{
        padding-bottom: 0px;
    }
    .paragraphUpper {
        padding-bottom: 5px;
    }
    .paragraphLower2{
        right: 8%;
    }
}
</style>
