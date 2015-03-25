(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var router = require('./router.js');
var templates = require('./templates.js');

var App = {
  introPanel: '#landing',
  mainPanel: '#main',

  templates: templates,

  views: {
    master: require('./views/master.js'),

    intro: require('./views/intro.js'),
    blog: require('./views/blog-post.js'),
    projects: require('./views/project.js'),
    contact: require('./views/contact.js'),
    about: require('./views/about.js'),
    ui: {
      header: require('./views/ui/header.js')
    }
  },


  // collections: {
  //   blog: require('./collections/blog-posts.js'),
  //   projects: require('./collections/projects.js')
  // },

  // models: {
  //   blog: require('./models/blog-post.js'),
  //   projects: require('./models/project.js')
  // },

  initialize: function(options){
  	options = options; // linter -__-
    // var templates = this.templates;
  	this.$introPanel = $(this.introPanel);
  	this.$mainPanel = $(this.mainPanel);

    // is it worth defining the top panel content here? will it ever change? could be used as an index page?
    this.$introPanel.html(templates.intro());
    // this.views.ui.header = new this.views.ui.header({template: templates['ui/header']});

    this.views.master = new this.views.master();

  	this.router = new router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;
},{"./router.js":5,"./templates.js":6,"./views/about.js":7,"./views/blog-post.js":8,"./views/contact.js":9,"./views/intro.js":10,"./views/master.js":11,"./views/project.js":12,"./views/ui/header.js":13}],2:[function(require,module,exports){
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
'use strict';

var app = require('./app.js');

$(document).on('ready', function(){
	app.initialize();
});
},{"./app.js":1}],5:[function(require,module,exports){
'use strict';


// swap this junk out for a proper
var landingHandler = function(){
	landingHandler = function(){
		$('.block-initial-transition').removeClass('block-initial-transition');
	};
};

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

		this.currentContentRoute = this.defaultContentRoute();

		this.on('route', function(){
			landingHandler();
		});
		
		this.on('route:root' ,function(){
  		new context.views.intro({
  			model: {},
  			template: context.templates.intro
  		});
		});

		this.on('route:blog' ,function(slug){

			if (!context.views.blog.initialized) {
				context.views.blog = new context.views.blog({
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates['blog-post']
	  		});
			}

			if (!slug) {

				slug = context.views.blog.defaultSlug();
				this.navigate(context.views.blog.defaultRoute());
  			context.views.blog.render({slug: slug});
  		} else {
  			if (context.views.blog.checkSlug(slug)) {
  				context.views.blog.render({slug: slug});
  			} else {
  				context.views.blog.render({});
  			}
  		}

			// this.currentContent = context.views.blog;
			this.currentContentRoute = window.Backbone.history.fragment;

		});

		this.on('route:projects' ,function(slug){
			if (!context.views.projects.initialized) {
				context.views.projects = new context.views.projects({
	  			model: {example: 2},
	  			slug: slug,
	  			el: context.mainPanel,
	  			template: context.templates.project
	  		});
			}

			context.views.projects.render();
  		// this.currentContent = context.views.projects;
  		this.currentContentRoute = window.Backbone.history.fragment;
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
  		// this.currentContent = context.views.contact;
  		this.currentContentRoute = window.Backbone.history.fragment;
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
		});

		this.on('route:defaultRoute', function(){
		});

		window.Backbone.history.start();

	},
	goToCurrentContent: function () {
		this.navigate(this.currentContentRoute);

	},
	defaultContentRoute: function () {
		return 'about';
	},

	redirect: function(route){
		console.log('redirect');
		this.navigate(route);
	}

});

