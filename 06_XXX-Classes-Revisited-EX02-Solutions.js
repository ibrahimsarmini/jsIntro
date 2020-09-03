/*
    1. Person Class
    Create a class called Person which accepts the name of a person
    as a string, and his/her age as a number. The Person class should
    have a method called describe which returns a string with the
    following syntax: "name, age years old". So, for example,
    if John is 19 years old, then the function describe of his object
    will return "John, 19 years old".
*/

class Person {

    name = String
    age  = Number

    constructor ( name = '', age = 0 ){
        this.name = name;
        this.age  = age;        
    }

    describe(){
        return `${this.name}, ${this.age} years old.`;
    }

}

let p1 = new Person('anx',36);
let p2 = new Person('lea',4);

console.log(
    p1.describe(),
    p2.describe()
);

/*
    2. Volume
    Write a JavaScript program to get the volume of a cylinder
    with four decimal places using a class.
    Note: Volume of a cylinder : V = πhr^2
    r is the radius and h is the height of the cylinder.
*/

class VolumeOfACylinder {

    height = Number
    radius = Number
    volume = Number

    constructor ( h = 0, r = 0 ){
        this.height = h;
        this.radius = r;
        this.volume = Math.PI * this.height * this.radius ** 2;
        console.log( this.volume.toFixed(4) );
    }
}

class VolumeOfACylinderGolf {
    constructor ( h = 0, r = 0 ){
        console.log( ( Math.PI * h * Math.pow(r,2) ).toFixed(4) );
    }
}

new VolumeOfACylinder(10,1);
new VolumeOfACylinder(42,23);

/*
    3. Tick Tock
    Rewrite the following code to use the "class" syntax.
*/

class Clock {
  
    timer    = null;
    template = String; 
  
    constructor({ template }){
        this.template = template;
    }

    render = () => {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop () {
      clearInterval(this.timer);
    }
  
    start () {
      this.render();
      this.timer = setInterval( this.render, 1000 );
    }

  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();

/*
4.
    TV Class
    Create a TV class with properties like brand, channel and volume.
        Specify brand in a constructor parameter.
        Channel should be 1 by default.
        Volume should be 50 by default.
    Add a method to reset TV so it goes back to channel 1 and volume 50.
    Add methods to increase and decrease volume.
        Volume can't never be below 0 or above 100.
    Add a method to set the channel randomly.
        Let's say the TV has only 50 channels.
    It's useful to write a status, that returns info about the TV status like:
        "Panasonic at channel 8, volume 75".
*/

class TV {

    brand   = String
    channel = Number
    volume  = Number

    DEFAULT_VOLUME  = 50
    DEFAULT_CHANNEL = 1

    constructor ( brand ){
        if ( ! brand ){
            console.error( "TV: Brand should be provided, as a String!!11elf" );
        }
        this.brand = brand;
        this.reset();
    }

    reset () {
        this.channel = this.DEFAULT_CHANNEL;
        this.volume  = this.DEFAULT_VOLUME;
    }

    volumeUp () {
        this.volume = Math.min( 100, this.volume + 1 );
    }

    volumeDown () {
        this.volume = Math.max(   0, this.volume - 1 );
        // this.volume--;
        // if ( this.volume < 0 ){
        //    alert("Volume already at zero")
        //    this.volume = 0;
        // }
    }

    randomChannel () {
        //             Math.ceil ( Math.random() * 50 );
        //               this could be a problem because Math.random() somtimes gives you 0
        //               Math.ceil(0) will give you 0... so even though it looks better
        //               Math.random() is destroying our beautifully elegant solution
        //               see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        //             Math.floor( Math.random() * 50 ) + 1;
        this.channel = Math.round( Math.random() * 49 ) + 1;
    }

    status () {
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}

let tv1 = new TV('Panasonic');
console.log( tv1.status() );
tv1.volumeUp();
tv1.volumeUp();
tv1.volumeUp();
tv1.volumeUp();
tv1.volumeUp();
tv1.volumeDown();
tv1.randomChannel();
console.log( tv1.status() );
tv1.reset();
console.log( tv1.status() );
