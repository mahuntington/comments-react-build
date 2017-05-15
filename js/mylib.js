const myFunc = function(){
    console.log('included!');
}

export default myFunc;

const myFunc2 = function(){
    console.log('also included');
}

const unnecessary = function(){
    console.log('unnecessary');
}

export {
    myFunc2,
    unnecessary as omitme
}
