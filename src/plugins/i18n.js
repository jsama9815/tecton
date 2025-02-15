import { createI18n } from "vue-i18n";
import test from "@/locales/test";
import projectData from '@/data/projectsData.json';
import projectDataEn from '@/data/projectsDataEn.json'


const i18n = createI18n({
    legacy: false, 
    globalInjection: true,
    locale: 'es',
    fallbackLocale: 'en',
    messages: {

        es: {
            ...test.es, 
            projects: projectData 
        }, 
        en: { 
            ...test.en,
            projects: projectDataEn
        }
    }
});

export default i18n