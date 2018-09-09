import {observable} from 'mobx';

 class FirstStore {
    @observable data='';
    
}

module.exports = new FirstStore();