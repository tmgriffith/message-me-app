import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './messageRsvpList.html';


 
class MessageRsvpList { }
 
const name = 'messageRsvpsList';
 
// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  bindings: {
    rsvps: '<'
  },
  controller: MessageRsvpList
});