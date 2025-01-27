<template>
  <div :class="{'navBarMainBoxWithMenu': isMenuVisible, 'navBarMainBox': !isMenuVisible}">
    <div class="leftBox">
        <div class="iconBox">
            <router-link to="/" >
                <img src="./icons/LogoTecton.svg" alt="LogoTecton" class="logoNavBar">
            </router-link>
        </div> 
        <div class="sectionsLeft">
            <router-link to="/nosotros" >
                <p>Nosotros</p>
            </router-link>
            <div 
                class="navBarMenu"  
                @mouseover="isVisible" 
                @mouseleave="isNotVisible"
            >
                <p class="menuParagraph" @click="goToProyectsPage">Proyectos</p>
                <div class="menuComponentBox"
                    v-if="isMenuVisible"
                    @mouseover="onMenuMouseOver"
                    @mouseleave="onMenuMouseLeave"
                >
                    <menuComponent ></menuComponent>
                </div>
            </div>
        </div>
    </div>
    <div class="rightBox">
        <div class="sectionsRight">
            <p>EN</p>
            <router-link to="/contact" >
                <p>Contacto</p>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import menuComponent from './menuComponent.vue';
export default {
    components: {
        menuComponent
    },
    data() {
        return {
            isMenuVisible: false,
            leaveTimeout: null,
        }
    },
    methods: {
        isVisible (){
            this.isMenuVisible = true;
            if(this.leaveTimeout) {
                clearTimeout(this.leaveTimeout)
            }
        },
        isNotVisible () {
            this.leaveTimeout = setTimeout(() => {
                this.isMenuVisible = false; 
            }, 100); 
        },
        onMenuMouseLeave () {
            this.leaveTimeout = setTimeout(() => {
                this.isMenuVisible = false;
            }, 100); 
        },
        onMenuMouseOver () {
            if (this.leaveTimeout) {
                clearTimeout(this.leaveTimeout); 
            }
        },
        goToProyectsPage () {
            this.$router.push('/proyectos');
        },
    }
};
</script>

<style scoped>
.navBarMainBox {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0, 0.2);
}
.navBarMainBoxWithMenu {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
}
.leftBox {
    display: flex;
}
.iconBox {
    padding: 0 50px 0 10px;
}
.logoNavBar {
    width: 100px;
    height: auto;
}
.sectionsLeft {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sectionsLeft p {
    padding: 0 30px 0 0;
    color: white;
    font-size: 13px;
    font-family: 'Montserrat-Light';
    cursor: pointer;
    text-decoration: none;
}
.sectionsLeft p:hover{
    text-decoration: underline;
}
.menuParagraph {
    margin: 0; 
    position: relative; 
    z-index: 10; 
}
.menuComponentBox {
    position: relative;
    z-index: 1000;
    height: 0px; 
    width: 0%; 
}
.rightBox {
    display: flex;
    position: absolute;
    right: 4%;
}
.sectionsRight {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sectionsRight p{
    padding: 0 20px 0 0;
    color: white;
    font-size: 13px;
    font-family: 'Montserrat-Light';
    cursor: pointer;
}
.sectionsRight p:hover{
    text-decoration: underline;
}

</style>