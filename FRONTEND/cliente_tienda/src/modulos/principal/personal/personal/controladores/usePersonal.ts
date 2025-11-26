import { ref } from 'vue';
import personalApi from '../api/personalAPI';
import { Personal } from '../interfaces/personal-interface';

//modulo de personal
export const usePersonal = () => {
    const personal = ref <Personal[]>([]);

    const traePersonal = async() => {
        const respuesta = await personalApi.get<Personal[]>('/');
        personal.value = respuesta.data;
    }
    return {
        personal,
        traePersonal
    }
}