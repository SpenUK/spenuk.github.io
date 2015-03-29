(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var router = require('./router.js');
var templates = require('./templates.js');


var App = {
  introPanel: '#landing',
  mainPanel: '.main .content',
  transitionPanel: '.main .transition-content',

  templates: templates,

  views: {
    master: require('./views/master.js'),

    intro: require('./views/intro.js'),
    blog: require('./views/blog-post.js'),
    projects: require('./views/project.js'),
    contact: require('./views/contact.js'),
    about: require('./views/about.js')
  },

  initialize: function(options){
  	options = options; // linter -__-
    // var templates = this.templates;
  	this.$introPanel = $(this.introPanel);
  	this.$mainPanel = $(this.mainPanel);

    // is it worth defining the top panel content here? will it ever change? could be used as an index page?
    this.$introPanel.html(templates.intro());
    // this.views.ui.header = new this.views.ui.header({template: templates['ui/header']});

    this.views.master = new this.views.master();

  	window.r = this.router = new router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;
},{"./router.js":8,"./templates.js":9,"./views/about.js":10,"./views/blog-post.js":11,"./views/contact.js":12,"./views/intro.js":13,"./views/master.js":14,"./views/project.js":15}],2:[function(require,module,exports){
// define([], function() {

'use strict';

module.exports = {
found: 11,
posts: [
{
ID: 34,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-10T14:22:29+00:00",
modified: "2014-09-10T14:23:52+00:00",
title: "wp Rest Api",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/10/wp-rest-api/",
short_URL: "http://wp.me/p50g34-y",
content: "<p>The idea here is to pull in WordPress blog posts as JSON representations to make them available for processing or rendering in an outside project.</p> <p>I decided to build this partially to experiment with a handful of JS concepts &amp; techs that I wanted to learn more about &#8211; namely BackboneJS and RequireJS as well as better &amp; more modular code structures, third party REST API usage, and build processes.<br /> The other reason for putting this together was so that I could build out a small collection of modules that each pull data from different APIs to be used on my own personal website (And anybody else&#8217;s if they wish!).</p> <p>I plan to build similar modules for GitHub, GitHub Gists, Twitter, Dribbble, Treehouse and pretty much any other API a developer or designer would like to see on their portfolio/personal site.</p> ",
excerpt: "<p>The idea here is to pull in WordPress blog posts as JSON representations to make them available for processing or rendering in an outside project. I decided to build this partially to experiment with a handful of JS concepts &amp; techs that I wanted to learn more about &#8211; namely BackboneJS and RequireJS as well [&hellip;]</p> ",
slug: "wp-rest-api",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=34",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "cf982c70e849ffa2d77271f899e42a52",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { },
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
attachments: { },
metadata: [
{
id: "166",
key: "geo_public",
value: "0"
}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/34/likes/"
	}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 32,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-10T13:58:38+00:00",
modified: "2014-09-11T12:25:22+00:00",
title: "wp Rest Api Cont.",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/10/wp-rest-api-cont/",
short_URL: "http://wp.me/p50g34-w",
content: "<p>I&#8217;d love any feedback on this little project of mine as well as any suggestions for improvements.</p> <p>I would love to see this being used by others in the future, so I aim to get it &#8216;plug-in quality&#8217; in time.</p> <p>If you&#8217;d like to contribute you can do so over at <a href='https://github.com/SpenUK/backbone--wordpress-REST-access'>the GitHub repo<br /> </a></p> <p>And incase you&#8217;re viewing this from elsewhere, <a href='http://spentaylor.com/wp-blog'>here&#8217;s the demo page</a></p> ",
excerpt: "<p>I&#8217;d love any feedback on this little project of mine as well as any suggestions for improvements. I would love to see this being used by others in the future, so I aim to get it &#8216;plug-in quality&#8217; in time. If you&#8217;d like to contribute you can do so over at the GitHub repo And incase [&hellip;]</p> ",
slug: "wp-rest-api-cont",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=32",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "6ecf748cc31aa00d6a7f77d086d34a90",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
API: {
ID: 4276,
name: "API",
slug: "api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
REST: {
ID: 15314,
name: "REST",
slug: "rest",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
"WP-REST-API": {
ID: 259472257,
name: "WP-REST-API",
slug: "wp-rest-api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
attachments: { },
metadata: [
{
	id: "187",
	key: "geo_public",
	value: "0"
},
{
	id: "179",
	key: "_wpas_mess",
	value: "wp Rest Api Cont."
},
{
	id: "173",
	key: "_wpas_skip_facebook",
	value: "1"
},
{
	id: "174",
	key: "_wpas_skip_google_plus",
	value: "1"
},
{
	id: "176",
	key: "_wpas_skip_linkedin",
	value: "1"
},
{
	id: "178",
	key: "_wpas_skip_path",
	value: "1"
},
{
	id: "177",
	key: "_wpas_skip_tumblr",
	value: "1"
},
{
	id: "175",
	key: "_wpas_skip_twitter",
	value: "1"
}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/32/likes/"
	}
},
current_user_can: {
	publish_post: false,
	delete_post: false,
	edit_post: false
}
},
{
ID: 28,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:33:02+00:00",
modified: "2014-09-09T13:14:04+00:00",
title: "Cheese",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/cheese/",
short_URL: "http://wp.me/s50g34-cheese",
content: "<p>I love cheese, especially macaroni cheese blue castello. Squirty cheese smelly cheese lancashire bavarian bergkase fondue the big cheese squirty cheese cheesy feet. Feta fromage frais paneer bavarian bergkase the big cheese airedale cheese slices say cheese. Swiss boursin gouda pecorino melted cheese paneer lancashire halloumi. Cheddar cream cheese pepper jack macaroni cheese cheese strings cheesy feet cheddar croque monsieur. Brie roquefort cheese slices stinking bishop taleggio cheesy feet taleggio cheese and wine. Red leicester mozzarella cheese and wine caerphilly roquefort taleggio.</p> <p>The big cheese goat queso. Airedale cheeseburger roquefort edam stilton cow hard cheese croque monsieur. Cauliflower cheese taleggio cheesy grin babybel jarlsberg chalk and cheese stilton boursin. Boursin port-salut rubber cheese cheese slices stilton stilton cheese triangles cheese triangles. Jarlsberg rubber cheese macaroni cheese bocconcini paneer port-salut cheddar lancashire. Bavarian bergkase rubber cheese hard cheese cheese and wine bavarian bergkase danish fontina cheese triangles ricotta. Gouda melted cheese parmesan airedale hard cheese cheese triangles.</p> ",
excerpt: "<p>I love cheese, especially macaroni cheese blue castello. Squirty cheese smelly cheese lancashire bavarian bergkase fondue the big cheese squirty cheese cheesy feet. Feta fromage frais paneer bavarian bergkase the big cheese airedale cheese slices say cheese. Swiss boursin gouda pecorino melted cheese paneer lancashire halloumi. Cheddar cream cheese pepper jack macaroni cheese cheese strings [&hellip;]</p> ",
slug: "cheese",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=28",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "0e1a9e462795613e1036707818f2a80f",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Cheese: {
ID: 7630,
name: "Cheese",
slug: "cheese",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
Dairy: {
ID: 8614,
name: "Dairy",
slug: "dairy",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
API: {
ID: 4276,
name: "API",
slug: "api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
REST: {
ID: 15314,
name: "REST",
slug: "rest",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
},
"WP-REST-API": {
ID: 259472257,
name: "WP-REST-API",
slug: "wp-rest-api",
description: "",
post_count: 1,
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
}
}
},
categories: {
	Dairy: {
		ID: 8614,
		name: "Dairy",
		slug: "dairy",
		description: "",
		post_count: 1,
		parent: 586,
		meta: {
			links: {
				self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:dairy",
				help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:dairy/help",
				site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
			}
		}
	}
},
attachments: { },
metadata: [
	{
	id: "119",
	key: "geo_public",
	value: "0"
	}
],
meta: {
	links: {
		self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28",
		help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/help",
		site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
		replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/replies/",
		likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/28/likes/"
	}
},
current_user_can: {
	publish_post: false,
	delete_post: false,
	edit_post: false
}
},
{
ID: 26,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:32:17+00:00",
modified: "2014-09-09T13:14:51+00:00",
title: "Pommy Ipsum",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/pommy-ipsum/",
short_URL: "http://wp.me/p50g34-q",
content: "<p>Pommy ipsum fish fingers and custard scatterbrained sausage roll clotted cream guiness, what a load of cobblers jolly a right royal knees up wellies. Dignified scarper bloke scrumpy naff off for sooth, give you a bell cup of tea ey up brilliant. Big Ben off t&#8217;shop beefeater I bid you good day one would like chap, bit of a Jack the lad nowt a comely wench. Treacle hedgehog cheerio I bid you good day numbskull, shepherd&#8217;s pie we&#8217;ll be &#8216;avin less of that down South. Jolly leisurely wellies is she &#8216;avin a laugh nutter fancy a cuppa laughing gear have a kip, Victoria sponge cake golly doofer Union Jack getting on my wick ey up duck a bit miffed, bobby down South cotton on pie-eyed made a pig&#8217;s ear of it tad.</p> <p>In the jacksy gobsmacked god save the queen golly curry sauce cor blimey&#8217; the black death the fuzz conkers, splendid beefeater down the local utter shambles drizzle lug hole they can sod off. Tip-top cup of tea smeg bit of alright daft cow chin up Victoria sponge cake pigeons in Trafalgar Square fish fingers and custard, stupendous completely starkers you mean it ain&#8217;t me noggin&#8217; give you a bell black cab darling 10 pence mix what a load of cobblers gob, flip flops got a lot of brass nutter Essex girls muck about tosser crisps.</p> <p>- See more at: <a href='http://www.pommyipsum.com/#sthash.F4kGmIkO.dpuf' rel='nofollow'>http://www.pommyipsum.com/#sthash.F4kGmIkO.dpuf</a></p> ",
excerpt: "<p>Pommy ipsum fish fingers and custard scatterbrained sausage roll clotted cream guiness, what a load of cobblers jolly a right royal knees up wellies. Dignified scarper bloke scrumpy naff off for sooth, give you a bell cup of tea ey up brilliant. Big Ben off t&#8217;shop beefeater I bid you good day one would like [&hellip;]</p> ",
slug: "pommy-ipsum",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=26",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "81df9d3dedeb3b662c48522306687657",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { 
	Cheese: {
		ID: 7630,
		name: "Cheese",
		slug: "cheese",
		description: "",
		post_count: 1,
		meta: {
			links: {
				self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese",
				help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:cheese/help",
				site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
			}
		}
	},
	Dairy: {
	ID: 8614,
	name: "Dairy",
	slug: "dairy",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dairy/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	API: {
	ID: 4276,
	name: "API",
	slug: "api",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:api/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	REST: {
	ID: 15314,
	name: "REST",
	slug: "rest",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:rest/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	},
	"WP-REST-API": {
	ID: 259472257,
	name: "WP-REST-API",
	slug: "wp-rest-api",
	description: "",
	post_count: 1,
	meta: {
	links: {
	self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api",
	help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:wp-rest-api/help",
	site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
	}
	}
	}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "109",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/26/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 23,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:31:10+00:00",
modified: "2014-09-09T13:17:39+00:00",
title: "Just a short one",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/just-a-short-one/",
short_URL: "http://wp.me/p50g34-n",
content: "<p>Today I ate bread, but not loads&#8230; just one bun. this is what it looked like.</p> <p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg'><img class='aligncenter size-medium wp-image-24' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg?w=300&#038;h=199' alt='finance-bill-2012-bread-bun' width='300' height='199' /></a></p> ",
excerpt: "<p>Today I ate bread, but not loads&#8230; just one bun. this is what it looked like.</p> ",
slug: "just-a-short-one",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=23",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "1f3ae491d614bc6be62e4b2a3a8f4d3c",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {

Bread: {
ID: 22482,
name: "Bread",
slug: "bread",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bread",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bread/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Food: {
ID: 586,
name: "Food",
slug: "food",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:food",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:food/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Lunch: {
ID: 16231,
name: "Lunch",
slug: "lunch",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:lunch",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:lunch/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Bread: {
ID: 22482,
name: "Bread",
slug: "bread",
description: "",
post_count: 1,
parent: 586,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:bread",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:bread/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
24: {
ID: 24,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/finance-bill-2012-bread-bun.jpg",
mime_type: "image/jpeg",
width: 425,
height: 282
}
},
metadata: [
{
id: "99",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/23/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 19,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:25:46+00:00",
modified: "2014-09-09T13:15:16+00:00",
title: "Baconing",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/baconing/",
short_URL: "http://wp.me/s50g34-baconing",
content: "<p>Bacon ipsum dolor sit amet rump jerky pork belly capicola drumstick ground round strip steak venison. Beef ribs jerky ribeye landjaeger tri-tip pork belly. Turkey capicola pig t-bone, frankfurter beef ribs tail andouille kielbasa chuck pork belly swine flank salami landjaeger. Landjaeger swine shank beef ribs doner, spare ribs venison cow meatball turducken sausage. Leberkas turducken andouille chuck, prosciutto beef ribs boudin.</p> <p>Sirloin flank pancetta meatball kevin hamburger short ribs. Kevin sirloin cow bacon chicken biltong tenderloin boudin beef sausage filet mignon tail tongue ham. Kielbasa cow shoulder doner, meatloaf meatball brisket t-bone sirloin bresaola pig shankle rump. Leberkas short ribs ribeye capicola boudin hamburger, flank strip steak landjaeger pancetta rump. Ground round kielbasa ribeye sirloin pork chop short loin prosciutto tenderloin andouille jerky jowl.</p> <p>Capicola ball tip kevin, tongue brisket bacon strip steak sausage tri-tip leberkas jerky boudin tenderloin meatloaf. Prosciutto t-bone pork loin beef boudin short loin cow swine tongue brisket fatback landjaeger. Jerky meatloaf meatball ball tip strip steak jowl tongue short ribs ground round shoulder. Salami doner meatball beef flank. Ham hock ball tip tenderloin, meatball fatback pork biltong doner jowl strip steak swine.</p> ",
excerpt: "<p>Bacon ipsum dolor sit amet rump jerky pork belly capicola drumstick ground round strip steak venison. Beef ribs jerky ribeye landjaeger tri-tip pork belly. Turkey capicola pig t-bone, frankfurter beef ribs tail andouille kielbasa chuck pork belly swine flank salami landjaeger. Landjaeger swine shank beef ribs doner, spare ribs venison cow meatball turducken sausage. Leberkas [&hellip;]</p> ",
slug: "baconing",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=19",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "a93b51cbb7c2017be9e4622c2fd15766",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Bacon: {
ID: 96588,
name: "Bacon",
slug: "bacon",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bacon",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:bacon/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Meat: {
ID: 8188,
name: "Meat",
slug: "meat",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:meat",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:meat/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Pig: {
ID: 15610,
name: "Pig",
slug: "pig",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:pig",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:pig/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Tasty: {
ID: 244116,
name: "Tasty",
slug: "tasty",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:tasty",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:tasty/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Meat: {
ID: 8188,
name: "Meat",
slug: "meat",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:meat",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:meat/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "79",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/19/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 17,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:23:45+00:00",
modified: "2014-09-10T19:29:15+00:00",
title: "Long Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/synergy/",
short_URL: "http://wp.me/s50g34-synergy",
content: "<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p> <p>Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p> <p>Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p> <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p> <p>Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.</p> <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric &#8220;outside the box&#8221; thinking. Completely pursue scalable customer service through sustainable potentialities.</p> <p>Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or &#8220;organic&#8221; sources.</p> <p>Credibly innovate granular internal or &#8220;organic&#8221; sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.</p> <p>Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.</p> <p>Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.</p> ",
excerpt: "<p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource sucking relationships via premier niche markets. Professionally cultivate [&hellip;]</p> ",
slug: "synergy",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=17",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "f0acce10b5bc845fbc03ec788c9faf28",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
B2B: {
ID: 14906,
name: "B2B",
slug: "b2b",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:b2b",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:b2b/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Corporate: {
ID: 7100,
name: "Corporate",
slug: "corporate",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:corporate",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:corporate/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Dynamic: {
ID: 214633,
name: "Dynamic",
slug: "dynamic",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dynamic",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:dynamic/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
B2B: {
ID: 14906,
name: "B2B",
slug: "b2b",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:b2b",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:b2b/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
"Corporate Culture": {
ID: 49657,
name: "Corporate Culture",
slug: "corporate-culture",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:corporate-culture",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:corporate-culture/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "67",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/17/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 12,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-09T11:08:36+00:00",
modified: "2014-09-09T13:17:11+00:00",
title: "Hodor!",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/09/hodor/",
short_URL: "http://wp.me/s50g34-hodor",
content: "<p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg'><img class='aligncenter size-medium wp-image-13' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg?w=300&#038;h=225' alt='0' width='300' height='225' /></a>Hodor hodor HODOR!hodor, hodor. Hodor hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor, hodor hodor. Hodor hodor hodor hodor?! Hodor hodor &#8211; hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor &#8211; hodor, hodor. Hodor hodor hodor!</p> <p>Hodor hodor &#8211; hodor, hodor. Hodor hodor&#8230; Hodor hodor hodor &#8211; hodor?! Hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor. Hodor hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor&#8230; Hodor hodor HODOR hodor, hodor hodor. Hodor, hodor &#8211; hodor? Hodor hodor HODOR! Hodor hodor&#8230; Hodor hodor hodor, hodor. Hodor HODOR hodor, hodor hodor?</p> ",
excerpt: "<p>Hodor hodor HODOR!hodor, hodor. Hodor hodor hodor hodor, hodor. Hodor hodor. Hodor! Hodor hodor, hodor hodor hodor&#8230; Hodor hodor hodor &#8211; hodor, hodor, hodor hodor. Hodor hodor hodor hodor?! Hodor hodor &#8211; hodor, hodor. Hodor hodor?! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor. Hodor. Hodor hodor &#8211; hodor, hodor. Hodor hodor hodor! Hodor hodor [&hellip;]</p> ",
slug: "hodor",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=12",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "0a4e8a82941e486df934be4c7f71209c",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Hodor: {
ID: 14825022,
name: "Hodor",
slug: "hodor",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:hodor",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:hodor/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Hodor: {
ID: 14825022,
name: "Hodor",
slug: "hodor",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:hodor",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:hodor/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
13: {
ID: 13,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/0.jpg",
mime_type: "image/jpeg",
width: 480,
height: 360
}
},
metadata: [
{
id: "47",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/12/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 15,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-07T11:09:54+00:00",
modified: "2014-09-10T19:27:59+00:00",
title: "Third Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/07/third-post/",
short_URL: "http://wp.me/p50g34-f",
content: "<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle pizzle dope dictumst. Shizzlin dizzle dapibizzle. Curabitizzle tellizzle crazy, pretizzle things, mattis izzle, fizzle vitae, nunc. We gonna chung suscipit. Integer yo mamma dope ghetto hizzle.</p> <p>Curabitizzle shut the shizzle up pimpin&#8217; gangsta nisi break it down mollizzle. Suspendisse potenti. Fo shizzle go to hizzle. I&#8217;m in the shizzle neque. Mofo orci. Crizzle mauris mauris, mofo funky fresh, feugiat sit amizzle, boofron izzle, pede. Pellentesque shizzle my nizzle crocodizzle. Vestibulizzle gangster mi, volutpizzle izzle, sagittis sed, fo shizzle sempizzle, sizzle. Check out this izzle ipsizzle. That&#8217;s the shizzle black felizzle mofo orci. Nizzle pizzle go to hizzle tellivizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sodalizzle ornare. Mammasay mammasa mamma oo sa venenatizzle fizzle yo lacizzle. Yo things. Suspendisse sure placerat lacus. Sizzle dang ante. Nunc go to hizzle, leo eu dapibus hendrerizzle, shiz felizzle cool sizzle, break it down crazy magna that&#8217;s the shizzle luctus pede. Nam a mammasay mammasa mamma oo sa. Class crackalackin taciti crunk ad litora torquent bizzle black we gonna chung, away sheezy hymenaeos. Break yo neck, yall interdum, fizzle nizzle elementizzle nonummy, ass orci viverra leo, boofron mammasay mammasa mamma oo sa risizzle arcu my shizz sizzle.</p> ",
excerpt: "<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle [&hellip;]</p> ",
slug: "third-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=15",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "e8c40e7b0109e4fa1935c694d8ec0c2f",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: { },
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: { },
metadata: [
{
id: "57",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/15/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 7,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-04T14:17:38+00:00",
modified: "2014-09-09T13:18:33+00:00",
title: "Second Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/04/second-post/",
short_URL: "http://wp.me/p50g34-7",
content: "<p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg'><img class='aligncenter size-medium wp-image-8' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg?w=300&#038;h=249' alt='jaba' width='300' height='249' /></a></p> <p>&nbsp;</p> <p>har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har</p> ",
excerpt: "<p>&nbsp; har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har har [&hellip;]</p> ",
slug: "second-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=7",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 0,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "38a4f8693cb2d03fbebb35517b30aa66",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
Art: {
ID: 177,
name: "Art",
slug: "art",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:art",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:art/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
Jabba: {
ID: 159987,
name: "Jabba",
slug: "jabba",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:jabba",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:jabba/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
"har har har": {
ID: 1192263,
name: "har har har",
slug: "har-har-har",
description: "",
post_count: 1,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:har-har-har",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:har-har-har/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
8: {
ID: 8,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/jaba.jpg",
mime_type: "image/jpeg",
width: 500,
height: 415
}
},
metadata: [
{
id: "31",
key: "geo_public",
value: "0"
},
{
id: "21",
key: "_wpas_mess",
value: "undefined"
},
{
id: "15",
key: "_wpas_skip_facebook",
value: "1"
},
{
id: "16",
key: "_wpas_skip_google_plus",
value: "1"
},
{
id: "18",
key: "_wpas_skip_linkedin",
value: "1"
},
{
id: "20",
key: "_wpas_skip_path",
value: "1"
},
{
id: "19",
key: "_wpas_skip_tumblr",
value: "1"
},
{
id: "17",
key: "_wpas_skip_twitter",
value: "1"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/7/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
},
{
ID: 3,
site_ID: 73943374,
author: {
	ID: 47178662,
	login: "spentaylor",
	email: false,
	name: "spentaylor",
	nice_name: "spentaylor",
	URL: "http://ijustwanttotesttheapi.wordpress.com",
	avatar_URL: "http://1.gravatar.com/avatar/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G",
	profile_URL: "http://en.gravatar.com/spentaylor",
	site_ID: 73943374
},
date: "2014-09-01T11:45:09+00:00",
modified: "2014-09-01T11:45:09+00:00",
title: "First Post",
URL: "http://ijustwanttotesttheapi.wordpress.com/2014/09/01/first-post/",
short_URL: "http://wp.me/p50g34-3",
content: "<p style='text-align:left;''>Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird on it. Drinking vinegar food truck McSweeney&#8217;s roof party, salvia +1 tattooed DIY disrupt Helvetica. Narwhal kale chips tousled beard distillery Odd Future, PBR&amp;B 90&#8217;s selvage cardigan church-key scenester. Paleo sustainable actually Carles cray cliche dreamcatcher.</p> <p><a href='https://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg'><img class='aligncenter size-medium wp-image-4' src='http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg?w=300&#038;h=219' alt='subo' width='300' height='219' /></a></p> <p>Pitchfork actually readymade messenger bag, craft beer Pinterest scenester Thundercats sartorial keffiyeh hella twee organic Brooklyn. Shoreditch Thundercats art party sartorial tattooed flexitarian, actually direct trade PBR&amp;B before they sold out Etsy Vice. Selfies High Life roof party trust fund, swag shabby chic Godard freegan fap authentic asymmetrical. Retro hashtag Thundercats selfies hella direct trade. IPhone swag next level, gastropub chambray retro Etsy squid kitsch. Viral locavore Brooklyn plaid Carles. Church-key hella narwhal, YOLO ethnic scenester biodiesel Odd Future.</p> ",
excerpt: "<p>Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird [&hellip;]</p> ",
slug: "first-post",
guid: "http://ijustwanttotesttheapi.wordpress.com/?p=3",
status: "publish",
sticky: false,
password: "",
parent: false,
type: "post",
comments_open: true,
pings_open: true,
likes_enabled: true,
sharing_enabled: true,
comment_count: 1,
like_count: 0,
i_like: 0,
is_reblogged: 0,
is_following: 0,
global_ID: "54e4d86f54daa326a38050d0c4fe364a",
featured_image: "",
post_thumbnail: null,
format: "standard",
geo: false,
publicize_URLs: [ ],
tags: {
"kale chips": {
ID: 6017001,
name: "kale chips",
slug: "kale-chips",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:kale-chips",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:kale-chips/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
"Odd Future": {
ID: 16642545,
name: "Odd Future",
slug: "odd-future",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:odd-future",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:odd-future/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
},
YOLO: {
ID: 711100,
name: "YOLO",
slug: "yolo",
description: "",
post_count: 1,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:yolo",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/tags/slug:yolo/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
categories: {
Uncategorized: {
ID: 1,
name: "Uncategorized",
slug: "uncategorized",
description: "",
post_count: 5,
parent: 0,
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/categories/slug:uncategorized/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374"
}
}
}
},
attachments: {
4: {
ID: 4,
URL: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg",
guid: "http://ijustwanttotesttheapi.files.wordpress.com/2014/09/subo.jpg",
mime_type: "image/jpeg",
width: 450,
height: 329
}
},
metadata: [
{
id: "8",
key: "geo_public",
value: "0"
}
],
meta: {
links: {
self: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3",
help: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/help",
site: "http://public-api.wordpress.com/rest/v1/sites/73943374",
replies: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/replies/",
likes: "http://public-api.wordpress.com/rest/v1/sites/73943374/posts/3/likes/"
}
},
current_user_can: {
publish_post: false,
delete_post: false,
edit_post: false
}
}
]
}

// });
},{}],3:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.Collection.extend({
	
	// model: ArticleModel,
	// urlParams: {},
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1/sites/ijustwanttotesttheapi.wordpress.com/posts';
  },
  parse: function(response){ //, xhr
  	this.totalRecords = response.found;
    return response.posts;
  },
  getCurrentRecord: function(){
    return this.at(this.position);
  },
  getLatest: function(){
    return this.at(0);
  }
});
},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
'use strict';

var app = require('./app.js');

// window.Backbone.history.navigate = require('./modules/backbone-overloaded-navigate.js');

$(document).on('ready', function(){
	app.initialize();
});
},{"./app.js":1}],6:[function(require,module,exports){
'use strict';

var afterTrans = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';


function transitions (options) {
	/*jshint validthis:true */
	this.container = options.container;
	this.content = options.content;
	this.transitionClass = options.transitionClass;
	this.animating = false;

	this.render = function(content){
		return this[this.direction === 'prev' ? 'prev' : 'next'](content);
	};

	this.next = function(content){
		if (this.animating) {return false;}
		var $container = $(this.container);
		var $target = $container.find(this.transitionClass);
		var this_ = this;

		$target.html(content);

		this.animating = true;
		window.setTimeout(function(){
			$container.addClass('animating-next').removeClass('animating-prev').one(afterTrans, function(){
				$container.removeClass('animating-next');
				this_.switchElements();
				this_.animating = false;
			});
		},0);
	};

	this.prev = function(content){
		if (this.animating) {return false; }
		var $container = $(this.container);
		var $target = $container.find(this.transitionClass);
		var this_ = this;

		$target.html(content);

		this.animating = true;

		window.setTimeout(function(){
			$container.addClass('animating-prev').removeClass('animating-next').one(afterTrans, function(){
				$container.removeClass('animating-prev');
				this_.switchElements();
				this_.animating = false;
			});
		},0);
	};

	this.switchElements = function(){
		var content = $(this.container).find(this.content);

		content.toggleClass(this.transitionClass.replace('.',''));

		return this;
	};


	return this;	
}

module.exports = transitions;
},{}],7:[function(require,module,exports){
module.exports = [
	{
		ID: 3,
		title: 'Example Project 3',
		slug: 'example-project-3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['backbone.js', 'grunt.js', 'browserify.js', 'handlebars.js'],
			ruby: ['rails']
		}
	}, {
		ID: 2,
		title: 'Example Project 2',
		slug: 'example-project-2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['backbone.js', 'grunt.js', 'browserify.js', 'handlebars.js'],
			php: ['']
		}
	}, {
		ID: 1,
		title: 'Example Project 1',
		slug: 'example-project-1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl.',
		stack: {
			js: ['ember.js', 'gulp.js', 'node.js', 'handlebars.js']
		}
	}

];
},{}],8:[function(require,module,exports){
'use strict';

var _=window._;

var AppRouter = window.Backbone.Router.extend({
	routes: {
		'': 'root',
		'blog(/)(/:post)': 'blog',
		'projects(/:project)': 'projects',
		'contact': 'contact',
		'about': 'about'
	},

	initialize: function(context){

		this.listenTo(window.Backbone, 'router:redirect', this.redirect);
		this.listenTo(window.Backbone, 'router:goToCurrentContent', this.goToCurrentContent);
		this.listenTo(window.Backbone, 'router:nextContent', this.goToNextContent);
		this.listenTo(window.Backbone, 'router:prevContent', this.goToPrevContent);

		this.currentContentRoute = this.defaultContentRoute();
		
		this.on('route:root' ,function(){

  		new context.views.intro({
  			model: {},
  			template: context.templates.intro
  		});
  		
		});

		this.on('route:blog' ,function(slug){

			// var options = (arguments[1] || {});

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

			var transition = (this.currentContentView === context.views.blog);

			if (!slug) {
				slug = context.views.blog.defaultSlug();
				this.navigate(context.views.blog.defaultRoute());
  			context.views.blog.render({slug: slug});
  		} else {
  			if (context.views.blog.checkSlug(slug)) {
  				context.views.blog.render({slug: slug, transition: transition});
  			} else {
  				context.views.blog.render({transition: transition});
  			}
  		}

			this.currentContentRoute = window.Backbone.history.fragment;
			this.currentContentView = context.views.blog;
			
		});

		this.on('route:projects' ,function(slug){

			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates.project
	  		});
			}

			var transition = (this.currentContentView === context.views.projects);

			if (!slug) {

				slug = context.views.projects.defaultSlug();
				this.navigate(context.views.projects.defaultRoute());
  			context.views.projects.render({slug: slug});
  		} else {
  			if (context.views.projects.checkSlug(slug)) {
  				context.views.projects.render({slug: slug, transition: transition});
  			} else {
  				context.views.projects.render({transition: transition});
  			}
  		}

  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.projects;
  		
		});

		this.on('route:contact' ,function(){
			if (!context.views.contact.initialized) {
				context.views.contact = new context.views.contact({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.contact
	  		});
			}

  		context.views.contact.render();
  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.contact;
  		
		});

		this.on('route:about' ,function(){
			if (!context.views.about.initialized) {
				context.views.about = new context.views.about({
	  			model: {},
	  			el: context.mainPanel,
	  			template: context.templates.about
	  		});
			}

  		context.views.about.render();
  		this.currentContentRoute = window.Backbone.history.fragment;
  		this.currentContentView = context.views.about;
  		
		});

		this.on('route:defaultRoute', function(){
		});

		window.Backbone.history.start();

	},
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute);
	},
	goToPrevContent: function () {
		console.log('goToPrevContent');
		if (!_.isFunction(this.currentContentView.getPrevModel)) { return false; }
		// var route = this.currentContentView.namespace;
		var route = this.currentContentView.prevRoute();
		console.log('route', route);
		// var slug = this.currentContentView.getPrevModel().get('slug');
		// this.trigger('route:' + route, slug, {transition: 'prev'});
		this.navigate(route);

		// return {slug: slug, route: 'route:'+ route, v: this.currentContentView};
	},
	goToNextContent: function () {
		if (!_.isFunction(this.currentContentView.getNextModel)) { return false; }
		// var route = this.currentContentView.namespace;
		var route = this.currentContentView.nextRoute();
		// var slug = this.currentContentView.getNextModel().get('slug');
		// this.trigger('route:' + route, slug, {transition: 'next'});
		// console.log(route);
		this.navigate(route);

		// return {slug: slug, route: 'route:'+ route, v: this.currentContentView};
	},
	defaultContentRoute: function () {
		return '#/about';
	},
	redirect: function(route){
		this.navigate(route);
	}

});

module.exports = AppRouter;
},{}],9:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>about</h2>\n</div>";
  },"useData":true});

this["JST"]["blog-post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  return "Article Title";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"grid-container\">\n\n	<h2>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n	\n</div>";
},"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>contact</h2>\n</div>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"links\">\n	<li class=\"about\"><a href=\"#/about\">about</a></li>\n	<li class=\"blog\"><a href=\"#/blog\">blog</a></li>\n	<li class=\"projects\"><a href=\"#/projects\">projects</a></li>\n	<li class=\"contact\"><a href=\"#/contact\">contact</a></li>\n</ul>\n";
  },"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " <div class=\"page-wrap "
    + escapeExpression(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"state","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>    	 \n  	<div class=\"main\">\n      <div data-1 class=\"content\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n      <div data-2 class=\"content transitioner\">\n        <div class=\"grid-container\">\n          <h2>TRANSITION EXAMPLE</h2>\n          <p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p><p>la la la...</p>\n        </div>\n      </div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"3":function(depth0,helpers,partials,data) {
  return "Project Title";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"grid-container\">\n	<h2>";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</h2>\n\n	\n\n</div>";
},"useData":true});

this["JST"]["ui/header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(((helper = (helper = helpers.prevLink || (depth0 != null ? depth0.prevLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prevLink","hash":{},"data":data}) : helper)))
    + "\" class=\"go-prev\" ";
},"3":function(depth0,helpers,partials,data) {
  return " class=\"go-prev hide\"";
  },"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " href=\""
    + escapeExpression(((helper = (helper = helpers.nextLink || (depth0 != null ? depth0.nextLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextLink","hash":{},"data":data}) : helper)))
    + "\" class=\"go-next\" ";
},"7":function(depth0,helpers,partials,data) {
  return " class=\"go-next hide\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"landing-footer-content\">\n  <div class=\"icon menu\">\n    <i class=\"fa fa-chevron-down fa-2x show-content\"></i>\n  </div>\n</div>\n\n<div class=\"header-content\">\n    <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prevLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n    </a>\n  \n  <a href=\"#\">\n    <div class=\"icon menu\">\n      <i class=\"fa fa-bars fa-2x show-intro\"></i>\n    </div>\n  </a>\n\n  \n    <a ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.nextLink : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-right\"></i>\n      </div>\n    </a>\n  \n</div>\n<div></div>";
},"useData":true});
 return this['JST'];
})();

