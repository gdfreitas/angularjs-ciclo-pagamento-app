(function () {

    angular
        .module('cicloPagamento')
        .component('authField', {
            bindings: {
                id: '@',
                label: '@',
                type: '@',
                grid: '@',
                icon: '@',
                model: '=',
                placeholder: '@',
                hide: '<'
            },
            controller: function () {
                this.$onInit = () => {
                    this.iconClasses = `glyphicon glyphicon-${this.icon} form-control-feedback`
                }
            },
            template: `<div class="form-group has-feedback" ng-hide="$ctrl.hide"><input type="{{$ctrl.type}}" class="form-control" id="{{$ctrl.id}}" ng-model="$ctrl.model" placeholder="{{$ctrl.placeholder}}"/><span class="{{$ctrl.iconClasses}}"></span></div>`
        })
})()