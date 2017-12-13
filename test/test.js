var loader = new Loader({
    container: '.js-container1',
    width: 100,
    height: 100,
    color: 'white'
})
loader.update(0.1)

new Loader({
    container: '.js-container2',
    width: 100,
    height: 100,
    color: 'red',
    startAngle: 0.001
}).update(0.2)

new Loader({
    container: '.js-container3',
    width: 100,
    height: 100,
    color: 'green'
}).update(0.5)

new Loader({
    container: '.js-container4',
    width: 100,
    height: 100,
    color: 'blue'
}).update(0.8)