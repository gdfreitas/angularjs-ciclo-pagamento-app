(function () {
    angular
        .module('primeiraApp')
        .component('paginator', {
            bindings: {
                url: '@',
                pages: '@',
            },
            controller: ['$location', function ($location) {
                this.$onInit = function () {
                    console.log(this.pages);
                    const pages = parseInt(this.pages) || 1;
                    this.pagesArray = Array(pages).fill(0).map((elemento, indice) => indice + 1);
                }

                this.current = parseInt($location.search().page) || 1;
                this.needPagination = this.pages > 1
                this.hasPrev = this.current > 1
                this.hasNext = this.current < this.pages

                this.isCurrent = (indice) => this.current === indice;
            }],
            template: `
                <ul ng-if="$ctrl.needPagination" class="pagination no-margin pull-right">
                    <li ng-if="$ctrl.hasPrev">
                        <a href="{{$ctrl.url}}?page={{$ctrl.current - 1}}">«</a>
                    </li>

                    <li ng-class="{'active': $ctrl.isCurrent(index)}" ng-repeat="index in $ctrl.pagesArray">
                        <a href="{{$ctrl.url}}?page={{index}}">{{index}}</a>
                    </li>

                    <li ng-if="$ctrl.hasNext">
                        <a href="{{$ctrl.url}}?page={{$ctrl.current + 1}}">»</a>
                    </li>
                </ul>
            `
        })

})()