<template>
  <div class="phoneMenuMainBox">
    <div class="menu">
        <ul class="menuPhone">
            <router-link to="/nosotros">
                <li>{{ $t('nav.about') }}</li>
            </router-link>
            <router-link to="/proyectos">
                <li>{{ $t('nav.projects') }}</li>
            </router-link>
            <router-link to="/contact">
                <li>{{ $t('nav.contact') }}</li>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
ul { 
    margin: 0;
}
.phoneMenuMainBox {
    background-image: url('/menu_foto.avif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.8);
    background-color: blue;
    position: fixed; 
    top: 12%;
    left: 0;
    width: 100vw;
    height: 20vh;
    z-index: 999;
    display: flex;
    justify-content: left;
}
.menu {
    position: absolute;
    top: 16%;
    left: 3%;
    text-decoration: none;

}
.menuPhone {
    display: flex;
    flex-direction: column;
    list-style: none; 
}
.menuPhone li {
    font-size: 20px;
    color: white;
    padding-bottom: 12%;
    font-family: 'Montserrat-Light';
    font-weight: lighter; 
}
@media (max-width: 1024px) {
    .phoneMenuMainBox {
        top: 8%;
    }
    .menuPhone li {
        font-size: 25px;
        padding-bottom: 20%;
    }
}
@media (max-width: 768px){ 
    .phoneMenuMainBox {
        top: 12%;
    }
    .menuPhone li {
        font-size: 25px;
        padding-bottom: 18%;
    }

}
</style>