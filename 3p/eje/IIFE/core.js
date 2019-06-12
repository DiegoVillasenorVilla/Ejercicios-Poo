//iife-like
core= new (class {
    constructor(v=0){
        this._v=v
        //PROPS
    }
    get v(){return this._v}
    set v(v){this._v=v}
})(3)