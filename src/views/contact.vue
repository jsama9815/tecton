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
                        id="name"
                        v-model = 'formData.name'
                        required
                    >
                    <label for="e-mail">{{ $t('contact.email') }}</label>
                    <input 
                        type="email"
                        id="email"
                        v-model = 'formData.email'
                        required
                    >
                    <label for="phone">{{ $t('contact.number') }}</label>
                    <input 
                        type="tel"
                        id="phone"
                        v-model = 'formData.phone'
                        required
                    >
                    <label for="message">{{ $t('contact.message') }}</label>
                    <input 
                        id="message"
                        v-model = 'formData.message'
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
    padding-top: 6%;
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
    flex-direction: row;
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
    padding-top: 8%;
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

@media (min-width: 1440px) {
    .buttonBox {
        bottom: 20%;
    }
}
@media(max-width: 1024px) {
    .itemsContactBox {
        display: flex;
        flex-direction: column;
    }
    .leftItems {
        width: 98%;
    }
    .topInformationContact {
        padding: 10% 0 2% 1%;
        width: 90%; 
    }
    .bottomInformationContact {
        padding: 4% 0 0% 1%;
        width: 90%;
    }
    .mapsBox {
        padding-left:1% ;
        width: 100%;
    }   
    .formBox {
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
        padding-left: 10%;
        width: 100%;
    }
    .formBox label {
        padding-top: 5%;
        padding-bottom: 1%;
        font-size: 18px;
    }
    .formBox input{
        width: 80%;
        font-size: 15px;    
    }
    .bottomInformationContact {
        padding: 2% 0 0 5%;
        font-size: 30px;
        width: 90%;
    }
    .buttonBox {
        display: flex;
        justify-content: flex-start;
        width: 100%; 
        padding-top: 5%;
        position: static;
    }
    
}
@media(max-width: 768px){
    .itemsContactBox {
        position: absolute;
        top: 7%;
        display: flex;
        flex-direction: column;
    }
    .leftItems {
        width: 98%;
    }
    .topInformationContact {
        width: 90%; 
    }
    .bottomInformationContact {
        padding: 4% 0 4% 1%;
        width: 90%;
    }
    .mapsBox {
        padding-left:1% ;
        width: 100%;
    }
    .formBox {
        display: flex;
        flex-direction: column;
        align-items: flex-start; 
        width: 100%;
    }
    .formBox label {
        padding-top: 5%;
        padding-bottom: 1%;
        font-size: 18px;
    }
    .formBox input{
        width: 90%;
        font-size: 15px;    
    }
    .buttonBox {
        display: flex;
        justify-content: flex-start;
        width: 100%; 
        margin-top: 15px;
        position: static;
    }
    .buttonBox button {
        width: 140px;
        height: 30px;
        border-radius: 4%;
        color: black;
    }
}
</style>