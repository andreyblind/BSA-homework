function Animal(age, name, sound, region){
            this.age = age;
            this.name = name;
            this.sound = sound;
            this.region = region;
}
Animal.prototype.say = function(){
    return("my name is " + this.name);
};

function Dog(age, name, sound, region){
        /*
    	Функция конструктор принимающая параметры 
        и передающая их родительскому обьекту.
        */
    this._parent.apply(this, arguments);
}

//Наследуемся от Animal при помощи objectInheritance.objectInherit
inheritanceObj.objectInherit(Dog, Animal); 

Dog.prototype.goAway = function(){
    return("i\'m just go away");
};

function Cat(age, name, sound, region){
    this._parent.apply(this, arguments);
}

//Наследуемся от Animal при помощи inheritanceObj.inherit
inheritanceObj.inherit(Cat, Animal);
Cat.prototype.goAway = function(){
    return("i\'m just go away");
};

function Woodpecker(age, name, sound, region){
    this._parent.apply(this, arguments);
}

/*
Наследуемся от Animal при помощи конструкторов.
*/
inheritanceObj.inherit(Woodpecker, Animal);
Woodpecker.prototype.goAway = function(){
    return("i\'m just go away");
};


var murzik = new Cat(2, "murzik", "mur-mur", "Ukraine");
var barsik = new Dog(5, "barsik", "wof-wof", "Ukraine");
var woody = new Woodpecker(3, "woody", "knock-knock", "Ukraine");

console.log(murzik.say());
console.log(barsik.say());
console.log(woody.say());

try{
    var result = inheritanceObj.getTypep.call(23);
}catch(err){
    var error = err;
}finally{
    if (error !== undefined){
        console.error(error.message);
    }
    else{
        console.info("Type: "+ result);
    }
}

console.info("Type: " + inheritanceObj.getTypep.call(murzik));


