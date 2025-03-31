<template>
  <div class="menuMainBox">
    <div class="menuBox">
        <ul class="menuList"> 
            <li @click="goToProject(1)">{{ $t('titles.title1') }}</li>
            <li @click="goToProject(2)">{{ $t('titles.title2') }}</li>
            <li @click="goToProject(3)">{{ $t('titles.title3') }}</li>
            <li @click="goToProject(4)">{{ $t('titles.title4') }}</li>
            <li @click="goToProject(5)">{{ $t('titles.title5') }}</li>
            <li @click="goToProject(6)">{{ $t('titles.title6') }}</li>
            <!-- <li>Intervencion Urbana</li> -->
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        goToProject(id) {
            this.$router.push({ name: 'proyect', params: { id } })
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0;
}
.menuMainBox {
    background-image: url('/menu_foto.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(1.2);
    position: fixed; 
    top: 12%;
    left: 0;
    width: 100vw;
    height: 88vh;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center; 
}
.menuBox{
    position: absolute;
    top: 16%;
    left: 5%;
}
.menuList{
    list-style: none; 
    display: flex;
    flex-direction: column;
    align-content: center;
}

li {
    color: white;
    font-size: 35px;
    padding-bottom: 4%;
    font-family: 'Montserrat-Light';
    cursor: pointer;
}

li:hover {
    text-decoration: underline;
}
@media (min-width: 1440px) {
    .menuMainBox {
    top: 10%;
    left: 0;
    height: 90vh;
}
}
</style>