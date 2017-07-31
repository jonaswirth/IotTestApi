declare var require: any;

import Vue from 'vue'
import Component from 'vue-class-component'
import {constants} from '../constants.js'
import { AxiosInstance, AxiosPromise, AxiosResponse, AxiosRequestConfig } from 'axios'

@Component({
    name: 'start',
    template: require('./start.html')
})

export default class Start extends Vue {
    private axios: AxiosInstance;
    private requestConfig: AxiosRequestConfig;


    public message: any = "Loading";
    public color: any = null;

    mounted() {
        var _onSuccess = (response: AxiosResponse) => {
            this.message = response.data;
        };

        var _onError = (error: any) => {
            this.message = "Sorry that didn't work.";
        };

        this.axios
            .get(constants.api + "device")
            .then(_onSuccess)
            .catch(_onError);
    }

    public updateColor() {
        var clr = this.hexToRgb(this.color);

        var _onSuccess = (response: AxiosResponse) => {
            console.log("Success");
        };

        var _onError = (error: any) => {
            console.log("Failed");
        };

        //var color = clr.r + ";" + clr.g + ";" + clr.b;
        //console.log(color);

        this.axios
            .post(constants.api + "device", {
                
                    red: clr.r,
                    green: clr.g,
                    blue: clr.b
                
            })
            .then(_onSuccess)
            .catch(_onError); 
    }

    //Convert the hex to a rgb value
    private hexToRgb(hex:string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
}
