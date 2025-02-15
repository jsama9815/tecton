<template>
  <div class="usMainBox">
    <div class="usItemsBox">
        <p class="usParagraph">{{ $t('about.title') }}</p>
        <div class="imgBox">
        </div>
        <div class="textAboutUsBox">
            <p class="textAboutUs">“{{ $t('about.text') }}”
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.usMainBox {
    background-color: black;
    height: 88vh;
    padding-top: 80px;
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
    background-image: url('/usPhoto.jpg');
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