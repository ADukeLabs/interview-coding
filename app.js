(function (){
    'use strict';

    function FormComponent(){
        this.countries = ['New Zealand', "USA"];
    }

    angular
        .module('MyApp', ['ngMaterial'])
        .component('formComponent', {
            controller: FormComponent,
            templateUrl: 'form-component.html'
        });

})();