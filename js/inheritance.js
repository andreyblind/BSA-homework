var inheritanceObj = (function(){
    

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

    function getTypep(){
        var deprecated = ["string", "boolean", "number", "NaN","date"];
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
                    throw{
                        message: "Object not identified like one of the inherited objects. Maybe it\'s one of JS objects or scalar types?"
                    }
                    break;
            }
        }
        return result;
    }
    
    return{
        "object": object,
        "inherit": inherit,
        "objectInherit": objectInherit,
        "getTypep": getTypep 
   }
})();

