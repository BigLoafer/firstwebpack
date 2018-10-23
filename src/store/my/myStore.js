import {observable ,action} from 'mobx';

class MyStore {
    @observable name = "MyPage";
    @action
    test=()=>{
        console.log('zzzzz');
    }
}
export default new MyStore();