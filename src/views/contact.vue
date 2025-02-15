<template>
    <div class="contactMainBox">
        <div class="itemsContactBox">
            <div class="leftItems">
                <div class="topInformationContact">
                    <p class="contactParagraph">{{ $t('contact.title') }}</p>
                    <p class="sendUsParagraph">{{ $t('contact.phrase1') }}</p>
                </div>
                <div class="mapsBox">
                    <maps />
                </div>
                <div class="bottomInformationContact">
                    <svg-icon 
                        type="mdi" 
                        :path="path" 
                        class="iconLocation"
                        size="38"
                    >
                    </svg-icon>
                    <p>{{ $t('contact.location') }}</p>
                </div>
            </div>
            <div class="rigthItems">
                <form @submit.prevent="sendEmail" class="formBox">
                    <label for="name">{{ $t('contact.name') }}</label>
                    <input 
                        type="text"
                        v-model = 'formData.name'
                        :placeholder="$t('contact.name')"
                        required
                    >
                    <label for="e-mail">{{ $t('contact.email') }}</label>
                    <input 
                        type="email"
                        v-model = 'formData.email'
                        :placeholder="$t('contact.email')"
                        required
                    >
                    <label for="phone">{{ $t('contact.number') }}</label>
                    <input 
                        type="tel"
                        v-model = 'formData.phone'
                        :placeholder="$t('contact.number')"
                        required
                    >
                    <label for="message">{{ $t('contact.message') }}</label>
                    <input 
                        v-model = 'formData.message'
                        :placeholder="$t('contact.message')"
                        required
                    >
                    <div class="buttonBox">
                        <button class="buttonForm" type="submit">{{ $t('contact.button') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  
</template>

<script>
import navBar from '@/components/navBar.vue';
import maps from '@/components/maps.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarkerOutline } from '@mdi/js';
import emailjs from "emailjs-com";

export default {
    components: {
        navBar,
        maps,
        SvgIcon
    },
    data() {
    return {
       path: mdiMapMarkerOutline,
       formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    }
  },
  methods: {
    sendEmail() {
      const templateParams = {
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message,
      };
      emailjs
        .send(
          "service_w51t8bc", 
          "template_7613emf", 
          templateParams,
          "x6IL6puTo24KLDihF" 
        )
        .then(
          (response) => {
            this.clearForm();
          },
          (error) => {
            alert("Error al enviar el correo. Inténtalo nuevamente.");
          }
        );
    },
    clearForm() {
      this.formData = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};

</script>

<style scoped>
.itemsContactBox {
    padding-top: 5%;
    display: flex;
    flex-direction: row;
}
.leftItems {
    width: 50%;
    display: flex;
    flex-direction: column;
}
.topInformationContact {
    display: flex;
    flex-direction: column;
    padding: 5% 0 2% 15%;
    
}
.contactParagraph {
    font-size: 50px;
    font-family: 'Montserrat-Light';
}
.sendUsParagraph {
    color: #636262;
    font-family: 'Montserrat-Light';
}
.bottomInformationContact {
    display: flex;
    flex: row;
    padding: 2% 0 0 15%;
    font-size: 20px;
    align-items: center;
    width: 70%;
}
.bottomInformationContact p{
    font-family: 'Montserrat-Light';
    font-size: 15px;
}
.iconLocation {
    padding-right: 1%;
}
.rigthItems {
    display: flex;
    position: absolute;
    left: 50%;
    top: 20%;
    align-items: center;
}
.formBox {
    display: flex;
    flex-direction: column;
}
.formBox label {
    padding-top: 10%;
    padding-bottom: 1%;
    font-size: 13px;
    color: #adadad;
    font-family: 'Montserrat-Light';
}
.formBox input{
    width: 500px;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #adadad;
    background: transparent;
    outline: none;
    transition: border-color 0.3s;
    font-family: 'Montserrat-Light';
}
.formBox input:focus {
    border-bottom: 2px solid #0a0a0a;
}
.buttonBox {
    position: absolute;
    bottom: -25%;
}
.buttonBox button {
    width: 150px;
    height: 35px;
    background-color: transparent;
    font-size: 22px;
    font-family: 'Montserrat-Light';
    border: 1px solid black;
    cursor: pointer;
    border-radius: 2%;
}
.buttonBox button:hover {
    background-color: #0a0a0a;
    color:white;
}
</style>