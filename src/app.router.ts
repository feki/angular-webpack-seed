import { IStateProvider, IUrlRouterProvider } from 'angular-ui-router';

function AppRouter($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      abstract: true
    })
    .state('app.main', {
      url: '/',
      views: {
        'main@app': {
          template: 'Angular app successfully loaded.' 
        }
      }
    });
}

export default ['$stateProvider', '$urlRouterProvider', AppRouter];
