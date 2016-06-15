# jquery.anyElementCeneter
A jQuery plugin that centralizes any DOM element.

##Description
This simple plugin helps you centralize your DOM element against their parent element or the window. 

## Demo
 - Please see demo/demo.html


## Documentation




## Requires
  - jQuery 1.2.6+



## Browser Compatibility
  - [Firefox](http://mzl.la/RNaI) 2.0+
  - [Internet Explorer](http://bit.ly/9fMgIQ) 6+
  - [Safari](http://bit.ly/gMhzVR) 3+
  - [Opera](http://bit.ly/fWJzaC) 10.6+
  - [Chrome](http://bit.ly/ePHvYZ) 8+



## Installation
  - First, make sure you are using valid [DOCTYPE](http://bit.ly/hQK1Rk)
  - Include nessesary JS files from js folder

<!-- -->

      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
      <script type="text/javascript" src="path-to-file/jQuery.anyElementCeneter.js"></script>



## Options

#### boxheight
  - description: the element that the DOM element centralize against to
  - data type: int
  - default value: 'window'
  - possible value: 'window', 'parent', or '.someTarget'

#### boxwidth
  - description: you can specify the top of the target element
  - data type: integer
  - default value: false
  - possible value: 13, 20, 36 ... any number you want

#### boxColor
  - description: or specify the top in percentage of the target element
  - data type: float
  - default value: 0.5
  - possible value: 0.1, 0.4, 0.8 ...

#### wrapColor
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false
  - 
  
#### contColor
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false
  
 
#### wrapPadding
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false


#### borderRadius
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false

#### border
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false

#### boxShadow
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false

#### zIndex
  - description: center on window resize
  - data type: boolean
  - default value: true
  - possible value: true | false
  

## Usage
> Example code:

      // centralize #some-element against the window
      $('#centerBox').anyElementCeneter({
	            boxheight:300,
	            boxwidth:400,
							boxColor:'#3e3e3e',
	            wrapColor:'#ccc',
	            contColor:'#cecece',
	            wrapPadding:'4px',
	            borderRadius:'0',
	            border:'1px solid #2e2e2e',
	            boxShadow:'0 0 10px 0 #01f',
	            zIndex:'9999'
			});


## License

The expandable plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2011 [Supun Sameera Liyanage](supun.sameera@live.com)
