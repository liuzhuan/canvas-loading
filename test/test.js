var loader = new Loader({
    container: '.js-container1',
    width: 100,
    height: 100,
    color: 'white'
})
console.log(loader.ratio)
loader.set(0.1)
console.log(loader.ratio)

new Loader({
    container: '.js-container2',
    width: 100,
    height: 100,
    color: 'red'
}).set(0.2)

new Loader({
    container: '.js-container3',
    width: 100,
    height: 100,
    color: 'green'
}).set(0.5)

new Loader({
    container: '.js-container4',
    width: 100,
    height: 100,
    color: 'blue'
}).set(0.8)