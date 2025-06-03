<template>
  <div class="menuMainBox">
    <div class="menuBox">
        <ul class="menuList"> 
            <li 
                v-for="item in items" 
                :key="item.id"
                @click="goToProject(item.id)"
            >
            {{ item.name[$i18n.locale] }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import proyectsData from '@/data/projectsData.json'
export default {
    data() {
        return {
            items: proyectsData,
        }
    },
    methods: {
        goToProject(id) {
            this.$emit('closeMenu');
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