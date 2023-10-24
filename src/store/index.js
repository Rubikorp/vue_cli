import { createStore } from "vuex";
import { v4 as uuidv4 } from 'uuid'

export default createStore({
    state: {
        projects:{
                id: uuidv4(),
                title: 'Minimal Look Bedrooms',
                dsc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.',
                dsc2: ' In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'
            }
    },
    getters: {
        getProjects(state) {
            return state.projects;
        }
    },
    mutations: {},
    actions: {},
    modules: {},
})