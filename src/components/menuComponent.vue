<template>
  <div class="menuMainBox">
    <div class="menuBox">
        <ul class="menuList"> 
            <li @click="goToProject(1)">Comercial</li>
            <li @click="goToProject(2)">Corporativo</li>
            <li @click="goToProject(3)">Mantenimiento</li>
            <li @click="goToProject(4)">Residencial</li>
            <li @click="goToProject(5)">Salud</li>
            <li @click="goToProject(6)">Ingenierias de la construccion</li>
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
    },
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
    background-image: url('/menu_foto.png');
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
</style>