<template>
    <div class="mainBoxDetails">
        <div class="detailsContainer">
            <div class="titleDetailBox">
                <h1> {{ detailData.name }} </h1>
            </div>
            <div class="cardsDetailsMainContainer">
                <div class="cardsDetailBox"
                    v-for = "project in detailData.projects"
                    :key="project.id"
                    @click="selectProject(project)"
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
                            <p>- {{ project.description.construccion }}</p>
                            <p>- {{ project.description.descriptionProject }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carouselContainer" v-if="showCarousel">
                <svg-icon 
                        type="mdi" 
                        :path="path.mdiCloseThick" 
                        class="closeButton"
                        size="30px"
                        @click="closeCarousel"
                />
                <div class="carouselItems">
                    <img :src="selectedImages[currentIndex]" alt="imagen del proyecto">
                    <div class="imgDescription">
                        <p>{{ information.construccion }}</p>
                        <p>{{ information.descriptionProject }}</p>
                    </div>
                    <svg-icon 
                        type="mdi" 
                        :path="path.mdiMenuLeft" 
                        class="buttonLeft"
                        size="100px"
                        @click="previousImage"
                    >
                    </svg-icon>
                    <svg-icon 
                        type="mdi" 
                        :path="path.mdiMenuRight" 
                        class="buttonRight"
                        size="100px"
                        @click="netxImage"
                    >
                    </svg-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
import detailData from '@/data/projectsData.json';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenuLeft, mdiMenuRight, mdiCloseThick } from '@mdi/js';
import { } from '@mdi/js';
export default {
    props: [ 'id' ],
    components: {
        navBar,
        SvgIcon
    },
    data() {
        return {
           detailData: [],
           information: null,
           showCarousel : false,
           selectedImages: [],
           currentIndex: 0,
           path: {
                mdiMenuLeft,
                mdiCloseThick,
                mdiMenuRight
            }
        }
    },
    methods: {
        selectProject(project) {
            this.selectedImages = project.imagesCarousel || [];
            this.currentIndex = 0;
            this.showCarousel = true;    
            this.information = project.description;    
        },
        netxImage() {
            this.currentIndex = (this.currentIndex + 1) % this.selectedImages.length;
        },
        previousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.selectedImages.length) % this.selectedImages.length;
        },
        closeCarousel() {
            this.showCarousel = false
        }
    },
    mounted() {
        this.detailData = detailData.find(item => item.id == parseInt(this.id, 10)) || {};
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
    gap: 0px 15px;
    height: 60vh;
    width: 90%;
    cursor: pointer;
}
.cardsDetailBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70%;
    border-right: 2px solid rgb(179, 179, 179);
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
    overflow: hidden;    
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 3; 
}
.paragraphCardDetailContainer p {
    font-family: 'Montserrat-Light';
    font-weight: lighter;
    font-size: 0.9rem;
}
.carouselContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.carouselItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 90%;
    max-height: 80%;
    min-width: 70%;
    padding: 20px;
    border-radius: 10px;
}
.carouselItems img {
    width: 50%;
    max-height: 55vh;
    object-fit: cover;
    border-radius: 8px;
}
.buttonLeft {
    position: absolute;
    left: 20%;
    top: 30%;
    color: white;
    cursor: pointer;
}
.buttonRight {
    position: absolute;
    top: 30%;
    right: 20%;
    color: white;
    cursor: pointer;
}
.closeButton {
    position: absolute;
    top: 20px;
    right: 20px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}
.imgDescription {
    font-family: 'Montserrat-Light'; ;
    margin-top: 5px;
    color: white;
    text-align: left;
    font-size: 0.8rem;
    width: 49%;
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
    max-height: 200px;    
}
</style>