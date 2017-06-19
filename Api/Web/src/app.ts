declare var require: any;

import Vue from 'vue'
import Component from 'vue-class-component'

import Start from './components/start'

@Component({
    name: 'app',
    template: require('./app.html'),
    components: {
        Start
    }
})

export default class App extends Vue {
    message: string;
}
