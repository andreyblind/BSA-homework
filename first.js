(function(){
    
    function Animal(age, name, sound, region){
            this.age = age;
            this.name = name;
            this.sound = sound;
            this.region = region;
    }
    Animal.prototype.say = function(){
            return("my name is " + this.name);
    };
    
    var object = function(o){
        function F(){};
        F.prototype = o;
        return new F();
    }
    
    function inherit(child, parent){
        child.prototype = object(parent.prototype);
        child.prototype.constructor = child;
        child.prototype._parent = parent;
    }

    function objectInherit(child, parent){
        /* 
    	Функция меяет прототипы на результат того, что
    	возвращает Object.create и устанавливает в прототип
        свойство _parent которое содержит ссылку на 
        функцию конструктор нашего наследуемого прототипа. 
        _parent нам понадобится для вызова конструктора.
        */
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
        child.prototype._parent = parent; 
    }

    
    function Dog(age, name, sound, region){
        /*
    	Функция конструктор принимающая параметры 
        и передающая их родительскому обьекту.
        */
        this._parent.apply(this, arguments);
    }
    objectInherit(Dog, Animal); //Наследуемся от Animal при помощи Object.create
    Dog.prototype.goAway = function(){
            return("i\'m just go away");
    };

	function Cat(age, name, sound, region){
        this._parent.apply(this, arguments);
    }
	
    inherit(Cat, Animal); //Наследуемся от Animal при помощи конструкторов.
    
    Cat.prototype.goAway = function(){
            return("i\'m just go away");
    };

    function Woodpecker(age, name, sound, region){
        this._parent.apply(this, arguments);
    }
	
    inherit(Woodpecker, Animal); //Наследуемся от Animal при помощи конструкторов.
    
    Woodpecker.prototype.goAway = function(){
            alert("i\'m just go away");
    };

    function getTypep(){
        var deprecated = ["string", "boolean", "number", "NaN", "object","date"];
        var result = null;
        if (this != window && deprecated.indexOf(typeof this) == -1){
            
            var objType = this.constructor.name;
            
            switch(objType){
                case "Dog":
                    result = "Dog";
                    break;
                case "Cat":
                    result = "Cat";
                    break;
                case "Woodpecker":
                    result = "Woodpecker";
                    break;
                default:
                    result = "Maybe i\'m an alien?";
                    break;
            }
        }
        return result;
    }
    
    var murzik = new Cat(2, "murzik", "mur-mur", "Ukraine");
    var barsik = new Dog(5, "barsik", "wof-wof", "Ukraine");
    var woody = new Woodpecker(3, "woody", "knock-knock", "Ukraine");

    console.log(murzik.say());
    console.log(barsik.say());
    console.log(woody.say());
    
    console.log(getTypep.call());
   
})()