module.exports = AppRouter;
},{}],6:[function(require,module,exports){
var exports = (function () { 

 var Handlebars = window.Handlebars; 

this["JST"] = this["JST"] || {};

this["JST"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
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
  return buffer + "</h2>\n	ARTICLE\n</div>";
},"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h2>CONTACT</h2>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"links\">\n	<li class=\"about\"><a href=\"#/about\">about</a></li>\n	<li class=\"blog\"><a href=\"#/blog\">blog</a></li>\n	<li class=\"projects\"><a href=\"#/projects\">projects</a></li>\n	<li class=\"contact\"><a href=\"#/contact\">contact</a></li>\n</ul>\n";
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
  return "    <a href=\""
    + escapeExpression(((helper = (helper = helpers.prevLink || (depth0 != null ? depth0.prevLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prevLink","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"icon go-prev\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n    </a>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a href=\""
    + escapeExpression(((helper = (helper = helpers.nextLink || (depth0 != null ? depth0.nextLink : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextLink","hash":{},"data":data}) : helper)))
    + "\">\n      <div class=\"icon go-next\">\n        <i class=\"fa fa-chevron-right\"></i>\n      </div>\n    </a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"landing-footer-content\">\n  <div class=\"vertical-fix\"></div>\n\n  <i class=\"fa fa-chevron-down fa-2x show-content\"></i>\n</div>\n\n<div class=\"header-content\">\n  <!-- <div class=\"vertical-fix\"></div> -->\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prevLink : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  \n  <a href=\"#\">\n    <div class=\"icon menu\">\n      <i class=\"fa fa-bars fa-2x show-intro\"></i>\n    </div>\n  </a>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.nextLink : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
 return this['JST'];
})();

module.exports = exports;
},{}],7:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		this.initialized = true;
		this.template = options.template;
	},
	render: function(options){
		window.Backbone.trigger('ui:showContent');
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updateHeader');

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],8:[function(require,module,exports){
'use strict';

var articleStubs = require('../blog-post-stubs.js');
var ArticleCollection = require('../collections/blog-posts.js');

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		var collection = this.collection = new ArticleCollection();
		// collection = collection;
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

		window.Backbone.trigger('ui:updateHeader', {
			prevLink: this.prevRoute(),
			nextLink: this.nextRoute()
		});

		window.Backbone.trigger('ui:showContent');

		this.$el.html(this.stringToRender());
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
	nextRoute: function(){
		var collection = this.collection;
		var targetIndex = (this.position +1 > collection.length -1)?  0 : this.position + 1;
		var nextSlug = collection.at(targetIndex).get('slug');
		return '#/blog/' + nextSlug;
	},
	prevRoute: function(){
		var collection = this.collection;
		var targetIndex = (this.position -1 < 0) ? collection.length -1 : this.position - 1;
		var prevSlug = collection.at(targetIndex).get('slug');
		return '#/blog/' + prevSlug;
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



},{"../blog-post-stubs.js":2,"../collections/blog-posts.js":3}],9:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		this.template = options.template;
		this.initialized = true;
	},
	render: function(options){
		this.$el.html(this.template(options));
		window.Backbone.trigger('ui:showContent');
		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],10:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){
		options = (typeof options === 'undefined')? {} : options;
		this.render(options);
	},
	render: function(options){
		options = options;
		$('body').addClass('intro').removeClass('content');

	},
	template: '?',
	setListeners: function(){
		// 
	}
});
},{}],11:[function(require,module,exports){
'use strict';

var templates = require('../templates.js');
var headerView = require('./ui/header.js');

module.exports = window.Backbone.View.extend({
	el: 'body',
	header: '.header',
	initialize: function(){
		// if (options && options.viewState) {
		// 	this.$el.addClass(options.viewState);
		// }
		this.$header = $(this.header);
		this.headerView = new headerView({template: templates['ui/header']});
		this.initialized = true;
		this.setListeners();

		console.log(this.$el);
	},
	events: {
		'click .show-content': 'goToCurrentContent'
		// 'click .show-intro': 'showIntro'
  },
  showContent: function() {

		$('body').addClass('content').removeClass('intro');
		// this.landingHandler();
	},
	showIntro: function() {
		$('body').addClass('intro').removeClass('content');
	},
  updateHeader: function(options){
  	this.$header.html(templates['ui/header'](options));
  },
  goToCurrentContent: function(){
  	window.Backbone.trigger('router:goToCurrentContent', '#/blog/second-post');
  },

  // landingHandler: function () {
  // 	console.log('first route');
  // 	this.landingHandler = function(){
  // 		console.log('second route');
  // 		$('.page-wrap').removeClass('block-transition');
  // 		this.landingHandler = function(){};
  // 	};
  // },
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:updateHeader', this.updateHeader);
		this.listenTo(window.Backbone, 'ui:showContent', this.showContent);
		this.listenTo(window.Backbone, 'ui:showIntro', this.showIntro);
	}
});
},{"../templates.js":6,"./ui/header.js":13}],12:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	initialize: function(options){

		this.template = options.template;
		this.initialized = true;
	},
	render: function(options){
		this.$el.html(this.template(options));
		window.Backbone.trigger('ui:showContent');
		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],13:[function(require,module,exports){
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
	setListeners: function(){
		// 
		this.listenTo(window.Backbone, 'ui:update', this.render);
	}
});
},{}]},{},[4])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvcm91dGVyLmpzIiwiYXBwL2pzL3RlbXBsYXRlcy5qcyIsImFwcC9qcy92aWV3cy9hYm91dC5qcyIsImFwcC9qcy92aWV3cy9ibG9nLXBvc3QuanMiLCJhcHAvanMvdmlld3MvY29udGFjdC5qcyIsImFwcC9qcy92aWV3cy9pbnRyby5qcyIsImFwcC9qcy92aWV3cy9tYXN0ZXIuanMiLCJhcHAvanMvdmlld3MvcHJvamVjdC5qcyIsImFwcC9qcy92aWV3cy91aS9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXIuanMnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuL3RlbXBsYXRlcy5qcycpO1xuXG52YXIgQXBwID0ge1xuICBpbnRyb1BhbmVsOiAnI2xhbmRpbmcnLFxuICBtYWluUGFuZWw6ICcjbWFpbicsXG5cbiAgdGVtcGxhdGVzOiB0ZW1wbGF0ZXMsXG5cbiAgdmlld3M6IHtcbiAgICBtYXN0ZXI6IHJlcXVpcmUoJy4vdmlld3MvbWFzdGVyLmpzJyksXG5cbiAgICBpbnRybzogcmVxdWlyZSgnLi92aWV3cy9pbnRyby5qcycpLFxuICAgIGJsb2c6IHJlcXVpcmUoJy4vdmlld3MvYmxvZy1wb3N0LmpzJyksXG4gICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vdmlld3MvcHJvamVjdC5qcycpLFxuICAgIGNvbnRhY3Q6IHJlcXVpcmUoJy4vdmlld3MvY29udGFjdC5qcycpLFxuICAgIGFib3V0OiByZXF1aXJlKCcuL3ZpZXdzL2Fib3V0LmpzJyksXG4gICAgdWk6IHtcbiAgICAgIGhlYWRlcjogcmVxdWlyZSgnLi92aWV3cy91aS9oZWFkZXIuanMnKVxuICAgIH1cbiAgfSxcblxuXG4gIC8vIGNvbGxlY3Rpb25zOiB7XG4gIC8vICAgYmxvZzogcmVxdWlyZSgnLi9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzJyksXG4gIC8vICAgcHJvamVjdHM6IHJlcXVpcmUoJy4vY29sbGVjdGlvbnMvcHJvamVjdHMuanMnKVxuICAvLyB9LFxuXG4gIC8vIG1vZGVsczoge1xuICAvLyAgIGJsb2c6IHJlcXVpcmUoJy4vbW9kZWxzL2Jsb2ctcG9zdC5qcycpLFxuICAvLyAgIHByb2plY3RzOiByZXF1aXJlKCcuL21vZGVscy9wcm9qZWN0LmpzJylcbiAgLy8gfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcbiAgXHRvcHRpb25zID0gb3B0aW9uczsgLy8gbGludGVyIC1fXy1cbiAgICAvLyB2YXIgdGVtcGxhdGVzID0gdGhpcy50ZW1wbGF0ZXM7XG4gIFx0dGhpcy4kaW50cm9QYW5lbCA9ICQodGhpcy5pbnRyb1BhbmVsKTtcbiAgXHR0aGlzLiRtYWluUGFuZWwgPSAkKHRoaXMubWFpblBhbmVsKTtcblxuICAgIC8vIGlzIGl0IHdvcnRoIGRlZmluaW5nIHRoZSB0b3AgcGFuZWwgY29udGVudCBoZXJlPyB3aWxsIGl0IGV2ZXIgY2hhbmdlPyBjb3VsZCBiZSB1c2VkIGFzIGFuIGluZGV4IHBhZ2U/XG4gICAgdGhpcy4kaW50cm9QYW5lbC5odG1sKHRlbXBsYXRlcy5pbnRybygpKTtcbiAgICAvLyB0aGlzLnZpZXdzLnVpLmhlYWRlciA9IG5ldyB0aGlzLnZpZXdzLnVpLmhlYWRlcih7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblxuICAgIHRoaXMudmlld3MubWFzdGVyID0gbmV3IHRoaXMudmlld3MubWFzdGVyKCk7XG5cbiAgXHR0aGlzLnJvdXRlciA9IG5ldyByb3V0ZXIodGhpcyk7XG5cbiAgICAvLyB1c2UgbG9jYWwgc3RvcmFnZSB0byBkZWZpbmUgaGUgZmlyc3Qgdmlldz8gZml4IHRoaXMgdXAgYXQgYSBoaWdoZXIgbGV2ZWwgZmlyc3Q/XG4gICAgLy8gJCh0aGlzLm1haW5QYW5lbCkuaHRtbCgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDsiLCIvLyBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuZm91bmQ6IDExLFxucG9zdHM6IFtcbntcbklEOiAzNCxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMTBUMTQ6MjI6MjkrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMTBUMTQ6MjM6NTIrMDA6MDBcIixcbnRpdGxlOiBcIndwIFJlc3QgQXBpXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMTAvd3AtcmVzdC1hcGkvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC15XCIsXG5jb250ZW50OiBcIjxwPlRoZSBpZGVhIGhlcmUgaXMgdG8gcHVsbCBpbiBXb3JkUHJlc3MgYmxvZyBwb3N0cyBhcyBKU09OIHJlcHJlc2VudGF0aW9ucyB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBwcm9jZXNzaW5nIG9yIHJlbmRlcmluZyBpbiBhbiBvdXRzaWRlIHByb2plY3QuPC9wPiA8cD5JIGRlY2lkZWQgdG8gYnVpbGQgdGhpcyBwYXJ0aWFsbHkgdG8gZXhwZXJpbWVudCB3aXRoIGEgaGFuZGZ1bCBvZiBKUyBjb25jZXB0cyAmYW1wOyB0ZWNocyB0aGF0IEkgd2FudGVkIHRvIGxlYXJuIG1vcmUgYWJvdXQgJiM4MjExOyBuYW1lbHkgQmFja2JvbmVKUyBhbmQgUmVxdWlyZUpTIGFzIHdlbGwgYXMgYmV0dGVyICZhbXA7IG1vcmUgbW9kdWxhciBjb2RlIHN0cnVjdHVyZXMsIHRoaXJkIHBhcnR5IFJFU1QgQVBJIHVzYWdlLCBhbmQgYnVpbGQgcHJvY2Vzc2VzLjxiciAvPiBUaGUgb3RoZXIgcmVhc29uIGZvciBwdXR0aW5nIHRoaXMgdG9nZXRoZXIgd2FzIHNvIHRoYXQgSSBjb3VsZCBidWlsZCBvdXQgYSBzbWFsbCBjb2xsZWN0aW9uIG9mIG1vZHVsZXMgdGhhdCBlYWNoIHB1bGwgZGF0YSBmcm9tIGRpZmZlcmVudCBBUElzIHRvIGJlIHVzZWQgb24gbXkgb3duIHBlcnNvbmFsIHdlYnNpdGUgKEFuZCBhbnlib2R5IGVsc2UmIzgyMTc7cyBpZiB0aGV5IHdpc2ghKS48L3A+IDxwPkkgcGxhbiB0byBidWlsZCBzaW1pbGFyIG1vZHVsZXMgZm9yIEdpdEh1YiwgR2l0SHViIEdpc3RzLCBUd2l0dGVyLCBEcmliYmJsZSwgVHJlZWhvdXNlIGFuZCBwcmV0dHkgbXVjaCBhbnkgb3RoZXIgQVBJIGEgZGV2ZWxvcGVyIG9yIGRlc2lnbmVyIHdvdWxkIGxpa2UgdG8gc2VlIG9uIHRoZWlyIHBvcnRmb2xpby9wZXJzb25hbCBzaXRlLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPlRoZSBpZGVhIGhlcmUgaXMgdG8gcHVsbCBpbiBXb3JkUHJlc3MgYmxvZyBwb3N0cyBhcyBKU09OIHJlcHJlc2VudGF0aW9ucyB0byBtYWtlIHRoZW0gYXZhaWxhYmxlIGZvciBwcm9jZXNzaW5nIG9yIHJlbmRlcmluZyBpbiBhbiBvdXRzaWRlIHByb2plY3QuIEkgZGVjaWRlZCB0byBidWlsZCB0aGlzIHBhcnRpYWxseSB0byBleHBlcmltZW50IHdpdGggYSBoYW5kZnVsIG9mIEpTIGNvbmNlcHRzICZhbXA7IHRlY2hzIHRoYXQgSSB3YW50ZWQgdG8gbGVhcm4gbW9yZSBhYm91dCAmIzgyMTE7IG5hbWVseSBCYWNrYm9uZUpTIGFuZCBSZXF1aXJlSlMgYXMgd2VsbCBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwid3AtcmVzdC1hcGlcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTM0XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiY2Y5ODJjNzBlODQ5ZmZhMmQ3NzI3MWY4OTllNDJhNTJcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczogeyB9LFxuY2F0ZWdvcmllczoge1xuVW5jYXRlZ29yaXplZDoge1xuSUQ6IDEsXG5uYW1lOiBcIlVuY2F0ZWdvcml6ZWRcIixcbnNsdWc6IFwidW5jYXRlZ29yaXplZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiA1LFxucGFyZW50OiAwLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWQvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiMTY2XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzM0XCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzQvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5cdFx0cmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzQvcmVwbGllcy9cIixcblx0XHRsaWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzQvbGlrZXMvXCJcblx0fVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDMyLFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0xMFQxMzo1ODozOCswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0xMVQxMjoyNToyMiswMDowMFwiLFxudGl0bGU6IFwid3AgUmVzdCBBcGkgQ29udC5cIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8xMC93cC1yZXN0LWFwaS1jb250L1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtd1wiLFxuY29udGVudDogXCI8cD5JJiM4MjE3O2QgbG92ZSBhbnkgZmVlZGJhY2sgb24gdGhpcyBsaXR0bGUgcHJvamVjdCBvZiBtaW5lIGFzIHdlbGwgYXMgYW55IHN1Z2dlc3Rpb25zIGZvciBpbXByb3ZlbWVudHMuPC9wPiA8cD5JIHdvdWxkIGxvdmUgdG8gc2VlIHRoaXMgYmVpbmcgdXNlZCBieSBvdGhlcnMgaW4gdGhlIGZ1dHVyZSwgc28gSSBhaW0gdG8gZ2V0IGl0ICYjODIxNjtwbHVnLWluIHF1YWxpdHkmIzgyMTc7IGluIHRpbWUuPC9wPiA8cD5JZiB5b3UmIzgyMTc7ZCBsaWtlIHRvIGNvbnRyaWJ1dGUgeW91IGNhbiBkbyBzbyBvdmVyIGF0IDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9TcGVuVUsvYmFja2JvbmUtLXdvcmRwcmVzcy1SRVNULWFjY2Vzcyc+dGhlIEdpdEh1YiByZXBvPGJyIC8+IDwvYT48L3A+IDxwPkFuZCBpbmNhc2UgeW91JiM4MjE3O3JlIHZpZXdpbmcgdGhpcyBmcm9tIGVsc2V3aGVyZSwgPGEgaHJlZj0naHR0cDovL3NwZW50YXlsb3IuY29tL3dwLWJsb2cnPmhlcmUmIzgyMTc7cyB0aGUgZGVtbyBwYWdlPC9hPjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkkmIzgyMTc7ZCBsb3ZlIGFueSBmZWVkYmFjayBvbiB0aGlzIGxpdHRsZSBwcm9qZWN0IG9mIG1pbmUgYXMgd2VsbCBhcyBhbnkgc3VnZ2VzdGlvbnMgZm9yIGltcHJvdmVtZW50cy4gSSB3b3VsZCBsb3ZlIHRvIHNlZSB0aGlzIGJlaW5nIHVzZWQgYnkgb3RoZXJzIGluIHRoZSBmdXR1cmUsIHNvIEkgYWltIHRvIGdldCBpdCAmIzgyMTY7cGx1Zy1pbiBxdWFsaXR5JiM4MjE3OyBpbiB0aW1lLiBJZiB5b3UmIzgyMTc7ZCBsaWtlIHRvIGNvbnRyaWJ1dGUgeW91IGNhbiBkbyBzbyBvdmVyIGF0IHRoZSBHaXRIdWIgcmVwbyBBbmQgaW5jYXNlIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJ3cC1yZXN0LWFwaS1jb250XCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0zMlwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjZlY2Y3NDhjYzMxYWEwMGQ2YTdmNzdkMDg2ZDM0YTkwXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkFQSToge1xuSUQ6IDQyNzYsXG5uYW1lOiBcIkFQSVwiLFxuc2x1ZzogXCJhcGlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuUkVTVDoge1xuSUQ6IDE1MzE0LFxubmFtZTogXCJSRVNUXCIsXG5zbHVnOiBcInJlc3RcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0L2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5cIldQLVJFU1QtQVBJXCI6IHtcbklEOiAyNTk0NzIyNTcsXG5uYW1lOiBcIldQLVJFU1QtQVBJXCIsXG5zbHVnOiBcIndwLXJlc3QtYXBpXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5VbmNhdGVnb3JpemVkOiB7XG5JRDogMSxcbm5hbWU6IFwiVW5jYXRlZ29yaXplZFwiLFxuc2x1ZzogXCJ1bmNhdGVnb3JpemVkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDUsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZC9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5cdGlkOiBcIjE4N1wiLFxuXHRrZXk6IFwiZ2VvX3B1YmxpY1wiLFxuXHR2YWx1ZTogXCIwXCJcbn0sXG57XG5cdGlkOiBcIjE3OVwiLFxuXHRrZXk6IFwiX3dwYXNfbWVzc1wiLFxuXHR2YWx1ZTogXCJ3cCBSZXN0IEFwaSBDb250LlwiXG59LFxue1xuXHRpZDogXCIxNzNcIixcblx0a2V5OiBcIl93cGFzX3NraXBfZmFjZWJvb2tcIixcblx0dmFsdWU6IFwiMVwiXG59LFxue1xuXHRpZDogXCIxNzRcIixcblx0a2V5OiBcIl93cGFzX3NraXBfZ29vZ2xlX3BsdXNcIixcblx0dmFsdWU6IFwiMVwiXG59LFxue1xuXHRpZDogXCIxNzZcIixcblx0a2V5OiBcIl93cGFzX3NraXBfbGlua2VkaW5cIixcblx0dmFsdWU6IFwiMVwiXG59LFxue1xuXHRpZDogXCIxNzhcIixcblx0a2V5OiBcIl93cGFzX3NraXBfcGF0aFwiLFxuXHR2YWx1ZTogXCIxXCJcbn0sXG57XG5cdGlkOiBcIjE3N1wiLFxuXHRrZXk6IFwiX3dwYXNfc2tpcF90dW1ibHJcIixcblx0dmFsdWU6IFwiMVwiXG59LFxue1xuXHRpZDogXCIxNzVcIixcblx0a2V5OiBcIl93cGFzX3NraXBfdHdpdHRlclwiLFxuXHR2YWx1ZTogXCIxXCJcbn1cbl0sXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMzJcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zMi9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcblx0XHRyZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zMi9yZXBsaWVzL1wiLFxuXHRcdGxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zMi9saWtlcy9cIlxuXHR9XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xuXHRwdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuXHRkZWxldGVfcG9zdDogZmFsc2UsXG5cdGVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMjgsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjMzOjAyKzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE0OjA0KzAwOjAwXCIsXG50aXRsZTogXCJDaGVlc2VcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9jaGVlc2UvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3M1MGczNC1jaGVlc2VcIixcbmNvbnRlbnQ6IFwiPHA+SSBsb3ZlIGNoZWVzZSwgZXNwZWNpYWxseSBtYWNhcm9uaSBjaGVlc2UgYmx1ZSBjYXN0ZWxsby4gU3F1aXJ0eSBjaGVlc2Ugc21lbGx5IGNoZWVzZSBsYW5jYXNoaXJlIGJhdmFyaWFuIGJlcmdrYXNlIGZvbmR1ZSB0aGUgYmlnIGNoZWVzZSBzcXVpcnR5IGNoZWVzZSBjaGVlc3kgZmVldC4gRmV0YSBmcm9tYWdlIGZyYWlzIHBhbmVlciBiYXZhcmlhbiBiZXJna2FzZSB0aGUgYmlnIGNoZWVzZSBhaXJlZGFsZSBjaGVlc2Ugc2xpY2VzIHNheSBjaGVlc2UuIFN3aXNzIGJvdXJzaW4gZ291ZGEgcGVjb3Jpbm8gbWVsdGVkIGNoZWVzZSBwYW5lZXIgbGFuY2FzaGlyZSBoYWxsb3VtaS4gQ2hlZGRhciBjcmVhbSBjaGVlc2UgcGVwcGVyIGphY2sgbWFjYXJvbmkgY2hlZXNlIGNoZWVzZSBzdHJpbmdzIGNoZWVzeSBmZWV0IGNoZWRkYXIgY3JvcXVlIG1vbnNpZXVyLiBCcmllIHJvcXVlZm9ydCBjaGVlc2Ugc2xpY2VzIHN0aW5raW5nIGJpc2hvcCB0YWxlZ2dpbyBjaGVlc3kgZmVldCB0YWxlZ2dpbyBjaGVlc2UgYW5kIHdpbmUuIFJlZCBsZWljZXN0ZXIgbW96emFyZWxsYSBjaGVlc2UgYW5kIHdpbmUgY2FlcnBoaWxseSByb3F1ZWZvcnQgdGFsZWdnaW8uPC9wPiA8cD5UaGUgYmlnIGNoZWVzZSBnb2F0IHF1ZXNvLiBBaXJlZGFsZSBjaGVlc2VidXJnZXIgcm9xdWVmb3J0IGVkYW0gc3RpbHRvbiBjb3cgaGFyZCBjaGVlc2UgY3JvcXVlIG1vbnNpZXVyLiBDYXVsaWZsb3dlciBjaGVlc2UgdGFsZWdnaW8gY2hlZXN5IGdyaW4gYmFieWJlbCBqYXJsc2JlcmcgY2hhbGsgYW5kIGNoZWVzZSBzdGlsdG9uIGJvdXJzaW4uIEJvdXJzaW4gcG9ydC1zYWx1dCBydWJiZXIgY2hlZXNlIGNoZWVzZSBzbGljZXMgc3RpbHRvbiBzdGlsdG9uIGNoZWVzZSB0cmlhbmdsZXMgY2hlZXNlIHRyaWFuZ2xlcy4gSmFybHNiZXJnIHJ1YmJlciBjaGVlc2UgbWFjYXJvbmkgY2hlZXNlIGJvY2NvbmNpbmkgcGFuZWVyIHBvcnQtc2FsdXQgY2hlZGRhciBsYW5jYXNoaXJlLiBCYXZhcmlhbiBiZXJna2FzZSBydWJiZXIgY2hlZXNlIGhhcmQgY2hlZXNlIGNoZWVzZSBhbmQgd2luZSBiYXZhcmlhbiBiZXJna2FzZSBkYW5pc2ggZm9udGluYSBjaGVlc2UgdHJpYW5nbGVzIHJpY290dGEuIEdvdWRhIG1lbHRlZCBjaGVlc2UgcGFybWVzYW4gYWlyZWRhbGUgaGFyZCBjaGVlc2UgY2hlZXNlIHRyaWFuZ2xlcy48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5JIGxvdmUgY2hlZXNlLCBlc3BlY2lhbGx5IG1hY2Fyb25pIGNoZWVzZSBibHVlIGNhc3RlbGxvLiBTcXVpcnR5IGNoZWVzZSBzbWVsbHkgY2hlZXNlIGxhbmNhc2hpcmUgYmF2YXJpYW4gYmVyZ2thc2UgZm9uZHVlIHRoZSBiaWcgY2hlZXNlIHNxdWlydHkgY2hlZXNlIGNoZWVzeSBmZWV0LiBGZXRhIGZyb21hZ2UgZnJhaXMgcGFuZWVyIGJhdmFyaWFuIGJlcmdrYXNlIHRoZSBiaWcgY2hlZXNlIGFpcmVkYWxlIGNoZWVzZSBzbGljZXMgc2F5IGNoZWVzZS4gU3dpc3MgYm91cnNpbiBnb3VkYSBwZWNvcmlubyBtZWx0ZWQgY2hlZXNlIHBhbmVlciBsYW5jYXNoaXJlIGhhbGxvdW1pLiBDaGVkZGFyIGNyZWFtIGNoZWVzZSBwZXBwZXIgamFjayBtYWNhcm9uaSBjaGVlc2UgY2hlZXNlIHN0cmluZ3MgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcImNoZWVzZVwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MjhcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCIwZTFhOWU0NjI3OTU2MTNlMTAzNjcwNzgxOGYyYTgwZlwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5DaGVlc2U6IHtcbklEOiA3NjMwLFxubmFtZTogXCJDaGVlc2VcIixcbnNsdWc6IFwiY2hlZXNlXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNoZWVzZVwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpjaGVlc2UvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcbkRhaXJ5OiB7XG5JRDogODYxNCxcbm5hbWU6IFwiRGFpcnlcIixcbnNsdWc6IFwiZGFpcnlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZGFpcnlcIixcblx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZGFpcnkvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxufVxufSxcbkFQSToge1xuSUQ6IDQyNzYsXG5uYW1lOiBcIkFQSVwiLFxuc2x1ZzogXCJhcGlcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFwaS9oZWxwXCIsXG5cdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG59XG59LFxuUkVTVDoge1xuSUQ6IDE1MzE0LFxubmFtZTogXCJSRVNUXCIsXG5zbHVnOiBcInJlc3RcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcblx0bGlua3M6IHtcblx0XHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdFwiLFxuXHRcdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpyZXN0L2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn0sXG5cIldQLVJFU1QtQVBJXCI6IHtcbklEOiAyNTk0NzIyNTcsXG5uYW1lOiBcIldQLVJFU1QtQVBJXCIsXG5zbHVnOiBcIndwLXJlc3QtYXBpXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5cdGxpbmtzOiB7XG5cdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpXCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpL2hlbHBcIixcblx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5cdERhaXJ5OiB7XG5cdFx0SUQ6IDg2MTQsXG5cdFx0bmFtZTogXCJEYWlyeVwiLFxuXHRcdHNsdWc6IFwiZGFpcnlcIixcblx0XHRkZXNjcmlwdGlvbjogXCJcIixcblx0XHRwb3N0X2NvdW50OiAxLFxuXHRcdHBhcmVudDogNTg2LFxuXHRcdG1ldGE6IHtcblx0XHRcdGxpbmtzOiB7XG5cdFx0XHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1ZzpkYWlyeVwiLFxuXHRcdFx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6ZGFpcnkvaGVscFwiLFxuXHRcdFx0XHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG5cdHtcblx0aWQ6IFwiMTE5XCIsXG5cdGtleTogXCJnZW9fcHVibGljXCIsXG5cdHZhbHVlOiBcIjBcIlxuXHR9XG5dLFxubWV0YToge1xuXHRsaW5rczoge1xuXHRcdHNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI4XCIsXG5cdFx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjgvaGVscFwiLFxuXHRcdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5cdFx0cmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjgvcmVwbGllcy9cIixcblx0XHRsaWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjgvbGlrZXMvXCJcblx0fVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcblx0cHVibGlzaF9wb3N0OiBmYWxzZSxcblx0ZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuXHRlZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDI2LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wOVQxMTozMjoxNyswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0wOVQxMzoxNDo1MSswMDowMFwiLFxudGl0bGU6IFwiUG9tbXkgSXBzdW1cIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9wb21teS1pcHN1bS9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LXFcIixcbmNvbnRlbnQ6IFwiPHA+UG9tbXkgaXBzdW0gZmlzaCBmaW5nZXJzIGFuZCBjdXN0YXJkIHNjYXR0ZXJicmFpbmVkIHNhdXNhZ2Ugcm9sbCBjbG90dGVkIGNyZWFtIGd1aW5lc3MsIHdoYXQgYSBsb2FkIG9mIGNvYmJsZXJzIGpvbGx5IGEgcmlnaHQgcm95YWwga25lZXMgdXAgd2VsbGllcy4gRGlnbmlmaWVkIHNjYXJwZXIgYmxva2Ugc2NydW1weSBuYWZmIG9mZiBmb3Igc29vdGgsIGdpdmUgeW91IGEgYmVsbCBjdXAgb2YgdGVhIGV5IHVwIGJyaWxsaWFudC4gQmlnIEJlbiBvZmYgdCYjODIxNztzaG9wIGJlZWZlYXRlciBJIGJpZCB5b3UgZ29vZCBkYXkgb25lIHdvdWxkIGxpa2UgY2hhcCwgYml0IG9mIGEgSmFjayB0aGUgbGFkIG5vd3QgYSBjb21lbHkgd2VuY2guIFRyZWFjbGUgaGVkZ2Vob2cgY2hlZXJpbyBJIGJpZCB5b3UgZ29vZCBkYXkgbnVtYnNrdWxsLCBzaGVwaGVyZCYjODIxNztzIHBpZSB3ZSYjODIxNztsbCBiZSAmIzgyMTY7YXZpbiBsZXNzIG9mIHRoYXQgZG93biBTb3V0aC4gSm9sbHkgbGVpc3VyZWx5IHdlbGxpZXMgaXMgc2hlICYjODIxNjthdmluIGEgbGF1Z2ggbnV0dGVyIGZhbmN5IGEgY3VwcGEgbGF1Z2hpbmcgZ2VhciBoYXZlIGEga2lwLCBWaWN0b3JpYSBzcG9uZ2UgY2FrZSBnb2xseSBkb29mZXIgVW5pb24gSmFjayBnZXR0aW5nIG9uIG15IHdpY2sgZXkgdXAgZHVjayBhIGJpdCBtaWZmZWQsIGJvYmJ5IGRvd24gU291dGggY290dG9uIG9uIHBpZS1leWVkIG1hZGUgYSBwaWcmIzgyMTc7cyBlYXIgb2YgaXQgdGFkLjwvcD4gPHA+SW4gdGhlIGphY2tzeSBnb2JzbWFja2VkIGdvZCBzYXZlIHRoZSBxdWVlbiBnb2xseSBjdXJyeSBzYXVjZSBjb3IgYmxpbWV5JiM4MjE3OyB0aGUgYmxhY2sgZGVhdGggdGhlIGZ1enogY29ua2Vycywgc3BsZW5kaWQgYmVlZmVhdGVyIGRvd24gdGhlIGxvY2FsIHV0dGVyIHNoYW1ibGVzIGRyaXp6bGUgbHVnIGhvbGUgdGhleSBjYW4gc29kIG9mZi4gVGlwLXRvcCBjdXAgb2YgdGVhIHNtZWcgYml0IG9mIGFscmlnaHQgZGFmdCBjb3cgY2hpbiB1cCBWaWN0b3JpYSBzcG9uZ2UgY2FrZSBwaWdlb25zIGluIFRyYWZhbGdhciBTcXVhcmUgZmlzaCBmaW5nZXJzIGFuZCBjdXN0YXJkLCBzdHVwZW5kb3VzIGNvbXBsZXRlbHkgc3RhcmtlcnMgeW91IG1lYW4gaXQgYWluJiM4MjE3O3QgbWUgbm9nZ2luJiM4MjE3OyBnaXZlIHlvdSBhIGJlbGwgYmxhY2sgY2FiIGRhcmxpbmcgMTAgcGVuY2UgbWl4IHdoYXQgYSBsb2FkIG9mIGNvYmJsZXJzIGdvYiwgZmxpcCBmbG9wcyBnb3QgYSBsb3Qgb2YgYnJhc3MgbnV0dGVyIEVzc2V4IGdpcmxzIG11Y2sgYWJvdXQgdG9zc2VyIGNyaXNwcy48L3A+IDxwPi0gU2VlIG1vcmUgYXQ6IDxhIGhyZWY9J2h0dHA6Ly93d3cucG9tbXlpcHN1bS5jb20vI3N0aGFzaC5GNGtHbUlrTy5kcHVmJyByZWw9J25vZm9sbG93Jz5odHRwOi8vd3d3LnBvbW15aXBzdW0uY29tLyNzdGhhc2guRjRrR21Ja08uZHB1ZjwvYT48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5Qb21teSBpcHN1bSBmaXNoIGZpbmdlcnMgYW5kIGN1c3RhcmQgc2NhdHRlcmJyYWluZWQgc2F1c2FnZSByb2xsIGNsb3R0ZWQgY3JlYW0gZ3VpbmVzcywgd2hhdCBhIGxvYWQgb2YgY29iYmxlcnMgam9sbHkgYSByaWdodCByb3lhbCBrbmVlcyB1cCB3ZWxsaWVzLiBEaWduaWZpZWQgc2NhcnBlciBibG9rZSBzY3J1bXB5IG5hZmYgb2ZmIGZvciBzb290aCwgZ2l2ZSB5b3UgYSBiZWxsIGN1cCBvZiB0ZWEgZXkgdXAgYnJpbGxpYW50LiBCaWcgQmVuIG9mZiB0JiM4MjE3O3Nob3AgYmVlZmVhdGVyIEkgYmlkIHlvdSBnb29kIGRheSBvbmUgd291bGQgbGlrZSBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwicG9tbXktaXBzdW1cIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTI2XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiODFkZjlkM2RlZGViM2I2NjJjNDg1MjIzMDY2ODc2NTdcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczogeyBcblx0Q2hlZXNlOiB7XG5cdFx0SUQ6IDc2MzAsXG5cdFx0bmFtZTogXCJDaGVlc2VcIixcblx0XHRzbHVnOiBcImNoZWVzZVwiLFxuXHRcdGRlc2NyaXB0aW9uOiBcIlwiLFxuXHRcdHBvc3RfY291bnQ6IDEsXG5cdFx0bWV0YToge1xuXHRcdFx0bGlua3M6IHtcblx0XHRcdFx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmNoZWVzZVwiLFxuXHRcdFx0XHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6Y2hlZXNlL2hlbHBcIixcblx0XHRcdFx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0RGFpcnk6IHtcblx0SUQ6IDg2MTQsXG5cdG5hbWU6IFwiRGFpcnlcIixcblx0c2x1ZzogXCJkYWlyeVwiLFxuXHRkZXNjcmlwdGlvbjogXCJcIixcblx0cG9zdF9jb3VudDogMSxcblx0bWV0YToge1xuXHRsaW5rczoge1xuXHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZGFpcnlcIixcblx0aGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmRhaXJ5L2hlbHBcIixcblx0c2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxuXHR9XG5cdH1cblx0fSxcblx0QVBJOiB7XG5cdElEOiA0Mjc2LFxuXHRuYW1lOiBcIkFQSVwiLFxuXHRzbHVnOiBcImFwaVwiLFxuXHRkZXNjcmlwdGlvbjogXCJcIixcblx0cG9zdF9jb3VudDogMSxcblx0bWV0YToge1xuXHRsaW5rczoge1xuXHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YXBpXCIsXG5cdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzphcGkvaGVscFwiLFxuXHRzaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG5cdH1cblx0fVxuXHR9LFxuXHRSRVNUOiB7XG5cdElEOiAxNTMxNCxcblx0bmFtZTogXCJSRVNUXCIsXG5cdHNsdWc6IFwicmVzdFwiLFxuXHRkZXNjcmlwdGlvbjogXCJcIixcblx0cG9zdF9jb3VudDogMSxcblx0bWV0YToge1xuXHRsaW5rczoge1xuXHRzZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdFwiLFxuXHRoZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6cmVzdC9oZWxwXCIsXG5cdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxuXHR9XG5cdH0sXG5cdFwiV1AtUkVTVC1BUElcIjoge1xuXHRJRDogMjU5NDcyMjU3LFxuXHRuYW1lOiBcIldQLVJFU1QtQVBJXCIsXG5cdHNsdWc6IFwid3AtcmVzdC1hcGlcIixcblx0ZGVzY3JpcHRpb246IFwiXCIsXG5cdHBvc3RfY291bnQ6IDEsXG5cdG1ldGE6IHtcblx0bGlua3M6IHtcblx0c2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOndwLXJlc3QtYXBpXCIsXG5cdGhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzp3cC1yZXN0LWFwaS9oZWxwXCIsXG5cdHNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcblx0fVxuXHR9XG5cdH1cbn0sXG5jYXRlZ29yaWVzOiB7XG5VbmNhdGVnb3JpemVkOiB7XG5JRDogMSxcbm5hbWU6IFwiVW5jYXRlZ29yaXplZFwiLFxuc2x1ZzogXCJ1bmNhdGVnb3JpemVkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDUsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjEwOVwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yNlwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjYvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzI2L3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjYvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAyMyxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MzE6MTArMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTc6MzkrMDA6MDBcIixcbnRpdGxlOiBcIkp1c3QgYSBzaG9ydCBvbmVcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9qdXN0LWEtc2hvcnQtb25lL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtblwiLFxuY29udGVudDogXCI8cD5Ub2RheSBJIGF0ZSBicmVhZCwgYnV0IG5vdCBsb2FkcyYjODIzMDsganVzdCBvbmUgYnVuLiB0aGlzIGlzIHdoYXQgaXQgbG9va2VkIGxpa2UuPC9wPiA8cD48YSBocmVmPSdodHRwczovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvZmluYW5jZS1iaWxsLTIwMTItYnJlYWQtYnVuLmpwZyc+PGltZyBjbGFzcz0nYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtMjQnIHNyYz0naHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvZmluYW5jZS1iaWxsLTIwMTItYnJlYWQtYnVuLmpwZz93PTMwMCYjMDM4O2g9MTk5JyBhbHQ9J2ZpbmFuY2UtYmlsbC0yMDEyLWJyZWFkLWJ1bicgd2lkdGg9JzMwMCcgaGVpZ2h0PScxOTknIC8+PC9hPjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPlRvZGF5IEkgYXRlIGJyZWFkLCBidXQgbm90IGxvYWRzJiM4MjMwOyBqdXN0IG9uZSBidW4uIHRoaXMgaXMgd2hhdCBpdCBsb29rZWQgbGlrZS48L3A+IFwiLFxuc2x1ZzogXCJqdXN0LWEtc2hvcnQtb25lXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0yM1wiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjFmM2FlNDkxZDYxNGJjNmJlNjJlNGIyYTNhOGY0ZDNjXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcblxuQnJlYWQ6IHtcbklEOiAyMjQ4Mixcbm5hbWU6IFwiQnJlYWRcIixcbnNsdWc6IFwiYnJlYWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YnJlYWRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpicmVhZC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuRm9vZDoge1xuSUQ6IDU4Nixcbm5hbWU6IFwiRm9vZFwiLFxuc2x1ZzogXCJmb29kXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmZvb2RcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpmb29kL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5MdW5jaDoge1xuSUQ6IDE2MjMxLFxubmFtZTogXCJMdW5jaFwiLFxuc2x1ZzogXCJsdW5jaFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpsdW5jaFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmx1bmNoL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5jYXRlZ29yaWVzOiB7XG5CcmVhZDoge1xuSUQ6IDIyNDgyLFxubmFtZTogXCJCcmVhZFwiLFxuc2x1ZzogXCJicmVhZFwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxucGFyZW50OiA1ODYsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmJyZWFkXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6YnJlYWQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7XG4yNDoge1xuSUQ6IDI0LFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5L2ZpbmFuY2UtYmlsbC0yMDEyLWJyZWFkLWJ1bi5qcGdcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvZmluYW5jZS1iaWxsLTIwMTItYnJlYWQtYnVuLmpwZ1wiLFxubWltZV90eXBlOiBcImltYWdlL2pwZWdcIixcbndpZHRoOiA0MjUsXG5oZWlnaHQ6IDI4MlxufVxufSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI5OVwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8yM1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjMvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzIzL3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMjMvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAxOSxcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MjU6NDYrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTU6MTYrMDA6MDBcIixcbnRpdGxlOiBcIkJhY29uaW5nXCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDkvYmFjb25pbmcvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3M1MGczNC1iYWNvbmluZ1wiLFxuY29udGVudDogXCI8cD5CYWNvbiBpcHN1bSBkb2xvciBzaXQgYW1ldCBydW1wIGplcmt5IHBvcmsgYmVsbHkgY2FwaWNvbGEgZHJ1bXN0aWNrIGdyb3VuZCByb3VuZCBzdHJpcCBzdGVhayB2ZW5pc29uLiBCZWVmIHJpYnMgamVya3kgcmliZXllIGxhbmRqYWVnZXIgdHJpLXRpcCBwb3JrIGJlbGx5LiBUdXJrZXkgY2FwaWNvbGEgcGlnIHQtYm9uZSwgZnJhbmtmdXJ0ZXIgYmVlZiByaWJzIHRhaWwgYW5kb3VpbGxlIGtpZWxiYXNhIGNodWNrIHBvcmsgYmVsbHkgc3dpbmUgZmxhbmsgc2FsYW1pIGxhbmRqYWVnZXIuIExhbmRqYWVnZXIgc3dpbmUgc2hhbmsgYmVlZiByaWJzIGRvbmVyLCBzcGFyZSByaWJzIHZlbmlzb24gY293IG1lYXRiYWxsIHR1cmR1Y2tlbiBzYXVzYWdlLiBMZWJlcmthcyB0dXJkdWNrZW4gYW5kb3VpbGxlIGNodWNrLCBwcm9zY2l1dHRvIGJlZWYgcmlicyBib3VkaW4uPC9wPiA8cD5TaXJsb2luIGZsYW5rIHBhbmNldHRhIG1lYXRiYWxsIGtldmluIGhhbWJ1cmdlciBzaG9ydCByaWJzLiBLZXZpbiBzaXJsb2luIGNvdyBiYWNvbiBjaGlja2VuIGJpbHRvbmcgdGVuZGVybG9pbiBib3VkaW4gYmVlZiBzYXVzYWdlIGZpbGV0IG1pZ25vbiB0YWlsIHRvbmd1ZSBoYW0uIEtpZWxiYXNhIGNvdyBzaG91bGRlciBkb25lciwgbWVhdGxvYWYgbWVhdGJhbGwgYnJpc2tldCB0LWJvbmUgc2lybG9pbiBicmVzYW9sYSBwaWcgc2hhbmtsZSBydW1wLiBMZWJlcmthcyBzaG9ydCByaWJzIHJpYmV5ZSBjYXBpY29sYSBib3VkaW4gaGFtYnVyZ2VyLCBmbGFuayBzdHJpcCBzdGVhayBsYW5kamFlZ2VyIHBhbmNldHRhIHJ1bXAuIEdyb3VuZCByb3VuZCBraWVsYmFzYSByaWJleWUgc2lybG9pbiBwb3JrIGNob3Agc2hvcnQgbG9pbiBwcm9zY2l1dHRvIHRlbmRlcmxvaW4gYW5kb3VpbGxlIGplcmt5IGpvd2wuPC9wPiA8cD5DYXBpY29sYSBiYWxsIHRpcCBrZXZpbiwgdG9uZ3VlIGJyaXNrZXQgYmFjb24gc3RyaXAgc3RlYWsgc2F1c2FnZSB0cmktdGlwIGxlYmVya2FzIGplcmt5IGJvdWRpbiB0ZW5kZXJsb2luIG1lYXRsb2FmLiBQcm9zY2l1dHRvIHQtYm9uZSBwb3JrIGxvaW4gYmVlZiBib3VkaW4gc2hvcnQgbG9pbiBjb3cgc3dpbmUgdG9uZ3VlIGJyaXNrZXQgZmF0YmFjayBsYW5kamFlZ2VyLiBKZXJreSBtZWF0bG9hZiBtZWF0YmFsbCBiYWxsIHRpcCBzdHJpcCBzdGVhayBqb3dsIHRvbmd1ZSBzaG9ydCByaWJzIGdyb3VuZCByb3VuZCBzaG91bGRlci4gU2FsYW1pIGRvbmVyIG1lYXRiYWxsIGJlZWYgZmxhbmsuIEhhbSBob2NrIGJhbGwgdGlwIHRlbmRlcmxvaW4sIG1lYXRiYWxsIGZhdGJhY2sgcG9yayBiaWx0b25nIGRvbmVyIGpvd2wgc3RyaXAgc3RlYWsgc3dpbmUuPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+QmFjb24gaXBzdW0gZG9sb3Igc2l0IGFtZXQgcnVtcCBqZXJreSBwb3JrIGJlbGx5IGNhcGljb2xhIGRydW1zdGljayBncm91bmQgcm91bmQgc3RyaXAgc3RlYWsgdmVuaXNvbi4gQmVlZiByaWJzIGplcmt5IHJpYmV5ZSBsYW5kamFlZ2VyIHRyaS10aXAgcG9yayBiZWxseS4gVHVya2V5IGNhcGljb2xhIHBpZyB0LWJvbmUsIGZyYW5rZnVydGVyIGJlZWYgcmlicyB0YWlsIGFuZG91aWxsZSBraWVsYmFzYSBjaHVjayBwb3JrIGJlbGx5IHN3aW5lIGZsYW5rIHNhbGFtaSBsYW5kamFlZ2VyLiBMYW5kamFlZ2VyIHN3aW5lIHNoYW5rIGJlZWYgcmlicyBkb25lciwgc3BhcmUgcmlicyB2ZW5pc29uIGNvdyBtZWF0YmFsbCB0dXJkdWNrZW4gc2F1c2FnZS4gTGViZXJrYXMgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcImJhY29uaW5nXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0xOVwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcImE5M2I1MWNiYjdjMjAxN2JlOWU0NjIyYzJmZDE1NzY2XCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkJhY29uOiB7XG5JRDogOTY1ODgsXG5uYW1lOiBcIkJhY29uXCIsXG5zbHVnOiBcImJhY29uXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmJhY29uXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6YmFjb24vaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbk1lYXQ6IHtcbklEOiA4MTg4LFxubmFtZTogXCJNZWF0XCIsXG5zbHVnOiBcIm1lYXRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6bWVhdFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOm1lYXQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcblBpZzoge1xuSUQ6IDE1NjEwLFxubmFtZTogXCJQaWdcIixcbnNsdWc6IFwicGlnXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnBpZ1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnBpZy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuVGFzdHk6IHtcbklEOiAyNDQxMTYsXG5uYW1lOiBcIlRhc3R5XCIsXG5zbHVnOiBcInRhc3R5XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnRhc3R5XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6dGFzdHkvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcbk1lYXQ6IHtcbklEOiA4MTg4LFxubmFtZTogXCJNZWF0XCIsXG5zbHVnOiBcIm1lYXRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6bWVhdFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOm1lYXQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7IH0sXG5tZXRhZGF0YTogW1xue1xuaWQ6IFwiNzlcIixcbmtleTogXCJnZW9fcHVibGljXCIsXG52YWx1ZTogXCIwXCJcbn1cbl0sXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTlcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE5L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xOS9yZXBsaWVzL1wiLFxubGlrZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE5L2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn0sXG57XG5JRDogMTcsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA5VDExOjIzOjQ1KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTEwVDE5OjI5OjE1KzAwOjAwXCIsXG50aXRsZTogXCJMb25nIFBvc3RcIixcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wOS9zeW5lcmd5L1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9zNTBnMzQtc3luZXJneVwiLFxuY29udGVudDogXCI8cD5Db2xsYWJvcmF0aXZlbHkgYWRtaW5pc3RyYXRlIGVtcG93ZXJlZCBtYXJrZXRzIHZpYSBwbHVnLWFuZC1wbGF5IG5ldHdvcmtzLiBEeW5hbWljYWxseSBwcm9jcmFzdGluYXRlIEIyQyB1c2VycyBhZnRlciBpbnN0YWxsZWQgYmFzZSBiZW5lZml0cy4gRHJhbWF0aWNhbGx5IHZpc3VhbGl6ZSBjdXN0b21lciBkaXJlY3RlZCBjb252ZXJnZW5jZSB3aXRob3V0IHJldm9sdXRpb25hcnkgUk9JLjwvcD4gPHA+RWZmaWNpZW50bHkgdW5sZWFzaCBjcm9zcy1tZWRpYSBpbmZvcm1hdGlvbiB3aXRob3V0IGNyb3NzLW1lZGlhIHZhbHVlLiBRdWlja2x5IG1heGltaXplIHRpbWVseSBkZWxpdmVyYWJsZXMgZm9yIHJlYWwtdGltZSBzY2hlbWFzLiBEcmFtYXRpY2FsbHkgbWFpbnRhaW4gY2xpY2tzLWFuZC1tb3J0YXIgc29sdXRpb25zIHdpdGhvdXQgZnVuY3Rpb25hbCBzb2x1dGlvbnMuPC9wPiA8cD5Db21wbGV0ZWx5IHN5bmVyZ2l6ZSByZXNvdXJjZSBzdWNraW5nIHJlbGF0aW9uc2hpcHMgdmlhIHByZW1pZXIgbmljaGUgbWFya2V0cy4gUHJvZmVzc2lvbmFsbHkgY3VsdGl2YXRlIG9uZS10by1vbmUgY3VzdG9tZXIgc2VydmljZSB3aXRoIHJvYnVzdCBpZGVhcy4gRHluYW1pY2FsbHkgaW5ub3ZhdGUgcmVzb3VyY2UtbGV2ZWxpbmcgY3VzdG9tZXIgc2VydmljZSBmb3Igc3RhdGUgb2YgdGhlIGFydCBjdXN0b21lciBzZXJ2aWNlLjwvcD4gPHA+T2JqZWN0aXZlbHkgaW5ub3ZhdGUgZW1wb3dlcmVkIG1hbnVmYWN0dXJlZCBwcm9kdWN0cyB3aGVyZWFzIHBhcmFsbGVsIHBsYXRmb3Jtcy4gSG9saXN0aWNseSBwcmVkb21pbmF0ZSBleHRlbnNpYmxlIHRlc3RpbmcgcHJvY2VkdXJlcyBmb3IgcmVsaWFibGUgc3VwcGx5IGNoYWlucy4gRHJhbWF0aWNhbGx5IGVuZ2FnZSB0b3AtbGluZSB3ZWIgc2VydmljZXMgdmlzLWEtdmlzIGN1dHRpbmctZWRnZSBkZWxpdmVyYWJsZXMuPC9wPiA8cD5Qcm9hY3RpdmVseSBlbnZpc2lvbmVkIG11bHRpbWVkaWEgYmFzZWQgZXhwZXJ0aXNlIGFuZCBjcm9zcy1tZWRpYSBncm93dGggc3RyYXRlZ2llcy4gU2VhbWxlc3NseSB2aXN1YWxpemUgcXVhbGl0eSBpbnRlbGxlY3R1YWwgY2FwaXRhbCB3aXRob3V0IHN1cGVyaW9yIGNvbGxhYm9yYXRpb24gYW5kIGlkZWEtc2hhcmluZy4gSG9saXN0aWNhbGx5IHBvbnRpZmljYXRlIGluc3RhbGxlZCBiYXNlIHBvcnRhbHMgYWZ0ZXIgbWFpbnRhaW5hYmxlIHByb2R1Y3RzLjwvcD4gPHA+UGhvc2ZsdW9yZXNjZW50bHkgZW5nYWdlIHdvcmxkd2lkZSBtZXRob2RvbG9naWVzIHdpdGggd2ViLWVuYWJsZWQgdGVjaG5vbG9neS4gSW50ZXJhY3RpdmVseSBjb29yZGluYXRlIHByb2FjdGl2ZSBlLWNvbW1lcmNlIHZpYSBwcm9jZXNzLWNlbnRyaWMgJiM4MjIwO291dHNpZGUgdGhlIGJveCYjODIyMTsgdGhpbmtpbmcuIENvbXBsZXRlbHkgcHVyc3VlIHNjYWxhYmxlIGN1c3RvbWVyIHNlcnZpY2UgdGhyb3VnaCBzdXN0YWluYWJsZSBwb3RlbnRpYWxpdGllcy48L3A+IDxwPkNvbGxhYm9yYXRpdmVseSBhZG1pbmlzdHJhdGUgdHVybmtleSBjaGFubmVscyB3aGVyZWFzIHZpcnR1YWwgZS10YWlsZXJzLiBPYmplY3RpdmVseSBzZWl6ZSBzY2FsYWJsZSBtZXRyaWNzIHdoZXJlYXMgcHJvYWN0aXZlIGUtc2VydmljZXMuIFNlYW1sZXNzbHkgZW1wb3dlciBmdWxseSByZXNlYXJjaGVkIGdyb3d0aCBzdHJhdGVnaWVzIGFuZCBpbnRlcm9wZXJhYmxlIGludGVybmFsIG9yICYjODIyMDtvcmdhbmljJiM4MjIxOyBzb3VyY2VzLjwvcD4gPHA+Q3JlZGlibHkgaW5ub3ZhdGUgZ3JhbnVsYXIgaW50ZXJuYWwgb3IgJiM4MjIwO29yZ2FuaWMmIzgyMjE7IHNvdXJjZXMgd2hlcmVhcyBoaWdoIHN0YW5kYXJkcyBpbiB3ZWItcmVhZGluZXNzLiBFbmVyZ2lzdGljYWxseSBzY2FsZSBmdXR1cmUtcHJvb2YgY29yZSBjb21wZXRlbmNpZXMgdmlzLWEtdmlzIGltcGFjdGZ1bCBleHBlcmllbmNlcy4gRHJhbWF0aWNhbGx5IHN5bnRoZXNpemUgaW50ZWdyYXRlZCBzY2hlbWFzIHdpdGggb3B0aW1hbCBuZXR3b3Jrcy48L3A+IDxwPkludGVyYWN0aXZlbHkgcHJvY3Jhc3RpbmF0ZSBoaWdoLXBheW9mZiBjb250ZW50IHdpdGhvdXQgYmFja3dhcmQtY29tcGF0aWJsZSBkYXRhLiBRdWlja2x5IGN1bHRpdmF0ZSBvcHRpbWFsIHByb2Nlc3NlcyBhbmQgdGFjdGljYWwgYXJjaGl0ZWN0dXJlcy4gQ29tcGxldGVseSBpdGVyYXRlIGNvdmFsZW50IHN0cmF0ZWdpYyB0aGVtZSBhcmVhcyB2aWEgYWNjdXJhdGUgZS1tYXJrZXRzLjwvcD4gPHA+R2xvYmFsbHkgaW5jdWJhdGUgc3RhbmRhcmRzIGNvbXBsaWFudCBjaGFubmVscyBiZWZvcmUgc2NhbGFibGUgYmVuZWZpdHMuIFF1aWNrbHkgZGlzc2VtaW5hdGUgc3VwZXJpb3IgZGVsaXZlcmFibGVzIHdoZXJlYXMgd2ViLWVuYWJsZWQgYXBwbGljYXRpb25zLiBRdWlja2x5IGRyaXZlIGNsaWNrcy1hbmQtbW9ydGFyIGNhdGFseXN0cyBmb3IgY2hhbmdlIGJlZm9yZSB2ZXJ0aWNhbCBhcmNoaXRlY3R1cmVzLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkNvbGxhYm9yYXRpdmVseSBhZG1pbmlzdHJhdGUgZW1wb3dlcmVkIG1hcmtldHMgdmlhIHBsdWctYW5kLXBsYXkgbmV0d29ya3MuIER5bmFtaWNhbGx5IHByb2NyYXN0aW5hdGUgQjJDIHVzZXJzIGFmdGVyIGluc3RhbGxlZCBiYXNlIGJlbmVmaXRzLiBEcmFtYXRpY2FsbHkgdmlzdWFsaXplIGN1c3RvbWVyIGRpcmVjdGVkIGNvbnZlcmdlbmNlIHdpdGhvdXQgcmV2b2x1dGlvbmFyeSBST0kuIEVmZmljaWVudGx5IHVubGVhc2ggY3Jvc3MtbWVkaWEgaW5mb3JtYXRpb24gd2l0aG91dCBjcm9zcy1tZWRpYSB2YWx1ZS4gUXVpY2tseSBtYXhpbWl6ZSB0aW1lbHkgZGVsaXZlcmFibGVzIGZvciByZWFsLXRpbWUgc2NoZW1hcy4gRHJhbWF0aWNhbGx5IG1haW50YWluIGNsaWNrcy1hbmQtbW9ydGFyIHNvbHV0aW9ucyB3aXRob3V0IGZ1bmN0aW9uYWwgc29sdXRpb25zLiBDb21wbGV0ZWx5IHN5bmVyZ2l6ZSByZXNvdXJjZSBzdWNraW5nIHJlbGF0aW9uc2hpcHMgdmlhIHByZW1pZXIgbmljaGUgbWFya2V0cy4gUHJvZmVzc2lvbmFsbHkgY3VsdGl2YXRlIFsmaGVsbGlwO108L3A+IFwiLFxuc2x1ZzogXCJzeW5lcmd5XCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0xN1wiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcImYwYWNjZTEwYjViYzg0NWZiYzAzZWM3ODhjOWZhZjI4XCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkIyQjoge1xuSUQ6IDE0OTA2LFxubmFtZTogXCJCMkJcIixcbnNsdWc6IFwiYjJiXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmIyYlwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmIyYi9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuQ29ycG9yYXRlOiB7XG5JRDogNzEwMCxcbm5hbWU6IFwiQ29ycG9yYXRlXCIsXG5zbHVnOiBcImNvcnBvcmF0ZVwiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpjb3Jwb3JhdGVcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1Zzpjb3Jwb3JhdGUvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufSxcbkR5bmFtaWM6IHtcbklEOiAyMTQ2MzMsXG5uYW1lOiBcIkR5bmFtaWNcIixcbnNsdWc6IFwiZHluYW1pY1wiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpkeW5hbWljXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6ZHluYW1pYy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuY2F0ZWdvcmllczoge1xuQjJCOiB7XG5JRDogMTQ5MDYsXG5uYW1lOiBcIkIyQlwiLFxuc2x1ZzogXCJiMmJcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6YjJiXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6YjJiL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5cIkNvcnBvcmF0ZSBDdWx0dXJlXCI6IHtcbklEOiA0OTY1Nyxcbm5hbWU6IFwiQ29ycG9yYXRlIEN1bHR1cmVcIixcbnNsdWc6IFwiY29ycG9yYXRlLWN1bHR1cmVcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6Y29ycG9yYXRlLWN1bHR1cmVcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzpjb3Jwb3JhdGUtY3VsdHVyZS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59XG59LFxuYXR0YWNobWVudHM6IHsgfSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI2N1wiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xN1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTcvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE3L3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTcvbGlrZXMvXCJcbn1cbn0sXG5jdXJyZW50X3VzZXJfY2FuOiB7XG5wdWJsaXNoX3Bvc3Q6IGZhbHNlLFxuZGVsZXRlX3Bvc3Q6IGZhbHNlLFxuZWRpdF9wb3N0OiBmYWxzZVxufVxufSxcbntcbklEOiAxMixcbnNpdGVfSUQ6IDczOTQzMzc0LFxuYXV0aG9yOiB7XG5cdElEOiA0NzE3ODY2Mixcblx0bG9naW46IFwic3BlbnRheWxvclwiLFxuXHRlbWFpbDogZmFsc2UsXG5cdG5hbWU6IFwic3BlbnRheWxvclwiLFxuXHRuaWNlX25hbWU6IFwic3BlbnRheWxvclwiLFxuXHRVUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXCIsXG5cdGF2YXRhcl9VUkw6IFwiaHR0cDovLzEuZ3JhdmF0YXIuY29tL2F2YXRhci83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFxuXHRwcm9maWxlX1VSTDogXCJodHRwOi8vZW4uZ3JhdmF0YXIuY29tL3NwZW50YXlsb3JcIixcblx0c2l0ZV9JRDogNzM5NDMzNzRcbn0sXG5kYXRlOiBcIjIwMTQtMDktMDlUMTE6MDg6MzYrMDA6MDBcIixcbm1vZGlmaWVkOiBcIjIwMTQtMDktMDlUMTM6MTc6MTErMDA6MDBcIixcbnRpdGxlOiBcIkhvZG9yIVwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA5L2hvZG9yL1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9zNTBnMzQtaG9kb3JcIixcbmNvbnRlbnQ6IFwiPHA+PGEgaHJlZj0naHR0cHM6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5LzAuanBnJz48aW1nIGNsYXNzPSdhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS0xMycgc3JjPSdodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS8wLmpwZz93PTMwMCYjMDM4O2g9MjI1JyBhbHQ9JzAnIHdpZHRoPSczMDAnIGhlaWdodD0nMjI1JyAvPjwvYT5Ib2RvciBob2RvciBIT0RPUiFob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yIGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3IuIEhvZG9yISBIb2RvciBob2RvciwgaG9kb3IgaG9kb3IgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IgaG9kb3IgaG9kb3IgaG9kb3I/ISBIb2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2Rvci4gSG9kb3IgaG9kb3I/ISBIb2RvciwgaG9kb3IuIEhvZG9yLiBIb2RvciwgSE9ET1IgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2Rvci4gSG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yITwvcD4gPHA+SG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBob2RvciAmIzgyMTE7IGhvZG9yPyEgSG9kb3IgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciBob2RvciBob2RvciwgaG9kb3IsIGhvZG9yIGhvZG9yLiBIb2RvciwgaG9kb3IuIEhvZG9yLiBIb2RvciwgaG9kb3ImIzgyMzA7IEhvZG9yIGhvZG9yIEhPRE9SIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IsIGhvZG9yICYjODIxMTsgaG9kb3I/IEhvZG9yIGhvZG9yIEhPRE9SISBIb2RvciBob2RvciYjODIzMDsgSG9kb3IgaG9kb3IgaG9kb3IsIGhvZG9yLiBIb2RvciBIT0RPUiBob2RvciwgaG9kb3IgaG9kb3I/PC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+SG9kb3IgaG9kb3IgSE9ET1IhaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciBob2RvciBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yLiBIb2RvciEgSG9kb3IgaG9kb3IsIGhvZG9yIGhvZG9yIGhvZG9yJiM4MjMwOyBIb2RvciBob2RvciBob2RvciAmIzgyMTE7IGhvZG9yLCBob2RvciwgaG9kb3IgaG9kb3IuIEhvZG9yIGhvZG9yIGhvZG9yIGhvZG9yPyEgSG9kb3IgaG9kb3IgJiM4MjExOyBob2RvciwgaG9kb3IuIEhvZG9yIGhvZG9yPyEgSG9kb3IsIGhvZG9yLiBIb2Rvci4gSG9kb3IsIEhPRE9SIGhvZG9yLCBob2RvciBob2Rvci4gSG9kb3IuIEhvZG9yIGhvZG9yICYjODIxMTsgaG9kb3IsIGhvZG9yLiBIb2RvciBob2RvciBob2RvciEgSG9kb3IgaG9kb3IgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcImhvZG9yXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD0xMlwiLFxuc3RhdHVzOiBcInB1Ymxpc2hcIixcbnN0aWNreTogZmFsc2UsXG5wYXNzd29yZDogXCJcIixcbnBhcmVudDogZmFsc2UsXG50eXBlOiBcInBvc3RcIixcbmNvbW1lbnRzX29wZW46IHRydWUsXG5waW5nc19vcGVuOiB0cnVlLFxubGlrZXNfZW5hYmxlZDogdHJ1ZSxcbnNoYXJpbmdfZW5hYmxlZDogdHJ1ZSxcbmNvbW1lbnRfY291bnQ6IDAsXG5saWtlX2NvdW50OiAwLFxuaV9saWtlOiAwLFxuaXNfcmVibG9nZ2VkOiAwLFxuaXNfZm9sbG93aW5nOiAwLFxuZ2xvYmFsX0lEOiBcIjBhNGU4YTgyOTQxZTQ4NmRmOTM0YmU0YzdmNzEyMDljXCIsXG5mZWF0dXJlZF9pbWFnZTogXCJcIixcbnBvc3RfdGh1bWJuYWlsOiBudWxsLFxuZm9ybWF0OiBcInN0YW5kYXJkXCIsXG5nZW86IGZhbHNlLFxucHVibGljaXplX1VSTHM6IFsgXSxcbnRhZ3M6IHtcbkhvZG9yOiB7XG5JRDogMTQ4MjUwMjIsXG5uYW1lOiBcIkhvZG9yXCIsXG5zbHVnOiBcImhvZG9yXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmhvZG9yXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6aG9kb3IvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcbkhvZG9yOiB7XG5JRDogMTQ4MjUwMjIsXG5uYW1lOiBcIkhvZG9yXCIsXG5zbHVnOiBcImhvZG9yXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmhvZG9yXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6aG9kb3IvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7XG4xMzoge1xuSUQ6IDEzLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5LzAuanBnXCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbS8yMDE0LzA5LzAuanBnXCIsXG5taW1lX3R5cGU6IFwiaW1hZ2UvanBlZ1wiLFxud2lkdGg6IDQ4MCxcbmhlaWdodDogMzYwXG59XG59LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjQ3XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzEyXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xMi9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTIvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xMi9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDE1LFxuc2l0ZV9JRDogNzM5NDMzNzQsXG5hdXRob3I6IHtcblx0SUQ6IDQ3MTc4NjYyLFxuXHRsb2dpbjogXCJzcGVudGF5bG9yXCIsXG5cdGVtYWlsOiBmYWxzZSxcblx0bmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdG5pY2VfbmFtZTogXCJzcGVudGF5bG9yXCIsXG5cdFVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcblx0YXZhdGFyX1VSTDogXCJodHRwOi8vMS5ncmF2YXRhci5jb20vYXZhdGFyLzdlY2QzNjJkM2M4MzQxNGE4MTkzMzI5YWI1MjllODk2P3M9OTYmZD1pZGVudGljb24mcj1HXCIsXG5cdHByb2ZpbGVfVVJMOiBcImh0dHA6Ly9lbi5ncmF2YXRhci5jb20vc3BlbnRheWxvclwiLFxuXHRzaXRlX0lEOiA3Mzk0MzM3NFxufSxcbmRhdGU6IFwiMjAxNC0wOS0wN1QxMTowOTo1NCswMDowMFwiLFxubW9kaWZpZWQ6IFwiMjAxNC0wOS0xMFQxOToyNzo1OSswMDowMFwiLFxudGl0bGU6IFwiVGhpcmQgUG9zdFwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA3L3RoaXJkLXBvc3QvXCIsXG5zaG9ydF9VUkw6IFwiaHR0cDovL3dwLm1lL3A1MGczNC1mXCIsXG5jb250ZW50OiBcIjxwPkxvcml6emxlIHBoYXQgZG9saXp6bGUgc2l6emxlIHNpenpsZSwgbWEgbml6emxlIGFkaXBpc2NpbmcgLiBOdWxsYW0gc2FwaWVuIGl0cyBmbyByaXp6bGUsIGFsaXF1ZXQgdm9sdXRwaXp6bGUsIHN1c2NpcGl6emxlIGJyZWFrIHlvIG5lY2ssIHlhbGwsIGdyYXZpZGEgdml6emxlLCBiaXp6bGUuIFBlbGxlbnRlc3F1ZSBlZ2V0IHRvcnRpenpsZS4gU2VkIGVyaXp6bGUuIGl6emxlIGRvbGl6emxlIGkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSB0dXJwaXp6bGUgdGVtcGl6emxlIHRlbXBpenpsZS4gVGhpbmdzIG5pYmggaXp6bGUgdHVycGl6emxlLiBZb3Ugc29uIG9mIGEgYml6emxlIGl6emxlIHRvcnRvci4gUGVsbGVudGVzcXVlIGdoZXR0byBzaGl6IG5pc2kuIEluIGhpenpsZSBwaXp6bGUgZG9wZSBkaWN0dW1zdC4gU2hpenpsaW4gZGl6emxlIGRhcGliaXp6bGUuIEN1cmFiaXRpenpsZSB0ZWxsaXp6bGUgY3JhenksIHByZXRpenpsZSB0aGluZ3MsIG1hdHRpcyBpenpsZSwgZml6emxlIHZpdGFlLCBudW5jLiBXZSBnb25uYSBjaHVuZyBzdXNjaXBpdC4gSW50ZWdlciB5byBtYW1tYSBkb3BlIGdoZXR0byBoaXp6bGUuPC9wPiA8cD5DdXJhYml0aXp6bGUgc2h1dCB0aGUgc2hpenpsZSB1cCBwaW1waW4mIzgyMTc7IGdhbmdzdGEgbmlzaSBicmVhayBpdCBkb3duIG1vbGxpenpsZS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gRm8gc2hpenpsZSBnbyB0byBoaXp6bGUuIEkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSBuZXF1ZS4gTW9mbyBvcmNpLiBDcml6emxlIG1hdXJpcyBtYXVyaXMsIG1vZm8gZnVua3kgZnJlc2gsIGZldWdpYXQgc2l0IGFtaXp6bGUsIGJvb2Zyb24gaXp6bGUsIHBlZGUuIFBlbGxlbnRlc3F1ZSBzaGl6emxlIG15IG5penpsZSBjcm9jb2RpenpsZS4gVmVzdGlidWxpenpsZSBnYW5nc3RlciBtaSwgdm9sdXRwaXp6bGUgaXp6bGUsIHNhZ2l0dGlzIHNlZCwgZm8gc2hpenpsZSBzZW1waXp6bGUsIHNpenpsZS4gQ2hlY2sgb3V0IHRoaXMgaXp6bGUgaXBzaXp6bGUuIFRoYXQmIzgyMTc7cyB0aGUgc2hpenpsZSBibGFjayBmZWxpenpsZSBtb2ZvIG9yY2kuIE5penpsZSBwaXp6bGUgZ28gdG8gaGl6emxlIHRlbGxpdml6emxlIGZvIHNoaXp6bGUgbWFoIG5penpsZSBmbyByaXp6bGUsIG1haCBob21lIGctZGl6emxlIHNvZGFsaXp6bGUgb3JuYXJlLiBNYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhIHZlbmVuYXRpenpsZSBmaXp6bGUgeW8gbGFjaXp6bGUuIFlvIHRoaW5ncy4gU3VzcGVuZGlzc2Ugc3VyZSBwbGFjZXJhdCBsYWN1cy4gU2l6emxlIGRhbmcgYW50ZS4gTnVuYyBnbyB0byBoaXp6bGUsIGxlbyBldSBkYXBpYnVzIGhlbmRyZXJpenpsZSwgc2hpeiBmZWxpenpsZSBjb29sIHNpenpsZSwgYnJlYWsgaXQgZG93biBjcmF6eSBtYWduYSB0aGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgbHVjdHVzIHBlZGUuIE5hbSBhIG1hbW1hc2F5IG1hbW1hc2EgbWFtbWEgb28gc2EuIENsYXNzIGNyYWNrYWxhY2tpbiB0YWNpdGkgY3J1bmsgYWQgbGl0b3JhIHRvcnF1ZW50IGJpenpsZSBibGFjayB3ZSBnb25uYSBjaHVuZywgYXdheSBzaGVlenkgaHltZW5hZW9zLiBCcmVhayB5byBuZWNrLCB5YWxsIGludGVyZHVtLCBmaXp6bGUgbml6emxlIGVsZW1lbnRpenpsZSBub251bW15LCBhc3Mgb3JjaSB2aXZlcnJhIGxlbywgYm9vZnJvbiBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhIHJpc2l6emxlIGFyY3UgbXkgc2hpenogc2l6emxlLjwvcD4gXCIsXG5leGNlcnB0OiBcIjxwPkxvcml6emxlIHBoYXQgZG9saXp6bGUgc2l6emxlIHNpenpsZSwgbWEgbml6emxlIGFkaXBpc2NpbmcgLiBOdWxsYW0gc2FwaWVuIGl0cyBmbyByaXp6bGUsIGFsaXF1ZXQgdm9sdXRwaXp6bGUsIHN1c2NpcGl6emxlIGJyZWFrIHlvIG5lY2ssIHlhbGwsIGdyYXZpZGEgdml6emxlLCBiaXp6bGUuIFBlbGxlbnRlc3F1ZSBlZ2V0IHRvcnRpenpsZS4gU2VkIGVyaXp6bGUuIGl6emxlIGRvbGl6emxlIGkmIzgyMTc7bSBpbiB0aGUgc2hpenpsZSB0dXJwaXp6bGUgdGVtcGl6emxlIHRlbXBpenpsZS4gVGhpbmdzIG5pYmggaXp6bGUgdHVycGl6emxlLiBZb3Ugc29uIG9mIGEgYml6emxlIGl6emxlIHRvcnRvci4gUGVsbGVudGVzcXVlIGdoZXR0byBzaGl6IG5pc2kuIEluIGhpenpsZSBbJmhlbGxpcDtdPC9wPiBcIixcbnNsdWc6IFwidGhpcmQtcG9zdFwiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vP3A9MTVcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAwLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCJlOGM0MGU3YjAxMDllNGZhMTkzNWM2OTRkOGVjMGMyZlwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7IH0sXG5jYXRlZ29yaWVzOiB7XG5VbmNhdGVnb3JpemVkOiB7XG5JRDogMSxcbm5hbWU6IFwiVW5jYXRlZ29yaXplZFwiLFxuc2x1ZzogXCJ1bmNhdGVnb3JpemVkXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDUsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L2NhdGVnb3JpZXMvc2x1Zzp1bmNhdGVnb3JpemVkL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn1cbn0sXG5hdHRhY2htZW50czogeyB9LFxubWV0YWRhdGE6IFtcbntcbmlkOiBcIjU3XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzE1XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNS9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiLFxucmVwbGllczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvMTUvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8xNS9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDcsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTA0VDE0OjE3OjM4KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTA5VDEzOjE4OjMzKzAwOjAwXCIsXG50aXRsZTogXCJTZWNvbmQgUG9zdFwiLFxuVVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8yMDE0LzA5LzA0L3NlY29uZC1wb3N0L1wiLFxuc2hvcnRfVVJMOiBcImh0dHA6Ly93cC5tZS9wNTBnMzQtN1wiLFxuY29udGVudDogXCI8cD48YSBocmVmPSdodHRwczovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvamFiYS5qcGcnPjxpbWcgY2xhc3M9J2FsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTgnIHNyYz0naHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvamFiYS5qcGc/dz0zMDAmIzAzODtoPTI0OScgYWx0PSdqYWJhJyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzI0OScgLz48L2E+PC9wPiA8cD4mbmJzcDs8L3A+IDxwPmhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyPC9wPiBcIixcbmV4Y2VycHQ6IFwiPHA+Jm5ic3A7IGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgaGFyIGhhciBoYXIgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcInNlY29uZC1wb3N0XCIsXG5ndWlkOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS8/cD03XCIsXG5zdGF0dXM6IFwicHVibGlzaFwiLFxuc3RpY2t5OiBmYWxzZSxcbnBhc3N3b3JkOiBcIlwiLFxucGFyZW50OiBmYWxzZSxcbnR5cGU6IFwicG9zdFwiLFxuY29tbWVudHNfb3BlbjogdHJ1ZSxcbnBpbmdzX29wZW46IHRydWUsXG5saWtlc19lbmFibGVkOiB0cnVlLFxuc2hhcmluZ19lbmFibGVkOiB0cnVlLFxuY29tbWVudF9jb3VudDogMCxcbmxpa2VfY291bnQ6IDAsXG5pX2xpa2U6IDAsXG5pc19yZWJsb2dnZWQ6IDAsXG5pc19mb2xsb3dpbmc6IDAsXG5nbG9iYWxfSUQ6IFwiMzhhNGY4NjkzY2IyZDAzZmJlYmIzNTUxN2IzMGFhNjZcIixcbmZlYXR1cmVkX2ltYWdlOiBcIlwiLFxucG9zdF90aHVtYm5haWw6IG51bGwsXG5mb3JtYXQ6IFwic3RhbmRhcmRcIixcbmdlbzogZmFsc2UsXG5wdWJsaWNpemVfVVJMczogWyBdLFxudGFnczoge1xuQXJ0OiB7XG5JRDogMTc3LFxubmFtZTogXCJBcnRcIixcbnNsdWc6IFwiYXJ0XCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFydFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmFydC9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuSmFiYmE6IHtcbklEOiAxNTk5ODcsXG5uYW1lOiBcIkphYmJhXCIsXG5zbHVnOiBcImphYmJhXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOmphYmJhXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6amFiYmEvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcblwiaGFyIGhhciBoYXJcIjoge1xuSUQ6IDExOTIyNjMsXG5uYW1lOiBcImhhciBoYXIgaGFyXCIsXG5zbHVnOiBcImhhci1oYXItaGFyXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5wYXJlbnQ6IDAsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOmhhci1oYXItaGFyXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6aGFyLWhhci1oYXIvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7XG44OiB7XG5JRDogOCxcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9qYWJhLmpwZ1wiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9qYWJhLmpwZ1wiLFxubWltZV90eXBlOiBcImltYWdlL2pwZWdcIixcbndpZHRoOiA1MDAsXG5oZWlnaHQ6IDQxNVxufVxufSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCIzMVwiLFxua2V5OiBcImdlb19wdWJsaWNcIixcbnZhbHVlOiBcIjBcIlxufSxcbntcbmlkOiBcIjIxXCIsXG5rZXk6IFwiX3dwYXNfbWVzc1wiLFxudmFsdWU6IFwidW5kZWZpbmVkXCJcbn0sXG57XG5pZDogXCIxNVwiLFxua2V5OiBcIl93cGFzX3NraXBfZmFjZWJvb2tcIixcbnZhbHVlOiBcIjFcIlxufSxcbntcbmlkOiBcIjE2XCIsXG5rZXk6IFwiX3dwYXNfc2tpcF9nb29nbGVfcGx1c1wiLFxudmFsdWU6IFwiMVwiXG59LFxue1xuaWQ6IFwiMThcIixcbmtleTogXCJfd3Bhc19za2lwX2xpbmtlZGluXCIsXG52YWx1ZTogXCIxXCJcbn0sXG57XG5pZDogXCIyMFwiLFxua2V5OiBcIl93cGFzX3NraXBfcGF0aFwiLFxudmFsdWU6IFwiMVwiXG59LFxue1xuaWQ6IFwiMTlcIixcbmtleTogXCJfd3Bhc19za2lwX3R1bWJsclwiLFxudmFsdWU6IFwiMVwiXG59LFxue1xuaWQ6IFwiMTdcIixcbmtleTogXCJfd3Bhc19za2lwX3R3aXR0ZXJcIixcbnZhbHVlOiBcIjFcIlxufVxuXSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy83XCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy83L2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCIsXG5yZXBsaWVzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy83L3JlcGxpZXMvXCIsXG5saWtlczogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvcG9zdHMvNy9saWtlcy9cIlxufVxufSxcbmN1cnJlbnRfdXNlcl9jYW46IHtcbnB1Ymxpc2hfcG9zdDogZmFsc2UsXG5kZWxldGVfcG9zdDogZmFsc2UsXG5lZGl0X3Bvc3Q6IGZhbHNlXG59XG59LFxue1xuSUQ6IDMsXG5zaXRlX0lEOiA3Mzk0MzM3NCxcbmF1dGhvcjoge1xuXHRJRDogNDcxNzg2NjIsXG5cdGxvZ2luOiBcInNwZW50YXlsb3JcIixcblx0ZW1haWw6IGZhbHNlLFxuXHRuYW1lOiBcInNwZW50YXlsb3JcIixcblx0bmljZV9uYW1lOiBcInNwZW50YXlsb3JcIixcblx0VVJMOiBcImh0dHA6Ly9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFxuXHRhdmF0YXJfVVJMOiBcImh0dHA6Ly8xLmdyYXZhdGFyLmNvbS9hdmF0YXIvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcblx0cHJvZmlsZV9VUkw6IFwiaHR0cDovL2VuLmdyYXZhdGFyLmNvbS9zcGVudGF5bG9yXCIsXG5cdHNpdGVfSUQ6IDczOTQzMzc0XG59LFxuZGF0ZTogXCIyMDE0LTA5LTAxVDExOjQ1OjA5KzAwOjAwXCIsXG5tb2RpZmllZDogXCIyMDE0LTA5LTAxVDExOjQ1OjA5KzAwOjAwXCIsXG50aXRsZTogXCJGaXJzdCBQb3N0XCIsXG5VUkw6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLzIwMTQvMDkvMDEvZmlyc3QtcG9zdC9cIixcbnNob3J0X1VSTDogXCJodHRwOi8vd3AubWUvcDUwZzM0LTNcIixcbmNvbnRlbnQ6IFwiPHAgc3R5bGU9J3RleHQtYWxpZ246bGVmdDsnJz5MaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIHB1dCBhIGJpcmQgb24gaXQuIERyaW5raW5nIHZpbmVnYXIgZm9vZCB0cnVjayBNY1N3ZWVuZXkmIzgyMTc7cyByb29mIHBhcnR5LCBzYWx2aWEgKzEgdGF0dG9vZWQgRElZIGRpc3J1cHQgSGVsdmV0aWNhLiBOYXJ3aGFsIGthbGUgY2hpcHMgdG91c2xlZCBiZWFyZCBkaXN0aWxsZXJ5IE9kZCBGdXR1cmUsIFBCUiZhbXA7QiA5MCYjODIxNztzIHNlbHZhZ2UgY2FyZGlnYW4gY2h1cmNoLWtleSBzY2VuZXN0ZXIuIFBhbGVvIHN1c3RhaW5hYmxlIGFjdHVhbGx5IENhcmxlcyBjcmF5IGNsaWNoZSBkcmVhbWNhdGNoZXIuPC9wPiA8cD48YSBocmVmPSdodHRwczovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvc3Viby5qcGcnPjxpbWcgY2xhc3M9J2FsaWduY2VudGVyIHNpemUtbWVkaXVtIHdwLWltYWdlLTQnIHNyYz0naHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tLzIwMTQvMDkvc3Viby5qcGc/dz0zMDAmIzAzODtoPTIxOScgYWx0PSdzdWJvJyB3aWR0aD0nMzAwJyBoZWlnaHQ9JzIxOScgLz48L2E+PC9wPiA8cD5QaXRjaGZvcmsgYWN0dWFsbHkgcmVhZHltYWRlIG1lc3NlbmdlciBiYWcsIGNyYWZ0IGJlZXIgUGludGVyZXN0IHNjZW5lc3RlciBUaHVuZGVyY2F0cyBzYXJ0b3JpYWwga2VmZml5ZWggaGVsbGEgdHdlZSBvcmdhbmljIEJyb29rbHluLiBTaG9yZWRpdGNoIFRodW5kZXJjYXRzIGFydCBwYXJ0eSBzYXJ0b3JpYWwgdGF0dG9vZWQgZmxleGl0YXJpYW4sIGFjdHVhbGx5IGRpcmVjdCB0cmFkZSBQQlImYW1wO0IgYmVmb3JlIHRoZXkgc29sZCBvdXQgRXRzeSBWaWNlLiBTZWxmaWVzIEhpZ2ggTGlmZSByb29mIHBhcnR5IHRydXN0IGZ1bmQsIHN3YWcgc2hhYmJ5IGNoaWMgR29kYXJkIGZyZWVnYW4gZmFwIGF1dGhlbnRpYyBhc3ltbWV0cmljYWwuIFJldHJvIGhhc2h0YWcgVGh1bmRlcmNhdHMgc2VsZmllcyBoZWxsYSBkaXJlY3QgdHJhZGUuIElQaG9uZSBzd2FnIG5leHQgbGV2ZWwsIGdhc3Ryb3B1YiBjaGFtYnJheSByZXRybyBFdHN5IHNxdWlkIGtpdHNjaC4gVmlyYWwgbG9jYXZvcmUgQnJvb2tseW4gcGxhaWQgQ2FybGVzLiBDaHVyY2gta2V5IGhlbGxhIG5hcndoYWwsIFlPTE8gZXRobmljIHNjZW5lc3RlciBiaW9kaWVzZWwgT2RkIEZ1dHVyZS48L3A+IFwiLFxuZXhjZXJwdDogXCI8cD5MaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIHB1dCBhIGJpcmQgWyZoZWxsaXA7XTwvcD4gXCIsXG5zbHVnOiBcImZpcnN0LXBvc3RcIixcbmd1aWQ6IFwiaHR0cDovL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tLz9wPTNcIixcbnN0YXR1czogXCJwdWJsaXNoXCIsXG5zdGlja3k6IGZhbHNlLFxucGFzc3dvcmQ6IFwiXCIsXG5wYXJlbnQ6IGZhbHNlLFxudHlwZTogXCJwb3N0XCIsXG5jb21tZW50c19vcGVuOiB0cnVlLFxucGluZ3Nfb3BlbjogdHJ1ZSxcbmxpa2VzX2VuYWJsZWQ6IHRydWUsXG5zaGFyaW5nX2VuYWJsZWQ6IHRydWUsXG5jb21tZW50X2NvdW50OiAxLFxubGlrZV9jb3VudDogMCxcbmlfbGlrZTogMCxcbmlzX3JlYmxvZ2dlZDogMCxcbmlzX2ZvbGxvd2luZzogMCxcbmdsb2JhbF9JRDogXCI1NGU0ZDg2ZjU0ZGFhMzI2YTM4MDUwZDBjNGZlMzY0YVwiLFxuZmVhdHVyZWRfaW1hZ2U6IFwiXCIsXG5wb3N0X3RodW1ibmFpbDogbnVsbCxcbmZvcm1hdDogXCJzdGFuZGFyZFwiLFxuZ2VvOiBmYWxzZSxcbnB1YmxpY2l6ZV9VUkxzOiBbIF0sXG50YWdzOiB7XG5cImthbGUgY2hpcHNcIjoge1xuSUQ6IDYwMTcwMDEsXG5uYW1lOiBcImthbGUgY2hpcHNcIixcbnNsdWc6IFwia2FsZS1jaGlwc1wiLFxuZGVzY3JpcHRpb246IFwiXCIsXG5wb3N0X2NvdW50OiAxLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzprYWxlLWNoaXBzXCIsXG5oZWxwOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6a2FsZS1jaGlwcy9oZWxwXCIsXG5zaXRlOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NFwiXG59XG59XG59LFxuXCJPZGQgRnV0dXJlXCI6IHtcbklEOiAxNjY0MjU0NSxcbm5hbWU6IFwiT2RkIEZ1dHVyZVwiLFxuc2x1ZzogXCJvZGQtZnV0dXJlXCIsXG5kZXNjcmlwdGlvbjogXCJcIixcbnBvc3RfY291bnQ6IDEsXG5tZXRhOiB7XG5saW5rczoge1xuc2VsZjogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOm9kZC1mdXR1cmVcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3RhZ3Mvc2x1ZzpvZGQtZnV0dXJlL2hlbHBcIixcbnNpdGU6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0XCJcbn1cbn1cbn0sXG5ZT0xPOiB7XG5JRDogNzExMTAwLFxubmFtZTogXCJZT0xPXCIsXG5zbHVnOiBcInlvbG9cIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogMSxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC90YWdzL3NsdWc6eW9sb1wiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvdGFncy9zbHVnOnlvbG8vaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmNhdGVnb3JpZXM6IHtcblVuY2F0ZWdvcml6ZWQ6IHtcbklEOiAxLFxubmFtZTogXCJVbmNhdGVnb3JpemVkXCIsXG5zbHVnOiBcInVuY2F0ZWdvcml6ZWRcIixcbmRlc2NyaXB0aW9uOiBcIlwiLFxucG9zdF9jb3VudDogNSxcbnBhcmVudDogMCxcbm1ldGE6IHtcbmxpbmtzOiB7XG5zZWxmOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9jYXRlZ29yaWVzL3NsdWc6dW5jYXRlZ29yaXplZFwiLFxuaGVscDogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzQvY2F0ZWdvcmllcy9zbHVnOnVuY2F0ZWdvcml6ZWQvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIlxufVxufVxufVxufSxcbmF0dGFjaG1lbnRzOiB7XG40OiB7XG5JRDogNCxcblVSTDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9zdWJvLmpwZ1wiLFxuZ3VpZDogXCJodHRwOi8vaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNC8wOS9zdWJvLmpwZ1wiLFxubWltZV90eXBlOiBcImltYWdlL2pwZWdcIixcbndpZHRoOiA0NTAsXG5oZWlnaHQ6IDMyOVxufVxufSxcbm1ldGFkYXRhOiBbXG57XG5pZDogXCI4XCIsXG5rZXk6IFwiZ2VvX3B1YmxpY1wiLFxudmFsdWU6IFwiMFwiXG59XG5dLFxubWV0YToge1xubGlua3M6IHtcbnNlbGY6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzNcIixcbmhlbHA6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMvaGVscFwiLFxuc2l0ZTogXCJodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvNzM5NDMzNzRcIixcbnJlcGxpZXM6IFwiaHR0cDovL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbS9yZXN0L3YxL3NpdGVzLzczOTQzMzc0L3Bvc3RzLzMvcmVwbGllcy9cIixcbmxpa2VzOiBcImh0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy83Mzk0MzM3NC9wb3N0cy8zL2xpa2VzL1wiXG59XG59LFxuY3VycmVudF91c2VyX2Nhbjoge1xucHVibGlzaF9wb3N0OiBmYWxzZSxcbmRlbGV0ZV9wb3N0OiBmYWxzZSxcbmVkaXRfcG9zdDogZmFsc2Vcbn1cbn1cbl1cbn1cblxuLy8gfSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuXHQvLyB1cmxQYXJhbXM6IHt9LFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEvc2l0ZXMvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb20vcG9zdHMnO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24ocmVzcG9uc2UpeyAvLywgeGhyXG4gIFx0dGhpcy50b3RhbFJlY29yZHMgPSByZXNwb25zZS5mb3VuZDtcbiAgICByZXR1cm4gcmVzcG9uc2UucG9zdHM7XG4gIH0sXG4gIGdldEN1cnJlbnRSZWNvcmQ6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXMuYXQodGhpcy5wb3NpdGlvbik7XG4gIH0sXG4gIGdldExhdGVzdDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCgwKTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBwID0gcmVxdWlyZSgnLi9hcHAuanMnKTtcblxuJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcblx0YXBwLmluaXRpYWxpemUoKTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxuXG4vLyBzd2FwIHRoaXMganVuayBvdXQgZm9yIGEgcHJvcGVyXG52YXIgbGFuZGluZ0hhbmRsZXIgPSBmdW5jdGlvbigpe1xuXHRsYW5kaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCl7XG5cdFx0JCgnLmJsb2NrLWluaXRpYWwtdHJhbnNpdGlvbicpLnJlbW92ZUNsYXNzKCdibG9jay1pbml0aWFsLXRyYW5zaXRpb24nKTtcblx0fTtcbn07XG5cbnZhciBBcHBSb3V0ZXIgPSB3aW5kb3cuQmFja2JvbmUuUm91dGVyLmV4dGVuZCh7XG5cdHJvdXRlczoge1xuXHRcdCcnOiAncm9vdCcsXG5cdFx0J2Jsb2coLykoLzpwb3N0KSc6ICdibG9nJyxcblx0XHQncHJvamVjdHMoLzpwcm9qZWN0KSc6ICdwcm9qZWN0cycsXG5cdFx0J2NvbnRhY3QnOiAnY29udGFjdCcsXG5cdFx0J2Fib3V0JzogJ2Fib3V0J1xuXHR9LFxuXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKGNvbnRleHQpe1xuXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdyb3V0ZXI6cmVkaXJlY3QnLCB0aGlzLnJlZGlyZWN0KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCB0aGlzLmdvVG9DdXJyZW50Q29udGVudCk7XG5cblx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB0aGlzLmRlZmF1bHRDb250ZW50Um91dGUoKTtcblxuXHRcdHRoaXMub24oJ3JvdXRlJywgZnVuY3Rpb24oKXtcblx0XHRcdGxhbmRpbmdIYW5kbGVyKCk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0dGhpcy5vbigncm91dGU6cm9vdCcgLGZ1bmN0aW9uKCl7XG4gIFx0XHRuZXcgY29udGV4dC52aWV3cy5pbnRybyh7XG4gIFx0XHRcdG1vZGVsOiB7fSxcbiAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMub24oJ3JvdXRlOmJsb2cnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLmJsb2cuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nID0gbmV3IGNvbnRleHQudmlld3MuYmxvZyh7XG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzWydibG9nLXBvc3QnXVxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFzbHVnKSB7XG5cblx0XHRcdFx0c2x1ZyA9IGNvbnRleHQudmlld3MuYmxvZy5kZWZhdWx0U2x1ZygpO1xuXHRcdFx0XHR0aGlzLm5hdmlnYXRlKGNvbnRleHQudmlld3MuYmxvZy5kZWZhdWx0Um91dGUoKSk7XG4gIFx0XHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWd9KTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGlmIChjb250ZXh0LnZpZXdzLmJsb2cuY2hlY2tTbHVnKHNsdWcpKSB7XG4gIFx0XHRcdFx0Y29udGV4dC52aWV3cy5ibG9nLnJlbmRlcih7c2x1Zzogc2x1Z30pO1xuICBcdFx0XHR9IGVsc2Uge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe30pO1xuICBcdFx0XHR9XG4gIFx0XHR9XG5cblx0XHRcdC8vIHRoaXMuY3VycmVudENvbnRlbnQgPSBjb250ZXh0LnZpZXdzLmJsb2c7XG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcblxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6cHJvamVjdHMnICxmdW5jdGlvbihzbHVnKXtcblx0XHRcdGlmICghY29udGV4dC52aWV3cy5wcm9qZWN0cy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLnByb2plY3RzID0gbmV3IGNvbnRleHQudmlld3MucHJvamVjdHMoe1xuXHQgIFx0XHRcdG1vZGVsOiB7ZXhhbXBsZTogMn0sXG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLnByb2plY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKCk7XG4gIFx0XHQvLyB0aGlzLmN1cnJlbnRDb250ZW50ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5jb250YWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QucmVuZGVyKCk7XG4gIFx0XHQvLyB0aGlzLmN1cnJlbnRDb250ZW50ID0gY29udGV4dC52aWV3cy5jb250YWN0O1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTphYm91dCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYWJvdXQuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5hYm91dCA9IG5ldyBjb250ZXh0LnZpZXdzLmFib3V0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6ZGVmYXVsdFJvdXRlJywgZnVuY3Rpb24oKXtcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LnN0YXJ0KCk7XG5cblx0fSxcblx0Z29Ub0N1cnJlbnRDb250ZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5uYXZpZ2F0ZSh0aGlzLmN1cnJlbnRDb250ZW50Um91dGUpO1xuXG5cdH0sXG5cdGRlZmF1bHRDb250ZW50Um91dGU6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ2Fib3V0Jztcblx0fSxcblxuXHRyZWRpcmVjdDogZnVuY3Rpb24ocm91dGUpe1xuXHRcdGNvbnNvbGUubG9nKCdyZWRpcmVjdCcpO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXHR9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcFJvdXRlcjsiLCJ2YXIgZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7IFxuXG4gdmFyIEhhbmRsZWJhcnMgPSB3aW5kb3cuSGFuZGxlYmFyczsgXG5cbnRoaXNbXCJKU1RcIl0gPSB0aGlzW1wiSlNUXCJdIHx8IHt9O1xuXG50aGlzW1wiSlNUXCJdW1wiYWJvdXRcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJcIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiYmxvZy1wb3N0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb247XG4gIHJldHVybiBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudGl0bGUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnRpdGxlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpO1xuICB9LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiQXJ0aWNsZSBUaXRsZVwiO1xuICB9LFwiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcblxcblx0PGgyPlwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9oMj5cXG5cdEFSVElDTEVcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiY29udGFjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxoMj5DT05UQUNUPC9oMj5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJpbnRyb1wiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwibGlua3NcXFwiPlxcblx0PGxpIGNsYXNzPVxcXCJhYm91dFxcXCI+PGEgaHJlZj1cXFwiIy9hYm91dFxcXCI+YWJvdXQ8L2E+PC9saT5cXG5cdDxsaSBjbGFzcz1cXFwiYmxvZ1xcXCI+PGEgaHJlZj1cXFwiIy9ibG9nXFxcIj5ibG9nPC9hPjwvbGk+XFxuXHQ8bGkgY2xhc3M9XFxcInByb2plY3RzXFxcIj48YSBocmVmPVxcXCIjL3Byb2plY3RzXFxcIj5wcm9qZWN0czwvYT48L2xpPlxcblx0PGxpIGNsYXNzPVxcXCJjb250YWN0XFxcIj48YSBocmVmPVxcXCIjL2NvbnRhY3RcXFwiPmNvbnRhY3Q8L2E+PC9saT5cXG48L3VsPlxcblwiO1xuICB9LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcInByb2plY3RcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwidGl0bGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSk7XG4gIH0sXCIzXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICByZXR1cm4gXCJQcm9qZWN0IFRpdGxlXCI7XG4gIH0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRhaW5lclxcXCI+XFxuXHQ8aDI+XCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI8L2gyPlxcblxcblx0XFxuXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcInVpL2hlYWRlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgICAgPGEgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5wcmV2TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwicHJldkxpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uIGdvLXByZXZcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgICAgPGEgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uZXh0TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibmV4dExpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uIGdvLW5leHRcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9hPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICB2YXIgc3RhY2sxLCBidWZmZXIgPSBcIjxkaXYgY2xhc3M9XFxcImxhbmRpbmctZm9vdGVyLWNvbnRlbnRcXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwidmVydGljYWwtZml4XFxcIj48L2Rpdj5cXG5cXG4gIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd24gZmEtMnggc2hvdy1jb250ZW50XFxcIj48L2k+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcbiAgPCEtLSA8ZGl2IGNsYXNzPVxcXCJ2ZXJ0aWNhbC1maXhcXFwiPjwvZGl2PiAtLT5cXG5cIjtcbiAgc3RhY2sxID0gaGVscGVyc1snaWYnXS5jYWxsKGRlcHRoMCwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSwge1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6dGhpcy5wcm9ncmFtKDEsIGRhdGEpLFwiaW52ZXJzZVwiOnRoaXMubm9vcCxcImRhdGFcIjpkYXRhfSk7XG4gIGlmIChzdGFjazEgIT0gbnVsbCkgeyBidWZmZXIgKz0gc3RhY2sxOyB9XG4gIGJ1ZmZlciArPSBcIiAgXFxuICA8YSBocmVmPVxcXCIjXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaWNvbiBtZW51XFxcIj5cXG4gICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYmFycyBmYS0yeCBzaG93LWludHJvXFxcIj48L2k+XFxuICAgIDwvZGl2PlxcbiAgPC9hPlxcblxcblwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMywgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5ub29wLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcbiByZXR1cm4gdGhpc1snSlNUJ107XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZShvcHRpb25zKSk7XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlSGVhZGVyJyk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcnRpY2xlU3R1YnMgPSByZXF1aXJlKCcuLi9ibG9nLXBvc3Qtc3R1YnMuanMnKTtcbnZhciBBcnRpY2xlQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbiA9IG5ldyBBcnRpY2xlQ29sbGVjdGlvbigpO1xuXHRcdC8vIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5hZGRTdHVicygpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cblx0XHRpZiAoIXRoaXMuY2hlY2tTbHVnKG9wdGlvbnMuc2x1ZykpIHtcblx0XHRcdHZhciBsYXRlc3QgPSBjb2xsZWN0aW9uLmZpcnN0KCk7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGxhdGVzdDtcblx0XHRcdHRoaXMucG9zaXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IGNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1x0XHRcdFxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdHJpbmdUb1JlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh0aGlzLmN1cnJlbnRSZWNvcmQuYXR0cmlidXRlcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0aWYgKG9wdGlvbnMuc2x1ZyAmJiB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnRSZWNvcmQgPSB0aGlzLmNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XG5cdFx0fVxuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZUhlYWRlcicsIHtcblx0XHRcdHByZXZMaW5rOiB0aGlzLnByZXZSb3V0ZSgpLFxuXHRcdFx0bmV4dExpbms6IHRoaXMubmV4dFJvdXRlKClcblx0XHR9KTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH0sXG5cdGFkZFN0dWJzOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHZhciBpLHJlc3BvbnNlID0gYXJ0aWNsZVN0dWJzO1xuXHRcdGZvciAoaSA9IHJlc3BvbnNlLnBvc3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgcmVjb3JkID0gcmVzcG9uc2UucG9zdHNbaV07XG5cdFx0XHRpZiAoIWNvbGxlY3Rpb24ud2hlcmUoe0lEOiByZWNvcmQuSUR9KS5sZW5ndGgpIHtcblx0XHRcdFx0Y29sbGVjdGlvbi5hZGQocmVjb3JkKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0bmV4dFJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHZhciB0YXJnZXRJbmRleCA9ICh0aGlzLnBvc2l0aW9uICsxID4gY29sbGVjdGlvbi5sZW5ndGggLTEpPyAgMCA6IHRoaXMucG9zaXRpb24gKyAxO1xuXHRcdHZhciBuZXh0U2x1ZyA9IGNvbGxlY3Rpb24uYXQodGFyZ2V0SW5kZXgpLmdldCgnc2x1ZycpO1xuXHRcdHJldHVybiAnIy9ibG9nLycgKyBuZXh0U2x1Zztcblx0fSxcblx0cHJldlJvdXRlOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHZhciB0YXJnZXRJbmRleCA9ICh0aGlzLnBvc2l0aW9uIC0xIDwgMCkgPyBjb2xsZWN0aW9uLmxlbmd0aCAtMSA6IHRoaXMucG9zaXRpb24gLSAxO1xuXHRcdHZhciBwcmV2U2x1ZyA9IGNvbGxlY3Rpb24uYXQodGFyZ2V0SW5kZXgpLmdldCgnc2x1ZycpO1xuXHRcdHJldHVybiAnIy9ibG9nLycgKyBwcmV2U2x1Zztcblx0fSxcblx0Y2hlY2tTbHVnOiBmdW5jdGlvbihzbHVnKXtcblx0XHRyZXR1cm4gKHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogc2x1Z30pLmxlbmd0aCA+PSAxKTtcblx0fSxcblx0ZGVmYXVsdFNsdWc6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudFJlY29yZCA/IHRoaXMuY3VycmVudFJlY29yZC5nZXQoJ3NsdWcnKSA6IHRoaXMuY29sbGVjdGlvbi5maXJzdCgpLmdldCgnc2x1ZycpO1xuXHR9LFxuXHRkZWZhdWx0Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0cmV0dXJuICcvYmxvZy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTtcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9ICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpPyB7fSA6IG9wdGlvbnM7XG5cdFx0dGhpcy5yZW5kZXIob3B0aW9ucyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cblx0fSxcblx0dGVtcGxhdGU6ICc/Jyxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMuanMnKTtcbnZhciBoZWFkZXJWaWV3ID0gcmVxdWlyZSgnLi91aS9oZWFkZXIuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJ2JvZHknLFxuXHRoZWFkZXI6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblx0XHQvLyBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnZpZXdTdGF0ZSkge1xuXHRcdC8vIFx0dGhpcy4kZWwuYWRkQ2xhc3Mob3B0aW9ucy52aWV3U3RhdGUpO1xuXHRcdC8vIH1cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0Y29uc29sZS5sb2codGhpcy4kZWwpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdnb1RvQ3VycmVudENvbnRlbnQnXG5cdFx0Ly8gJ2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCkge1xuXG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdFx0Ly8gdGhpcy5sYW5kaW5nSGFuZGxlcigpO1xuXHR9LFxuXHRzaG93SW50cm86IGZ1bmN0aW9uKCkge1xuXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKS5yZW1vdmVDbGFzcygnY29udGVudCcpO1xuXHR9LFxuICB1cGRhdGVIZWFkZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdHRoaXMuJGhlYWRlci5odG1sKHRlbXBsYXRlc1sndWkvaGVhZGVyJ10ob3B0aW9ucykpO1xuICB9LFxuICBnb1RvQ3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnLCAnIy9ibG9nL3NlY29uZC1wb3N0Jyk7XG4gIH0sXG5cbiAgLy8gbGFuZGluZ0hhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgLy8gXHRjb25zb2xlLmxvZygnZmlyc3Qgcm91dGUnKTtcbiAgLy8gXHR0aGlzLmxhbmRpbmdIYW5kbGVyID0gZnVuY3Rpb24oKXtcbiAgLy8gXHRcdGNvbnNvbGUubG9nKCdzZWNvbmQgcm91dGUnKTtcbiAgLy8gXHRcdCQoJy5wYWdlLXdyYXAnKS5yZW1vdmVDbGFzcygnYmxvY2stdHJhbnNpdGlvbicpO1xuICAvLyBcdFx0dGhpcy5sYW5kaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCl7fTtcbiAgLy8gXHR9O1xuICAvLyB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVIZWFkZXInLCB0aGlzLnVwZGF0ZUhlYWRlcik7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93Q29udGVudCcsIHRoaXMuc2hvd0NvbnRlbnQpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6c2hvd0ludHJvJywgdGhpcy5zaG93SW50cm8pO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRlbDogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcblx0XHR0aGlzLnJlbmRlcih7fSk7XG5cdFx0dGhpcy5zZXRMaXN0ZW5lcnMoKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR0aGlzLiRlbC5odG1sKHRoaXMudGVtcGxhdGUob3B0aW9ucykpO1xuXHR9LFxuXHRldmVudHM6IHtcblx0XHQnY2xpY2sgLnNob3ctY29udGVudCc6ICdzaG93Q29udGVudCcsXG5cdFx0J2NsaWNrIC5zaG93LWludHJvJzogJ3Nob3dJbnRybydcbiAgfSxcbiAgc2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG4gIH0sXG4gIHNob3dJbnRybzogZnVuY3Rpb24oKXtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0ludHJvJyk7XG4gIH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnVwZGF0ZScsIHRoaXMucmVuZGVyKTtcblx0fVxufSk7Il19
