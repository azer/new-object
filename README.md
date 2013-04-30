## new-object

Objects with PubSub Interface

## Install

```bash
$ npm install new-object
```

## Usage

 ```js
prices = newObject({ apple: 3, grape: 4 })
prices('banana', 1)

prices('apple')
// => 3

prices('banana')
// => 1
```

Subscribing to changes:

```js
prices('cherry', 5)
prices('apple', 2)
prices.rm('banana')

prices.subscribe(function(update){

    update.set
    { cherry: 5, apple: 2 }

    update.rm
    ['banana']

})
```

See tests for more information.

![](https://dl.dropboxusercontent.com/s/4fbzg1r7h91doa4/npmel_19.jpg)