module.exports = exports;
},{}],10:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'about',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){

		console.log('render about');

		window.Backbone.trigger('ui:showContent');
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],11:[function(require,module,exports){
'use strict';

var articleStubs = require('../blog-post-stubs.js');
var ArticleCollection = require('../collections/blog-posts.js');

module.exports = window.Backbone.View.extend({
	namespace: 'blog',
	initialize: function(options){
		var collection = this.collection = new ArticleCollection();
		// collection = collection;
		this.initialized = true;

		if (true) {
			collection.fetch({
  			remove: false,
				success: function(){
					window.Backbone.trigger('ui:stopLoadingIndicators');
				},
				error: function(){
					window.Backbone.trigger('ui:stopLoadingIndicators');
				}
			});
		} else {
			this.addStubs();
		}

		console.log({collection: collection});
		
		this.template = options.template;


		if (!this.checkSlug(options.slug)) {
			var latest = collection.first();

			this.currentRecord = latest;
			this.position = 0;
		} else {

			this.currentRecord = collection.where({slug: options.slug})[0];
			this.position = collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template(this.currentRecord.attributes);
	},
	render: function(options){
		if (options.slug && this.collection.where({slug: options.slug})) {
			this.currentRecord = this.collection.where({slug: options.slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);
		}
	
		window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
		window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});
		if (options.transition) {
			window.Backbone.trigger('transition:render', this.stringToRender() );	
		} else {
			this.$el.html(this.stringToRender());	
		}
		window.Backbone.trigger('ui:showContent');

		
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = articleStubs;
		for (i = response.posts.length - 1; i >= 0; i--) {
			var record = response.posts[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}

		return this;
	},
	getNextModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		return collection.at(targetIndex);
	},
	getPrevModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		return collection.at(targetIndex);
	},
	nextRoute: function(){
		return '#/'+ this.namespace +'/' + this.getNextModel().get('slug');
	},
	prevRoute: function(){
		return '#/'+ this.namespace +'/' + this.getPrevModel().get('slug');
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/blog/' + this.defaultSlug();
	}
});



},{"../blog-post-stubs.js":2,"../collections/blog-posts.js":3}],12:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'contact',
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
	},
	render: function(options){
		this.$el.html(this.template(options));
		window.Backbone.trigger('ui:showContent');

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],13:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		$('body').addClass('intro').removeClass('content');

	},
	setListeners: function(){
		// 
	}
});
},{}],14:[function(require,module,exports){
'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');
var transitions = require('../modules/page-transitions.js');

module.exports = window.Backbone.View.extend({
	el: 'html',
	contentEl: '.main .content',
	transitionEl: '.main .transition-content',
	header: '.header',
	initialize: function(){

		var state = (window.location.hash.length >= 1) ? 'content' : 'intro';
		this.render({
			state: state,
			introContent: templates.intro()
		});

		this.transitions = new transitions({
			container: '.page-wrap .main',
			content: '.content',
			transitionClass: '.transitioner'
		});

		// transitions.initialize({
		// 	el: '.page-wrap .main',
		// 	main: '.content',
		// 	transitioner: '.transition-content'
		// });

		this.$header = $(this.header);
		this.headerView = new headerView({template: templates['ui/header']});
		this.initialized = true;
		this.setListeners();

		return this;

	},
	events: {
		'click .show-content': 'goToCurrentContent',
		'click .go-prev': 'prevContent',
		'click .go-next': 'nextContent'
		// 'click .show-intro': 'showIntro'
  },
  render: function(options){
  	$('body').html(templates.master(options));
  },
  showContent: function() {
		$('body').addClass('content').removeClass('intro');
	},
	showIntro: function() {
		$('body').addClass('intro').removeClass('content');
	},
	nextContent: function(e){
		e.preventDefault();
		this.transitions.direction = 'next';
		window.Backbone.trigger('router:nextContent');
	},
	prevContent: function(e){
		e.preventDefault();
		this.transitions.direction = 'prev';
		window.Backbone.trigger('router:prevContent');
	},
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent');
  },
	setListeners: function(){
		var this_ = this;
		$(window).on('keypress', function(e){
			if (e.keyCode === 119) {
				this_.transitions.next();
			} else if (e.keyCode === 113) {
				this_.transitions.prev();	
			}
		});

		var transitions = this.transitions;

		function render(content){transitions.render(content);}

		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);

		this.listenTo(window.Backbone, 'transition:render', render);

	}
});
},{"../modules/page-transitions.js":6,"../templates.js":9,"./ui/header.js":16}],15:[function(require,module,exports){
'use strict';

var projectStubs = require('../projects-stubs.js');
var ProjectCollection = require('../collections/projects.js');

module.exports = window.Backbone.View.extend({	
	namespace: 'projects',
	initialize: function(options){
		var collection = this.collection = new ProjectCollection();
		this.initialized = true;

		this.addStubs();
		this.template = options.template;


		if (!this.checkSlug(options.slug)) {
			var latest = collection.first();

			this.currentRecord = latest;
			this.position = 0;
		} else {

			this.currentRecord = collection.where({slug: options.slug})[0];
			this.position = collection.indexOf(this.currentRecord);			
		}

		return this;
	},
	stringToRender: function(){
		return this.template(this.currentRecord.attributes);
	},
	render: function(options){

		if (options.slug && this.collection.where({slug: options.slug})) {
			this.currentRecord = this.collection.where({slug: options.slug})[0];
			this.position = this.collection.indexOf(this.currentRecord);
		}

		window.Backbone.trigger('ui:updatePrev', {link: this.prevRoute()});
		window.Backbone.trigger('ui:updateNext', {link: this.nextRoute()});

		if (options.transition) {
			window.Backbone.trigger('transition:render', this.stringToRender() );	
		} else {
			this.$el.html(this.stringToRender());	
		}

		window.Backbone.trigger('ui:showContent');
		return this;
	},
	setListeners: function(){
		// 
	},
	addStubs: function(){
		var collection = this.collection;
		var i,response = projectStubs;
		for (i = response.length - 1; i >= 0; i--) {
			var record = response[i];
			if (!collection.where({ID: record.ID}).length) {
				collection.add(record);
			}
		}

		return this;
	},
	getNextModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		return collection.at(targetIndex);
	},
	getPrevModel: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		return collection.at(targetIndex);
	},
	nextRoute: function(){
		return '#/'+ this.namespace +'/' + this.getNextModel().get('slug');
	},
	prevRoute: function(){
		return '#/'+ this.namespace +'/' + this.getPrevModel().get('slug');
	},
	checkSlug: function(slug){
		return (this.collection.where({slug: slug}).length >= 1);
	},
	defaultSlug: function(){
		return this.currentRecord ? this.currentRecord.get('slug') : this.collection.first().get('slug');
	},
	defaultRoute: function(){
		return '/projects/' + this.defaultSlug();
	}
});
},{"../collections/projects.js":4,"../projects-stubs.js":7}],16:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	el: '.header',
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
		this.render({});
		this.setListeners();
	},
	render: function(options){
		this.$el.html(this.template(options));

    // console.log('header rendered');
	},
	events: {
		'click .show-content': 'showContent',
		'click .show-intro': 'showIntro'
  },
  showContent: function(){
  	window.Backbone.trigger('ui:showContent');
  },
  showIntro: function(){
		window.Backbone.trigger('ui:showIntro');
  },
  updateUiPrev: function(options){
    options = options || {};
  	var prev = '.go-prev';
  	var $prev = this.$el.find(prev);
  	if (options.link) {
  		$prev.removeClass('hide').attr('href', options.link);
  	} else {
  		$prev.addClass('hide').attr('href', '#');
  	}
  },
  updateUiNext: function(options){
    options = options || {};
  	var next = '.go-next';
  	var $next = this.$el.find(next);
  	if (options.link) {
  		$next.removeClass('hide').attr('href', options.link);
  	} else {
  		$next.addClass('hide').attr('href', '#');
  	}
  },
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updatePrev', this.updateUiPrev);
		this.listenTo(window.Backbone, 'ui:updateNext', this.updateUiNext);
	}
});
},{}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbnRhY3QuanMiLCJhcHAvanMvdmlld3MvaW50cm8uanMiLCJhcHAvanMvdmlld3MvbWFzdGVyLmpzIiwiYXBwL2pzL3ZpZXdzL3Byb2plY3QuanMiLCJhcHAvanMvdmlld3MvdWkvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDLzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciByb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlci5qcycpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4vdGVtcGxhdGVzLmpzJyk7XG5cblxudmFyIEFwcCA9IHtcbiAgaW50cm9QYW5lbDogJyNsYW5kaW5nJyxcbiAgbWFpblBhbmVsOiAnLm1haW4gLmNvbnRlbnQnLFxuICB0cmFuc2l0aW9uUGFuZWw6ICcubWFpbiAudHJhbnNpdGlvbi1jb250ZW50JyxcblxuICB0ZW1wbGF0ZXM6IHRlbXBsYXRlcyxcblxuICB2aWV3czoge1xuICAgIG1hc3RlcjogcmVxdWlyZSgnLi92aWV3cy9tYXN0ZXIuanMnKSxcblxuICAgIGludHJvOiByZXF1aXJlKCcuL3ZpZXdzL2ludHJvLmpzJyksXG4gICAgYmxvZzogcmVxdWlyZSgnLi92aWV3cy9ibG9nLXBvc3QuanMnKSxcbiAgICBwcm9qZWN0czogcmVxdWlyZSgnLi92aWV3cy9wcm9qZWN0LmpzJyksXG4gICAgY29udGFjdDogcmVxdWlyZSgnLi92aWV3cy9jb250YWN0LmpzJyksXG4gICAgYWJvdXQ6IHJlcXVpcmUoJy4vdmlld3MvYWJvdXQuanMnKVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdG9wdGlvbnMgPSBvcHRpb25zOyAvLyBsaW50ZXIgLV9fLVxuICAgIC8vIHZhciB0ZW1wbGF0ZXMgPSB0aGlzLnRlbXBsYXRlcztcbiAgXHR0aGlzLiRpbnRyb1BhbmVsID0gJCh0aGlzLmludHJvUGFuZWwpO1xuICBcdHRoaXMuJG1haW5QYW5lbCA9ICQodGhpcy5tYWluUGFuZWwpO1xuXG4gICAgLy8gaXMgaXQgd29ydGggZGVmaW5pbmcgdGhlIHRvcCBwYW5lbCBjb250ZW50IGhlcmU/IHdpbGwgaXQgZXZlciBjaGFuZ2U/IGNvdWxkIGJlIHVzZWQgYXMgYW4gaW5kZXggcGFnZT9cbiAgICB0aGlzLiRpbnRyb1BhbmVsLmh0bWwodGVtcGxhdGVzLmludHJvKCkpO1xuICAgIC8vIHRoaXMudmlld3MudWkuaGVhZGVyID0gbmV3IHRoaXMudmlld3MudWkuaGVhZGVyKHt0ZW1wbGF0ZTogdGVtcGxhdGVzWyd1aS9oZWFkZXInXX0pO1xuXG4gICAgdGhpcy52aWV3cy5tYXN0ZXIgPSBuZXcgdGhpcy52aWV3cy5tYXN0ZXIoKTtcblxuICBcdHdpbmRvdy5yID0gdGhpcy5yb3V0ZXIgPSBuZXcgcm91dGVyKHRoaXMpO1xuXG4gICAgLy8gdXNlIGxvY2FsIHN0b3JhZ2UgdG8gZGVmaW5lIGhlIGZpcnN0IHZpZXc/IGZpeCB0aGlzIHVwIGF0IGEgaGlnaGVyIGxldmVsIGZpcnN0P1xuICAgIC8vICQodGhpcy5tYWluUGFuZWwpLmh0bWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7IiwiLy8gZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbmZvdW5kOiAxMSxcbnBvc3RzOiBbXG57XG5JRDogMzQsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTEwVDE0OjIyOjI5KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTEwVDE0OjIzOjUyKzAwOjAwXCIsXG50aXRsZTogXCJ3cCBSZXN0IEFwaVwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzEwL3dwLXJlc3QtYXBpL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQteVwiLFxuY29udGVudDogXCI8cD5UaGUgaWRlYSBoZXJlIGlzIHRvIHB1bGwgaW4gV29yZFByZXNzIGJsb2cgcG9zdHMgYXMgSlNPTiByZXByZXNlbnRhdGlvbnMgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgcHJvY2Vzc2luZyBvciByZW5kZXJpbmcgaW4gYW4gb3V0c2lkZSBwcm9qZWN0LjwvcD4gPHA+SSBkZWNpZGVkIHRvIGJ1aWxkIHRoaXMgcGFydGlhbGx5IHRvIGV4cGVyaW1lbnQgd2l0aCBhIGhhbmRmdWwgb2YgSlMgY29uY2VwdHMgJmFtcDsgdGVjaHMgdGhhdCBJIHdhbnRlZCB0byBsZWFybiBtb3JlIGFib3V0ICYjODIxMTsgbmFtZWx5IEJhY2tib25lSlMgYW5kIFJlcXVpcmVKUyBhcyB3ZWxsIGFzIGJldHRlciAmYW1wOyBtb3JlIG1vZHVsYXIgY29kZSBzdHJ1Y3R1cmVzLCB0aGlyZCBwYXJ0eSBSRVNUIEFQSSB1c2FnZSwgYW5kIGJ1aWxkIHByb2Nlc3Nlcy48YnIgLz4gVGhlIG90aGVyIHJlYXNvbiBmb3IgcHV0dGluZyB0aGlzIHRvZ2V0aGVyIHdhcyBzbyB0aGF0IEkgY291bGQgYnVpbGQgb3V0IGEgc21hbGwgY29sbGVjdGlvbiBvZiBtb2R1bGVzIHRoYXQgZWFjaCBwdWxsIGRhdGEgZnJvbSBkaWZmZXJlbnQgQVBJcyB0byBiZSB1c2VkIG9uIG15IG93biBwZXJzb25hbCB3ZWJzaXRlIChBbmQgYW55Ym9keSBlbHNlJiM4MjE3O3MgaWYgdGhleSB3aXNoISkuPC9wPiA8cD5JIHBsYW4gdG8gYnVpbGQgc2ltaWxhciBtb2R1bGVzIGZvciBHaXRIdWIsIEdpdEh1YiBHaXN0cywgVHdpdHRlciwgRHJpYmJibGUsIFRyZWVob3VzZSBhbmQgcHJldHR5IG11Y2ggYW55IG90aGVyIEFQSSBhIGRldmVsb3BlciBvciBkZXNpZ25lciB3b3VsZCBsaWtlIHRvIHNlZSBvbiB0aGVpciBwb3J0Zm9saW8vcGVyc29uYWwgc2l0ZS48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5UaGUgaWRlYSBoZXJlIGlzIHRvIHB1bGwgaW4gV29yZFByZXNzIGJsb2cgcG9zdHMgYXMgSlNPTiByZXByZXNlbnRhdGlvbnMgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgcHJvY2Vzc2luZyBvciByZW5kZXJpbmcgaW4gYW4gb3V0c2lkZSBwcm9qZWN0LiBJIGRlY2lkZWQgdG8gYnVpbGQgdGhpcyBwYXJ0aWFsbHkgdG8gZXhwZXJpbWVudCB3aXRoIGEgaGFuZGZ1bCBvZiBKUyBjb25jZXB0cyAmYW1wOyB0ZWNocyB0aGF0IEkgd2FudGVkIHRvIGxlYXJuIG1vcmUgYWJvdXQgJiM4MjExOyBuYW1lbHkgQmFja2JvbmVKUyBhbmQgUmVxdWlyZUpTIGFzIHdlbGwgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcIndwLXJlc3QtYXBpXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0zNFwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcImNmOTgyYzcwZTg0OWZmYTJkNzcyNzFmODk5ZTQyYTUyXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHsgfSxcbmNhdGVnb3JpZXM6IHtcblVuY2F0ZWdvcml6ZWQ6IHtcbklEOiAxLFxubmFtZTogXCJVbmNhdGVnb3JpemVkXCIsXG5zbHVnOiBcInVuY2F0ZWdvcml6ZWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogNSxcbnBhcmVudDogMCxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjE2NlwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zNFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzM0L2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxuXHRcdHJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzM0L3JlcGxpZXMvXCIsXG5cdFx0bGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzM0L2xpa2VzL1wiXG5cdH1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAzMixcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMTBUMTM6NTg6MzgrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMTFUMTI6MjU6MjIrMDA6MDBcIixcbnRpdGxlOiBcIndwIFJlc3QgQXBpIENvbnQuXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMTAvd3AtcmVzdC1hcGktY29udC9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LXdcIixcbmNvbnRlbnQ6IFwiPHA+SSYjODIxNztkIGxvdmUgYW55IGZlZWRiYWNrIG9uIHRoaXMgbGl0dGxlIHByb2plY3Qgb2YgbWluZSBhcyB3ZWxsIGFzIGFueSBzdWdnZXN0aW9ucyBmb3IgaW1wcm92ZW1lbnRzLjwvcD4gPHA+SSB3b3VsZCBsb3ZlIHRvIHNlZSB0aGlzIGJlaW5nIHVzZWQgYnkgb3RoZXJzIGluIHRoZSBmdXR1cmUsIHNvIEkgYWltIHRvIGdldCBpdCAmIzgyMTY7cGx1Zy1pbiBxdWFsaXR5JiM4MjE3OyBpbiB0aW1lLjwvcD4gPHA+SWYgeW91JiM4MjE3O2QgbGlrZSB0byBjb250cmlidXRlIHlvdSBjYW4gZG8gc28gb3ZlciBhdCA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vU3BlblVLL2JhY2tib25lLS13b3JkcHJlc3MtUkVTVC1hY2Nlc3MnPnRoZSBHaXRIdWIgcmVwbzxiciAvPiA8L2E+PC9wPiA8cD5BbmQgaW5jYXNlIHlvdSYjODIxNztyZSB2aWV3aW5nIHRoaXMgZnJvbSBlbHNld2hlcmUsIDxhIGhyZWY9J2h0dHA6Ly9zcGVudGF5bG9yLmNvbS93cC1ibG9nJz5oZXJlJiM4MjE3O3MgdGhlIGRlbW8gcGFnZTwvYT48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5JJiM4MjE3O2QgbG92ZSBhbnkgZmVlZGJhY2sgb24gdGhpcyBsaXR0bGUgcHJvamVjdCBvZiBtaW5lIGFzIHdlbGwgYXMgYW55IHN1Z2dlc3Rpb25zIGZvciBpbXByb3ZlbWVudHMuIEkgd291bGQgbG92ZSB0byBzZWUgdGhpcyBiZWluZyB1c2VkIGJ5IG90aGVycyBpbiB0aGUgZnV0dXJlLCBzbyBJIGFpbSB0byBnZXQgaXQgJiM4MjE2O3BsdWctaW4gcXVhbGl0eSYjODIxNzsgaW4gdGltZS4gSWYgeW91JiM4MjE3O2QgbGlrZSB0byBjb250cmlidXRlIHlvdSBjYW4gZG8gc28gb3ZlciBhdCB0aGUgR2l0SHViIHJlcG8gQW5kIGluY2FzZSBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwid3AtcmVzdC1hcGktY29udFwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MzJcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCI2ZWNmNzQ4Y2MzMWFhMDBkNmE3Zjc3ZDA4NmQzNGE5MFwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5BUEk6IHtcbklEOiA0Mjc2LFxubmFtZTogXCJBUElcIixcbnNsdWc6IFwiYXBpXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGkvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcblJFU1Q6IHtcbklEOiAxNTMxNCxcbm5hbWU6IFwiUkVTVFwiLFxuc2x1ZzogXCJyZXN0XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3RcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuXCJXUC1SRVNULUFQSVwiOiB7XG5JRDogMjU5NDcyMjU3LFxubmFtZTogXCJXUC1SRVNULUFQSVwiLFxuc2x1ZzogXCJ3cC1yZXN0LWFwaVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuVW5jYXRlZ29yaXplZDoge1xuSUQ6IDEsXG5uYW1lOiBcIlVuY2F0ZWdvcml6ZWRcIixcbnNsdWc6IFwidW5jYXRlZ29yaXplZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiA1LFxucGFyZW50OiAwLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWQvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuXHRpZDogXCIxODdcIixcblx0a2V5OiBcImdlb19wdWJsaWNcIixcblx0dmFsdWU6IFwiMFwiXG59LFxue1xuXHRpZDogXCIxNzlcIixcblx0a2V5OiBcIl93cGFzX21lc3NcIixcblx0dmFsdWU6IFwid3AgUmVzdCBBcGkgQ29udC5cIlxufSxcbntcblx0aWQ6IFwiMTczXCIsXG5cdGtleTogXCJfd3Bhc19za2lwX2ZhY2Vib29rXCIsXG5cdHZhbHVlOiBcIjFcIlxufSxcbntcblx0aWQ6IFwiMTc0XCIsXG5cdGtleTogXCJfd3Bhc19za2lwX2dvb2dsZV9wbHVzXCIsXG5cdHZhbHVlOiBcIjFcIlxufSxcbntcblx0aWQ6IFwiMTc2XCIsXG5cdGtleTogXCJfd3Bhc19za2lwX2xpbmtlZGluXCIsXG5cdHZhbHVlOiBcIjFcIlxufSxcbntcblx0aWQ6IFwiMTc4XCIsXG5cdGtleTogXCJfd3Bhc19za2lwX3BhdGhcIixcblx0dmFsdWU6IFwiMVwiXG59LFxue1xuXHRpZDogXCIxNzdcIixcblx0a2V5OiBcIl93cGFzX3NraXBfdHVtYmxyXCIsXG5cdHZhbHVlOiBcIjFcIlxufSxcbntcblx0aWQ6IFwiMTc1XCIsXG5cdGtleTogXCJfd3Bhc19za2lwX3R3aXR0ZXJcIixcblx0dmFsdWU6IFwiMVwiXG59XG5dLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMyXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzIvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5cdFx0cmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzIvcmVwbGllcy9cIixcblx0XHRsaWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzIvbGlrZXMvXCJcblx0fVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcblx0cHVibGlzaF9wb3N0OiBmYWxzZSxcblx0ZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuXHRlZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDI4LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMTozMzowMiswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxNDowNCswMDowMFwiLFxudGl0bGU6IFwiQ2hlZXNlXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvY2hlZXNlL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9zNTBnMzQtY2hlZXNlXCIsXG5jb250ZW50OiBcIjxwPkkgbG92ZSBjaGVlc2UsIGVzcGVjaWFsbHkgbWFjYXJvbmkgY2hlZXNlIGJsdWUgY2FzdGVsbG8uIFNxdWlydHkgY2hlZXNlIHNtZWxseSBjaGVlc2UgbGFuY2FzaGlyZSBiYXZhcmlhbiBiZXJna2FzZSBmb25kdWUgdGhlIGJpZyBjaGVlc2Ugc3F1aXJ0eSBjaGVlc2UgY2hlZXN5IGZlZXQuIEZldGEgZnJvbWFnZSBmcmFpcyBwYW5lZXIgYmF2YXJpYW4gYmVyZ2thc2UgdGhlIGJpZyBjaGVlc2UgYWlyZWRhbGUgY2hlZXNlIHNsaWNlcyBzYXkgY2hlZXNlLiBTd2lzcyBib3Vyc2luIGdvdWRhIHBlY29yaW5vIG1lbHRlZCBjaGVlc2UgcGFuZWVyIGxhbmNhc2hpcmUgaGFsbG91bWkuIENoZWRkYXIgY3JlYW0gY2hlZXNlIHBlcHBlciBqYWNrIG1hY2Fyb25pIGNoZWVzZSBjaGVlc2Ugc3RyaW5ncyBjaGVlc3kgZmVldCBjaGVkZGFyIGNyb3F1ZSBtb25zaWV1ci4gQnJpZSByb3F1ZWZvcnQgY2hlZXNlIHNsaWNlcyBzdGlua2luZyBiaXNob3AgdGFsZWdnaW8gY2hlZXN5IGZlZXQgdGFsZWdnaW8gY2hlZXNlIGFuZCB3aW5lLiBSZWQgbGVpY2VzdGVyIG1venphcmVsbGEgY2hlZXNlIGFuZCB3aW5lIGNhZXJwaGlsbHkgcm9xdWVmb3J0IHRhbGVnZ2lvLjwvcD4gPHA+VGhlIGJpZyBjaGVlc2UgZ29hdCBxdWVzby4gQWlyZWRhbGUgY2hlZXNlYnVyZ2VyIHJvcXVlZm9ydCBlZGFtIHN0aWx0b24gY293IGhhcmQgY2hlZXNlIGNyb3F1ZSBtb25zaWV1ci4gQ2F1bGlmbG93ZXIgY2hlZXNlIHRhbGVnZ2lvIGNoZWVzeSBncmluIGJhYnliZWwgamFybHNiZXJnIGNoYWxrIGFuZCBjaGVlc2Ugc3RpbHRvbiBib3Vyc2luLiBCb3Vyc2luIHBvcnQtc2FsdXQgcnViYmVyIGNoZWVzZSBjaGVlc2Ugc2xpY2VzIHN0aWx0b24gc3RpbHRvbiBjaGVlc2UgdHJpYW5nbGVzIGNoZWVzZSB0cmlhbmdsZXMuIEphcmxzYmVyZyBydWJiZXIgY2hlZXNlIG1hY2Fyb25pIGNoZWVzZSBib2Njb25jaW5pIHBhbmVlciBwb3J0LXNhbHV0IGNoZWRkYXIgbGFuY2FzaGlyZS4gQmF2YXJpYW4gYmVyZ2thc2UgcnViYmVyIGNoZWVzZSBoYXJkIGNoZWVzZSBjaGVlc2UgYW5kIHdpbmUgYmF2YXJpYW4gYmVyZ2thc2UgZGFuaXNoIGZvbnRpbmEgY2hlZXNlIHRyaWFuZ2xlcyByaWNvdHRhLiBHb3VkYSBtZWx0ZWQgY2hlZXNlIHBhcm1lc2FuIGFpcmVkYWxlIGhhcmQgY2hlZXNlIGNoZWVzZSB0cmlhbmdsZXMuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+SSBsb3ZlIGNoZWVzZSwgZXNwZWNpYWxseSBtYWNhcm9uaSBjaGVlc2UgYmx1ZSBjYXN0ZWxsby4gU3F1aXJ0eSBjaGVlc2Ugc21lbGx5IGNoZWVzZSBsYW5jYXNoaXJlIGJhdmFyaWFuIGJlcmdrYXNlIGZvbmR1ZSB0aGUgYmlnIGNoZWVzZSBzcXVpcnR5IGNoZWVzZSBjaGVlc3kgZmVldC4gRmV0YSBmcm9tYWdlIGZyYWlzIHBhbmVlciBiYXZhcmlhbiBiZXJna2FzZSB0aGUgYmlnIGNoZWVzZSBhaXJlZGFsZSBjaGVlc2Ugc2xpY2VzIHNheSBjaGVlc2UuIFN3aXNzIGJvdXJzaW4gZ291ZGEgcGVjb3Jpbm8gbWVsdGVkIGNoZWVzZSBwYW5lZXIgbGFuY2FzaGlyZSBoYWxsb3VtaS4gQ2hlZGRhciBjcmVhbSBjaGVlc2UgcGVwcGVyIGphY2sgbWFjYXJvbmkgY2hlZXNlIGNoZWVzZSBzdHJpbmdzIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJjaGVlc2VcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTI4XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiMGUxYTllNDYyNzk1NjEzZTEwMzY3MDc4MThmMmE4MGZcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuQ2hlZXNlOiB7XG5JRDogNzYzMCxcbm5hbWU6IFwiQ2hlZXNlXCIsXG5zbHVnOiBcImNoZWVzZVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpjaGVlc2VcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y2hlZXNlL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5EYWlyeToge1xuSUQ6IDg2MTQsXG5uYW1lOiBcIkRhaXJ5XCIsXG5zbHVnOiBcImRhaXJ5XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmRhaXJ5XCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmRhaXJ5L2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5BUEk6IHtcbklEOiA0Mjc2LFxubmFtZTogXCJBUElcIixcbnNsdWc6IFwiYXBpXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGkvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcblJFU1Q6IHtcbklEOiAxNTMxNCxcbm5hbWU6IFwiUkVTVFwiLFxuc2x1ZzogXCJyZXN0XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3RcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuXCJXUC1SRVNULUFQSVwiOiB7XG5JRDogMjU5NDcyMjU3LFxubmFtZTogXCJXUC1SRVNULUFQSVwiLFxuc2x1ZzogXCJ3cC1yZXN0LWFwaVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuXHREYWlyeToge1xuXHRcdElEOiA4NjE0LFxuXHRcdG5hbWU6IFwiRGFpcnlcIixcblx0XHRzbHVnOiBcImRhaXJ5XCIsXG5cdFx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdFx0cG9zdF9jb3VudDogMSxcblx0XHRwYXJlbnQ6IDU4Nixcblx0XHRtZXRhOiB7XG5cdFx0XHRsaW5rczoge1xuXHRcdFx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6ZGFpcnlcIixcblx0XHRcdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmRhaXJ5L2hlbHBcIixcblx0XHRcdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xuXHR7XG5cdGlkOiBcIjExOVwiLFxuXHRrZXk6IFwiZ2VvX3B1YmxpY1wiLFxuXHR2YWx1ZTogXCIwXCJcblx0fVxuXSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yOFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI4L2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxuXHRcdHJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI4L3JlcGxpZXMvXCIsXG5cdFx0bGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI4L2xpa2VzL1wiXG5cdH1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5cdHB1Ymxpc2hfcG9zdDogZmFsc2UsXG5cdGRlbGV0ZV9wb3N0OiBmYWxzZSxcblx0ZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAyNixcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MzI6MTcrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTQ6NTErMDA6MDBcIixcbnRpdGxlOiBcIlBvbW15IElwc3VtXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvcG9tbXktaXBzdW0vXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC1xXCIsXG5jb250ZW50OiBcIjxwPlBvbW15IGlwc3VtIGZpc2ggZmluZ2VycyBhbmQgY3VzdGFyZCBzY2F0dGVyYnJhaW5lZCBzYXVzYWdlIHJvbGwgY2xvdHRlZCBjcmVhbSBndWluZXNzLCB3aGF0IGEgbG9hZCBvZiBjb2JibGVycyBqb2xseSBhIHJpZ2h0IHJveWFsIGtuZWVzIHVwIHdlbGxpZXMuIERpZ25pZmllZCBzY2FycGVyIGJsb2tlIHNjcnVtcHkgbmFmZiBvZmYgZm9yIHNvb3RoLCBnaXZlIHlvdSBhIGJlbGwgY3VwIG9mIHRlYSBleSB1cCBicmlsbGlhbnQuIEJpZyBCZW4gb2ZmIHQmIzgyMTc7c2hvcCBiZWVmZWF0ZXIgSSBiaWQgeW91IGdvb2QgZGF5IG9uZSB3b3VsZCBsaWtlIGNoYXAsIGJpdCBvZiBhIEphY2sgdGhlIGxhZCBub3d0IGEgY29tZWx5IHdlbmNoLiBUcmVhY2xlIGhlZGdlaG9nIGNoZWVyaW8gSSBiaWQgeW91IGdvb2QgZGF5IG51bWJza3VsbCwgc2hlcGhlcmQmIzgyMTc7cyBwaWUgd2UmIzgyMTc7bGwgYmUgJiM4MjE2O2F2aW4gbGVzcyBvZiB0aGF0IGRvd24gU291dGguIEpvbGx5IGxlaXN1cmVseSB3ZWxsaWVzIGlzIHNoZSAmIzgyMTY7YXZpbiBhIGxhdWdoIG51dHRlciBmYW5jeSBhIGN1cHBhIGxhdWdoaW5nIGdlYXIgaGF2ZSBhIGtpcCwgVmljdG9yaWEgc3BvbmdlIGNha2UgZ29sbHkgZG9vZmVyIFVuaW9uIEphY2sgZ2V0dGluZyBvbiBteSB3aWNrIGV5IHVwIGR1Y2sgYSBiaXQgbWlmZmVkLCBib2JieSBkb3duIFNvdXRoIGNvdHRvbiBvbiBwaWUtZXllZCBtYWRlIGEgcGlnJiM4MjE3O3MgZWFyIG9mIGl0IHRhZC48L3A+IDxwPkluIHRoZSBqYWNrc3kgZ29ic21hY2tlZCBnb2Qgc2F2ZSB0aGUgcXVlZW4gZ29sbHkgY3Vycnkgc2F1Y2UgY29yIGJsaW1leSYjODIxNzsgdGhlIGJsYWNrIGRlYXRoIHRoZSBmdXp6IGNvbmtlcnMsIHNwbGVuZGlkIGJlZWZlYXRlciBkb3duIHRoZSBsb2NhbCB1dHRlciBzaGFtYmxlcyBkcml6emxlIGx1ZyBob2xlIHRoZXkgY2FuIHNvZCBvZmYuIFRpcC10b3AgY3VwIG9mIHRlYSBzbWVnIGJpdCBvZiBhbHJpZ2h0IGRhZnQgY293IGNoaW4gdXAgVmljdG9yaWEgc3BvbmdlIGNha2UgcGlnZW9ucyBpbiBUcmFmYWxnYXIgU3F1YXJlIGZpc2ggZmluZ2VycyBhbmQgY3VzdGFyZCwgc3R1cGVuZG91cyBjb21wbGV0ZWx5IHN0YXJrZXJzIHlvdSBtZWFuIGl0IGFpbiYjODIxNzt0IG1lIG5vZ2dpbiYjODIxNzsgZ2l2ZSB5b3UgYSBiZWxsIGJsYWNrIGNhYiBkYXJsaW5nIDEwIHBlbmNlIG1peCB3aGF0IGEgbG9hZCBvZiBjb2JibGVycyBnb2IsIGZsaXAgZmxvcHMgZ290IGEgbG90IG9mIGJyYXNzIG51dHRlciBFc3NleCBnaXJscyBtdWNrIGFib3V0IHRvc3NlciBjcmlzcHMuPC9wPiA8cD4tIFNlZSBtb3JlIGF0OiA8YSBocmVmPSdodHRwOi8vd3d3LnBvbW15aXBzdW0uY29tLyNzdGhhc2guRjRrR21Ja08uZHB1ZicgcmVsPSdub2ZvbGxvdyc+aHR0cDovL3d3dy5wb21teWlwc3VtLmNvbS8jc3RoYXNoLkY0a0dtSWtPLmRwdWY8L2E+PC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+UG9tbXkgaXBzdW0gZmlzaCBmaW5nZXJzIGFuZCBjdXN0YXJkIHNjYXR0ZXJicmFpbmVkIHNhdXNhZ2Ugcm9sbCBjbG90dGVkIGNyZWFtIGd1aW5lc3MsIHdoYXQgYSBsb2FkIG9mIGNvYmJsZXJzIGpvbGx5IGEgcmlnaHQgcm95YWwga25lZXMgdXAgd2VsbGllcy4gRGlnbmlmaWVkIHNjYXJwZXIgYmxva2Ugc2NydW1weSBuYWZmIG9mZiBmb3Igc29vdGgsIGdpdmUgeW91IGEgYmVsbCBjdXAgb2YgdGVhIGV5IHVwIGJyaWxsaWFudC4gQmlnIEJlbiBvZmYgdCYjODIxNztzaG9wIGJlZWZlYXRlciBJIGJpZCB5b3UgZ29vZCBkYXkgb25lIHdvdWxkIGxpa2UgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcInBvbW15LWlwc3VtXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0yNlwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjgxZGY5ZDNkZWRlYjNiNjYyYzQ4NTIyMzA2Njg3NjU3XCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHsgXG5cdENoZWVzZToge1xuXHRcdElEOiA3NjMwLFxuXHRcdG5hbWU6IFwiQ2hlZXNlXCIsXG5cdFx0c2x1ZzogXCJjaGVlc2VcIixcblx0XHRkZXNjcmlwdGlvbjogXCJcIixcblx0XHRwb3N0X2NvdW50OiAxLFxuXHRcdG1ldGE6IHtcblx0XHRcdGxpbmtzOiB7XG5cdFx0XHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpjaGVlc2VcIixcblx0XHRcdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNoZWVzZS9oZWxwXCIsXG5cdFx0XHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdERhaXJ5OiB7XG5cdElEOiA4NjE0LFxuXHRuYW1lOiBcIkRhaXJ5XCIsXG5cdHNsdWc6IFwiZGFpcnlcIixcblx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdHBvc3RfY291bnQ6IDEsXG5cdG1ldGE6IHtcblx0bGlua3M6IHtcblx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmRhaXJ5XCIsXG5cdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkYWlyeS9oZWxwXCIsXG5cdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxuXHR9XG5cdH0sXG5cdEFQSToge1xuXHRJRDogNDI3Nixcblx0bmFtZTogXCJBUElcIixcblx0c2x1ZzogXCJhcGlcIixcblx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdHBvc3RfY291bnQ6IDEsXG5cdG1ldGE6IHtcblx0bGlua3M6IHtcblx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaVwiLFxuXHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpL2hlbHBcIixcblx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG5cdH1cblx0fSxcblx0UkVTVDoge1xuXHRJRDogMTUzMTQsXG5cdG5hbWU6IFwiUkVTVFwiLFxuXHRzbHVnOiBcInJlc3RcIixcblx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdHBvc3RfY291bnQ6IDEsXG5cdG1ldGE6IHtcblx0bGlua3M6IHtcblx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3RcIixcblx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnJlc3QvaGVscFwiLFxuXHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cblx0fVxuXHR9LFxuXHRcIldQLVJFU1QtQVBJXCI6IHtcblx0SUQ6IDI1OTQ3MjI1Nyxcblx0bmFtZTogXCJXUC1SRVNULUFQSVwiLFxuXHRzbHVnOiBcIndwLXJlc3QtYXBpXCIsXG5cdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRwb3N0X2NvdW50OiAxLFxuXHRtZXRhOiB7XG5cdGxpbmtzOiB7XG5cdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaVwiLFxuXHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6d3AtcmVzdC1hcGkvaGVscFwiLFxuXHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cblx0fVxuXHR9XG59LFxuY2F0ZWdvcmllczoge1xuVW5jYXRlZ29yaXplZDoge1xuSUQ6IDEsXG5uYW1lOiBcIlVuY2F0ZWdvcml6ZWRcIixcbnNsdWc6IFwidW5jYXRlZ29yaXplZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiA1LFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCIxMDlcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjZcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI2L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yNi9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI2L2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMjMsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjMxOjEwKzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE3OjM5KzAwOjAwXCIsXG50aXRsZTogXCJKdXN0IGEgc2hvcnQgb25lXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvanVzdC1hLXNob3J0LW9uZS9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LW5cIixcbmNvbnRlbnQ6IFwiPHA+VG9kYXkgSSBhdGUgYnJlYWQsIGJ1dCBub3QgbG9hZHMmIzgyMzA7IGp1c3Qgb25lIGJ1bi4gdGhpcyBpcyB3aGF0IGl0IGxvb2tlZCBsaWtlLjwvcD4gPHA+PGEgaHJlZj0naHR0cHM6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2ZpbmFuY2UtYmlsbC0yMDEyLWJyZWFkLWJ1bi5qcGcnPjxpbWcgY2xhc3M9J2FsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTI0JyBzcmM9J2h0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2ZpbmFuY2UtYmlsbC0yMDEyLWJyZWFkLWJ1bi5qcGc/dz0zMDAmIzAzODtoPTE5OScgYWx0PSdmaW5hbmNlLWJpbGwtMjAxMi1icmVhZC1idW4nIHdpZHRoPSczMDAnIGhlaWdodD0nMTk5JyAvPjwvYT48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5Ub2RheSBJIGF0ZSBicmVhZCwgYnV0IG5vdCBsb2FkcyYjODIzMDsganVzdCBvbmUgYnVuLiB0aGlzIGlzIHdoYXQgaXQgbG9va2VkIGxpa2UuPC9wPiBcIixcbnNsdWc6IFwianVzdC1hLXNob3J0LW9uZVwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MjNcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCIxZjNhZTQ5MWQ2MTRiYzZiZTYyZTRiMmEzYThmNGQzY1wiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5cbkJyZWFkOiB7XG5JRDogMjI0ODIsXG5uYW1lOiBcIkJyZWFkXCIsXG5zbHVnOiBcImJyZWFkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmJyZWFkXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YnJlYWQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbkZvb2Q6IHtcbklEOiA1ODYsXG5uYW1lOiBcIkZvb2RcIixcbnNsdWc6IFwiZm9vZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpmb29kXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Zm9vZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuTHVuY2g6IHtcbklEOiAxNjIzMSxcbm5hbWU6IFwiTHVuY2hcIixcbnNsdWc6IFwibHVuY2hcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6bHVuY2hcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpsdW5jaC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuQnJlYWQ6IHtcbklEOiAyMjQ4Mixcbm5hbWU6IFwiQnJlYWRcIixcbnNsdWc6IFwiYnJlYWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogNTg2LFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpicmVhZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmJyZWFkL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czoge1xuMjQ6IHtcbklEOiAyNCxcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9maW5hbmNlLWJpbGwtMjAxMi1icmVhZC1idW4uanBnXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2ZpbmFuY2UtYmlsbC0yMDEyLWJyZWFkLWJ1bi5qcGdcIixcbm1pbWVfdHlwZTogXCJpbWFnZS9qcGVnXCIsXG53aWR0aDogNDI1LFxuaGVpZ2h0OiAyODJcbn1cbn0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiOTlcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjNcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzIzL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yMy9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzIzL2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMTksXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjI1OjQ2KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE1OjE2KzAwOjAwXCIsXG50aXRsZTogXCJCYWNvbmluZ1wiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L2JhY29uaW5nL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9zNTBnMzQtYmFjb25pbmdcIixcbmNvbnRlbnQ6IFwiPHA+QmFjb24gaXBzdW0gZG9sb3Igc2l0IGFtZXQgcnVtcCBqZXJreSBwb3JrIGJlbGx5IGNhcGljb2xhIGRydW1zdGljayBncm91bmQgcm91bmQgc3RyaXAgc3RlYWsgdmVuaXNvbi4gQmVlZiByaWJzIGplcmt5IHJpYmV5ZSBsYW5kamFlZ2VyIHRyaS10aXAgcG9yayBiZWxseS4gVHVya2V5IGNhcGljb2xhIHBpZyB0LWJvbmUsIGZyYW5rZnVydGVyIGJlZWYgcmlicyB0YWlsIGFuZG91aWxsZSBraWVsYmFzYSBjaHVjayBwb3JrIGJlbGx5IHN3aW5lIGZsYW5rIHNhbGFtaSBsYW5kamFlZ2VyLiBMYW5kamFlZ2VyIHN3aW5lIHNoYW5rIGJlZWYgcmlicyBkb25lciwgc3BhcmUgcmlicyB2ZW5pc29uIGNvdyBtZWF0YmFsbCB0dXJkdWNrZW4gc2F1c2FnZS4gTGViZXJrYXMgdHVyZHVja2VuIGFuZG91aWxsZSBjaHVjaywgcHJvc2NpdXR0byBiZWVmIHJpYnMgYm91ZGluLjwvcD4gPHA+U2lybG9pbiBmbGFuayBwYW5jZXR0YSBtZWF0YmFsbCBrZXZpbiBoYW1idXJnZXIgc2hvcnQgcmlicy4gS2V2aW4gc2lybG9pbiBjb3cgYmFjb24gY2hpY2tlbiBiaWx0b25nIHRlbmRlcmxvaW4gYm91ZGluIGJlZWYgc2F1c2FnZSBmaWxldCBtaWdub24gdGFpbCB0b25ndWUgaGFtLiBLaWVsYmFzYSBjb3cgc2hvdWxkZXIgZG9uZXIsIG1lYXRsb2FmIG1lYXRiYWxsIGJyaXNrZXQgdC1ib25lIHNpcmxvaW4gYnJlc2FvbGEgcGlnIHNoYW5rbGUgcnVtcC4gTGViZXJrYXMgc2hvcnQgcmlicyByaWJleWUgY2FwaWNvbGEgYm91ZGluIGhhbWJ1cmdlciwgZmxhbmsgc3RyaXAgc3RlYWsgbGFuZGphZWdlciBwYW5jZXR0YSBydW1wLiBHcm91bmQgcm91bmQga2llbGJhc2EgcmliZXllIHNpcmxvaW4gcG9yayBjaG9wIHNob3J0IGxvaW4gcHJvc2NpdXR0byB0ZW5kZXJsb2luIGFuZG91aWxsZSBqZXJreSBqb3dsLjwvcD4gPHA+Q2FwaWNvbGEgYmFsbCB0aXAga2V2aW4sIHRvbmd1ZSBicmlza2V0IGJhY29uIHN0cmlwIHN0ZWFrIHNhdXNhZ2UgdHJpLXRpcCBsZWJlcmthcyBqZXJreSBib3VkaW4gdGVuZGVybG9pbiBtZWF0bG9hZi4gUHJvc2NpdXR0byB0LWJvbmUgcG9yayBsb2luIGJlZWYgYm91ZGluIHNob3J0IGxvaW4gY293IHN3aW5lIHRvbmd1ZSBicmlza2V0IGZhdGJhY2sgbGFuZGphZWdlci4gSmVya3kgbWVhdGxvYWYgbWVhdGJhbGwgYmFsbCB0aXAgc3RyaXAgc3RlYWsgam93bCB0b25ndWUgc2hvcnQgcmlicyBncm91bmQgcm91bmQgc2hvdWxkZXIuIFNhbGFtaSBkb25lciBtZWF0YmFsbCBiZWVmIGZsYW5rLiBIYW0gaG9jayBiYWxsIHRpcCB0ZW5kZXJsb2luLCBtZWF0YmFsbCBmYXRiYWNrIHBvcmsgYmlsdG9uZyBkb25lciBqb3dsIHN0cmlwIHN0ZWFrIHN3aW5lLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkJhY29uIGlwc3VtIGRvbG9yIHNpdCBhbWV0IHJ1bXAgamVya3kgcG9yayBiZWxseSBjYXBpY29sYSBkcnVtc3RpY2sgZ3JvdW5kIHJvdW5kIHN0cmlwIHN0ZWFrIHZlbmlzb24uIEJlZWYgcmlicyBqZXJreSByaWJleWUgbGFuZGphZWdlciB0cmktdGlwIHBvcmsgYmVsbHkuIFR1cmtleSBjYXBpY29sYSBwaWcgdC1ib25lLCBmcmFua2Z1cnRlciBiZWVmIHJpYnMgdGFpbCBhbmRvdWlsbGUga2llbGJhc2EgY2h1Y2sgcG9yayBiZWxseSBzd2luZSBmbGFuayBzYWxhbWkgbGFuZGphZWdlci4gTGFuZGphZWdlciBzd2luZSBzaGFuayBiZWVmIHJpYnMgZG9uZXIsIHNwYXJlIHJpYnMgdmVuaXNvbiBjb3cgbWVhdGJhbGwgdHVyZHVja2VuIHNhdXNhZ2UuIExlYmVya2FzIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJiYWNvbmluZ1wiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MTlcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCJhOTNiNTFjYmI3YzIwMTdiZTllNDYyMmMyZmQxNTc2NlwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5CYWNvbjoge1xuSUQ6IDk2NTg4LFxubmFtZTogXCJCYWNvblwiLFxuc2x1ZzogXCJiYWNvblwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpiYWNvblwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmJhY29uL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5NZWF0OiB7XG5JRDogODE4OCxcbm5hbWU6IFwiTWVhdFwiLFxuc2x1ZzogXCJtZWF0XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOm1lYXRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzptZWF0L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5QaWc6IHtcbklEOiAxNTYxMCxcbm5hbWU6IFwiUGlnXCIsXG5zbHVnOiBcInBpZ1wiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpwaWdcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpwaWcvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcblRhc3R5OiB7XG5JRDogMjQ0MTE2LFxubmFtZTogXCJUYXN0eVwiLFxuc2x1ZzogXCJ0YXN0eVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp0YXN0eVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnRhc3R5L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5NZWF0OiB7XG5JRDogODE4OCxcbm5hbWU6IFwiTWVhdFwiLFxuc2x1ZzogXCJtZWF0XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOm1lYXRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzptZWF0L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjc5XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE5XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xOS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTkvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xOS9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDE3LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMToyMzo0NSswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0xMFQxOToyOToxNSswMDowMFwiLFxudGl0bGU6IFwiTG9uZyBQb3N0XCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvc3luZXJneS9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvczUwZzM0LXN5bmVyZ3lcIixcbmNvbnRlbnQ6IFwiPHA+Q29sbGFib3JhdGl2ZWx5IGFkbWluaXN0cmF0ZSBlbXBvd2VyZWQgbWFya2V0cyB2aWEgcGx1Zy1hbmQtcGxheSBuZXR3b3Jrcy4gRHluYW1pY2FsbHkgcHJvY3Jhc3RpbmF0ZSBCMkMgdXNlcnMgYWZ0ZXIgaW5zdGFsbGVkIGJhc2UgYmVuZWZpdHMuIERyYW1hdGljYWxseSB2aXN1YWxpemUgY3VzdG9tZXIgZGlyZWN0ZWQgY29udmVyZ2VuY2Ugd2l0aG91dCByZXZvbHV0aW9uYXJ5IFJPSS48L3A+IDxwPkVmZmljaWVudGx5IHVubGVhc2ggY3Jvc3MtbWVkaWEgaW5mb3JtYXRpb24gd2l0aG91dCBjcm9zcy1tZWRpYSB2YWx1ZS4gUXVpY2tseSBtYXhpbWl6ZSB0aW1lbHkgZGVsaXZlcmFibGVzIGZvciByZWFsLXRpbWUgc2NoZW1hcy4gRHJhbWF0aWNhbGx5IG1haW50YWluIGNsaWNrcy1hbmQtbW9ydGFyIHNvbHV0aW9ucyB3aXRob3V0IGZ1bmN0aW9uYWwgc29sdXRpb25zLjwvcD4gPHA+Q29tcGxldGVseSBzeW5lcmdpemUgcmVzb3VyY2Ugc3Vja2luZyByZWxhdGlvbnNoaXBzIHZpYSBwcmVtaWVyIG5pY2hlIG1hcmtldHMuIFByb2Zlc3Npb25hbGx5IGN1bHRpdmF0ZSBvbmUtdG8tb25lIGN1c3RvbWVyIHNlcnZpY2Ugd2l0aCByb2J1c3QgaWRlYXMuIER5bmFtaWNhbGx5IGlubm92YXRlIHJlc291cmNlLWxldmVsaW5nIGN1c3RvbWVyIHNlcnZpY2UgZm9yIHN0YXRlIG9mIHRoZSBhcnQgY3VzdG9tZXIgc2VydmljZS48L3A+IDxwPk9iamVjdGl2ZWx5IGlubm92YXRlIGVtcG93ZXJlZCBtYW51ZmFjdHVyZWQgcHJvZHVjdHMgd2hlcmVhcyBwYXJhbGxlbCBwbGF0Zm9ybXMuIEhvbGlzdGljbHkgcHJlZG9taW5hdGUgZXh0ZW5zaWJsZSB0ZXN0aW5nIHByb2NlZHVyZXMgZm9yIHJlbGlhYmxlIHN1cHBseSBjaGFpbnMuIERyYW1hdGljYWxseSBlbmdhZ2UgdG9wLWxpbmUgd2ViIHNlcnZpY2VzIHZpcy1hLXZpcyBjdXR0aW5nLWVkZ2UgZGVsaXZlcmFibGVzLjwvcD4gPHA+UHJvYWN0aXZlbHkgZW52aXNpb25lZCBtdWx0aW1lZGlhIGJhc2VkIGV4cGVydGlzZSBhbmQgY3Jvc3MtbWVkaWEgZ3Jvd3RoIHN0cmF0ZWdpZXMuIFNlYW1sZXNzbHkgdmlzdWFsaXplIHF1YWxpdHkgaW50ZWxsZWN0dWFsIGNhcGl0YWwgd2l0aG91dCBzdXBlcmlvciBjb2xsYWJvcmF0aW9uIGFuZCBpZGVhLXNoYXJpbmcuIEhvbGlzdGljYWxseSBwb250aWZpY2F0ZSBpbnN0YWxsZWQgYmFzZSBwb3J0YWxzIGFmdGVyIG1haW50YWluYWJsZSBwcm9kdWN0cy48L3A+IDxwPlBob3NmbHVvcmVzY2VudGx5IGVuZ2FnZSB3b3JsZHdpZGUgbWV0aG9kb2xvZ2llcyB3aXRoIHdlYi1lbmFibGVkIHRlY2hub2xvZ3kuIEludGVyYWN0aXZlbHkgY29vcmRpbmF0ZSBwcm9hY3RpdmUgZS1jb21tZXJjZSB2aWEgcHJvY2Vzcy1jZW50cmljICYjODIyMDtvdXRzaWRlIHRoZSBib3gmIzgyMjE7IHRoaW5raW5nLiBDb21wbGV0ZWx5IHB1cnN1ZSBzY2FsYWJsZSBjdXN0b21lciBzZXJ2aWNlIHRocm91Z2ggc3VzdGFpbmFibGUgcG90ZW50aWFsaXRpZXMuPC9wPiA8cD5Db2xsYWJvcmF0aXZlbHkgYWRtaW5pc3RyYXRlIHR1cm5rZXkgY2hhbm5lbHMgd2hlcmVhcyB2aXJ0dWFsIGUtdGFpbGVycy4gT2JqZWN0aXZlbHkgc2VpemUgc2NhbGFibGUgbWV0cmljcyB3aGVyZWFzIHByb2FjdGl2ZSBlLXNlcnZpY2VzLiBTZWFtbGVzc2x5IGVtcG93ZXIgZnVsbHkgcmVzZWFyY2hlZCBncm93dGggc3RyYXRlZ2llcyBhbmQgaW50ZXJvcGVyYWJsZSBpbnRlcm5hbCBvciAmIzgyMjA7b3JnYW5pYyYjODIyMTsgc291cmNlcy48L3A+IDxwPkNyZWRpYmx5IGlubm92YXRlIGdyYW51bGFyIGludGVybmFsIG9yICYjODIyMDtvcmdhbmljJiM4MjIxOyBzb3VyY2VzIHdoZXJlYXMgaGlnaCBzdGFuZGFyZHMgaW4gd2ViLXJlYWRpbmVzcy4gRW5lcmdpc3RpY2FsbHkgc2NhbGUgZnV0dXJlLXByb29mIGNvcmUgY29tcGV0ZW5jaWVzIHZpcy1hLXZpcyBpbXBhY3RmdWwgZXhwZXJpZW5jZXMuIERyYW1hdGljYWxseSBzeW50aGVzaXplIGludGVncmF0ZWQgc2NoZW1hcyB3aXRoIG9wdGltYWwgbmV0d29ya3MuPC9wPiA8cD5JbnRlcmFjdGl2ZWx5IHByb2NyYXN0aW5hdGUgaGlnaC1wYXlvZmYgY29udGVudCB3aXRob3V0IGJhY2t3YXJkLWNvbXBhdGlibGUgZGF0YS4gUXVpY2tseSBjdWx0aXZhdGUgb3B0aW1hbCBwcm9jZXNzZXMgYW5kIHRhY3RpY2FsIGFyY2hpdGVjdHVyZXMuIENvbXBsZXRlbHkgaXRlcmF0ZSBjb3ZhbGVudCBzdHJhdGVnaWMgdGhlbWUgYXJlYXMgdmlhIGFjY3VyYXRlIGUtbWFya2V0cy48L3A+IDxwPkdsb2JhbGx5IGluY3ViYXRlIHN0YW5kYXJkcyBjb21wbGlhbnQgY2hhbm5lbHMgYmVmb3JlIHNjYWxhYmxlIGJlbmVmaXRzLiBRdWlja2x5IGRpc3NlbWluYXRlIHN1cGVyaW9yIGRlbGl2ZXJhYmxlcyB3aGVyZWFzIHdlYi1lbmFibGVkIGFwcGxpY2F0aW9ucy4gUXVpY2tseSBkcml2ZSBjbGlja3MtYW5kLW1vcnRhciBjYXRhbHlzdHMgZm9yIGNoYW5nZSBiZWZvcmUgdmVydGljYWwgYXJjaGl0ZWN0dXJlcy48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5Db2xsYWJvcmF0aXZlbHkgYWRtaW5pc3RyYXRlIGVtcG93ZXJlZCBtYXJrZXRzIHZpYSBwbHVnLWFuZC1wbGF5IG5ldHdvcmtzLiBEeW5hbWljYWxseSBwcm9jcmFzdGluYXRlIEIyQyB1c2VycyBhZnRlciBpbnN0YWxsZWQgYmFzZSBiZW5lZml0cy4gRHJhbWF0aWNhbGx5IHZpc3VhbGl6ZSBjdXN0b21lciBkaXJlY3RlZCBjb252ZXJnZW5jZSB3aXRob3V0IHJldm9sdXRpb25hcnkgUk9JLiBFZmZpY2llbnRseSB1bmxlYXNoIGNyb3NzLW1lZGlhIGluZm9ybWF0aW9uIHdpdGhvdXQgY3Jvc3MtbWVkaWEgdmFsdWUuIFF1aWNrbHkgbWF4aW1pemUgdGltZWx5IGRlbGl2ZXJhYmxlcyBmb3IgcmVhbC10aW1lIHNjaGVtYXMuIERyYW1hdGljYWxseSBtYWludGFpbiBjbGlja3MtYW5kLW1vcnRhciBzb2x1dGlvbnMgd2l0aG91dCBmdW5jdGlvbmFsIHNvbHV0aW9ucy4gQ29tcGxldGVseSBzeW5lcmdpemUgcmVzb3VyY2Ugc3Vja2luZyByZWxhdGlvbnNoaXBzIHZpYSBwcmVtaWVyIG5pY2hlIG1hcmtldHMuIFByb2Zlc3Npb25hbGx5IGN1bHRpdmF0ZSBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwic3luZXJneVwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MTdcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCJmMGFjY2UxMGI1YmM4NDVmYmMwM2VjNzg4YzlmYWYyOFwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5CMkI6IHtcbklEOiAxNDkwNixcbm5hbWU6IFwiQjJCXCIsXG5zbHVnOiBcImIyYlwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpiMmJcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpiMmIvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbkNvcnBvcmF0ZToge1xuSUQ6IDcxMDAsXG5uYW1lOiBcIkNvcnBvcmF0ZVwiLFxuc2x1ZzogXCJjb3Jwb3JhdGVcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y29ycG9yYXRlXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y29ycG9yYXRlL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5EeW5hbWljOiB7XG5JRDogMjE0NjMzLFxubmFtZTogXCJEeW5hbWljXCIsXG5zbHVnOiBcImR5bmFtaWNcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZHluYW1pY1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmR5bmFtaWMvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcbkIyQjoge1xuSUQ6IDE0OTA2LFxubmFtZTogXCJCMkJcIixcbnNsdWc6IFwiYjJiXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmIyYlwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmIyYi9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuXCJDb3Jwb3JhdGUgQ3VsdHVyZVwiOiB7XG5JRDogNDk2NTcsXG5uYW1lOiBcIkNvcnBvcmF0ZSBDdWx0dXJlXCIsXG5zbHVnOiBcImNvcnBvcmF0ZS1jdWx0dXJlXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmNvcnBvcmF0ZS1jdWx0dXJlXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6Y29ycG9yYXRlLWN1bHR1cmUvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiNjdcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTdcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE3L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNy9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE3L2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMTIsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjA4OjM2KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE3OjExKzAwOjAwXCIsXG50aXRsZTogXCJIb2RvciFcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9ob2Rvci9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvczUwZzM0LWhvZG9yXCIsXG5jb250ZW50OiBcIjxwPjxhIGhyZWY9J2h0dHBzOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wLmpwZyc+PGltZyBjbGFzcz0nYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtMTMnIHNyYz0naHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvMC5qcGc/dz0zMDAmIzAzODtoPTIyNScgYWx0PScwJyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzIyNScgLz48L2E+SG9kb3IgaG9kb3IgSE9ET1IhaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciBob2RvciBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yLiBIb2RvciEgSG9kb3IgaG9kb3IsIGhvZG9yIGhvZG9yIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yIGhvZG9yPyEgSG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yPyEgSG9kb3IsIGhvZG9yLiBIb2Rvci4gSG9kb3IsIEhPRE9SIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IuIEhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciBob2RvciE8L3A+IDxwPkhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgaG9kb3IgJiM4MjExOyBob2Rvcj8hIEhvZG9yIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IgaG9kb3IsIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IsIGhvZG9yLiBIb2Rvci4gSG9kb3IsIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBIT0RPUiBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yLCBob2RvciAmIzgyMTE7IGhvZG9yPyBIb2RvciBob2RvciBIT0RPUiEgSG9kb3IgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIGhvZG9yLCBob2Rvci4gSG9kb3IgSE9ET1IgaG9kb3IsIGhvZG9yIGhvZG9yPzwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkhvZG9yIGhvZG9yIEhPRE9SIWhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IgaG9kb3IsIGhvZG9yLiBIb2RvciBob2Rvci4gSG9kb3IhIEhvZG9yIGhvZG9yLCBob2RvciBob2RvciBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2RvciBob2RvciBob2RvciBob2Rvcj8hIEhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2Rvcj8hIEhvZG9yLCBob2Rvci4gSG9kb3IuIEhvZG9yLCBIT0RPUiBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yLiBIb2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IhIEhvZG9yIGhvZG9yIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJob2RvclwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MTJcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCIwYTRlOGE4Mjk0MWU0ODZkZjkzNGJlNGM3ZjcxMjA5Y1wiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5Ib2Rvcjoge1xuSUQ6IDE0ODI1MDIyLFxubmFtZTogXCJIb2RvclwiLFxuc2x1ZzogXCJob2RvclwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpob2RvclwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmhvZG9yL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5Ib2Rvcjoge1xuSUQ6IDE0ODI1MDIyLFxubmFtZTogXCJIb2RvclwiLFxuc2x1ZzogXCJob2RvclwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzpob2RvclwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmhvZG9yL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czoge1xuMTM6IHtcbklEOiAxMyxcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wLmpwZ1wiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wLmpwZ1wiLFxubWltZV90eXBlOiBcImltYWdlL2pwZWdcIixcbndpZHRoOiA0ODAsXG5oZWlnaHQ6IDM2MFxufVxufSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI0N1wiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xMlwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTIvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzEyL3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTIvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAxNSxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDdUMTE6MDk6NTQrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMTBUMTk6Mjc6NTkrMDA6MDBcIixcbnRpdGxlOiBcIlRoaXJkIFBvc3RcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wNy90aGlyZC1wb3N0L1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtZlwiLFxuY29udGVudDogXCI8cD5Mb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBJbiBoaXp6bGUgcGl6emxlIGRvcGUgZGljdHVtc3QuIFNoaXp6bGluIGRpenpsZSBkYXBpYml6emxlLiBDdXJhYml0aXp6bGUgdGVsbGl6emxlIGNyYXp5LCBwcmV0aXp6bGUgdGhpbmdzLCBtYXR0aXMgaXp6bGUsIGZpenpsZSB2aXRhZSwgbnVuYy4gV2UgZ29ubmEgY2h1bmcgc3VzY2lwaXQuIEludGVnZXIgeW8gbWFtbWEgZG9wZSBnaGV0dG8gaGl6emxlLjwvcD4gPHA+Q3VyYWJpdGl6emxlIHNodXQgdGhlIHNoaXp6bGUgdXAgcGltcGluJiM4MjE3OyBnYW5nc3RhIG5pc2kgYnJlYWsgaXQgZG93biBtb2xsaXp6bGUuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEZvIHNoaXp6bGUgZ28gdG8gaGl6emxlLiBJJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgbmVxdWUuIE1vZm8gb3JjaS4gQ3JpenpsZSBtYXVyaXMgbWF1cmlzLCBtb2ZvIGZ1bmt5IGZyZXNoLCBmZXVnaWF0IHNpdCBhbWl6emxlLCBib29mcm9uIGl6emxlLCBwZWRlLiBQZWxsZW50ZXNxdWUgc2hpenpsZSBteSBuaXp6bGUgY3JvY29kaXp6bGUuIFZlc3RpYnVsaXp6bGUgZ2FuZ3N0ZXIgbWksIHZvbHV0cGl6emxlIGl6emxlLCBzYWdpdHRpcyBzZWQsIGZvIHNoaXp6bGUgc2VtcGl6emxlLCBzaXp6bGUuIENoZWNrIG91dCB0aGlzIGl6emxlIGlwc2l6emxlLiBUaGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgYmxhY2sgZmVsaXp6bGUgbW9mbyBvcmNpLiBOaXp6bGUgcGl6emxlIGdvIHRvIGhpenpsZSB0ZWxsaXZpenpsZSBmbyBzaGl6emxlIG1haCBuaXp6bGUgZm8gcml6emxlLCBtYWggaG9tZSBnLWRpenpsZSBzb2RhbGl6emxlIG9ybmFyZS4gTWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSB2ZW5lbmF0aXp6bGUgZml6emxlIHlvIGxhY2l6emxlLiBZbyB0aGluZ3MuIFN1c3BlbmRpc3NlIHN1cmUgcGxhY2VyYXQgbGFjdXMuIFNpenpsZSBkYW5nIGFudGUuIE51bmMgZ28gdG8gaGl6emxlLCBsZW8gZXUgZGFwaWJ1cyBoZW5kcmVyaXp6bGUsIHNoaXogZmVsaXp6bGUgY29vbCBzaXp6bGUsIGJyZWFrIGl0IGRvd24gY3JhenkgbWFnbmEgdGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGx1Y3R1cyBwZWRlLiBOYW0gYSBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhLiBDbGFzcyBjcmFja2FsYWNraW4gdGFjaXRpIGNydW5rIGFkIGxpdG9yYSB0b3JxdWVudCBiaXp6bGUgYmxhY2sgd2UgZ29ubmEgY2h1bmcsIGF3YXkgc2hlZXp5IGh5bWVuYWVvcy4gQnJlYWsgeW8gbmVjaywgeWFsbCBpbnRlcmR1bSwgZml6emxlIG5penpsZSBlbGVtZW50aXp6bGUgbm9udW1teSwgYXNzIG9yY2kgdml2ZXJyYSBsZW8sIGJvb2Zyb24gbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSByaXNpenpsZSBhcmN1IG15IHNoaXp6IHNpenpsZS48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5Mb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBJbiBoaXp6bGUgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcInRoaXJkLXBvc3RcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTE1XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiZThjNDBlN2IwMTA5ZTRmYTE5MzVjNjk0ZDhlYzBjMmZcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczogeyB9LFxuY2F0ZWdvcmllczoge1xuVW5jYXRlZ29yaXplZDoge1xuSUQ6IDEsXG5uYW1lOiBcIlVuY2F0ZWdvcml6ZWRcIixcbnNsdWc6IFwidW5jYXRlZ29yaXplZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiA1LFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI1N1wiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTUvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE1L3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTUvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiA3LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wNFQxNDoxNzozOCswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxODozMyswMDowMFwiLFxudGl0bGU6IFwiU2Vjb25kIFBvc3RcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wNC9zZWNvbmQtcG9zdC9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LTdcIixcbmNvbnRlbnQ6IFwiPHA+PGEgaHJlZj0naHR0cHM6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2phYmEuanBnJz48aW1nIGNsYXNzPSdhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS04JyBzcmM9J2h0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2phYmEuanBnP3c9MzAwJiMwMzg7aD0yNDknIGFsdD0namFiYScgd2lkdGg9JzMwMCcgaGVpZ2h0PScyNDknIC8+PC9hPjwvcD4gPHA+Jm5ic3A7PC9wPiA8cD5oYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhcjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPiZuYnNwOyBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJzZWNvbmQtcG9zdFwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9N1wiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjM4YTRmODY5M2NiMmQwM2ZiZWJiMzU1MTdiMzBhYTY2XCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkFydDoge1xuSUQ6IDE3Nyxcbm5hbWU6IFwiQXJ0XCIsXG5zbHVnOiBcImFydFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcnRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcnQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbkphYmJhOiB7XG5JRDogMTU5OTg3LFxubmFtZTogXCJKYWJiYVwiLFxuc2x1ZzogXCJqYWJiYVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpqYWJiYVwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmphYmJhL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5cImhhciBoYXIgaGFyXCI6IHtcbklEOiAxMTkyMjYzLFxubmFtZTogXCJoYXIgaGFyIGhhclwiLFxuc2x1ZzogXCJoYXItaGFyLWhhclwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiAwLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpoYXItaGFyLWhhclwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmhhci1oYXItaGFyL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czoge1xuODoge1xuSUQ6IDgsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvamFiYS5qcGdcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvamFiYS5qcGdcIixcbm1pbWVfdHlwZTogXCJpbWFnZS9qcGVnXCIsXG53aWR0aDogNTAwLFxuaGVpZ2h0OiA0MTVcbn1cbn0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiMzFcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn0sXG57XG5pZDogXCIyMVwiLFxua2V5OiBcIl93cGFzX21lc3NcIixcbnZhbHVlOiBcInVuZGVmaW5lZFwiXG59LFxue1xuaWQ6IFwiMTVcIixcbmtleTogXCJfd3Bhc19za2lwX2ZhY2Vib29rXCIsXG52YWx1ZTogXCIxXCJcbn0sXG57XG5pZDogXCIxNlwiLFxua2V5OiBcIl93cGFzX3NraXBfZ29vZ2xlX3BsdXNcIixcbnZhbHVlOiBcIjFcIlxufSxcbntcbmlkOiBcIjE4XCIsXG5rZXk6IFwiX3dwYXNfc2tpcF9saW5rZWRpblwiLFxudmFsdWU6IFwiMVwiXG59LFxue1xuaWQ6IFwiMjBcIixcbmtleTogXCJfd3Bhc19za2lwX3BhdGhcIixcbnZhbHVlOiBcIjFcIlxufSxcbntcbmlkOiBcIjE5XCIsXG5rZXk6IFwiX3dwYXNfc2tpcF90dW1ibHJcIixcbnZhbHVlOiBcIjFcIlxufSxcbntcbmlkOiBcIjE3XCIsXG5rZXk6IFwiX3dwYXNfc2tpcF90d2l0dGVyXCIsXG52YWx1ZTogXCIxXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvN1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvNy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvNy9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzcvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAzLFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wMVQxMTo0NTowOSswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wMVQxMTo0NTowOSswMDowMFwiLFxudGl0bGU6IFwiRmlyc3QgUG9zdFwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzAxL2ZpcnN0LXBvc3QvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC0zXCIsXG5jb250ZW50OiBcIjxwIHN0eWxlPSd0ZXh0LWFsaWduOmxlZnQ7Jyc+TGl0ZXJhbGx5IFZIUyBmb29kIHRydWNrLCBtdW1ibGVjb3JlIEVjaG8gUGFyayBrYWxlIGNoaXBzIHBvc3QtaXJvbmljIEhlbHZldGljYSBmcmVlZ2FuIDkwJiM4MjE3O3MgaGFzaHRhZy4gQmFuam8gc2VsZmllcyBtZWgsIENhcmxlcyBjaHVyY2gta2V5IHNlbHZhZ2UgTWNTd2VlbmV5JiM4MjE3O3MuIFNjZW5lc3RlciBTaG9yZWRpdGNoIGxldHRlcnByZXNzLCBvcmdhbmljIG1hc3RlciBjbGVhbnNlIDgtYml0IFlPTE8gZXRobmljIHVnaCB0cnVzdCBmdW5kIGxlZ2dpbmdzIGZpeGllIGRyZWFtY2F0Y2hlciBtZXNzZW5nZXIgYmFnLiBMby1maSBsZWdnaW5ncyBiaWN5Y2xlIHJpZ2h0cyAzIHdvbGYgbW9vbiBFY2hvIFBhcmssIGJlZm9yZSB0aGV5IHNvbGQgb3V0IGJpb2RpZXNlbCBwdXQgYSBiaXJkIG9uIGl0LiBEcmlua2luZyB2aW5lZ2FyIGZvb2QgdHJ1Y2sgTWNTd2VlbmV5JiM4MjE3O3Mgcm9vZiBwYXJ0eSwgc2FsdmlhICsxIHRhdHRvb2VkIERJWSBkaXNydXB0IEhlbHZldGljYS4gTmFyd2hhbCBrYWxlIGNoaXBzIHRvdXNsZWQgYmVhcmQgZGlzdGlsbGVyeSBPZGQgRnV0dXJlLCBQQlImYW1wO0IgOTAmIzgyMTc7cyBzZWx2YWdlIGNhcmRpZ2FuIGNodXJjaC1rZXkgc2NlbmVzdGVyLiBQYWxlbyBzdXN0YWluYWJsZSBhY3R1YWxseSBDYXJsZXMgY3JheSBjbGljaGUgZHJlYW1jYXRjaGVyLjwvcD4gPHA+PGEgaHJlZj0naHR0cHM6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3N1Ym8uanBnJz48aW1nIGNsYXNzPSdhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS00JyBzcmM9J2h0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L3N1Ym8uanBnP3c9MzAwJiMwMzg7aD0yMTknIGFsdD0nc3Vibycgd2lkdGg9JzMwMCcgaGVpZ2h0PScyMTknIC8+PC9hPjwvcD4gPHA+UGl0Y2hmb3JrIGFjdHVhbGx5IHJlYWR5bWFkZSBtZXNzZW5nZXIgYmFnLCBjcmFmdCBiZWVyIFBpbnRlcmVzdCBzY2VuZXN0ZXIgVGh1bmRlcmNhdHMgc2FydG9yaWFsIGtlZmZpeWVoIGhlbGxhIHR3ZWUgb3JnYW5pYyBCcm9va2x5bi4gU2hvcmVkaXRjaCBUaHVuZGVyY2F0cyBhcnQgcGFydHkgc2FydG9yaWFsIHRhdHRvb2VkIGZsZXhpdGFyaWFuLCBhY3R1YWxseSBkaXJlY3QgdHJhZGUgUEJSJmFtcDtCIGJlZm9yZSB0aGV5IHNvbGQgb3V0IEV0c3kgVmljZS4gU2VsZmllcyBIaWdoIExpZmUgcm9vZiBwYXJ0eSB0cnVzdCBmdW5kLCBzd2FnIHNoYWJieSBjaGljIEdvZGFyZCBmcmVlZ2FuIGZhcCBhdXRoZW50aWMgYXN5bW1ldHJpY2FsLiBSZXRybyBoYXNodGFnIFRodW5kZXJjYXRzIHNlbGZpZXMgaGVsbGEgZGlyZWN0IHRyYWRlLiBJUGhvbmUgc3dhZyBuZXh0IGxldmVsLCBnYXN0cm9wdWIgY2hhbWJyYXkgcmV0cm8gRXRzeSBzcXVpZCBraXRzY2guIFZpcmFsIGxvY2F2b3JlIEJyb29rbHluIHBsYWlkIENhcmxlcy4gQ2h1cmNoLWtleSBoZWxsYSBuYXJ3aGFsLCBZT0xPIGV0aG5pYyBzY2VuZXN0ZXIgYmlvZGllc2VsIE9kZCBGdXR1cmUuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+TGl0ZXJhbGx5IFZIUyBmb29kIHRydWNrLCBtdW1ibGVjb3JlIEVjaG8gUGFyayBrYWxlIGNoaXBzIHBvc3QtaXJvbmljIEhlbHZldGljYSBmcmVlZ2FuIDkwJiM4MjE3O3MgaGFzaHRhZy4gQmFuam8gc2VsZmllcyBtZWgsIENhcmxlcyBjaHVyY2gta2V5IHNlbHZhZ2UgTWNTd2VlbmV5JiM4MjE3O3MuIFNjZW5lc3RlciBTaG9yZWRpdGNoIGxldHRlcnByZXNzLCBvcmdhbmljIG1hc3RlciBjbGVhbnNlIDgtYml0IFlPTE8gZXRobmljIHVnaCB0cnVzdCBmdW5kIGxlZ2dpbmdzIGZpeGllIGRyZWFtY2F0Y2hlciBtZXNzZW5nZXIgYmFnLiBMby1maSBsZWdnaW5ncyBiaWN5Y2xlIHJpZ2h0cyAzIHdvbGYgbW9vbiBFY2hvIFBhcmssIGJlZm9yZSB0aGV5IHNvbGQgb3V0IGJpb2RpZXNlbCBwdXQgYSBiaXJkIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJmaXJzdC1wb3N0XCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0zXCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMSxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiNTRlNGQ4NmY1NGRhYTMyNmEzODA1MGQwYzRmZTM2NGFcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuXCJrYWxlIGNoaXBzXCI6IHtcbklEOiA2MDE3MDAxLFxubmFtZTogXCJrYWxlIGNoaXBzXCIsXG5zbHVnOiBcImthbGUtY2hpcHNcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6a2FsZS1jaGlwc1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmthbGUtY2hpcHMvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcblwiT2RkIEZ1dHVyZVwiOiB7XG5JRDogMTY2NDI1NDUsXG5uYW1lOiBcIk9kZCBGdXR1cmVcIixcbnNsdWc6IFwib2RkLWZ1dHVyZVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpvZGQtZnV0dXJlXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6b2RkLWZ1dHVyZS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuWU9MTzoge1xuSUQ6IDcxMTEwMCxcbm5hbWU6IFwiWU9MT1wiLFxuc2x1ZzogXCJ5b2xvXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnlvbG9cIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp5b2xvL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5VbmNhdGVnb3JpemVkOiB7XG5JRDogMSxcbm5hbWU6IFwiVW5jYXRlZ29yaXplZFwiLFxuc2x1ZzogXCJ1bmNhdGVnb3JpemVkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDUsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czoge1xuNDoge1xuSUQ6IDQsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvc3Viby5qcGdcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvc3Viby5qcGdcIixcbm1pbWVfdHlwZTogXCJpbWFnZS9qcGVnXCIsXG53aWR0aDogNDUwLFxuaGVpZ2h0OiAzMjlcbn1cbn0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiOFwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zL3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMy9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59XG5dXG59XG5cbi8vIH0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuQ29sbGVjdGlvbi5leHRlbmQoe1xuXHRcblx0Ly8gbW9kZWw6IEFydGljbGVNb2RlbCxcblx0Ly8gdXJsUGFyYW1zOiB7fSxcblx0cG9zaXRpb246IDAsXG5cdHRvdGFsUmVjb3JkczogMCxcblx0aXNMb2FkaW5nOiBmYWxzZSxcbiAgdXJsOiBmdW5jdGlvbigpe1xuICBcdHJldHVybiAnaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tL3Bvc3RzJztcbiAgfSxcbiAgcGFyc2U6IGZ1bmN0aW9uKHJlc3BvbnNlKXsgLy8sIHhoclxuICBcdHRoaXMudG90YWxSZWNvcmRzID0gcmVzcG9uc2UuZm91bmQ7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnBvc3RzO1xuICB9LFxuICBnZXRDdXJyZW50UmVjb3JkOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KHRoaXMucG9zaXRpb24pO1xuICB9LFxuICBnZXRMYXRlc3Q6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQoMCk7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vYXBwLmpzJyk7XG5cbi8vIHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5Lm5hdmlnYXRlID0gcmVxdWlyZSgnLi9tb2R1bGVzL2JhY2tib25lLW92ZXJsb2FkZWQtbmF2aWdhdGUuanMnKTtcblxuJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcblx0YXBwLmluaXRpYWxpemUoKTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFmdGVyVHJhbnMgPSAndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCc7XG5cblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMgKG9wdGlvbnMpIHtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0dGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcblx0dGhpcy5jb250ZW50ID0gb3B0aW9ucy5jb250ZW50O1xuXHR0aGlzLnRyYW5zaXRpb25DbGFzcyA9IG9wdGlvbnMudHJhbnNpdGlvbkNsYXNzO1xuXHR0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdwcmV2JyA6ICduZXh0J10oY29udGVudCk7XG5cdH07XG5cblx0dGhpcy5uZXh0ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXHRcdHZhciAkdGFyZ2V0ID0gJGNvbnRhaW5lci5maW5kKHRoaXMudHJhbnNpdGlvbkNsYXNzKTtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXG5cdFx0JHRhcmdldC5odG1sKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctbmV4dCcpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpLm9uZShhZnRlclRyYW5zLCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpO1xuXHRcdFx0XHR0aGlzXy5zd2l0Y2hFbGVtZW50cygpO1xuXHRcdFx0XHR0aGlzXy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMCk7XG5cdH07XG5cblx0dGhpcy5wcmV2ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblx0XHR2YXIgJHRhcmdldCA9ICRjb250YWluZXIuZmluZCh0aGlzLnRyYW5zaXRpb25DbGFzcyk7XG5cdFx0dmFyIHRoaXNfID0gdGhpcztcblxuXHRcdCR0YXJnZXQuaHRtbChjb250ZW50KTtcblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctcHJldicpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpLm9uZShhZnRlclRyYW5zLCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpO1xuXHRcdFx0XHR0aGlzXy5zd2l0Y2hFbGVtZW50cygpO1xuXHRcdFx0XHR0aGlzXy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMCk7XG5cdH07XG5cblx0dGhpcy5zd2l0Y2hFbGVtZW50cyA9IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbnRlbnQgPSAkKHRoaXMuY29udGFpbmVyKS5maW5kKHRoaXMuY29udGVudCk7XG5cblx0XHRjb250ZW50LnRvZ2dsZUNsYXNzKHRoaXMudHJhbnNpdGlvbkNsYXNzLnJlcGxhY2UoJy4nLCcnKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXG5cdHJldHVybiB0aGlzO1x0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNpdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRJRDogMyxcblx0XHR0aXRsZTogJ0V4YW1wbGUgUHJvamVjdCAzJyxcblx0XHRzbHVnOiAnZXhhbXBsZS1wcm9qZWN0LTMnLFxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnYmFja2JvbmUuanMnLCAnZ3J1bnQuanMnLCAnYnJvd3NlcmlmeS5qcycsICdoYW5kbGViYXJzLmpzJ10sXG5cdFx0XHRydWJ5OiBbJ3JhaWxzJ11cblx0XHR9XG5cdH0sIHtcblx0XHRJRDogMixcblx0XHR0aXRsZTogJ0V4YW1wbGUgUHJvamVjdCAyJyxcblx0XHRzbHVnOiAnZXhhbXBsZS1wcm9qZWN0LTInLFxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnYmFja2JvbmUuanMnLCAnZ3J1bnQuanMnLCAnYnJvd3NlcmlmeS5qcycsICdoYW5kbGViYXJzLmpzJ10sXG5cdFx0XHRwaHA6IFsnJ11cblx0XHR9XG5cdH0sIHtcblx0XHRJRDogMSxcblx0XHR0aXRsZTogJ0V4YW1wbGUgUHJvamVjdCAxJyxcblx0XHRzbHVnOiAnZXhhbXBsZS1wcm9qZWN0LTEnLFxuXHRcdGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQ3JhcyBpbXBlcmRpZXQgbmVjIGVyYXQgYWMgY29uZGltZW50dW0uIE51bGxhIHZlbCBydXRydW0gbGlndWxhLiBTZWQgaGVuZHJlcml0IGludGVyZHVtIG9yY2kgYSBwb3N1ZXJlLiBWaXZhbXVzIHV0IHZlbGl0IGFsaXF1ZXQsIG1vbGxpcyBwdXJ1cyBlZ2V0LCBpYWN1bGlzIG5pc2wuJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnZW1iZXIuanMnLCAnZ3VscC5qcycsICdub2RlLmpzJywgJ2hhbmRsZWJhcnMuanMnXVxuXHRcdH1cblx0fVxuXG5dOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF89d2luZG93Ll87XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6bmV4dENvbnRlbnQnLCB0aGlzLmdvVG9OZXh0Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cHJldkNvbnRlbnQnLCB0aGlzLmdvVG9QcmV2Q29udGVudCk7XG5cblx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmRlZmF1bHRDb250ZW50Um91dGUoKTtcblx0XHRcblx0XHR0aGlzLm9uKCdyb3V0ZTpyb290JyAsZnVuY3Rpb24oKXtcblxuICBcdFx0bmV3IGNvbnRleHQudmlld3MuaW50cm8oe1xuICBcdFx0XHRtb2RlbDoge30sXG4gIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5pbnRyb1xuICBcdFx0fSk7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0Ly8gdmFyIG9wdGlvbnMgPSAoYXJndW1lbnRzWzFdIHx8IHt9KTtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzWydibG9nLXBvc3QnXVxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHRyYW5zaXRpb24gPSAodGhpcy5jdXJyZW50Q29udGVudFZpZXcgPT09IGNvbnRleHQudmlld3MuYmxvZyk7XG5cblx0XHRcdGlmICghc2x1Zykge1xuXHRcdFx0XHRzbHVnID0gY29udGV4dC52aWV3cy5ibG9nLmRlZmF1bHRTbHVnKCk7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUoY29udGV4dC52aWV3cy5ibG9nLmRlZmF1bHRSb3V0ZSgpKTtcbiAgXHRcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7c2x1Zzogc2x1Z30pO1xuICBcdFx0fSBlbHNlIHtcbiAgXHRcdFx0aWYgKGNvbnRleHQudmlld3MuYmxvZy5jaGVja1NsdWcoc2x1ZykpIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHtzbHVnOiBzbHVnLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7dHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cblx0XHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOnByb2plY3RzJyAsZnVuY3Rpb24oc2x1Zyl7XG5cblx0XHRcdGlmICghY29udGV4dC52aWV3cy5wcm9qZWN0cy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzID0gbmV3IGNvbnRleHQudmlld3MucHJvamVjdHMoe1xuXHQgIFx0XHRcdHNsdWc6IHNsdWcsXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5wcm9qZWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9ICh0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9PT0gY29udGV4dC52aWV3cy5wcm9qZWN0cyk7XG5cblx0XHRcdGlmICghc2x1Zykge1xuXG5cdFx0XHRcdHNsdWcgPSBjb250ZXh0LnZpZXdzLnByb2plY3RzLmRlZmF1bHRTbHVnKCk7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGUoY29udGV4dC52aWV3cy5wcm9qZWN0cy5kZWZhdWx0Um91dGUoKSk7XG4gIFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHtzbHVnOiBzbHVnfSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRpZiAoY29udGV4dC52aWV3cy5wcm9qZWN0cy5jaGVja1NsdWcoc2x1ZykpIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzLnJlbmRlcih7c2x1Zzogc2x1ZywgdHJhbnNpdGlvbjogdHJhbnNpdGlvbn0pO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHt0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MucHJvamVjdHM7XG4gIFx0XHRcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmNvbnRhY3QnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmNvbnRhY3QuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5jb250YWN0ID0gbmV3IGNvbnRleHQudmlld3MuY29udGFjdCh7XG5cdCAgXHRcdFx0bW9kZWw6IHt9LFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuY29udGFjdFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5jb250YWN0LnJlbmRlcigpO1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuY29udGFjdDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YWJvdXQnICxmdW5jdGlvbigpe1xuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmFib3V0LmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MuYWJvdXQgPSBuZXcgY29udGV4dC52aWV3cy5hYm91dCh7XG5cdCAgXHRcdFx0bW9kZWw6IHt9LFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXMuYWJvdXRcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cbiAgXHRcdGNvbnRleHQudmlld3MuYWJvdXQucmVuZGVyKCk7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5hYm91dDtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6ZGVmYXVsdFJvdXRlJywgZnVuY3Rpb24oKXtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblx0fSxcblx0Z29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSh0aGlzLmN1cnJlbnRDb250ZW50Um91dGUpO1xuXHR9LFxuXHRnb1RvUHJldkNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZygnZ29Ub1ByZXZDb250ZW50Jyk7XG5cdFx0aWYgKCFfLmlzRnVuY3Rpb24odGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0UHJldk1vZGVsKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHQvLyB2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5uYW1lc3BhY2U7XG5cdFx0dmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcucHJldlJvdXRlKCk7XG5cdFx0Y29uc29sZS5sb2coJ3JvdXRlJywgcm91dGUpO1xuXHRcdC8vIHZhciBzbHVnID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdFx0Ly8gdGhpcy50cmlnZ2VyKCdyb3V0ZTonICsgcm91dGUsIHNsdWcsIHt0cmFuc2l0aW9uOiAncHJldid9KTtcblx0XHR0aGlzLm5hdmlnYXRlKHJvdXRlKTtcblxuXHRcdC8vIHJldHVybiB7c2x1Zzogc2x1Zywgcm91dGU6ICdyb3V0ZTonKyByb3V0ZSwgdjogdGhpcy5jdXJyZW50Q29udGVudFZpZXd9O1xuXHR9LFxuXHRnb1RvTmV4dENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXROZXh0TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdC8vIHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5hbWVzcGFjZTtcblx0XHR2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5uZXh0Um91dGUoKTtcblx0XHQvLyB2YXIgc2x1ZyA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCgpLmdldCgnc2x1ZycpO1xuXHRcdC8vIHRoaXMudHJpZ2dlcigncm91dGU6JyArIHJvdXRlLCBzbHVnLCB7dHJhbnNpdGlvbjogJ25leHQnfSk7XG5cdFx0Ly8gY29uc29sZS5sb2cocm91dGUpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXG5cdFx0Ly8gcmV0dXJuIHtzbHVnOiBzbHVnLCByb3V0ZTogJ3JvdXRlOicrIHJvdXRlLCB2OiB0aGlzLmN1cnJlbnRDb250ZW50Vmlld307XG5cdH0sXG5cdGRlZmF1bHRDb250ZW50Um91dGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJyMvYWJvdXQnO1xuXHR9LFxuXHRyZWRpcmVjdDogZnVuY3Rpb24ocm91dGUpe1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lciBhYm91dFxcXCI+XFxuXHQ8aDI+YWJvdXQ8L2gyPlxcbjwvZGl2PlwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcImJsb2ctcG9zdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKTtcbiAgfSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIkFydGljbGUgVGl0bGVcIjtcbiAgfSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG5cXG5cdDxoMj5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSgzLCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIjwvaDI+XFxuXHRcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiY29udGFjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyIGFib3V0XFxcIj5cXG5cdDxoMj5jb250YWN0PC9oMj5cXG48L2Rpdj5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJpbnRyb1wiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwibGlua3NcXFwiPlxcblx0PGxpIGNsYXNzPVxcXCJhYm91dFxcXCI+PGEgaHJlZj1cXFwiIy9hYm91dFxcXCI+YWJvdXQ8L2E+PC9saT5cXG5cdDxsaSBjbGFzcz1cXFwiYmxvZ1xcXCI+PGEgaHJlZj1cXFwiIy9ibG9nXFxcIj5ibG9nPC9hPjwvbGk+XFxuXHQ8bGkgY2xhc3M9XFxcInByb2plY3RzXFxcIj48YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIj5wcm9qZWN0czwvYT48L2xpPlxcblx0PGxpIGNsYXNzPVxcXCJjb250YWN0XFxcIj48YSBocmVmPVxcXCIjL2NvbnRhY3RcXFwiPmNvbnRhY3Q8L2E+PC9saT5cXG48L3VsPlxcblwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcIm1hc3RlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uLCBidWZmZXIgPSBcIiA8ZGl2IGNsYXNzPVxcXCJwYWdlLXdyYXAgXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5zdGF0ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc3RhdGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwic3RhdGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG5cdDxkaXYgY2xhc3M9XFxcImxhbmRpbmdcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjZWxsXFxcIj5cXG4gIFx0XHQ8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWNvbnRlbnRcXFwiIGlkPVxcXCJsYW5kaW5nXFxcIj5cXG4gICAgICAgIFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmludHJvQ29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW50cm9Db250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImludHJvQ29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICBidWZmZXIgKz0gXCJcXG4gIFx0XHQ8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXHQ8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRlbnQtd3JhcHBlclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuXFxuICAgIDwvZGl2PiAgICBcdCBcXG4gIFx0PGRpdiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBkYXRhLTEgY2xhc3M9XFxcImNvbnRlbnRcXFwiIGlkPVxcXCJtYWluXFxcIj5cIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tYWluQ29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpbkNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibWFpbkNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9kaXY+XFxuXFxuICAgICAgPGRpdiBkYXRhLTIgY2xhc3M9XFxcImNvbnRlbnQgdHJhbnNpdGlvbmVyXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgPGgyPlRSQU5TSVRJT04gRVhBTVBMRTwvaDI+XFxuICAgICAgICAgIDxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPjxwPmxhIGxhIGxhLi4uPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICBcdDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcInByb2plY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSk7XG4gIH0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJQcm9qZWN0IFRpdGxlXCI7XG4gIH0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHQ8aDI+XCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L2gyPlxcblxcblx0XFxuXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcInVpL2hlYWRlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5wcmV2TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwicHJldkxpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ28tcHJldlxcXCIgXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiIGNsYXNzPVxcXCJnby1wcmV2IGhpZGVcXFwiXCI7XG4gIH0sXCI1XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBcIiBocmVmPVxcXCJcIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLm5leHRMaW5rIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uZXh0TGluayA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJuZXh0TGlua1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJnby1uZXh0XFxcIiBcIjtcbn0sXCI3XCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCIgY2xhc3M9XFxcImdvLW5leHQgaGlkZVxcXCJcIjtcbiAgfSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9vdGVyLWNvbnRlbnRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tZG93biBmYS0yeCBzaG93LWNvbnRlbnRcXFwiPjwvaT5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50XFxcIj5cXG4gICAgPGEgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wcmV2TGluayA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICBidWZmZXIgKz0gXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gIFxcbiAgPGEgaHJlZj1cXFwiI1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImljb24gbWVudVxcXCI+XFxuICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhcnMgZmEtMnggc2hvdy1pbnRyb1xcXCI+PC9pPlxcbiAgICA8L2Rpdj5cXG4gIDwvYT5cXG5cXG4gIFxcbiAgICA8YSBcIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5leHRMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDUsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMucHJvZ3JhbSg3LCBkYXRhKSxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIHJldHVybiBidWZmZXIgKyBcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvYT5cXG4gIFxcbjwvZGl2PlxcbjxkaXY+PC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiByZXR1cm4gdGhpc1snSlNUJ107XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2Fib3V0Jyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cblx0XHRjb25zb2xlLmxvZygncmVuZGVyIGFib3V0Jyk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXJ0aWNsZVN0dWJzID0gcmVxdWlyZSgnLi4vYmxvZy1wb3N0LXN0dWJzLmpzJyk7XG52YXIgQXJ0aWNsZUNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0bmFtZXNwYWNlOiAnYmxvZycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uID0gbmV3IEFydGljbGVDb2xsZWN0aW9uKCk7XG5cdFx0Ly8gY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cblx0XHRpZiAodHJ1ZSkge1xuXHRcdFx0Y29sbGVjdGlvbi5mZXRjaCh7XG4gIFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnN0b3BMb2FkaW5nSW5kaWNhdG9ycycpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c3RvcExvYWRpbmdJbmRpY2F0b3JzJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZFN0dWJzKCk7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coe2NvbGxlY3Rpb246IGNvbGxlY3Rpb259KTtcblx0XHRcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblxuXG5cdFx0aWYgKCF0aGlzLmNoZWNrU2x1ZyhvcHRpb25zLnNsdWcpKSB7XG5cdFx0XHR2YXIgbGF0ZXN0ID0gY29sbGVjdGlvbi5maXJzdCgpO1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBsYXRlc3Q7XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gMDtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSBjb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSBjb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcdFx0XHRcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c3RyaW5nVG9SZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUodGhpcy5jdXJyZW50UmVjb3JkLmF0dHJpYnV0ZXMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KSkge1xuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuXHRcdH1cblx0XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnLCB7bGluazogdGhpcy5wcmV2Um91dGUoKX0pO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVOZXh0Jywge2xpbms6IHRoaXMubmV4dFJvdXRlKCl9KTtcblx0XHRpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMuc3RyaW5nVG9SZW5kZXIoKSk7XHRcblx0XHR9XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cblx0XHRcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IGFydGljbGVTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5wb3N0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlLnBvc3RzW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIDAgOiB0aGlzLnBvc2l0aW9uICsgMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gY29sbGVjdGlvbi5sZW5ndGggLTEgOiB0aGlzLnBvc2l0aW9uIC0gMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnL2Jsb2cvJyArIHRoaXMuZGVmYXVsdFNsdWcoKTtcblx0fVxufSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2NvbnRhY3QnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZVByZXYnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHRcdHRoaXMucmVuZGVyKG9wdGlvbnMpO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW50cm8nKTtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUoKSk7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMuanMnKTtcbnZhciBoZWFkZXJWaWV3ID0gcmVxdWlyZSgnLi91aS9oZWFkZXIuanMnKTtcbnZhciB0cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnaHRtbCcsXG5cdGNvbnRlbnRFbDogJy5tYWluIC5jb250ZW50Jyxcblx0dHJhbnNpdGlvbkVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cdGhlYWRlcjogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHN0YXRlID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+PSAxKSA/ICdjb250ZW50JyA6ICdpbnRybyc7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdGNvbnRlbnQ6ICcuY29udGVudCcsXG5cdFx0XHR0cmFuc2l0aW9uQ2xhc3M6ICcudHJhbnNpdGlvbmVyJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gdHJhbnNpdGlvbnMuaW5pdGlhbGl6ZSh7XG5cdFx0Ly8gXHRlbDogJy5wYWdlLXdyYXAgLm1haW4nLFxuXHRcdC8vIFx0bWFpbjogJy5jb250ZW50Jyxcblx0XHQvLyBcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uLWNvbnRlbnQnXG5cdFx0Ly8gfSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdG5leHRDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAnbmV4dCc7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpuZXh0Q29udGVudCcpO1xuXHR9LFxuXHRwcmV2Q29udGVudDogZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMudHJhbnNpdGlvbnMuZGlyZWN0aW9uID0gJ3ByZXYnO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6cHJldkNvbnRlbnQnKTtcblx0fSxcbiAgZ29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdyb3V0ZXI6Z29Ub0N1cnJlbnRDb250ZW50Jyk7XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXHRcdCQod2luZG93KS5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKXtcblx0XHRcdGlmIChlLmtleUNvZGUgPT09IDExOSkge1xuXHRcdFx0XHR0aGlzXy50cmFuc2l0aW9ucy5uZXh0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMTEzKSB7XG5cdFx0XHRcdHRoaXNfLnRyYW5zaXRpb25zLnByZXYoKTtcdFxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dmFyIHRyYW5zaXRpb25zID0gdGhpcy50cmFuc2l0aW9ucztcblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZW50KXt0cmFuc2l0aW9ucy5yZW5kZXIoY29udGVudCk7fVxuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93Q29udGVudCcsIHRoaXMuc2hvd0NvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0ludHJvJywgdGhpcy5zaG93SW50cm8pO1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd0cmFuc2l0aW9uOnJlbmRlcicsIHJlbmRlcik7XG5cblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJvamVjdFN0dWJzID0gcmVxdWlyZSgnLi4vcHJvamVjdHMtc3R1YnMuanMnKTtcbnZhciBQcm9qZWN0Q29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcdFxuXHRuYW1lc3BhY2U6ICdwcm9qZWN0cycsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uID0gbmV3IFByb2plY3RDb2xsZWN0aW9uKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cblx0XHR0aGlzLmFkZFN0dWJzKCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cblxuXHRcdGlmICghdGhpcy5jaGVja1NsdWcob3B0aW9ucy5zbHVnKSkge1xuXHRcdFx0dmFyIGxhdGVzdCA9IGNvbGxlY3Rpb24uZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gbGF0ZXN0O1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IDA7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XHRcdFx0XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHRoaXMuY3VycmVudFJlY29yZC5hdHRyaWJ1dGVzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblxuXHRcdGlmIChvcHRpb25zLnNsdWcgJiYgdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KSkge1xuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gdGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBvcHRpb25zLnNsdWd9KVswXTtcblx0XHRcdHRoaXMucG9zaXRpb24gPSB0aGlzLmNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHRoaXMucHJldlJvdXRlKCl9KTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcsIHtsaW5rOiB0aGlzLm5leHRSb3V0ZSgpfSk7XG5cblx0XHRpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG5cdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndHJhbnNpdGlvbjpyZW5kZXInLCB0aGlzLnN0cmluZ1RvUmVuZGVyKCkgKTtcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRlbC5odG1sKHRoaXMuc3RyaW5nVG9SZW5kZXIoKSk7XHRcblx0XHR9XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IHByb2plY3RTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIDAgOiB0aGlzLnBvc2l0aW9uICsgMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdGdldFByZXZNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgdGFyZ2V0SW5kZXggPSAodGhpcy5wb3NpdGlvbiAtMSA8IDApID8gY29sbGVjdGlvbi5sZW5ndGggLTEgOiB0aGlzLnBvc2l0aW9uIC0gMTtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCh0YXJnZXRJbmRleCk7XG5cdH0sXG5cdG5leHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdHByZXZSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJyMvJysgdGhpcy5uYW1lc3BhY2UgKycvJyArIHRoaXMuZ2V0UHJldk1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGNoZWNrU2x1ZzogZnVuY3Rpb24oc2x1Zyl7XG5cdFx0cmV0dXJuICh0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IHNsdWd9KS5sZW5ndGggPj0gMSk7XG5cdH0sXG5cdGRlZmF1bHRTbHVnOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRSZWNvcmQgPyB0aGlzLmN1cnJlbnRSZWNvcmQuZ2V0KCdzbHVnJykgOiB0aGlzLmNvbGxlY3Rpb24uZmlyc3QoKS5nZXQoJ3NsdWcnKTtcblx0fSxcblx0ZGVmYXVsdFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiAnL3Byb2plY3RzLycgKyB0aGlzLmRlZmF1bHRTbHVnKCk7XG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcih7fSk7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlciByZW5kZXJlZCcpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdzaG93Q29udGVudCcsXG5cdFx0J2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG4gIH0sXG4gIHNob3dJbnRybzogZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG4gIH0sXG4gIHVwZGF0ZVVpUHJldjogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIHByZXYgPSAnLmdvLXByZXYnO1xuICBcdHZhciAkcHJldiA9IHRoaXMuJGVsLmZpbmQocHJldik7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JHByZXYucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JHByZXYuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG4gIHVwZGF0ZVVpTmV4dDogZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIFx0dmFyIG5leHQgPSAnLmdvLW5leHQnO1xuICBcdHZhciAkbmV4dCA9IHRoaXMuJGVsLmZpbmQobmV4dCk7XG4gIFx0aWYgKG9wdGlvbnMubGluaykge1xuICBcdFx0JG5leHQucmVtb3ZlQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgb3B0aW9ucy5saW5rKTtcbiAgXHR9IGVsc2Uge1xuICBcdFx0JG5leHQuYWRkQ2xhc3MoJ2hpZGUnKS5hdHRyKCdocmVmJywgJyMnKTtcbiAgXHR9XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZVByZXYnLCB0aGlzLnVwZGF0ZVVpUHJldik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVOZXh0JywgdGhpcy51cGRhdGVVaU5leHQpO1xuXHR9XG59KTsiXX0=
