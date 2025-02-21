<template>
    <div class="mainNavPhoneBox">
        <div class="homeIcon">
            <router-link to="/" >
                <img src="./icons/LogoTecton.svg" alt="LogoTecton" class="logoNavPhone">
            </router-link>
        </div>
        <div class="menuIcon">
            <svg-icon type="mdi" 
            :path="path.mdiMenu"
            @click="toggleMenu" 
            ></svg-icon>
        </div>
        <div 
            class="component" 
            v-if="showMenu"
            @click="closeTheMenu"   
        >
            <menuListPhone></menuListPhone>
        </div>
        <div class="idiomaButton">
            <svg-icon 
                type="mdi" 
                :path="path.mdiTranslate"
                @click="toggleLanguage"
            ></svg-icon>
        </div>
    </div>
</template>

<script>
import menuListPhone from './menuListPhone.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenu, mdiTranslate } from '@mdi/js';
import { useI18n } from 'vue-i18n';
export default {
    name: "my-component",
    components: {
        SvgIcon,
        menuListPhone
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
            showMenu: false,
            path:{
                mdiMenu,
                mdiTranslate
            } 
        }
    },
    methods: {
        toggleLanguage() {
            this.$i18n.locale = this.$i18n.locale === 'en' ? 'es' : 'en'; 
        },
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        closeTheMenu() {
            this.showMenu = false
        }
    },
    computed: {
        currentLanguage() {
            return this.$i18n.locale; 
        }
    },
}
</script>

<style>
.mainNavPhoneBox {
    position: fixed;
    width: 100%;
    height: 90px;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color:black;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s ease-in-out;
}
.menuIcon {
    position: absolute;
    color:white;
    top: 40%;
    left: 5%;
}
.logoNavPhone {
    position: absolute;
    width: 100px;
    top: 20%;
    left: 35%;
}
.idiomaButton {
    position: absolute;
    right: 15%;
    color: white;
}

@media (min-width: 768px) and (max-width: 1024px) {
    .menuIcon {
        top: 40%;
        left: 5%;
    }
    .logoNavPhone {
        width: 100px;
        top: 20%;
        left: 40%;
    }
    .idiomaButton {
        right: 10%;
    }
}
@media (max-width: 768px) {
    .logoNavPhone {
        width: 100px;
        top: 20%;
        left: 36%;
    }
    .idiomaButton {
        right: 15%;
    }
}
</style>