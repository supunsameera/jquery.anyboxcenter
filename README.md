# jquery.anyElementCeneter
A jQuery plugin that centralizes any DOM element.

##Description
This simple plugin helps you centralize your DOM element against their parent element or the window. 

## Demo
 - Please see demo/demo.html


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
  - description: element height that we want to centralized
  - data type: integer
  - default value: 300
  - possible value: any integer value

#### boxwidth
  - description: element width that we want to centralized
  - data type: integer
  - default value: 400
  - possible value: any integer value

#### boxColor
  - description: element background color
  - data type: string
  - default value: '#3e3e3e'
  - possible value: 'any hash color or rgb color'

#### wrapColor
  - description: element wrapper background color
  - data type: string
  - default value: '#ccc'
  - possible value: 'any hash color or rgb color'
  
  
#### contColor
  - description: element container background color
  - data type: string
  - default value: '#cecece'
  - possible value:'any hash color or rgb color'
  
 
#### wrapPadding
  - description: element wrapper padding
  - data type: string
  - default value: '4px'
  - possible value: 'any value for padding'


#### borderRadius
  - description: element wrapper border radius
  - data type: string
  - default value: true
  - possible value: 'any value for radius'

#### border
  - description: element wrapper border
  - data type: string
  - default value: '1px solid #2e2e2e'
  - possible value: 'any value for border'

#### boxShadow
  - description: element wrapper box shadow
  - data type: string
  - default value: '0 0 10px 0 #000'
  - possible value: 'any value for box shadow'

#### zIndex
  - description: element container z-index
  - data type: string
  - default value: '9999'
  - possible value: any value for z-index
  

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

Copyright (c) 2017 [Supun Sameera Liyanage](supun.sameera@live.com)
