<template>
    <div class="mainBoxDetails">
        <div class="navBarContainer">
            <navBar />
        </div>
        <div class="detailsContainer">
            <div class="titleDetailBox">
                <h1> {{ detailData.name }} </h1>
            </div>
            <div class="cardsDetailsMainContainer">
                <div class="cardsDetailBox"
                    v-for = "project in detailData.projects"
                    :key="project.id"
                >
                    <div class="imgCardDetailContainer">
                        <img :src="project.frontPageDetails" 
                            :alt="project.name"
                            loading="lazy"    
                        >
                    </div>
                    <div class="paragraphCardDetailContainer">
                        <h3>{{ project.name }}</h3>
                        <div class="paragraphDescriptionContainer">
                            <p> {{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import detailData from '@/data/proyectsData.json'
export default {
    props: [ 'id' ],
    components: {
        navBar,
    },
    data() {
        return {
           detailData: []
        }
    },
    mounted() {
        this.detailData = detailData.find(item => item.id == parseInt(this.id, 10))
    }
}
</script>

<style>
.detailsContainer {
    display: flex;
    flex-direction: column;
}
.titleDetailBox {
    position: absolute;
    left: 7%;
    top: 21%;
}
.titleDetailBox  h1{
    font-size: 2.5rem;
    font-family: 'Montserrat-Regular';
    font-weight: lighter;
}
.cardsDetailsMainContainer {
    position: absolute;
    top: 35%;
    left: 7%;
    display: grid;
    grid-template-columns: repeat(4, 1fr) ;
    gap: 15px;
    height: 60vh;
    width: 90%;
}
.cardsDetailBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    border-right: 2px solid rgb(179, 179, 179);
    cursor: pointer;
}
.cardsDetailBox:last-child {
    border-right:none ;
}
.imgCardDetailContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 75%;
}
.cardsDetailBox img {
    width: 98%;
}
.paragraphCardDetailContainer {
    display: flex;
    flex-direction: column;
    width: 90%;
    /* height: 100px; */
}
.paragraphCardDetailContainer h3 {
    margin: 0;
    padding: 5px 0 5px 0;
    font-size: 1.2rem;
    font-family: 'Montserrat-Regular';
    font-weight: lighter;
}
.paragraphDescriptionContainer {
    display: -webkit-box;      
    -webkit-box-orient: vertical; 
    overflow: hidden;    
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; 
}
.paragraphCardDetailContainer p {
    font-family: 'Montserrat-Light';
    font-weight: lighter;
    font-size: 0.9rem;
}
</style>