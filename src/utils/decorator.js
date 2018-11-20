import _ from 'lodash';
export function testable(target){
    target.isTestable = true;
}

export function timeout(time=0){
    return function(target,key,descriptor){
        var originalMethod = descriptor.value;
        descriptor.value = function(...args){
            setTimeout(()=>{
                originalMethod.apply(this,args);
            },time)
        }
        return descriptor;
    }
}

export function debounce(time=500){
    return function(target,key,descriptor){
        var originMethord = descriptor.value;
        const that =this;
        descriptor.value = function(...args){
            var debounceFunction = _.debounce(originMethord,time);
            debounceFunction.apply(that,args);
        }
        return descriptor;
    }
}