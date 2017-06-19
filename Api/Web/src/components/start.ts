declare var require: any;

import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    name: 'start',
    template: require('./start.html')
})

export default class Start extends Vue {

}
