    function Circle(radius) {
        this.radius = radius;
        let defaultLocation = {
            x: 0,
            y: 0
        };

        this.getDefaultLoacation = function(){
            return defaultLocation;
        };

        this.draw = function () {
            console.log('draw');
        };

        Object.defineProperty(this, 'defaultLocation', {
            get: function(){
                return defaultLocation;
            },
            set: function(value){
                if (!value.x || !value.y)
                throw new Error('invalid location.');
                
                defaultLocation = value;
            }
        });
    }

    const c1 = new Circle(100);
    // c1.defaultLocation = 0;
    console.log(typeof(c1));
    
    





    for (key in c1) {
        if (typeof (c1[key] === 'function'))
            console.log(key, c1[key]);
    }


    const keys = Object.keys(c1);
    console.log(keys);

    if ('radius' in c1)
        console.log('c1 has a radius.');


   