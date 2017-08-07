# jQuery.comments

This jQuery plugin retrives the comments inside a html or jQuery element

## Getting Started

Just import the plugin to your html and call the function.

```
$('#container').comments();
```

### Prerequisites

You need to import jQuery before this plugin.


### Examples

You can get all comments from a jquery object or from a jquery element like: 

```
var comments = $('#container').comments();
```

But if you want the comments in a cleaner version. If not, the plugin returns the comments as seen.

```
var commentsParsed = jQuery($data).comments(true);
```

This plugin works with single comments like: 
```
<!-- this is da comment -->
```

And for a multi line comments:
```
<!-- 
	this is
	a multine
	comment
-->
```

## Authors

* **Eric Lagarda** - [Krato](https://github.com/Krato)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

