# pdsDateTime
**_This project is currently in development._**
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)

# Motivation
Form controls are essential to build web site.
I want to make coworkers make controls easily.
It will provied from npm.

# Build status
20180821 Make docs

# Screenshots

# Tech/framework used
javascript ES6

# Code Example
```html
<div id="pdsDatetime"></div>
```
```javascript
import pdsDatetime from './scripts/pdsDatetime.js';

var dt = document.getElementById("pdsDatetime");
pdsDatetime("dt", {
  width: "200",
  height: "150"
});
```

# Contribute
Please give me pull request

# Attributes
* width
> 100, 140, ...
* height
> 40, 50, ...
* inputDisabled
> true, false
* format
> "YYYY-mm-DD"
* align
> "left(default)", "center", "right"

# functions

# Event handlers
* onChange
```javascript
{
  onChange: function(target) {
  
  }
}
```
