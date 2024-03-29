(function () {
    angular
        .module('cicloPagamento')
        .component('field', {
            bindings: {
                id: '@',
                label: '@',
                grid: '@',
                placeholder: '@',
                type: '@',
                model: '=',
                readonly: '<'
            },
            controller: ['gridSystem', function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
            }],
            template:
                `<div class="{{$ctrl.gridClasses}}">
                <div class="form-group">
                    <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                    <input id="{{$ctrl.id}}" class="form-control" type="{{$ctrl.type}}" ng-model="$ctrl.model" placeholder="{{$ctrl.placeholder}}" ng-readonly="$ctrl.readonly"/>
                </div>
            </div>`
        })
})();