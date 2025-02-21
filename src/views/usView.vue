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
@media (min-width: 1440px) {
    .usParagraph {
        font-size: 45px;
    }
    .textAboutUs {
        font-size: 23px;
    }
}

@media(max-width: 1024px) { 
    .usMainBox {
        height: 92.5vh;
        padding-top: 100px;
    }
    .usItemsBox{
        padding-top: 45px;
    }
    .usParagraph {
        font-size: 55px;
        padding: 0 0 4% 4%;
    }
    .imgBox{
        height: 550px;
    }
    .textAboutUsBox {
        width: 90%;
        padding: 8% 0 0 4%;
    }
    .textAboutUs {
        font-size: 30px;
    }
}

@media(max-width: 768px){
    .usMainBox {
        height: 92.5vh;
        padding-top: 60px;
    }
    .imgBox{
        height: 250px;
    }
    .textAboutUsBox {
        width: 90%;
        padding: 8% 0 0 4%;
    }
    .textAboutUs {
        font-size: 20px;
    }
}
</style>