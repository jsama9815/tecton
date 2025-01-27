<template>
    <div class="mainBoxProyects">
        <div class="navBarContainer">
            <navBar />
        </div>
        <div class="cardsBoxContainer">
            <div class="cardsProyects">
                <div class="imgCard"
                    v-for="item in items" 
                    :key="item.id"
                    @click="goToDetails( item.id )"
                >
                <h1 class="titlesOfImg"> {{  item.name }}</h1>
                    <img :src="item.frontPage" 
                        :alt="`imagen de ${item.name}`"
                        loading="lazy"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import proyectsData from '@/data/proyectsData.json'
export default {
    components: {
        navBar,
    },
    data() {
        return {
            items: proyectsData,
        }
    },
    methods: {
        goToDetails(id) {
            this.$router.push({ name: 'proyect', params: { id } })
        }
    }
}
</script>

<style>
.navBarContainer {
    background-color: black;
}
h1 {
    margin: 0;
}
.cardsBoxContainer {
    display: flex;
    justify-content: center;
    padding: 40px 60px 40px 60px;
}
.cardsProyects {
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    gap: 40px 5px;
    width: 100%;
    margin: 0 auto;
}
.imgCard {
    position: relative;
    width: 100%;
    height: 500px; 
}
.imgCard img {
    width: 90%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    display: block;
    cursor: pointer;
}
.titlesOfImg {
    position: absolute;
    font-size: 25px;
    left: 5%;
    bottom: 1%;
    color: white;
    font-family: 'Montserrat-Light';
    font-weight: lighter;
}
</style>