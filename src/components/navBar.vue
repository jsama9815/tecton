<template>
  <div class="navBarMainBox" :style="navBarStyles">
    <div class="leftBox">
        <div class="iconBox">
            <router-link to="/" >
                <img src="./icons/LogoTecton.svg" alt="LogoTecton" class="logoNavBar">
            </router-link>
        </div> 
        <div class="sectionsLeft">
            <router-link to="/nosotros" >
                <p>{{ $t('nav.about') }}</p>
            </router-link>
            <div 
                class="navBarMenu"  
                @mouseover="isVisible" 
                @mouseleave="isNotVisible"
            >
                <p class="menuParagraph" @click="goToProjectsPage">{{ $t('nav.projects') }}</p>
                <div class="menuComponentBox"
                    v-if="isMenuVisible"
                    @mouseover="onMenuMouseOver"
                    @mouseleave="onMenuMouseLeave"
                >
                    <menuComponent @closeMenu="isMenuVisible = false" ></menuComponent>
                </div>
            </div>
        </div>
    </div>
    <div class="rightBox">
        <div class="sectionsRight">
            <p @click="toggleLanguage">{{ currentLanguage === 'en' ? 'Us' : 'Es' }}</p>
            <router-link to="/contact" >
                <p>{{ $t('nav.contact') }}</p>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import menuComponent from './menuComponent.vue';
import { useI18n } from 'vue-i18n';
export default {
    props: {
        currentRoute: String
    },
    components: {
        menuComponent
    },
    setup() {
        const { locale } = useI18n();
        const toggleLanguage = () => {
            locale.value = locale.value === 'en' ? 'es' : 'en';
        };
        return {
            locale,
            toggleLanguage
        }
    },
    data() {
        return {
            isMenuVisible: false,
            leaveTimeout: null,
        }
    },
    computed: {
        currentLanguage() {
            return this.$i18n.locale; 
        },
        navBarStyles() {
            return {
                backgroundColor: this.currentRoute === 'home' && !this.isMenuVisible ? 'rgba(0, 0, 0, 0.4)' : 'black',
                backdropFilter: this.currentRoute === 'home' && !this.isMenuVisible ? 'blur(2px)' : 'none',
            }
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
        goToProjectsPage () {
            this.isMenuVisible = false;
            this.$router.push('/proyectos');
        },
        toggleLanguage() {
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en'; 
        }
    }
};
</script>

<style scoped>
.navBarMainBox {
    position: fixed;
    width: 100%;
    height: 70px;
    top:0;
    left: 0;
    z-index: 1000;
    background-color:black;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
}
.navBarMainBox::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    backdrop-filter: blur(2px);
    z-index: -1;
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
    /* z-index: 10;  */
}
.menuComponentBox {
    position: fixed;  
    z-index: 999;
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