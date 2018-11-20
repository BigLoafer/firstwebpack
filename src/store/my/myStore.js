import {observable ,action} from 'mobx';
import {testable} from '../../utils/decorator';

@testable
class MyStore {
    @observable name = "MyPage";
    @action
    test=()=>{
        console.log('zzzzz');
    }
}
export default new MyStore();