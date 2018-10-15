class Emitter {
    constructor(){
        this.subscribedEvents = {};
    }

    subscribe(eventName, callback) {
        if (!this.subscribedEvents[eventName]) this.subscribedEvents[eventName] = [callback];
        else this.subscribedEvents[eventName].push(callback);
    }

    unsubscribe(eventName) {
        delete this.subscribedEvents[eventName];
    }

    emit(eventName){
        const callbacks = this.subscribedEvents[eventName];
        if(callbacks){
            const args = Array.from(arguments);
            args.shift();
            for (let i = 0; i < callbacks.length; i++) callbacks[i].apply(this, args);
        }
    }
}


const emitter = new Emitter();

emitter.subscribe('cat', (param, lolo) => console.log(param, lolo));
emitter.subscribe('cat', ()=>console.log('two meow'));
emitter.subscribe('cat', ()=>console.log('three meow'));

emitter.subscribe('dog', ()=>console.log('three dog'));
emitter.subscribe('dog',  ()=>console.log('one dog'));


emitter.emit('cat', 'yoyo', 'bobo');
emitter.emit('dog');

emitter.unsubscribe('cat');

emitter.emit('cat');
emitter.emit('dog');