<template>
  <div class="menuMainBox">
    <div class="menuBox">
        <ul class="menuList"> 
            <li>Comercial</li>
            <li>Corporativo</li>
            <li>Mantenimiento</li>
            <li>Residencial</li>
            <li>Salud</li>
            <li>Ingenierias de la construccion</li>
            <li>Intervencion Urbana</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        isMenuVisible: {
        type: Boolean,
        required: true
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0;
}
.menuMainBox {
    background-image: url('../../public/menu_foto.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(1.2);
    position: fixed; 
    top: 10%;
    left: 0;
    width: 100vw;
    height: 90vh;
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
    /* font-weight: 400; */
    cursor: pointer;
}

li:hover {
    text-decoration: underline;
}
</style>