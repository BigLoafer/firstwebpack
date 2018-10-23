import {observable , action} from 'mobx';

class HomeStore {
    @observable name = 'homePage';
    @action
    test=()=>{
        console.log('haha')
    }
}

export default new HomeStore();