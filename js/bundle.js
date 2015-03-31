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

  	this.router = new router(this);

    // use local storage to define he first view? fix this up at a higher level first?
    // $(this.mainPanel).html();
  }
};

module.exports = App;
},{"./router.js":8,"./templates.js":9,"./views/about.js":10,"./views/blog-post.js":11,"./views/contact.js":12,"./views/intro.js":13,"./views/master.js":14,"./views/project.js":15}],2:[function(require,module,exports){
module.exports = {"found":3,"posts":[{"ID":15,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-07T11:09:54+00:00","modified":"2015-03-29T13:27:20+00:00","title":"Third Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/07\/third-post\/","short_URL":"http:\/\/wp.me\/p50g34-f","content":"<h2>Lorizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. In hizzle pizzle dope dictumst. Shizzlin dizzle dapibizzle. Curabitizzle tellizzle crazy, pretizzle things, mattis izzle, fizzle vitae, nunc. We gonna chung suscipit. Integer yo mamma dope ghetto hizzle.<\/p>\n<h2>shut the shizzle<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p>Curabitizzle shut the shizzle up pimpin&#8217; gangsta nisi break it down mollizzle. Suspendisse potenti. Fo shizzle go to hizzle. I&#8217;m in the shizzle neque. Mofo orci. Crizzle mauris mauris, mofo funky fresh, feugiat sit amizzle, boofron izzle, pede. Pellentesque shizzle my nizzle crocodizzle. Vestibulizzle gangster mi, volutpizzle izzle, sagittis sed, fo shizzle sempizzle, sizzle. Check out this izzle ipsizzle. That&#8217;s the shizzle black felizzle mofo orci. Nizzle pizzle go to hizzle tellivizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle sodalizzle ornare. Mammasay mammasa mamma oo sa venenatizzle fizzle yo lacizzle. Yo things. Suspendisse sure placerat lacus. Sizzle dang ante. Nunc go to hizzle, leo eu dapibus hendrerizzle, shiz felizzle cool sizzle, break it down crazy magna that&#8217;s the shizzle luctus pede. Nam a mammasay mammasa mamma oo sa. Class crackalackin taciti crunk ad litora torquent bizzle black we gonna chung, away sheezy hymenaeos. Break yo neck, yall interdum, fizzle nizzle elementizzle nonummy, ass orci viverra leo, boofron mammasay mammasa mamma oo sa risizzle arcu my shizz sizzle.<\/p>\n","excerpt":"<p>Lorizzle &nbsp; Lorizzle phat dolizzle sizzle sizzle, ma nizzle adipiscing . Nullam sapien its fo rizzle, aliquet volutpizzle, suscipizzle break yo neck, yall, gravida vizzle, bizzle. Pellentesque eget tortizzle. Sed erizzle. izzle dolizzle i&#8217;m in the shizzle turpizzle tempizzle tempizzle. Things nibh izzle turpizzle. You son of a bizzle izzle tortor. Pellentesque ghetto shiz nisi. [&hellip;]<\/p>\n","slug":"third-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=15","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"e8c40e7b0109e4fa1935c694d8ec0c2f","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{},"attachment_count":0,"metadata":[{"id":"57","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/15\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":7,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-04T14:17:38+00:00","modified":"2015-03-29T13:25:43+00:00","title":"Second Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/04\/second-post\/","short_URL":"http:\/\/wp.me\/p50g34-7","content":"<h2>Lorem ipsum<\/h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi luctus sed elit ac luctus. Proin blandit, enim vitae egestas posuere, neque elit ultricies dui, vel mattis nibh enim ac lorem. Maecenas molestie nisl sit amet velit dictum lobortis. Aliquam erat volutpat.<\/p>\n<p><img class=\"aligncenter size-medium wp-image-8\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg?w=300&#038;h=249\" alt=\"jaba\" width=\"300\" height=\"249\" \/><\/p>\n<h2>Vivamus sagittis<\/h2>\n<p>Vivamus sagittis, diam in vehicula lobortis, sapien arcu mattis erat, vel aliquet sem urna et risus. Ut feugiat sapien vitae mi elementum laoreet. Suspendisse potenti. Aliquam erat nisl, aliquam pretium libero aliquet, sagittis eleifend nunc. In hac habitasse platea dictumst. Integer turpis augue, tincidunt dignissim mauris id, rhoncus dapibus purus. Maecenas et enim odio. Nullam massa metus, varius quis vehicula sed, pharetra mollis erat. In quis viverra velit. Vivamus placerat, est nec hendrerit varius, enim dui hendrerit magna, ut pulvinar nibh lorem vel lacus. Mauris a orci iaculis, hendrerit eros sed, gravida leo. In dictum mauris vel augue varius, ac ullamcorper nisl ornare. In eu posuere velit, ac fermentum arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed malesuada leo, at interdum elit.<\/p>\n","excerpt":"<p>&nbsp; Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet nec erat ac condimentum. Nulla vel rutrum ligula. Sed hendrerit interdum orci a posuere. Vivamus ut velit aliquet, mollis purus eget, iaculis nisl. Proin posuere malesuada ante. Proin auctor orci eros, ac molestie lorem dictum nec. Vestibulum sit amet erat est. Morbi [&hellip;]<\/p>\n","slug":"second-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=7","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":0},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"38a4f8693cb2d03fbebb35517b30aa66","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{},"categories":{"Category1":{"ID":28527,"name":"Category1","slug":"category1","description":"","post_count":1,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:category1\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"8":{"ID":8,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/jaba.jpg","date":"2014-09-04T14:16:41+00:00","post_ID":7,"file":"jaba.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"jaba","caption":"","description":"","alt":"","thumbnails":{},"height":415,"width":500,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/8\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7"}}}},"attachment_count":"1","metadata":[{"id":"31","key":"geo_public","value":"0"},{"id":"21","key":"_wpas_mess","value":"undefined"},{"id":"15","key":"_wpas_skip_facebook","value":"1"},{"id":"16","key":"_wpas_skip_google_plus","value":"1"},{"id":"18","key":"_wpas_skip_linkedin","value":"1"},{"id":"20","key":"_wpas_skip_path","value":"1"},{"id":"19","key":"_wpas_skip_tumblr","value":"1"},{"id":"17","key":"_wpas_skip_twitter","value":"1"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/7\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}},{"ID":3,"site_ID":73943374,"author":{"ID":47178662,"login":"spentaylor","email":false,"name":"spentaylor","nice_name":"spentaylor","URL":"http:\/\/ijustwanttotesttheapi.wordpress.com","avatar_URL":"https:\/\/1.gravatar.com\/avatar\/7ecd362d3c83414a8193329ab529e896?s=96&d=identicon&r=G","profile_URL":"http:\/\/en.gravatar.com\/spentaylor","site_ID":73943374},"date":"2014-09-01T11:45:09+00:00","modified":"2015-03-29T13:28:21+00:00","title":"First Post","URL":"https:\/\/ijustwanttotesttheapi.wordpress.com\/2014\/09\/01\/first-post\/","short_URL":"http:\/\/wp.me\/p50g34-3","content":"<h2 style=\"text-align:left;\">Hipster Ipsum<\/h2>\n<hr \/>\n<p>&nbsp;<\/p>\n<p style=\"text-align:left;\">Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel put a bird on it. Drinking vinegar food truck McSweeney&#8217;s roof party, salvia +1 tattooed DIY disrupt Helvetica. Narwhal kale chips tousled beard distillery Odd Future, PBR&amp;B 90&#8217;s selvage cardigan church-key scenester. Paleo sustainable actually Carles cray cliche dreamcatcher.<\/p>\n<p><a href=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg\"><img class=\"aligncenter size-medium wp-image-4\" src=\"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg?w=300&#038;h=219\" alt=\"subo\" width=\"300\" height=\"219\" \/><\/a><\/p>\n<p>Pitchfork actually readymade messenger bag, craft beer Pinterest scenester Thundercats sartorial keffiyeh hella twee organic Brooklyn. Shoreditch Thundercats art party sartorial tattooed flexitarian, actually direct trade PBR&amp;B before they sold out Etsy Vice. Selfies High Life roof party trust fund, swag shabby chic Godard freegan fap authentic asymmetrical. Retro hashtag Thundercats selfies hella direct trade. IPhone swag next level, gastropub chambray retro Etsy squid kitsch. Viral locavore Brooklyn plaid Carles. Church-key hella narwhal, YOLO ethnic scenester biodiesel Odd Future.<\/p>\n","excerpt":"<p>Hipster Ipsum &nbsp; Literally VHS food truck, mumblecore Echo Park kale chips post-ironic Helvetica freegan 90&#8217;s hashtag. Banjo selfies meh, Carles church-key selvage McSweeney&#8217;s. Scenester Shoreditch letterpress, organic master cleanse 8-bit YOLO ethnic ugh trust fund leggings fixie dreamcatcher messenger bag. Lo-fi leggings bicycle rights 3 wolf moon Echo Park, before they sold out biodiesel [&hellip;]<\/p>\n","slug":"first-post","guid":"http:\/\/ijustwanttotesttheapi.wordpress.com\/?p=3","status":"publish","sticky":false,"password":"","parent":false,"type":"post","discussion":{"comments_open":true,"comment_status":"open","pings_open":true,"ping_status":"open","comment_count":1},"likes_enabled":true,"sharing_enabled":true,"like_count":0,"i_like":0,"is_reblogged":0,"is_following":0,"global_ID":"54e4d86f54daa326a38050d0c4fe364a","featured_image":"","post_thumbnail":null,"format":"standard","geo":false,"menu_order":0,"page_template":"","publicize_URLs":[],"tags":{"kale chips":{"ID":6017001,"name":"kale chips","slug":"kale-chips","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:kale-chips\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"Odd Future":{"ID":16642545,"name":"Odd Future","slug":"odd-future","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:odd-future\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}},"YOLO":{"ID":711100,"name":"YOLO","slug":"yolo","description":"","post_count":1,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/tags\/slug:yolo\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"categories":{"Uncategorized":{"ID":1,"name":"Uncategorized","slug":"uncategorized","description":"","post_count":2,"parent":0,"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/categories\/slug:uncategorized\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374"}}}},"attachments":{"4":{"ID":4,"URL":"https:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","guid":"http:\/\/ijustwanttotesttheapi.files.wordpress.com\/2014\/09\/subo.jpg","date":"2014-09-01T11:42:43+00:00","post_ID":3,"file":"subo.jpg","mime_type":"image\/jpeg","extension":"jpg","title":"subo","caption":"","description":"","alt":"","thumbnails":{},"height":329,"width":450,"exif":{"aperture":0,"credit":"","camera":"","caption":"","created_timestamp":0,"copyright":"","focal_length":0,"iso":0,"shutter_speed":0,"title":"","orientation":0},"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/media\/4\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","parent":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3"}}}},"attachment_count":"1","metadata":[{"id":"8","key":"geo_public","value":"0"}],"meta":{"links":{"self":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3","help":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/help","site":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374","replies":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/replies\/","likes":"https:\/\/public-api.wordpress.com\/rest\/v1.1\/sites\/73943374\/posts\/3\/likes\/"}},"capabilities":{"publish_post":false,"delete_post":false,"edit_post":false}}]};
},{}],3:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.Collection.extend({
	
	// model: ArticleModel,
	// urlParams: {},
	position: 0,
	totalRecords: 0,
	isLoading: false,
  url: function(){
  	return 'http://public-api.wordpress.com/rest/v1.1/sites/ijustwanttotesttheapi.wordpress.com/posts';
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
},{}],5:[function(require,module,exports){
'use strict';

var app = require('./app.js');



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
		ID: 1,
		title: 'Snowriders Logo',
		slug: 'Snowriders-logo',
		stack: {
			graphics: ['Illustrator']
		},
		content: '<img src="assets/images/projects/snowriders.png" style="width:100%;"><p>During my time studying at Plymouth University I was involved with the lovely folks who made up the Plymouth Snowriders (The union\'s snow sports society). I was lucky enough to have good friends on the committee so never actually had to pay membership (shhhh...).<br>In my final year I had started teaching myself how to use Illustrator and decided to pay back the club by giving their logo a facelift.</p><p>I didn\'t want to venture too far away from the original so I used the same font (Arial, please forgive me!) and I re-drew the \'snowriders lady\' so that we would have it in a scalable format rather than just the heavily pixelated version that we already had.<br>I chose to take the one line \'snowriders\' and split this into two so that it would better fit on teeshirts and hoodies and chose a very bold look for easy recognition, the snowriders are a proud bunch!</p>'
	}, {
		ID: 2,
		title: 'Harry Potty',
		slug: 'harry-potty',
		stack: {
			js: ['jquery'],
			php: ['']
		},
		content: '<img src="assets/images/projects/harrypotty.png" style="width:100%;"><p>My dad is a bit of a clown, no really! He works as a children\'s entertainer so while I was getting started with learning PHP and JS I built a very basic website for him.</p><p>The website served only one purpose which was to provide a contact form for potential customers wanting to get in touch.<br>The code was pretty terrible... very basic PHP to serve up the site and send the form details with jQuery to validate on teh frontend.</p>'
	},{
		ID: 3,
		title: 'The Sauce',
		slug: 'the-sauce',
		stack: {
			js: [''],
			php: ['']
		},
		content: '<img src="assets/images/projects/sauce.png" style="width:100%;"><p>The reason I got started with learning to code was to set up an ecommerce site for \'The Sauce\', a brand that I was hoping to set up.<br>I had started creating designs for teeshirts and sweatshirts etc., bought a load of printing equipment and inks and needed to set up a channel a channel to sell the products that I would be creating.</p><p>Although there is certainly nothing groundbraking in this project I had set myself a few challenges that turned out to be quite tough at the time and helped me understand more about PHP, JS and coding in general.</p><h2>Product Listing</h2><hr><p>Rather than opt for a straight up list of product thumbnails I wanted to have sections that featured a number of thumbnails with a \'product focus\' panel that would show more detail of whichever product the user was currently hovering over.<br>Each of these panels would have an alternating layout in order to keep some balance down the page.<br>This was where I learned looping in PHP and was my first real challenge with javascript (Although my solution was terrible, crazy data attributes everwhere!)</p><h2>Product Lightbox</h2><hr><p>I didn\'t want to have the user leave the product listing page eahc time they wanted to view a product so I attempted to build out a light-box.<br>Although I did get this to work, the solution, again, lacked elegance. rather than performing an AJAX call to populate the lightbox, or render a template with a few pieces of product data, I relyed on the data attributes that I had rendered out on each thumbnail div.<br>Utterly terrible but very educational!</p>'
	},{
		ID: 4,
		title: 'Surf Tracking App Concept',
		slug: 'surf-tracking-app-concept',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/surfappconcept.png" style="width:100%;"><p>During my time studying at Bitmaker Labs in Toronto, myself and a couple of classmates decided to enter the maker edition of start-up weekend.</p><p>I had had an idea a year or so before hand whilst finishing up at university to create housing for a smartphone that could be attached to a surfboard in order to collect data about the surfer\'s performance during their session, allowing them to review the data later. So we went about prototyping a device (in place of the smartphone housing) and the web app that would display the data.</p><p>As this was more of a concept project than an actual attempt at building a product, I added some functionality that wouldn\'t really be achievable, such as real-time wave-to-wave updates to the surfers profile, where each wave would be plotted on a local map with it\'s speed and distance shown along side.</p><p>We didn\'t win any prizes but didn\'t do terrbily either as we were somewhere in the top 9 out of 40+ teams.</p>'
	},{
		ID: 5,
		title: 'RPG adventure game',
		slug: 'rpg-adventure-game',
		stack: {
			js: ['jQuery'],
			ruby: ['Ruby on Rails']
		},
		content: '<img src="assets/images/projects/rpg.png" style="width:100%;"><p>For my final project at Bitmaker Labs, I decided to build an RPG browser game that allows players to create a character, battle NPCs and other players, collect gold &amp; items, level up and keep track of their rank compared to other players.</p><p>This was hard work, especially due to the limited time frame which involved a few ~18 hour sessions and one 36 hour session! (We had roughly two weeks to hack on our final projects). However, as much as it was hardwork it was a lot of fun!</p><p>I learned a heap about Ruby on Rails in this time, particularly since there were some complex relationships going on between the different resources and entities in this game.</p><p>The project has since been laid to rest but I do still aim to find the time to re-build it with some extra features, such as using websockets and HTML5 canvas! - it\'d be a fun side project to have on the go!</p>'
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
  		$('body').addClass('intro');
  		
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

this["JST"]["blog-post"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"grid-container\">\n	\n	<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	<div class=\"grid-row\">\n		<div class=\"small-12\">\n			<div class=\"panel\">\n				\n				";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n	</div>\n	\n</div>";
},"useData":true});

this["JST"]["contact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"grid-container about\">\n	<h2>contact</h2>\n</div>";
  },"useData":true});

this["JST"]["intro"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul class=\"social-icons\">\n	<li><a href=\"www.linkedin.com/\"><i class=\"fa fa-linkedin\"></i></a></li>\n	<li><a href=\"www.twitter.com/\"><i class=\"fa fa-twitter\"></i></a></li>\n	<li><a href=\"www.github.com/\"><i class=\"fa fa-github\"></i></a></li>\n	<li><a href=\"www.dribbble.com/\"><i class=\"fa fa-dribbble\"></i></a></li>\n</ul>\n\n<h1>Hi! I'm Spen Taylor</h1>\n\n\n<a href=\"#/about\" class=\"about\">about</a>\n<a href=\"#/blog\" class=\"blog\">blog</a>\n<a href=\"#/projects\" class=\"projects\">projects</a>\n<a href=\"#/contact\" class=\"contact\">contact</a>\n\n<p style=\"font-size: .85em;\">Hey! I'm still working on this site, so please bare with me!<br>So far it only works properly in Chrome... but that'll be fixed soon enough :)</p>";
},"useData":true});

this["JST"]["master"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " <div class=\"page-wrap\">\n	<div class=\"landing\">\n    <div class=\"cell\">\n  		<div class=\"landing-content\" id=\"landing\">\n        ";
  stack1 = ((helper = (helper = helpers.introContent || (depth0 != null ? depth0.introContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"introContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  		</div>\n    </div>\n	</div>\n  <div class=\"content-wrapper\">\n    <div class=\"header\">\n\n    </div>    	 \n  	<div class=\"main\">\n      <div class=\"content\" id=\"main\">";
  stack1 = ((helper = (helper = helpers.mainContent || (depth0 != null ? depth0.mainContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"mainContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n\n      <div class=\"content transitioner\"></div>\n  	</div>\n\n  </div>\n</div>";
},"useData":true});

this["JST"]["project"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"grid-container\">\n	\n	<h2 class=\"title\">"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\n	<ul></ul>\n	<div class=\"grid-row\">\n		<div class=\"small-12\">\n			<div class=\"panel\">\n				\n				";
  stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n		</div>\n	</div>\n	\n</div>";
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
  buffer += ">\n      <div class=\"icon\">\n        <i class=\"fa fa-chevron-left\"></i>\n      </div>\n    </a>\n    \n    <a href=\"#\">\n      <div class=\"icon menu\">\n        <i class=\"fa fa-bars fa-2x show-intro\"></i>\n      </div>\n    </a>\n  \n    <a ";
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

		
		this.$el.html(this.template(options));

		window.Backbone.trigger('ui:updatePrev');
		window.Backbone.trigger('ui:updateNext');
		window.Backbone.trigger('ui:showContent');
		window.Backbone.trigger('page:setNamespace', this.namespace );	

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

		if (false) {
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

		window.blogC = collection;

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
		window.Backbone.trigger('page:setNamespace', this.namespace );	

		
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
		return collection.at((this.position +1 > collection.length -1)?  false : this.position + 1);
	},
	getPrevModel: function(){
		var collection = this.collection;
		return collection.at((this.position -1 < 0) ? false : this.position - 1);
	},
	nextRoute: function(){
		var model = this.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
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
		window.Backbone.trigger('page:setNamespace', this.namespace );

		return this;
	},
	setListeners: function(){
		// 
	}
});
},{}],13:[function(require,module,exports){
'use strict';

module.exports = window.Backbone.View.extend({
	namespace: 'intro',
	initialize: function(options){
		options = options || {};
		this.template = options.template;
		this.render(options);
	},
	render: function(options){
		options = options;
		console.log('rendering intro');
		this.$el.html(this.template());
		window.Backbone.trigger('page:setNamespace', this.namespace);

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
	setNamespace: function(namespace) {	
		document.body.className = $.trim(
			document.body.className.split(' ').filter(function(c) { 
				return c.lastIndexOf('page-', 0) !== 0; 
			}).join(' ') + ' page-' +namespace );
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
		this.listenTo(window.Backbone, 'page:setNamespace', this.setNamespace);

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
		window.Backbone.trigger('page:setNamespace', this.namespace );
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
		return collection.at((this.position +1 > collection.length -1)?  false : this.position + 1);
	},
	getPrevModel: function(){
		var collection = this.collection;
		return collection.at((this.position -1 < 0) ? false : this.position - 1);
	},
	nextRoute: function(){
		var model = this.getNextModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
	},
	prevRoute: function(){
		var model = this.getPrevModel();
		return model? '#/'+ this.namespace +'/' + model.get('slug') : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIiwiYXBwL2pzL2Jsb2ctcG9zdC1zdHVicy5qcyIsImFwcC9qcy9jb2xsZWN0aW9ucy9ibG9nLXBvc3RzLmpzIiwiYXBwL2pzL2NvbGxlY3Rpb25zL3Byb2plY3RzLmpzIiwiYXBwL2pzL21haW4uanMiLCJhcHAvanMvbW9kdWxlcy9wYWdlLXRyYW5zaXRpb25zLmpzIiwiYXBwL2pzL3Byb2plY3RzLXN0dWJzLmpzIiwiYXBwL2pzL3JvdXRlci5qcyIsImFwcC9qcy90ZW1wbGF0ZXMuanMiLCJhcHAvanMvdmlld3MvYWJvdXQuanMiLCJhcHAvanMvdmlld3MvYmxvZy1wb3N0LmpzIiwiYXBwL2pzL3ZpZXdzL2NvbnRhY3QuanMiLCJhcHAvanMvdmlld3MvaW50cm8uanMiLCJhcHAvanMvdmlld3MvbWFzdGVyLmpzIiwiYXBwL2pzL3ZpZXdzL3Byb2plY3QuanMiLCJhcHAvanMvdmlld3MvdWkvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJvdXRlciA9IHJlcXVpcmUoJy4vcm91dGVyLmpzJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi90ZW1wbGF0ZXMuanMnKTtcblxuXG52YXIgQXBwID0ge1xuICBpbnRyb1BhbmVsOiAnI2xhbmRpbmcnLFxuICBtYWluUGFuZWw6ICcubWFpbiAuY29udGVudCcsXG4gIHRyYW5zaXRpb25QYW5lbDogJy5tYWluIC50cmFuc2l0aW9uLWNvbnRlbnQnLFxuXG4gIHRlbXBsYXRlczogdGVtcGxhdGVzLFxuXG4gIHZpZXdzOiB7XG4gICAgbWFzdGVyOiByZXF1aXJlKCcuL3ZpZXdzL21hc3Rlci5qcycpLFxuXG4gICAgaW50cm86IHJlcXVpcmUoJy4vdmlld3MvaW50cm8uanMnKSxcbiAgICBibG9nOiByZXF1aXJlKCcuL3ZpZXdzL2Jsb2ctcG9zdC5qcycpLFxuICAgIHByb2plY3RzOiByZXF1aXJlKCcuL3ZpZXdzL3Byb2plY3QuanMnKSxcbiAgICBjb250YWN0OiByZXF1aXJlKCcuL3ZpZXdzL2NvbnRhY3QuanMnKSxcbiAgICBhYm91dDogcmVxdWlyZSgnLi92aWV3cy9hYm91dC5qcycpXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG4gIFx0b3B0aW9ucyA9IG9wdGlvbnM7IC8vIGxpbnRlciAtX18tXG4gICAgLy8gdmFyIHRlbXBsYXRlcyA9IHRoaXMudGVtcGxhdGVzO1xuICBcdHRoaXMuJGludHJvUGFuZWwgPSAkKHRoaXMuaW50cm9QYW5lbCk7XG4gIFx0dGhpcy4kbWFpblBhbmVsID0gJCh0aGlzLm1haW5QYW5lbCk7XG5cbiAgICAvLyBpcyBpdCB3b3J0aCBkZWZpbmluZyB0aGUgdG9wIHBhbmVsIGNvbnRlbnQgaGVyZT8gd2lsbCBpdCBldmVyIGNoYW5nZT8gY291bGQgYmUgdXNlZCBhcyBhbiBpbmRleCBwYWdlP1xuICAgIHRoaXMuJGludHJvUGFuZWwuaHRtbCh0ZW1wbGF0ZXMuaW50cm8oKSk7XG4gICAgLy8gdGhpcy52aWV3cy51aS5oZWFkZXIgPSBuZXcgdGhpcy52aWV3cy51aS5oZWFkZXIoe3RlbXBsYXRlOiB0ZW1wbGF0ZXNbJ3VpL2hlYWRlciddfSk7XG5cbiAgICB0aGlzLnZpZXdzLm1hc3RlciA9IG5ldyB0aGlzLnZpZXdzLm1hc3RlcigpO1xuXG4gIFx0dGhpcy5yb3V0ZXIgPSBuZXcgcm91dGVyKHRoaXMpO1xuXG4gICAgLy8gdXNlIGxvY2FsIHN0b3JhZ2UgdG8gZGVmaW5lIGhlIGZpcnN0IHZpZXc/IGZpeCB0aGlzIHVwIGF0IGEgaGlnaGVyIGxldmVsIGZpcnN0P1xuICAgIC8vICQodGhpcy5tYWluUGFuZWwpLmh0bWwoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmb3VuZFwiOjMsXCJwb3N0c1wiOlt7XCJJRFwiOjE1LFwic2l0ZV9JRFwiOjczOTQzMzc0LFwiYXV0aG9yXCI6e1wiSURcIjo0NzE3ODY2MixcImxvZ2luXCI6XCJzcGVudGF5bG9yXCIsXCJlbWFpbFwiOmZhbHNlLFwibmFtZVwiOlwic3BlbnRheWxvclwiLFwibmljZV9uYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJVUkxcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cIixcImF2YXRhcl9VUkxcIjpcImh0dHBzOlxcL1xcLzEuZ3JhdmF0YXIuY29tXFwvYXZhdGFyXFwvN2VjZDM2MmQzYzgzNDE0YTgxOTMzMjlhYjUyOWU4OTY/cz05NiZkPWlkZW50aWNvbiZyPUdcIixcInByb2ZpbGVfVVJMXCI6XCJodHRwOlxcL1xcL2VuLmdyYXZhdGFyLmNvbVxcL3NwZW50YXlsb3JcIixcInNpdGVfSURcIjo3Mzk0MzM3NH0sXCJkYXRlXCI6XCIyMDE0LTA5LTA3VDExOjA5OjU0KzAwOjAwXCIsXCJtb2RpZmllZFwiOlwiMjAxNS0wMy0yOVQxMzoyNzoyMCswMDowMFwiLFwidGl0bGVcIjpcIlRoaXJkIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wN1xcL3RoaXJkLXBvc3RcXC9cIixcInNob3J0X1VSTFwiOlwiaHR0cDpcXC9cXC93cC5tZVxcL3A1MGczNC1mXCIsXCJjb250ZW50XCI6XCI8aDI+TG9yaXp6bGU8XFwvaDI+XFxuPGhyIFxcLz5cXG48cD4mbmJzcDs8XFwvcD5cXG48cD5Mb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBJbiBoaXp6bGUgcGl6emxlIGRvcGUgZGljdHVtc3QuIFNoaXp6bGluIGRpenpsZSBkYXBpYml6emxlLiBDdXJhYml0aXp6bGUgdGVsbGl6emxlIGNyYXp5LCBwcmV0aXp6bGUgdGhpbmdzLCBtYXR0aXMgaXp6bGUsIGZpenpsZSB2aXRhZSwgbnVuYy4gV2UgZ29ubmEgY2h1bmcgc3VzY2lwaXQuIEludGVnZXIgeW8gbWFtbWEgZG9wZSBnaGV0dG8gaGl6emxlLjxcXC9wPlxcbjxoMj5zaHV0IHRoZSBzaGl6emxlPFxcL2gyPlxcbjxociBcXC8+XFxuPHA+Jm5ic3A7PFxcL3A+XFxuPHA+Q3VyYWJpdGl6emxlIHNodXQgdGhlIHNoaXp6bGUgdXAgcGltcGluJiM4MjE3OyBnYW5nc3RhIG5pc2kgYnJlYWsgaXQgZG93biBtb2xsaXp6bGUuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEZvIHNoaXp6bGUgZ28gdG8gaGl6emxlLiBJJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgbmVxdWUuIE1vZm8gb3JjaS4gQ3JpenpsZSBtYXVyaXMgbWF1cmlzLCBtb2ZvIGZ1bmt5IGZyZXNoLCBmZXVnaWF0IHNpdCBhbWl6emxlLCBib29mcm9uIGl6emxlLCBwZWRlLiBQZWxsZW50ZXNxdWUgc2hpenpsZSBteSBuaXp6bGUgY3JvY29kaXp6bGUuIFZlc3RpYnVsaXp6bGUgZ2FuZ3N0ZXIgbWksIHZvbHV0cGl6emxlIGl6emxlLCBzYWdpdHRpcyBzZWQsIGZvIHNoaXp6bGUgc2VtcGl6emxlLCBzaXp6bGUuIENoZWNrIG91dCB0aGlzIGl6emxlIGlwc2l6emxlLiBUaGF0JiM4MjE3O3MgdGhlIHNoaXp6bGUgYmxhY2sgZmVsaXp6bGUgbW9mbyBvcmNpLiBOaXp6bGUgcGl6emxlIGdvIHRvIGhpenpsZSB0ZWxsaXZpenpsZSBmbyBzaGl6emxlIG1haCBuaXp6bGUgZm8gcml6emxlLCBtYWggaG9tZSBnLWRpenpsZSBzb2RhbGl6emxlIG9ybmFyZS4gTWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSB2ZW5lbmF0aXp6bGUgZml6emxlIHlvIGxhY2l6emxlLiBZbyB0aGluZ3MuIFN1c3BlbmRpc3NlIHN1cmUgcGxhY2VyYXQgbGFjdXMuIFNpenpsZSBkYW5nIGFudGUuIE51bmMgZ28gdG8gaGl6emxlLCBsZW8gZXUgZGFwaWJ1cyBoZW5kcmVyaXp6bGUsIHNoaXogZmVsaXp6bGUgY29vbCBzaXp6bGUsIGJyZWFrIGl0IGRvd24gY3JhenkgbWFnbmEgdGhhdCYjODIxNztzIHRoZSBzaGl6emxlIGx1Y3R1cyBwZWRlLiBOYW0gYSBtYW1tYXNheSBtYW1tYXNhIG1hbW1hIG9vIHNhLiBDbGFzcyBjcmFja2FsYWNraW4gdGFjaXRpIGNydW5rIGFkIGxpdG9yYSB0b3JxdWVudCBiaXp6bGUgYmxhY2sgd2UgZ29ubmEgY2h1bmcsIGF3YXkgc2hlZXp5IGh5bWVuYWVvcy4gQnJlYWsgeW8gbmVjaywgeWFsbCBpbnRlcmR1bSwgZml6emxlIG5penpsZSBlbGVtZW50aXp6bGUgbm9udW1teSwgYXNzIG9yY2kgdml2ZXJyYSBsZW8sIGJvb2Zyb24gbWFtbWFzYXkgbWFtbWFzYSBtYW1tYSBvbyBzYSByaXNpenpsZSBhcmN1IG15IHNoaXp6IHNpenpsZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkxvcml6emxlICZuYnNwOyBMb3JpenpsZSBwaGF0IGRvbGl6emxlIHNpenpsZSBzaXp6bGUsIG1hIG5penpsZSBhZGlwaXNjaW5nIC4gTnVsbGFtIHNhcGllbiBpdHMgZm8gcml6emxlLCBhbGlxdWV0IHZvbHV0cGl6emxlLCBzdXNjaXBpenpsZSBicmVhayB5byBuZWNrLCB5YWxsLCBncmF2aWRhIHZpenpsZSwgYml6emxlLiBQZWxsZW50ZXNxdWUgZWdldCB0b3J0aXp6bGUuIFNlZCBlcml6emxlLiBpenpsZSBkb2xpenpsZSBpJiM4MjE3O20gaW4gdGhlIHNoaXp6bGUgdHVycGl6emxlIHRlbXBpenpsZSB0ZW1waXp6bGUuIFRoaW5ncyBuaWJoIGl6emxlIHR1cnBpenpsZS4gWW91IHNvbiBvZiBhIGJpenpsZSBpenpsZSB0b3J0b3IuIFBlbGxlbnRlc3F1ZSBnaGV0dG8gc2hpeiBuaXNpLiBbJmhlbGxpcDtdPFxcL3A+XFxuXCIsXCJzbHVnXCI6XCJ0aGlyZC1wb3N0XCIsXCJndWlkXCI6XCJodHRwOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS53b3JkcHJlc3MuY29tXFwvP3A9MTVcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MH0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiZThjNDBlN2IwMTA5ZTRmYTE5MzVjNjk0ZDhlYzBjMmZcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e30sXCJjYXRlZ29yaWVzXCI6e1wiVW5jYXRlZ29yaXplZFwiOntcIklEXCI6MSxcIm5hbWVcIjpcIlVuY2F0ZWdvcml6ZWRcIixcInNsdWdcIjpcInVuY2F0ZWdvcml6ZWRcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoyLFwicGFyZW50XCI6MCxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL2NhdGVnb3JpZXNcXC9zbHVnOnVuY2F0ZWdvcml6ZWRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOnt9LFwiYXR0YWNobWVudF9jb3VudFwiOjAsXCJtZXRhZGF0YVwiOlt7XCJpZFwiOlwiNTdcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwiLFwicmVwbGllc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8xNVxcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzE1XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjcsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDRUMTQ6MTc6MzgrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI1OjQzKzAwOjAwXCIsXCJ0aXRsZVwiOlwiU2Vjb25kIFBvc3RcIixcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC8wNFxcL3NlY29uZC1wb3N0XFwvXCIsXCJzaG9ydF9VUkxcIjpcImh0dHA6XFwvXFwvd3AubWVcXC9wNTBnMzQtN1wiLFwiY29udGVudFwiOlwiPGgyPkxvcmVtIGlwc3VtPFxcL2gyPlxcbjxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIENyYXMgaW1wZXJkaWV0IG5lYyBlcmF0IGFjIGNvbmRpbWVudHVtLiBOdWxsYSB2ZWwgcnV0cnVtIGxpZ3VsYS4gU2VkIGhlbmRyZXJpdCBpbnRlcmR1bSBvcmNpIGEgcG9zdWVyZS4gVml2YW11cyB1dCB2ZWxpdCBhbGlxdWV0LCBtb2xsaXMgcHVydXMgZWdldCwgaWFjdWxpcyBuaXNsLiBQcm9pbiBwb3N1ZXJlIG1hbGVzdWFkYSBhbnRlLiBQcm9pbiBhdWN0b3Igb3JjaSBlcm9zLCBhYyBtb2xlc3RpZSBsb3JlbSBkaWN0dW0gbmVjLiBWZXN0aWJ1bHVtIHNpdCBhbWV0IGVyYXQgZXN0LiBNb3JiaSBsdWN0dXMgc2VkIGVsaXQgYWMgbHVjdHVzLiBQcm9pbiBibGFuZGl0LCBlbmltIHZpdGFlIGVnZXN0YXMgcG9zdWVyZSwgbmVxdWUgZWxpdCB1bHRyaWNpZXMgZHVpLCB2ZWwgbWF0dGlzIG5pYmggZW5pbSBhYyBsb3JlbS4gTWFlY2VuYXMgbW9sZXN0aWUgbmlzbCBzaXQgYW1ldCB2ZWxpdCBkaWN0dW0gbG9ib3J0aXMuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC48XFwvcD5cXG48cD48aW1nIGNsYXNzPVxcXCJhbGlnbmNlbnRlciBzaXplLW1lZGl1bSB3cC1pbWFnZS04XFxcIiBzcmM9XFxcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGc/dz0zMDAmIzAzODtoPTI0OVxcXCIgYWx0PVxcXCJqYWJhXFxcIiB3aWR0aD1cXFwiMzAwXFxcIiBoZWlnaHQ9XFxcIjI0OVxcXCIgXFwvPjxcXC9wPlxcbjxoMj5WaXZhbXVzIHNhZ2l0dGlzPFxcL2gyPlxcbjxwPlZpdmFtdXMgc2FnaXR0aXMsIGRpYW0gaW4gdmVoaWN1bGEgbG9ib3J0aXMsIHNhcGllbiBhcmN1IG1hdHRpcyBlcmF0LCB2ZWwgYWxpcXVldCBzZW0gdXJuYSBldCByaXN1cy4gVXQgZmV1Z2lhdCBzYXBpZW4gdml0YWUgbWkgZWxlbWVudHVtIGxhb3JlZXQuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEFsaXF1YW0gZXJhdCBuaXNsLCBhbGlxdWFtIHByZXRpdW0gbGliZXJvIGFsaXF1ZXQsIHNhZ2l0dGlzIGVsZWlmZW5kIG51bmMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBJbnRlZ2VyIHR1cnBpcyBhdWd1ZSwgdGluY2lkdW50IGRpZ25pc3NpbSBtYXVyaXMgaWQsIHJob25jdXMgZGFwaWJ1cyBwdXJ1cy4gTWFlY2VuYXMgZXQgZW5pbSBvZGlvLiBOdWxsYW0gbWFzc2EgbWV0dXMsIHZhcml1cyBxdWlzIHZlaGljdWxhIHNlZCwgcGhhcmV0cmEgbW9sbGlzIGVyYXQuIEluIHF1aXMgdml2ZXJyYSB2ZWxpdC4gVml2YW11cyBwbGFjZXJhdCwgZXN0IG5lYyBoZW5kcmVyaXQgdmFyaXVzLCBlbmltIGR1aSBoZW5kcmVyaXQgbWFnbmEsIHV0IHB1bHZpbmFyIG5pYmggbG9yZW0gdmVsIGxhY3VzLiBNYXVyaXMgYSBvcmNpIGlhY3VsaXMsIGhlbmRyZXJpdCBlcm9zIHNlZCwgZ3JhdmlkYSBsZW8uIEluIGRpY3R1bSBtYXVyaXMgdmVsIGF1Z3VlIHZhcml1cywgYWMgdWxsYW1jb3JwZXIgbmlzbCBvcm5hcmUuIEluIGV1IHBvc3VlcmUgdmVsaXQsIGFjIGZlcm1lbnR1bSBhcmN1LiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIE51bGxhbSBzZWQgbWFsZXN1YWRhIGxlbywgYXQgaW50ZXJkdW0gZWxpdC48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPiZuYnNwOyBMb3JlbSBpcHN1bSBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBDcmFzIGltcGVyZGlldCBuZWMgZXJhdCBhYyBjb25kaW1lbnR1bS4gTnVsbGEgdmVsIHJ1dHJ1bSBsaWd1bGEuIFNlZCBoZW5kcmVyaXQgaW50ZXJkdW0gb3JjaSBhIHBvc3VlcmUuIFZpdmFtdXMgdXQgdmVsaXQgYWxpcXVldCwgbW9sbGlzIHB1cnVzIGVnZXQsIGlhY3VsaXMgbmlzbC4gUHJvaW4gcG9zdWVyZSBtYWxlc3VhZGEgYW50ZS4gUHJvaW4gYXVjdG9yIG9yY2kgZXJvcywgYWMgbW9sZXN0aWUgbG9yZW0gZGljdHVtIG5lYy4gVmVzdGlidWx1bSBzaXQgYW1ldCBlcmF0IGVzdC4gTW9yYmkgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwic2Vjb25kLXBvc3RcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLndvcmRwcmVzcy5jb21cXC8/cD03XCIsXCJzdGF0dXNcIjpcInB1Ymxpc2hcIixcInN0aWNreVwiOmZhbHNlLFwicGFzc3dvcmRcIjpcIlwiLFwicGFyZW50XCI6ZmFsc2UsXCJ0eXBlXCI6XCJwb3N0XCIsXCJkaXNjdXNzaW9uXCI6e1wiY29tbWVudHNfb3BlblwiOnRydWUsXCJjb21tZW50X3N0YXR1c1wiOlwib3BlblwiLFwicGluZ3Nfb3BlblwiOnRydWUsXCJwaW5nX3N0YXR1c1wiOlwib3BlblwiLFwiY29tbWVudF9jb3VudFwiOjB9LFwibGlrZXNfZW5hYmxlZFwiOnRydWUsXCJzaGFyaW5nX2VuYWJsZWRcIjp0cnVlLFwibGlrZV9jb3VudFwiOjAsXCJpX2xpa2VcIjowLFwiaXNfcmVibG9nZ2VkXCI6MCxcImlzX2ZvbGxvd2luZ1wiOjAsXCJnbG9iYWxfSURcIjpcIjM4YTRmODY5M2NiMmQwM2ZiZWJiMzU1MTdiMzBhYTY2XCIsXCJmZWF0dXJlZF9pbWFnZVwiOlwiXCIsXCJwb3N0X3RodW1ibmFpbFwiOm51bGwsXCJmb3JtYXRcIjpcInN0YW5kYXJkXCIsXCJnZW9cIjpmYWxzZSxcIm1lbnVfb3JkZXJcIjowLFwicGFnZV90ZW1wbGF0ZVwiOlwiXCIsXCJwdWJsaWNpemVfVVJMc1wiOltdLFwidGFnc1wiOnt9LFwiY2F0ZWdvcmllc1wiOntcIkNhdGVnb3J5MVwiOntcIklEXCI6Mjg1MjcsXCJuYW1lXCI6XCJDYXRlZ29yeTFcIixcInNsdWdcIjpcImNhdGVnb3J5MVwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjEsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6Y2F0ZWdvcnkxXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9jYXRlZ29yaWVzXFwvc2x1ZzpjYXRlZ29yeTFcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fX0sXCJhdHRhY2htZW50c1wiOntcIjhcIjp7XCJJRFwiOjgsXCJVUkxcIjpcImh0dHBzOlxcL1xcL2lqdXN0d2FudHRvdGVzdHRoZWFwaS5maWxlcy53b3JkcHJlc3MuY29tXFwvMjAxNFxcLzA5XFwvamFiYS5qcGdcIixcImd1aWRcIjpcImh0dHA6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9qYWJhLmpwZ1wiLFwiZGF0ZVwiOlwiMjAxNC0wOS0wNFQxNDoxNjo0MSswMDowMFwiLFwicG9zdF9JRFwiOjcsXCJmaWxlXCI6XCJqYWJhLmpwZ1wiLFwibWltZV90eXBlXCI6XCJpbWFnZVxcL2pwZWdcIixcImV4dGVuc2lvblwiOlwianBnXCIsXCJ0aXRsZVwiOlwiamFiYVwiLFwiY2FwdGlvblwiOlwiXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJhbHRcIjpcIlwiLFwidGh1bWJuYWlsc1wiOnt9LFwiaGVpZ2h0XCI6NDE1LFwid2lkdGhcIjo1MDAsXCJleGlmXCI6e1wiYXBlcnR1cmVcIjowLFwiY3JlZGl0XCI6XCJcIixcImNhbWVyYVwiOlwiXCIsXCJjYXB0aW9uXCI6XCJcIixcImNyZWF0ZWRfdGltZXN0YW1wXCI6MCxcImNvcHlyaWdodFwiOlwiXCIsXCJmb2NhbF9sZW5ndGhcIjowLFwiaXNvXCI6MCxcInNodXR0ZXJfc3BlZWRcIjowLFwidGl0bGVcIjpcIlwiLFwib3JpZW50YXRpb25cIjowfSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL21lZGlhXFwvOFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC84XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJwYXJlbnRcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wifX19fSxcImF0dGFjaG1lbnRfY291bnRcIjpcIjFcIixcIm1ldGFkYXRhXCI6W3tcImlkXCI6XCIzMVwiLFwia2V5XCI6XCJnZW9fcHVibGljXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJpZFwiOlwiMjFcIixcImtleVwiOlwiX3dwYXNfbWVzc1wiLFwidmFsdWVcIjpcInVuZGVmaW5lZFwifSx7XCJpZFwiOlwiMTVcIixcImtleVwiOlwiX3dwYXNfc2tpcF9mYWNlYm9va1wiLFwidmFsdWVcIjpcIjFcIn0se1wiaWRcIjpcIjE2XCIsXCJrZXlcIjpcIl93cGFzX3NraXBfZ29vZ2xlX3BsdXNcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxOFwiLFwia2V5XCI6XCJfd3Bhc19za2lwX2xpbmtlZGluXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMjBcIixcImtleVwiOlwiX3dwYXNfc2tpcF9wYXRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJpZFwiOlwiMTlcIixcImtleVwiOlwiX3dwYXNfc2tpcF90dW1ibHJcIixcInZhbHVlXCI6XCIxXCJ9LHtcImlkXCI6XCIxN1wiLFwia2V5XCI6XCJfd3Bhc19za2lwX3R3aXR0ZXJcIixcInZhbHVlXCI6XCIxXCJ9XSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvN1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvaGVscFwiLFwic2l0ZVwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XCIsXCJyZXBsaWVzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzdcXC9yZXBsaWVzXFwvXCIsXCJsaWtlc1wiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC83XFwvbGlrZXNcXC9cIn19LFwiY2FwYWJpbGl0aWVzXCI6e1wicHVibGlzaF9wb3N0XCI6ZmFsc2UsXCJkZWxldGVfcG9zdFwiOmZhbHNlLFwiZWRpdF9wb3N0XCI6ZmFsc2V9fSx7XCJJRFwiOjMsXCJzaXRlX0lEXCI6NzM5NDMzNzQsXCJhdXRob3JcIjp7XCJJRFwiOjQ3MTc4NjYyLFwibG9naW5cIjpcInNwZW50YXlsb3JcIixcImVtYWlsXCI6ZmFsc2UsXCJuYW1lXCI6XCJzcGVudGF5bG9yXCIsXCJuaWNlX25hbWVcIjpcInNwZW50YXlsb3JcIixcIlVSTFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVwiLFwiYXZhdGFyX1VSTFwiOlwiaHR0cHM6XFwvXFwvMS5ncmF2YXRhci5jb21cXC9hdmF0YXJcXC83ZWNkMzYyZDNjODM0MTRhODE5MzMyOWFiNTI5ZTg5Nj9zPTk2JmQ9aWRlbnRpY29uJnI9R1wiLFwicHJvZmlsZV9VUkxcIjpcImh0dHA6XFwvXFwvZW4uZ3JhdmF0YXIuY29tXFwvc3BlbnRheWxvclwiLFwic2l0ZV9JRFwiOjczOTQzMzc0fSxcImRhdGVcIjpcIjIwMTQtMDktMDFUMTE6NDU6MDkrMDA6MDBcIixcIm1vZGlmaWVkXCI6XCIyMDE1LTAzLTI5VDEzOjI4OjIxKzAwOjAwXCIsXCJ0aXRsZVwiOlwiRmlyc3QgUG9zdFwiLFwiVVJMXCI6XCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcLzAxXFwvZmlyc3QtcG9zdFxcL1wiLFwic2hvcnRfVVJMXCI6XCJodHRwOlxcL1xcL3dwLm1lXFwvcDUwZzM0LTNcIixcImNvbnRlbnRcIjpcIjxoMiBzdHlsZT1cXFwidGV4dC1hbGlnbjpsZWZ0O1xcXCI+SGlwc3RlciBJcHN1bTxcXC9oMj5cXG48aHIgXFwvPlxcbjxwPiZuYnNwOzxcXC9wPlxcbjxwIHN0eWxlPVxcXCJ0ZXh0LWFsaWduOmxlZnQ7XFxcIj5MaXRlcmFsbHkgVkhTIGZvb2QgdHJ1Y2ssIG11bWJsZWNvcmUgRWNobyBQYXJrIGthbGUgY2hpcHMgcG9zdC1pcm9uaWMgSGVsdmV0aWNhIGZyZWVnYW4gOTAmIzgyMTc7cyBoYXNodGFnLiBCYW5qbyBzZWxmaWVzIG1laCwgQ2FybGVzIGNodXJjaC1rZXkgc2VsdmFnZSBNY1N3ZWVuZXkmIzgyMTc7cy4gU2NlbmVzdGVyIFNob3JlZGl0Y2ggbGV0dGVycHJlc3MsIG9yZ2FuaWMgbWFzdGVyIGNsZWFuc2UgOC1iaXQgWU9MTyBldGhuaWMgdWdoIHRydXN0IGZ1bmQgbGVnZ2luZ3MgZml4aWUgZHJlYW1jYXRjaGVyIG1lc3NlbmdlciBiYWcuIExvLWZpIGxlZ2dpbmdzIGJpY3ljbGUgcmlnaHRzIDMgd29sZiBtb29uIEVjaG8gUGFyaywgYmVmb3JlIHRoZXkgc29sZCBvdXQgYmlvZGllc2VsIHB1dCBhIGJpcmQgb24gaXQuIERyaW5raW5nIHZpbmVnYXIgZm9vZCB0cnVjayBNY1N3ZWVuZXkmIzgyMTc7cyByb29mIHBhcnR5LCBzYWx2aWEgKzEgdGF0dG9vZWQgRElZIGRpc3J1cHQgSGVsdmV0aWNhLiBOYXJ3aGFsIGthbGUgY2hpcHMgdG91c2xlZCBiZWFyZCBkaXN0aWxsZXJ5IE9kZCBGdXR1cmUsIFBCUiZhbXA7QiA5MCYjODIxNztzIHNlbHZhZ2UgY2FyZGlnYW4gY2h1cmNoLWtleSBzY2VuZXN0ZXIuIFBhbGVvIHN1c3RhaW5hYmxlIGFjdHVhbGx5IENhcmxlcyBjcmF5IGNsaWNoZSBkcmVhbWNhdGNoZXIuPFxcL3A+XFxuPHA+PGEgaHJlZj1cXFwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1xcXCI+PGltZyBjbGFzcz1cXFwiYWxpZ25jZW50ZXIgc2l6ZS1tZWRpdW0gd3AtaW1hZ2UtNFxcXCIgc3JjPVxcXCJodHRwczpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnP3c9MzAwJiMwMzg7aD0yMTlcXFwiIGFsdD1cXFwic3Vib1xcXCIgd2lkdGg9XFxcIjMwMFxcXCIgaGVpZ2h0PVxcXCIyMTlcXFwiIFxcLz48XFwvYT48XFwvcD5cXG48cD5QaXRjaGZvcmsgYWN0dWFsbHkgcmVhZHltYWRlIG1lc3NlbmdlciBiYWcsIGNyYWZ0IGJlZXIgUGludGVyZXN0IHNjZW5lc3RlciBUaHVuZGVyY2F0cyBzYXJ0b3JpYWwga2VmZml5ZWggaGVsbGEgdHdlZSBvcmdhbmljIEJyb29rbHluLiBTaG9yZWRpdGNoIFRodW5kZXJjYXRzIGFydCBwYXJ0eSBzYXJ0b3JpYWwgdGF0dG9vZWQgZmxleGl0YXJpYW4sIGFjdHVhbGx5IGRpcmVjdCB0cmFkZSBQQlImYW1wO0IgYmVmb3JlIHRoZXkgc29sZCBvdXQgRXRzeSBWaWNlLiBTZWxmaWVzIEhpZ2ggTGlmZSByb29mIHBhcnR5IHRydXN0IGZ1bmQsIHN3YWcgc2hhYmJ5IGNoaWMgR29kYXJkIGZyZWVnYW4gZmFwIGF1dGhlbnRpYyBhc3ltbWV0cmljYWwuIFJldHJvIGhhc2h0YWcgVGh1bmRlcmNhdHMgc2VsZmllcyBoZWxsYSBkaXJlY3QgdHJhZGUuIElQaG9uZSBzd2FnIG5leHQgbGV2ZWwsIGdhc3Ryb3B1YiBjaGFtYnJheSByZXRybyBFdHN5IHNxdWlkIGtpdHNjaC4gVmlyYWwgbG9jYXZvcmUgQnJvb2tseW4gcGxhaWQgQ2FybGVzLiBDaHVyY2gta2V5IGhlbGxhIG5hcndoYWwsIFlPTE8gZXRobmljIHNjZW5lc3RlciBiaW9kaWVzZWwgT2RkIEZ1dHVyZS48XFwvcD5cXG5cIixcImV4Y2VycHRcIjpcIjxwPkhpcHN0ZXIgSXBzdW0gJm5ic3A7IExpdGVyYWxseSBWSFMgZm9vZCB0cnVjaywgbXVtYmxlY29yZSBFY2hvIFBhcmsga2FsZSBjaGlwcyBwb3N0LWlyb25pYyBIZWx2ZXRpY2EgZnJlZWdhbiA5MCYjODIxNztzIGhhc2h0YWcuIEJhbmpvIHNlbGZpZXMgbWVoLCBDYXJsZXMgY2h1cmNoLWtleSBzZWx2YWdlIE1jU3dlZW5leSYjODIxNztzLiBTY2VuZXN0ZXIgU2hvcmVkaXRjaCBsZXR0ZXJwcmVzcywgb3JnYW5pYyBtYXN0ZXIgY2xlYW5zZSA4LWJpdCBZT0xPIGV0aG5pYyB1Z2ggdHJ1c3QgZnVuZCBsZWdnaW5ncyBmaXhpZSBkcmVhbWNhdGNoZXIgbWVzc2VuZ2VyIGJhZy4gTG8tZmkgbGVnZ2luZ3MgYmljeWNsZSByaWdodHMgMyB3b2xmIG1vb24gRWNobyBQYXJrLCBiZWZvcmUgdGhleSBzb2xkIG91dCBiaW9kaWVzZWwgWyZoZWxsaXA7XTxcXC9wPlxcblwiLFwic2x1Z1wiOlwiZmlyc3QtcG9zdFwiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbVxcLz9wPTNcIixcInN0YXR1c1wiOlwicHVibGlzaFwiLFwic3RpY2t5XCI6ZmFsc2UsXCJwYXNzd29yZFwiOlwiXCIsXCJwYXJlbnRcIjpmYWxzZSxcInR5cGVcIjpcInBvc3RcIixcImRpc2N1c3Npb25cIjp7XCJjb21tZW50c19vcGVuXCI6dHJ1ZSxcImNvbW1lbnRfc3RhdHVzXCI6XCJvcGVuXCIsXCJwaW5nc19vcGVuXCI6dHJ1ZSxcInBpbmdfc3RhdHVzXCI6XCJvcGVuXCIsXCJjb21tZW50X2NvdW50XCI6MX0sXCJsaWtlc19lbmFibGVkXCI6dHJ1ZSxcInNoYXJpbmdfZW5hYmxlZFwiOnRydWUsXCJsaWtlX2NvdW50XCI6MCxcImlfbGlrZVwiOjAsXCJpc19yZWJsb2dnZWRcIjowLFwiaXNfZm9sbG93aW5nXCI6MCxcImdsb2JhbF9JRFwiOlwiNTRlNGQ4NmY1NGRhYTMyNmEzODA1MGQwYzRmZTM2NGFcIixcImZlYXR1cmVkX2ltYWdlXCI6XCJcIixcInBvc3RfdGh1bWJuYWlsXCI6bnVsbCxcImZvcm1hdFwiOlwic3RhbmRhcmRcIixcImdlb1wiOmZhbHNlLFwibWVudV9vcmRlclwiOjAsXCJwYWdlX3RlbXBsYXRlXCI6XCJcIixcInB1YmxpY2l6ZV9VUkxzXCI6W10sXCJ0YWdzXCI6e1wia2FsZSBjaGlwc1wiOntcIklEXCI6NjAxNzAwMSxcIm5hbWVcIjpcImthbGUgY2hpcHNcIixcInNsdWdcIjpcImthbGUtY2hpcHNcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6a2FsZS1jaGlwc1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19LFwiT2RkIEZ1dHVyZVwiOntcIklEXCI6MTY2NDI1NDUsXCJuYW1lXCI6XCJPZGQgRnV0dXJlXCIsXCJzbHVnXCI6XCJvZGQtZnV0dXJlXCIsXCJkZXNjcmlwdGlvblwiOlwiXCIsXCJwb3N0X2NvdW50XCI6MSxcIm1ldGFcIjp7XCJsaW5rc1wiOntcInNlbGZcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcIixcImhlbHBcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3RhZ3NcXC9zbHVnOm9kZC1mdXR1cmVcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIn19fSxcIllPTE9cIjp7XCJJRFwiOjcxMTEwMCxcIm5hbWVcIjpcIllPTE9cIixcInNsdWdcIjpcInlvbG9cIixcImRlc2NyaXB0aW9uXCI6XCJcIixcInBvc3RfY291bnRcIjoxLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1wiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvdGFnc1xcL3NsdWc6eW9sb1xcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImNhdGVnb3JpZXNcIjp7XCJVbmNhdGVnb3JpemVkXCI6e1wiSURcIjoxLFwibmFtZVwiOlwiVW5jYXRlZ29yaXplZFwiLFwic2x1Z1wiOlwidW5jYXRlZ29yaXplZFwiLFwiZGVzY3JpcHRpb25cIjpcIlwiLFwicG9zdF9jb3VudFwiOjIsXCJwYXJlbnRcIjowLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFwiLFwiaGVscFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvY2F0ZWdvcmllc1xcL3NsdWc6dW5jYXRlZ29yaXplZFxcL2hlbHBcIixcInNpdGVcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFwifX19fSxcImF0dGFjaG1lbnRzXCI6e1wiNFwiOntcIklEXCI6NCxcIlVSTFwiOlwiaHR0cHM6XFwvXFwvaWp1c3R3YW50dG90ZXN0dGhlYXBpLmZpbGVzLndvcmRwcmVzcy5jb21cXC8yMDE0XFwvMDlcXC9zdWJvLmpwZ1wiLFwiZ3VpZFwiOlwiaHR0cDpcXC9cXC9panVzdHdhbnR0b3Rlc3R0aGVhcGkuZmlsZXMud29yZHByZXNzLmNvbVxcLzIwMTRcXC8wOVxcL3N1Ym8uanBnXCIsXCJkYXRlXCI6XCIyMDE0LTA5LTAxVDExOjQyOjQzKzAwOjAwXCIsXCJwb3N0X0lEXCI6MyxcImZpbGVcIjpcInN1Ym8uanBnXCIsXCJtaW1lX3R5cGVcIjpcImltYWdlXFwvanBlZ1wiLFwiZXh0ZW5zaW9uXCI6XCJqcGdcIixcInRpdGxlXCI6XCJzdWJvXCIsXCJjYXB0aW9uXCI6XCJcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImFsdFwiOlwiXCIsXCJ0aHVtYm5haWxzXCI6e30sXCJoZWlnaHRcIjozMjksXCJ3aWR0aFwiOjQ1MCxcImV4aWZcIjp7XCJhcGVydHVyZVwiOjAsXCJjcmVkaXRcIjpcIlwiLFwiY2FtZXJhXCI6XCJcIixcImNhcHRpb25cIjpcIlwiLFwiY3JlYXRlZF90aW1lc3RhbXBcIjowLFwiY29weXJpZ2h0XCI6XCJcIixcImZvY2FsX2xlbmd0aFwiOjAsXCJpc29cIjowLFwic2h1dHRlcl9zcGVlZFwiOjAsXCJ0aXRsZVwiOlwiXCIsXCJvcmllbnRhdGlvblwiOjB9LFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvbWVkaWFcXC80XCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9tZWRpYVxcLzRcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInBhcmVudFwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCJ9fX19LFwiYXR0YWNobWVudF9jb3VudFwiOlwiMVwiLFwibWV0YWRhdGFcIjpbe1wiaWRcIjpcIjhcIixcImtleVwiOlwiZ2VvX3B1YmxpY1wiLFwidmFsdWVcIjpcIjBcIn1dLFwibWV0YVwiOntcImxpbmtzXCI6e1wic2VsZlwiOlwiaHR0cHM6XFwvXFwvcHVibGljLWFwaS53b3JkcHJlc3MuY29tXFwvcmVzdFxcL3YxLjFcXC9zaXRlc1xcLzczOTQzMzc0XFwvcG9zdHNcXC8zXCIsXCJoZWxwXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9oZWxwXCIsXCJzaXRlXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcIixcInJlcGxpZXNcIjpcImh0dHBzOlxcL1xcL3B1YmxpYy1hcGkud29yZHByZXNzLmNvbVxcL3Jlc3RcXC92MS4xXFwvc2l0ZXNcXC83Mzk0MzM3NFxcL3Bvc3RzXFwvM1xcL3JlcGxpZXNcXC9cIixcImxpa2VzXCI6XCJodHRwczpcXC9cXC9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb21cXC9yZXN0XFwvdjEuMVxcL3NpdGVzXFwvNzM5NDMzNzRcXC9wb3N0c1xcLzNcXC9saWtlc1xcL1wifX0sXCJjYXBhYmlsaXRpZXNcIjp7XCJwdWJsaXNoX3Bvc3RcIjpmYWxzZSxcImRlbGV0ZV9wb3N0XCI6ZmFsc2UsXCJlZGl0X3Bvc3RcIjpmYWxzZX19XX07IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5Db2xsZWN0aW9uLmV4dGVuZCh7XG5cdFxuXHQvLyBtb2RlbDogQXJ0aWNsZU1vZGVsLFxuXHQvLyB1cmxQYXJhbXM6IHt9LFxuXHRwb3NpdGlvbjogMCxcblx0dG90YWxSZWNvcmRzOiAwLFxuXHRpc0xvYWRpbmc6IGZhbHNlLFxuICB1cmw6IGZ1bmN0aW9uKCl7XG4gIFx0cmV0dXJuICdodHRwOi8vcHVibGljLWFwaS53b3JkcHJlc3MuY29tL3Jlc3QvdjEuMS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcblx0XG5cdC8vIG1vZGVsOiBBcnRpY2xlTW9kZWwsXG5cdC8vIHVybFBhcmFtczoge30sXG5cdHBvc2l0aW9uOiAwLFxuXHR0b3RhbFJlY29yZHM6IDAsXG5cdGlzTG9hZGluZzogZmFsc2UsXG4gIHVybDogZnVuY3Rpb24oKXtcbiAgXHRyZXR1cm4gJ2h0dHA6Ly9wdWJsaWMtYXBpLndvcmRwcmVzcy5jb20vcmVzdC92MS9zaXRlcy9panVzdHdhbnR0b3Rlc3R0aGVhcGkud29yZHByZXNzLmNvbS9wb3N0cyc7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbihyZXNwb25zZSl7IC8vLCB4aHJcbiAgXHR0aGlzLnRvdGFsUmVjb3JkcyA9IHJlc3BvbnNlLmZvdW5kO1xuICAgIHJldHVybiByZXNwb25zZS5wb3N0cztcbiAgfSxcbiAgZ2V0Q3VycmVudFJlY29yZDogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gdGhpcy5hdCh0aGlzLnBvc2l0aW9uKTtcbiAgfSxcbiAgZ2V0TGF0ZXN0OiBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzLmF0KDApO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSByZXF1aXJlKCcuL2FwcC5qcycpO1xuXG5cblxuJChkb2N1bWVudCkub24oJ3JlYWR5JywgZnVuY3Rpb24oKXtcblx0YXBwLmluaXRpYWxpemUoKTtcbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFmdGVyVHJhbnMgPSAndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCc7XG5cblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMgKG9wdGlvbnMpIHtcblx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0dGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcblx0dGhpcy5jb250ZW50ID0gb3B0aW9ucy5jb250ZW50O1xuXHR0aGlzLnRyYW5zaXRpb25DbGFzcyA9IG9wdGlvbnMudHJhbnNpdGlvbkNsYXNzO1xuXHR0aGlzLmFuaW1hdGluZyA9IGZhbHNlO1xuXG5cdHRoaXMucmVuZGVyID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5kaXJlY3Rpb24gPT09ICdwcmV2JyA/ICdwcmV2JyA6ICduZXh0J10oY29udGVudCk7XG5cdH07XG5cblx0dGhpcy5uZXh0ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlO31cblx0XHR2YXIgJGNvbnRhaW5lciA9ICQodGhpcy5jb250YWluZXIpO1xuXHRcdHZhciAkdGFyZ2V0ID0gJGNvbnRhaW5lci5maW5kKHRoaXMudHJhbnNpdGlvbkNsYXNzKTtcblx0XHR2YXIgdGhpc18gPSB0aGlzO1xuXG5cdFx0JHRhcmdldC5odG1sKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctbmV4dCcpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpLm9uZShhZnRlclRyYW5zLCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpO1xuXHRcdFx0XHR0aGlzXy5zd2l0Y2hFbGVtZW50cygpO1xuXHRcdFx0XHR0aGlzXy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMCk7XG5cdH07XG5cblx0dGhpcy5wcmV2ID0gZnVuY3Rpb24oY29udGVudCl7XG5cdFx0aWYgKHRoaXMuYW5pbWF0aW5nKSB7cmV0dXJuIGZhbHNlOyB9XG5cdFx0dmFyICRjb250YWluZXIgPSAkKHRoaXMuY29udGFpbmVyKTtcblx0XHR2YXIgJHRhcmdldCA9ICRjb250YWluZXIuZmluZCh0aGlzLnRyYW5zaXRpb25DbGFzcyk7XG5cdFx0dmFyIHRoaXNfID0gdGhpcztcblxuXHRcdCR0YXJnZXQuaHRtbChjb250ZW50KTtcblxuXHRcdHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcblxuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHQkY29udGFpbmVyLmFkZENsYXNzKCdhbmltYXRpbmctcHJldicpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctbmV4dCcpLm9uZShhZnRlclRyYW5zLCBmdW5jdGlvbigpe1xuXHRcdFx0XHQkY29udGFpbmVyLnJlbW92ZUNsYXNzKCdhbmltYXRpbmctcHJldicpO1xuXHRcdFx0XHR0aGlzXy5zd2l0Y2hFbGVtZW50cygpO1xuXHRcdFx0XHR0aGlzXy5hbmltYXRpbmcgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH0sMCk7XG5cdH07XG5cblx0dGhpcy5zd2l0Y2hFbGVtZW50cyA9IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbnRlbnQgPSAkKHRoaXMuY29udGFpbmVyKS5maW5kKHRoaXMuY29udGVudCk7XG5cblx0XHRjb250ZW50LnRvZ2dsZUNsYXNzKHRoaXMudHJhbnNpdGlvbkNsYXNzLnJlcGxhY2UoJy4nLCcnKSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXG5cdHJldHVybiB0aGlzO1x0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJhbnNpdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSBbXG5cdHtcblx0XHRJRDogMSxcblx0XHR0aXRsZTogJ1Nub3dyaWRlcnMgTG9nbycsXG5cdFx0c2x1ZzogJ1Nub3dyaWRlcnMtbG9nbycsXG5cdFx0c3RhY2s6IHtcblx0XHRcdGdyYXBoaWNzOiBbJ0lsbHVzdHJhdG9yJ11cblx0XHR9LFxuXHRcdGNvbnRlbnQ6ICc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvamVjdHMvc25vd3JpZGVycy5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+RHVyaW5nIG15IHRpbWUgc3R1ZHlpbmcgYXQgUGx5bW91dGggVW5pdmVyc2l0eSBJIHdhcyBpbnZvbHZlZCB3aXRoIHRoZSBsb3ZlbHkgZm9sa3Mgd2hvIG1hZGUgdXAgdGhlIFBseW1vdXRoIFNub3dyaWRlcnMgKFRoZSB1bmlvblxcJ3Mgc25vdyBzcG9ydHMgc29jaWV0eSkuIEkgd2FzIGx1Y2t5IGVub3VnaCB0byBoYXZlIGdvb2QgZnJpZW5kcyBvbiB0aGUgY29tbWl0dGVlIHNvIG5ldmVyIGFjdHVhbGx5IGhhZCB0byBwYXkgbWVtYmVyc2hpcCAoc2hoaGguLi4pLjxicj5JbiBteSBmaW5hbCB5ZWFyIEkgaGFkIHN0YXJ0ZWQgdGVhY2hpbmcgbXlzZWxmIGhvdyB0byB1c2UgSWxsdXN0cmF0b3IgYW5kIGRlY2lkZWQgdG8gcGF5IGJhY2sgdGhlIGNsdWIgYnkgZ2l2aW5nIHRoZWlyIGxvZ28gYSBmYWNlbGlmdC48L3A+PHA+SSBkaWRuXFwndCB3YW50IHRvIHZlbnR1cmUgdG9vIGZhciBhd2F5IGZyb20gdGhlIG9yaWdpbmFsIHNvIEkgdXNlZCB0aGUgc2FtZSBmb250IChBcmlhbCwgcGxlYXNlIGZvcmdpdmUgbWUhKSBhbmQgSSByZS1kcmV3IHRoZSBcXCdzbm93cmlkZXJzIGxhZHlcXCcgc28gdGhhdCB3ZSB3b3VsZCBoYXZlIGl0IGluIGEgc2NhbGFibGUgZm9ybWF0IHJhdGhlciB0aGFuIGp1c3QgdGhlIGhlYXZpbHkgcGl4ZWxhdGVkIHZlcnNpb24gdGhhdCB3ZSBhbHJlYWR5IGhhZC48YnI+SSBjaG9zZSB0byB0YWtlIHRoZSBvbmUgbGluZSBcXCdzbm93cmlkZXJzXFwnIGFuZCBzcGxpdCB0aGlzIGludG8gdHdvIHNvIHRoYXQgaXQgd291bGQgYmV0dGVyIGZpdCBvbiB0ZWVzaGlydHMgYW5kIGhvb2RpZXMgYW5kIGNob3NlIGEgdmVyeSBib2xkIGxvb2sgZm9yIGVhc3kgcmVjb2duaXRpb24sIHRoZSBzbm93cmlkZXJzIGFyZSBhIHByb3VkIGJ1bmNoITwvcD4nXG5cdH0sIHtcblx0XHRJRDogMixcblx0XHR0aXRsZTogJ0hhcnJ5IFBvdHR5Jyxcblx0XHRzbHVnOiAnaGFycnktcG90dHknLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWydqcXVlcnknXSxcblx0XHRcdHBocDogWycnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9oYXJyeXBvdHR5LnBuZ1wiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj48cD5NeSBkYWQgaXMgYSBiaXQgb2YgYSBjbG93biwgbm8gcmVhbGx5ISBIZSB3b3JrcyBhcyBhIGNoaWxkcmVuXFwncyBlbnRlcnRhaW5lciBzbyB3aGlsZSBJIHdhcyBnZXR0aW5nIHN0YXJ0ZWQgd2l0aCBsZWFybmluZyBQSFAgYW5kIEpTIEkgYnVpbHQgYSB2ZXJ5IGJhc2ljIHdlYnNpdGUgZm9yIGhpbS48L3A+PHA+VGhlIHdlYnNpdGUgc2VydmVkIG9ubHkgb25lIHB1cnBvc2Ugd2hpY2ggd2FzIHRvIHByb3ZpZGUgYSBjb250YWN0IGZvcm0gZm9yIHBvdGVudGlhbCBjdXN0b21lcnMgd2FudGluZyB0byBnZXQgaW4gdG91Y2guPGJyPlRoZSBjb2RlIHdhcyBwcmV0dHkgdGVycmlibGUuLi4gdmVyeSBiYXNpYyBQSFAgdG8gc2VydmUgdXAgdGhlIHNpdGUgYW5kIHNlbmQgdGhlIGZvcm0gZGV0YWlscyB3aXRoIGpRdWVyeSB0byB2YWxpZGF0ZSBvbiB0ZWggZnJvbnRlbmQuPC9wPidcblx0fSx7XG5cdFx0SUQ6IDMsXG5cdFx0dGl0bGU6ICdUaGUgU2F1Y2UnLFxuXHRcdHNsdWc6ICd0aGUtc2F1Y2UnLFxuXHRcdHN0YWNrOiB7XG5cdFx0XHRqczogWycnXSxcblx0XHRcdHBocDogWycnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zYXVjZS5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+VGhlIHJlYXNvbiBJIGdvdCBzdGFydGVkIHdpdGggbGVhcm5pbmcgdG8gY29kZSB3YXMgdG8gc2V0IHVwIGFuIGVjb21tZXJjZSBzaXRlIGZvciBcXCdUaGUgU2F1Y2VcXCcsIGEgYnJhbmQgdGhhdCBJIHdhcyBob3BpbmcgdG8gc2V0IHVwLjxicj5JIGhhZCBzdGFydGVkIGNyZWF0aW5nIGRlc2lnbnMgZm9yIHRlZXNoaXJ0cyBhbmQgc3dlYXRzaGlydHMgZXRjLiwgYm91Z2h0IGEgbG9hZCBvZiBwcmludGluZyBlcXVpcG1lbnQgYW5kIGlua3MgYW5kIG5lZWRlZCB0byBzZXQgdXAgYSBjaGFubmVsIGEgY2hhbm5lbCB0byBzZWxsIHRoZSBwcm9kdWN0cyB0aGF0IEkgd291bGQgYmUgY3JlYXRpbmcuPC9wPjxwPkFsdGhvdWdoIHRoZXJlIGlzIGNlcnRhaW5seSBub3RoaW5nIGdyb3VuZGJyYWtpbmcgaW4gdGhpcyBwcm9qZWN0IEkgaGFkIHNldCBteXNlbGYgYSBmZXcgY2hhbGxlbmdlcyB0aGF0IHR1cm5lZCBvdXQgdG8gYmUgcXVpdGUgdG91Z2ggYXQgdGhlIHRpbWUgYW5kIGhlbHBlZCBtZSB1bmRlcnN0YW5kIG1vcmUgYWJvdXQgUEhQLCBKUyBhbmQgY29kaW5nIGluIGdlbmVyYWwuPC9wPjxoMj5Qcm9kdWN0IExpc3Rpbmc8L2gyPjxocj48cD5SYXRoZXIgdGhhbiBvcHQgZm9yIGEgc3RyYWlnaHQgdXAgbGlzdCBvZiBwcm9kdWN0IHRodW1ibmFpbHMgSSB3YW50ZWQgdG8gaGF2ZSBzZWN0aW9ucyB0aGF0IGZlYXR1cmVkIGEgbnVtYmVyIG9mIHRodW1ibmFpbHMgd2l0aCBhIFxcJ3Byb2R1Y3QgZm9jdXNcXCcgcGFuZWwgdGhhdCB3b3VsZCBzaG93IG1vcmUgZGV0YWlsIG9mIHdoaWNoZXZlciBwcm9kdWN0IHRoZSB1c2VyIHdhcyBjdXJyZW50bHkgaG92ZXJpbmcgb3Zlci48YnI+RWFjaCBvZiB0aGVzZSBwYW5lbHMgd291bGQgaGF2ZSBhbiBhbHRlcm5hdGluZyBsYXlvdXQgaW4gb3JkZXIgdG8ga2VlcCBzb21lIGJhbGFuY2UgZG93biB0aGUgcGFnZS48YnI+VGhpcyB3YXMgd2hlcmUgSSBsZWFybmVkIGxvb3BpbmcgaW4gUEhQIGFuZCB3YXMgbXkgZmlyc3QgcmVhbCBjaGFsbGVuZ2Ugd2l0aCBqYXZhc2NyaXB0IChBbHRob3VnaCBteSBzb2x1dGlvbiB3YXMgdGVycmlibGUsIGNyYXp5IGRhdGEgYXR0cmlidXRlcyBldmVyd2hlcmUhKTwvcD48aDI+UHJvZHVjdCBMaWdodGJveDwvaDI+PGhyPjxwPkkgZGlkblxcJ3Qgd2FudCB0byBoYXZlIHRoZSB1c2VyIGxlYXZlIHRoZSBwcm9kdWN0IGxpc3RpbmcgcGFnZSBlYWhjIHRpbWUgdGhleSB3YW50ZWQgdG8gdmlldyBhIHByb2R1Y3Qgc28gSSBhdHRlbXB0ZWQgdG8gYnVpbGQgb3V0IGEgbGlnaHQtYm94Ljxicj5BbHRob3VnaCBJIGRpZCBnZXQgdGhpcyB0byB3b3JrLCB0aGUgc29sdXRpb24sIGFnYWluLCBsYWNrZWQgZWxlZ2FuY2UuIHJhdGhlciB0aGFuIHBlcmZvcm1pbmcgYW4gQUpBWCBjYWxsIHRvIHBvcHVsYXRlIHRoZSBsaWdodGJveCwgb3IgcmVuZGVyIGEgdGVtcGxhdGUgd2l0aCBhIGZldyBwaWVjZXMgb2YgcHJvZHVjdCBkYXRhLCBJIHJlbHllZCBvbiB0aGUgZGF0YSBhdHRyaWJ1dGVzIHRoYXQgSSBoYWQgcmVuZGVyZWQgb3V0IG9uIGVhY2ggdGh1bWJuYWlsIGRpdi48YnI+VXR0ZXJseSB0ZXJyaWJsZSBidXQgdmVyeSBlZHVjYXRpb25hbCE8L3A+J1xuXHR9LHtcblx0XHRJRDogNCxcblx0XHR0aXRsZTogJ1N1cmYgVHJhY2tpbmcgQXBwIENvbmNlcHQnLFxuXHRcdHNsdWc6ICdzdXJmLXRyYWNraW5nLWFwcC1jb25jZXB0Jyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0XHRydWJ5OiBbJ1J1Ynkgb24gUmFpbHMnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9zdXJmYXBwY29uY2VwdC5wbmdcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+PHA+RHVyaW5nIG15IHRpbWUgc3R1ZHlpbmcgYXQgQml0bWFrZXIgTGFicyBpbiBUb3JvbnRvLCBteXNlbGYgYW5kIGEgY291cGxlIG9mIGNsYXNzbWF0ZXMgZGVjaWRlZCB0byBlbnRlciB0aGUgbWFrZXIgZWRpdGlvbiBvZiBzdGFydC11cCB3ZWVrZW5kLjwvcD48cD5JIGhhZCBoYWQgYW4gaWRlYSBhIHllYXIgb3Igc28gYmVmb3JlIGhhbmQgd2hpbHN0IGZpbmlzaGluZyB1cCBhdCB1bml2ZXJzaXR5IHRvIGNyZWF0ZSBob3VzaW5nIGZvciBhIHNtYXJ0cGhvbmUgdGhhdCBjb3VsZCBiZSBhdHRhY2hlZCB0byBhIHN1cmZib2FyZCBpbiBvcmRlciB0byBjb2xsZWN0IGRhdGEgYWJvdXQgdGhlIHN1cmZlclxcJ3MgcGVyZm9ybWFuY2UgZHVyaW5nIHRoZWlyIHNlc3Npb24sIGFsbG93aW5nIHRoZW0gdG8gcmV2aWV3IHRoZSBkYXRhIGxhdGVyLiBTbyB3ZSB3ZW50IGFib3V0IHByb3RvdHlwaW5nIGEgZGV2aWNlIChpbiBwbGFjZSBvZiB0aGUgc21hcnRwaG9uZSBob3VzaW5nKSBhbmQgdGhlIHdlYiBhcHAgdGhhdCB3b3VsZCBkaXNwbGF5IHRoZSBkYXRhLjwvcD48cD5BcyB0aGlzIHdhcyBtb3JlIG9mIGEgY29uY2VwdCBwcm9qZWN0IHRoYW4gYW4gYWN0dWFsIGF0dGVtcHQgYXQgYnVpbGRpbmcgYSBwcm9kdWN0LCBJIGFkZGVkIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IHdvdWxkblxcJ3QgcmVhbGx5IGJlIGFjaGlldmFibGUsIHN1Y2ggYXMgcmVhbC10aW1lIHdhdmUtdG8td2F2ZSB1cGRhdGVzIHRvIHRoZSBzdXJmZXJzIHByb2ZpbGUsIHdoZXJlIGVhY2ggd2F2ZSB3b3VsZCBiZSBwbG90dGVkIG9uIGEgbG9jYWwgbWFwIHdpdGggaXRcXCdzIHNwZWVkIGFuZCBkaXN0YW5jZSBzaG93biBhbG9uZyBzaWRlLjwvcD48cD5XZSBkaWRuXFwndCB3aW4gYW55IHByaXplcyBidXQgZGlkblxcJ3QgZG8gdGVycmJpbHkgZWl0aGVyIGFzIHdlIHdlcmUgc29tZXdoZXJlIGluIHRoZSB0b3AgOSBvdXQgb2YgNDArIHRlYW1zLjwvcD4nXG5cdH0se1xuXHRcdElEOiA1LFxuXHRcdHRpdGxlOiAnUlBHIGFkdmVudHVyZSBnYW1lJyxcblx0XHRzbHVnOiAncnBnLWFkdmVudHVyZS1nYW1lJyxcblx0XHRzdGFjazoge1xuXHRcdFx0anM6IFsnalF1ZXJ5J10sXG5cdFx0XHRydWJ5OiBbJ1J1Ynkgb24gUmFpbHMnXVxuXHRcdH0sXG5cdFx0Y29udGVudDogJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9qZWN0cy9ycGcucG5nXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPjxwPkZvciBteSBmaW5hbCBwcm9qZWN0IGF0IEJpdG1ha2VyIExhYnMsIEkgZGVjaWRlZCB0byBidWlsZCBhbiBSUEcgYnJvd3NlciBnYW1lIHRoYXQgYWxsb3dzIHBsYXllcnMgdG8gY3JlYXRlIGEgY2hhcmFjdGVyLCBiYXR0bGUgTlBDcyBhbmQgb3RoZXIgcGxheWVycywgY29sbGVjdCBnb2xkICZhbXA7IGl0ZW1zLCBsZXZlbCB1cCBhbmQga2VlcCB0cmFjayBvZiB0aGVpciByYW5rIGNvbXBhcmVkIHRvIG90aGVyIHBsYXllcnMuPC9wPjxwPlRoaXMgd2FzIGhhcmQgd29yaywgZXNwZWNpYWxseSBkdWUgdG8gdGhlIGxpbWl0ZWQgdGltZSBmcmFtZSB3aGljaCBpbnZvbHZlZCBhIGZldyB+MTggaG91ciBzZXNzaW9ucyBhbmQgb25lIDM2IGhvdXIgc2Vzc2lvbiEgKFdlIGhhZCByb3VnaGx5IHR3byB3ZWVrcyB0byBoYWNrIG9uIG91ciBmaW5hbCBwcm9qZWN0cykuIEhvd2V2ZXIsIGFzIG11Y2ggYXMgaXQgd2FzIGhhcmR3b3JrIGl0IHdhcyBhIGxvdCBvZiBmdW4hPC9wPjxwPkkgbGVhcm5lZCBhIGhlYXAgYWJvdXQgUnVieSBvbiBSYWlscyBpbiB0aGlzIHRpbWUsIHBhcnRpY3VsYXJseSBzaW5jZSB0aGVyZSB3ZXJlIHNvbWUgY29tcGxleCByZWxhdGlvbnNoaXBzIGdvaW5nIG9uIGJldHdlZW4gdGhlIGRpZmZlcmVudCByZXNvdXJjZXMgYW5kIGVudGl0aWVzIGluIHRoaXMgZ2FtZS48L3A+PHA+VGhlIHByb2plY3QgaGFzIHNpbmNlIGJlZW4gbGFpZCB0byByZXN0IGJ1dCBJIGRvIHN0aWxsIGFpbSB0byBmaW5kIHRoZSB0aW1lIHRvIHJlLWJ1aWxkIGl0IHdpdGggc29tZSBleHRyYSBmZWF0dXJlcywgc3VjaCBhcyB1c2luZyB3ZWJzb2NrZXRzIGFuZCBIVE1MNSBjYW52YXMhIC0gaXRcXCdkIGJlIGEgZnVuIHNpZGUgcHJvamVjdCB0byBoYXZlIG9uIHRoZSBnbyE8L3A+J1xuXHR9XG5cbl07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXz13aW5kb3cuXztcblxudmFyIEFwcFJvdXRlciA9IHdpbmRvdy5CYWNrYm9uZS5Sb3V0ZXIuZXh0ZW5kKHtcblx0cm91dGVzOiB7XG5cdFx0Jyc6ICdyb290Jyxcblx0XHQnYmxvZygvKSgvOnBvc3QpJzogJ2Jsb2cnLFxuXHRcdCdwcm9qZWN0cygvOnByb2plY3QpJzogJ3Byb2plY3RzJyxcblx0XHQnY29udGFjdCc6ICdjb250YWN0Jyxcblx0XHQnYWJvdXQnOiAnYWJvdXQnXG5cdH0sXG5cblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oY29udGV4dCl7XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpyZWRpcmVjdCcsIHRoaXMucmVkaXJlY3QpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAncm91dGVyOmdvVG9DdXJyZW50Q29udGVudCcsIHRoaXMuZ29Ub0N1cnJlbnRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpuZXh0Q29udGVudCcsIHRoaXMuZ29Ub05leHRDb250ZW50KTtcblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3JvdXRlcjpwcmV2Q29udGVudCcsIHRoaXMuZ29Ub1ByZXZDb250ZW50KTtcblxuXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHRoaXMuZGVmYXVsdENvbnRlbnRSb3V0ZSgpO1xuXHRcdFxuXHRcdHRoaXMub24oJ3JvdXRlOnJvb3QnICxmdW5jdGlvbigpe1xuXG4gIFx0XHRuZXcgY29udGV4dC52aWV3cy5pbnRybyh7XG4gIFx0XHRcdG1vZGVsOiB7fSxcbiAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLmludHJvXG4gIFx0XHR9KTtcbiAgXHRcdCQoJ2JvZHknKS5hZGRDbGFzcygnaW50cm8nKTtcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6YmxvZycgLGZ1bmN0aW9uKHNsdWcpe1xuXG5cdFx0XHQvLyB2YXIgb3B0aW9ucyA9IChhcmd1bWVudHNbMV0gfHwge30pO1xuXG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYmxvZy5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cgPSBuZXcgY29udGV4dC52aWV3cy5ibG9nKHtcblx0ICBcdFx0XHRzbHVnOiBzbHVnLFxuXHQgIFx0XHRcdGVsOiBjb250ZXh0Lm1haW5QYW5lbCxcblx0ICBcdFx0XHR0ZW1wbGF0ZTogY29udGV4dC50ZW1wbGF0ZXNbJ2Jsb2ctcG9zdCddXG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgdHJhbnNpdGlvbiA9ICh0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9PT0gY29udGV4dC52aWV3cy5ibG9nKTtcblxuXHRcdFx0aWYgKCFzbHVnKSB7XG5cdFx0XHRcdHNsdWcgPSBjb250ZXh0LnZpZXdzLmJsb2cuZGVmYXVsdFNsdWcoKTtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZShjb250ZXh0LnZpZXdzLmJsb2cuZGVmYXVsdFJvdXRlKCkpO1xuICBcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHtzbHVnOiBzbHVnfSk7XG4gIFx0XHR9IGVsc2Uge1xuICBcdFx0XHRpZiAoY29udGV4dC52aWV3cy5ibG9nLmNoZWNrU2x1ZyhzbHVnKSkge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MuYmxvZy5yZW5kZXIoe3NsdWc6IHNsdWcsIHRyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdFx0fSBlbHNlIHtcbiAgXHRcdFx0XHRjb250ZXh0LnZpZXdzLmJsb2cucmVuZGVyKHt0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH1cbiAgXHRcdH1cblxuXHRcdFx0dGhpcy5jdXJyZW50Q29udGVudFJvdXRlID0gd2luZG93LkJhY2tib25lLmhpc3RvcnkuZnJhZ21lbnQ7XG5cdFx0XHR0aGlzLmN1cnJlbnRDb250ZW50VmlldyA9IGNvbnRleHQudmlld3MuYmxvZztcblx0XHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6cHJvamVjdHMnICxmdW5jdGlvbihzbHVnKXtcblxuXHRcdFx0aWYgKCFjb250ZXh0LnZpZXdzLnByb2plY3RzLmluaXRpYWxpemVkKSB7XG5cdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMgPSBuZXcgY29udGV4dC52aWV3cy5wcm9qZWN0cyh7XG5cdCAgXHRcdFx0c2x1Zzogc2x1Zyxcblx0ICBcdFx0XHRlbDogY29udGV4dC5tYWluUGFuZWwsXG5cdCAgXHRcdFx0dGVtcGxhdGU6IGNvbnRleHQudGVtcGxhdGVzLnByb2plY3Rcblx0ICBcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciB0cmFuc2l0aW9uID0gKHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID09PSBjb250ZXh0LnZpZXdzLnByb2plY3RzKTtcblxuXHRcdFx0aWYgKCFzbHVnKSB7XG5cblx0XHRcdFx0c2x1ZyA9IGNvbnRleHQudmlld3MucHJvamVjdHMuZGVmYXVsdFNsdWcoKTtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZShjb250ZXh0LnZpZXdzLnByb2plY3RzLmRlZmF1bHRSb3V0ZSgpKTtcbiAgXHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3NsdWc6IHNsdWd9KTtcbiAgXHRcdH0gZWxzZSB7XG4gIFx0XHRcdGlmIChjb250ZXh0LnZpZXdzLnByb2plY3RzLmNoZWNrU2x1ZyhzbHVnKSkge1xuICBcdFx0XHRcdGNvbnRleHQudmlld3MucHJvamVjdHMucmVuZGVyKHtzbHVnOiBzbHVnLCB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ufSk7XG4gIFx0XHRcdH0gZWxzZSB7XG4gIFx0XHRcdFx0Y29udGV4dC52aWV3cy5wcm9qZWN0cy5yZW5kZXIoe3RyYW5zaXRpb246IHRyYW5zaXRpb259KTtcbiAgXHRcdFx0fVxuICBcdFx0fVxuXG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5wcm9qZWN0cztcbiAgXHRcdFxuXHRcdH0pO1xuXG5cdFx0dGhpcy5vbigncm91dGU6Y29udGFjdCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuY29udGFjdC5pbml0aWFsaXplZCkge1xuXHRcdFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QgPSBuZXcgY29udGV4dC52aWV3cy5jb250YWN0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5jb250YWN0XG5cdCAgXHRcdH0pO1xuXHRcdFx0fVxuXG4gIFx0XHRjb250ZXh0LnZpZXdzLmNvbnRhY3QucmVuZGVyKCk7XG4gIFx0XHR0aGlzLmN1cnJlbnRDb250ZW50Um91dGUgPSB3aW5kb3cuQmFja2JvbmUuaGlzdG9yeS5mcmFnbWVudDtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRWaWV3ID0gY29udGV4dC52aWV3cy5jb250YWN0O1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTphYm91dCcgLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZiAoIWNvbnRleHQudmlld3MuYWJvdXQuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0Y29udGV4dC52aWV3cy5hYm91dCA9IG5ldyBjb250ZXh0LnZpZXdzLmFib3V0KHtcblx0ICBcdFx0XHRtb2RlbDoge30sXG5cdCAgXHRcdFx0ZWw6IGNvbnRleHQubWFpblBhbmVsLFxuXHQgIFx0XHRcdHRlbXBsYXRlOiBjb250ZXh0LnRlbXBsYXRlcy5hYm91dFxuXHQgIFx0XHR9KTtcblx0XHRcdH1cblxuICBcdFx0Y29udGV4dC52aWV3cy5hYm91dC5yZW5kZXIoKTtcbiAgXHRcdHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSA9IHdpbmRvdy5CYWNrYm9uZS5oaXN0b3J5LmZyYWdtZW50O1xuICBcdFx0dGhpcy5jdXJyZW50Q29udGVudFZpZXcgPSBjb250ZXh0LnZpZXdzLmFib3V0O1xuICBcdFx0XG5cdFx0fSk7XG5cblx0XHR0aGlzLm9uKCdyb3V0ZTpkZWZhdWx0Um91dGUnLCBmdW5jdGlvbigpe1xuXHRcdH0pO1xuXG5cdFx0d2luZG93LkJhY2tib25lLmhpc3Rvcnkuc3RhcnQoKTtcblxuXHR9LFxuXHRnb1RvQ3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLm5hdmlnYXRlKHRoaXMuY3VycmVudENvbnRlbnRSb3V0ZSk7XG5cdH0sXG5cdGdvVG9QcmV2Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGNvbnNvbGUubG9nKCdnb1RvUHJldkNvbnRlbnQnKTtcblx0XHRpZiAoIV8uaXNGdW5jdGlvbih0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdC8vIHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5hbWVzcGFjZTtcblx0XHR2YXIgcm91dGUgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5wcmV2Um91dGUoKTtcblx0XHRjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSk7XG5cdFx0Ly8gdmFyIHNsdWcgPSB0aGlzLmN1cnJlbnRDb250ZW50Vmlldy5nZXRQcmV2TW9kZWwoKS5nZXQoJ3NsdWcnKTtcblx0XHQvLyB0aGlzLnRyaWdnZXIoJ3JvdXRlOicgKyByb3V0ZSwgc2x1Zywge3RyYW5zaXRpb246ICdwcmV2J30pO1xuXHRcdHRoaXMubmF2aWdhdGUocm91dGUpO1xuXG5cdFx0Ly8gcmV0dXJuIHtzbHVnOiBzbHVnLCByb3V0ZTogJ3JvdXRlOicrIHJvdXRlLCB2OiB0aGlzLmN1cnJlbnRDb250ZW50Vmlld307XG5cdH0sXG5cdGdvVG9OZXh0Q29udGVudDogZnVuY3Rpb24gKCkge1xuXHRcdGlmICghXy5pc0Z1bmN0aW9uKHRoaXMuY3VycmVudENvbnRlbnRWaWV3LmdldE5leHRNb2RlbCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Ly8gdmFyIHJvdXRlID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcubmFtZXNwYWNlO1xuXHRcdHZhciByb3V0ZSA9IHRoaXMuY3VycmVudENvbnRlbnRWaWV3Lm5leHRSb3V0ZSgpO1xuXHRcdC8vIHZhciBzbHVnID0gdGhpcy5jdXJyZW50Q29udGVudFZpZXcuZ2V0TmV4dE1vZGVsKCkuZ2V0KCdzbHVnJyk7XG5cdFx0Ly8gdGhpcy50cmlnZ2VyKCdyb3V0ZTonICsgcm91dGUsIHNsdWcsIHt0cmFuc2l0aW9uOiAnbmV4dCd9KTtcblx0XHQvLyBjb25zb2xlLmxvZyhyb3V0ZSk7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cblx0XHQvLyByZXR1cm4ge3NsdWc6IHNsdWcsIHJvdXRlOiAncm91dGU6Jysgcm91dGUsIHY6IHRoaXMuY3VycmVudENvbnRlbnRWaWV3fTtcblx0fSxcblx0ZGVmYXVsdENvbnRlbnRSb3V0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnIy9hYm91dCc7XG5cdH0sXG5cdHJlZGlyZWN0OiBmdW5jdGlvbihyb3V0ZSl7XG5cdFx0dGhpcy5uYXZpZ2F0ZShyb3V0ZSk7XG5cdH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwUm91dGVyOyIsInZhciBleHBvcnRzID0gKGZ1bmN0aW9uICgpIHsgXG5cbiB2YXIgSGFuZGxlYmFycyA9IHdpbmRvdy5IYW5kbGViYXJzOyBcblxudGhpc1tcIkpTVFwiXSA9IHRoaXNbXCJKU1RcIl0gfHwge307XG5cbnRoaXNbXCJKU1RcIl1bXCJhYm91dFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyIGFib3V0XFxcIj5cXG5cdDxoMj5hYm91dDwvaDI+XFxuPC9kaXY+XCI7XG4gIH0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiYmxvZy1wb3N0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcblx0XFxuXHQ8aDIgY2xhc3M9XFxcInRpdGxlXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcblx0PGRpdiBjbGFzcz1cXFwiZ3JpZC1yb3dcXFwiPlxcblx0XHQ8ZGl2IGNsYXNzPVxcXCJzbWFsbC0xMlxcXCI+XFxuXHRcdFx0PGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcblx0XHRcdFx0XFxuXHRcdFx0XHRcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb250ZW50IHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb250ZW50IDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcImNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiXFxuXHRcdFx0PC9kaXY+XFxuXHRcdDwvZGl2Plxcblx0PC9kaXY+XFxuXHRcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG50aGlzW1wiSlNUXCJdW1wiY29udGFjdFwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImdyaWQtY29udGFpbmVyIGFib3V0XFxcIj5cXG5cdDxoMj5jb250YWN0PC9oMj5cXG48L2Rpdj5cIjtcbiAgfSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJpbnRyb1wiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIjx1bCBjbGFzcz1cXFwic29jaWFsLWljb25zXFxcIj5cXG5cdDxsaT48YSBocmVmPVxcXCJ3d3cubGlua2VkaW4uY29tL1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtlZGluXFxcIj48L2k+PC9hPjwvbGk+XFxuXHQ8bGk+PGEgaHJlZj1cXFwid3d3LnR3aXR0ZXIuY29tL1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXJcXFwiPjwvaT48L2E+PC9saT5cXG5cdDxsaT48YSBocmVmPVxcXCJ3d3cuZ2l0aHViLmNvbS9cXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWJcXFwiPjwvaT48L2E+PC9saT5cXG5cdDxsaT48YSBocmVmPVxcXCJ3d3cuZHJpYmJibGUuY29tL1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWRyaWJiYmxlXFxcIj48L2k+PC9hPjwvbGk+XFxuPC91bD5cXG5cXG48aDE+SGkhIEknbSBTcGVuIFRheWxvcjwvaDE+XFxuXFxuXFxuPGEgaHJlZj1cXFwiIy9hYm91dFxcXCIgY2xhc3M9XFxcImFib3V0XFxcIj5hYm91dDwvYT5cXG48YSBocmVmPVxcXCIjL2Jsb2dcXFwiIGNsYXNzPVxcXCJibG9nXFxcIj5ibG9nPC9hPlxcbjxhIGhyZWY9XFxcIiMvcHJvamVjdHNcXFwiIGNsYXNzPVxcXCJwcm9qZWN0c1xcXCI+cHJvamVjdHM8L2E+XFxuPGEgaHJlZj1cXFwiIy9jb250YWN0XFxcIiBjbGFzcz1cXFwiY29udGFjdFxcXCI+Y29udGFjdDwvYT5cXG5cXG48cCBzdHlsZT1cXFwiZm9udC1zaXplOiAuODVlbTtcXFwiPkhleSEgSSdtIHN0aWxsIHdvcmtpbmcgb24gdGhpcyBzaXRlLCBzbyBwbGVhc2UgYmFyZSB3aXRoIG1lITxicj5TbyBmYXIgaXQgb25seSB3b3JrcyBwcm9wZXJseSBpbiBDaHJvbWUuLi4gYnV0IHRoYXQnbGwgYmUgZml4ZWQgc29vbiBlbm91Z2ggOik8L3A+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxudGhpc1tcIkpTVFwiXVtcIm1hc3RlclwiXSA9IEhhbmRsZWJhcnMudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBzdGFjazEsIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGJ1ZmZlciA9IFwiIDxkaXYgY2xhc3M9XFxcInBhZ2Utd3JhcFxcXCI+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2VsbFxcXCI+XFxuICBcdFx0PGRpdiBjbGFzcz1cXFwibGFuZGluZy1jb250ZW50XFxcIiBpZD1cXFwibGFuZGluZ1xcXCI+XFxuICAgICAgICBcIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbnRyb0NvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmludHJvQ29udGVudCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJpbnRyb0NvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiXFxuICBcdFx0PC9kaXY+XFxuICAgIDwvZGl2Plxcblx0PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50LXdyYXBwZXJcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcblxcbiAgICA8L2Rpdj4gICAgXHQgXFxuICBcdDxkaXYgY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiIGlkPVxcXCJtYWluXFxcIj5cIjtcbiAgc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5tYWluQ29udGVudCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpbkNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibWFpbkNvbnRlbnRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgcmV0dXJuIGJ1ZmZlciArIFwiPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudCB0cmFuc2l0aW9uZXJcXFwiPjwvZGl2PlxcbiAgXHQ8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJwcm9qZWN0XCJdID0gSGFuZGxlYmFycy50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgaGVscGVyLCBmdW5jdGlvblR5cGU9XCJmdW5jdGlvblwiLCBoZWxwZXJNaXNzaW5nPWhlbHBlcnMuaGVscGVyTWlzc2luZywgZXNjYXBlRXhwcmVzc2lvbj10aGlzLmVzY2FwZUV4cHJlc3Npb24sIGJ1ZmZlciA9IFwiPGRpdiBjbGFzcz1cXFwiZ3JpZC1jb250YWluZXJcXFwiPlxcblx0XFxuXHQ8aDIgY2xhc3M9XFxcInRpdGxlXFxcIj5cIlxuICAgICsgZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnRpdGxlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50aXRsZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoZGVwdGgwLCB7XCJuYW1lXCI6XCJ0aXRsZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L2gyPlxcblx0PHVsPjwvdWw+XFxuXHQ8ZGl2IGNsYXNzPVxcXCJncmlkLXJvd1xcXCI+XFxuXHRcdDxkaXYgY2xhc3M9XFxcInNtYWxsLTEyXFxcIj5cXG5cdFx0XHQ8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuXHRcdFx0XHRcXG5cdFx0XHRcdFwiO1xuICBzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbnRlbnQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbnRlbnQgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwiY29udGVudFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCJcXG5cdFx0XHQ8L2Rpdj5cXG5cdFx0PC9kaXY+XFxuXHQ8L2Rpdj5cXG5cdFxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cbnRoaXNbXCJKU1RcIl1bXCJ1aS9oZWFkZXJcIl0gPSBIYW5kbGViYXJzLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHZhciBoZWxwZXIsIGZ1bmN0aW9uVHlwZT1cImZ1bmN0aW9uXCIsIGhlbHBlck1pc3Npbmc9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBlc2NhcGVFeHByZXNzaW9uPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcbiAgcmV0dXJuIFwiIGhyZWY9XFxcIlwiXG4gICAgKyBlc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMucHJldkxpbmsgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnByZXZMaW5rIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlck1pc3NpbmcpLCh0eXBlb2YgaGVscGVyID09PSBmdW5jdGlvblR5cGUgPyBoZWxwZXIuY2FsbChkZXB0aDAsIHtcIm5hbWVcIjpcInByZXZMaW5rXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImdvLXByZXZcXFwiIFwiO1xufSxcIjNcIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gIHJldHVybiBcIiBjbGFzcz1cXFwiZ28tcHJldiBoaWRlXFxcIlwiO1xuICB9LFwiNVwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIGhlbHBlciwgZnVuY3Rpb25UeXBlPVwiZnVuY3Rpb25cIiwgaGVscGVyTWlzc2luZz1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGVzY2FwZUV4cHJlc3Npb249dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuICByZXR1cm4gXCIgaHJlZj1cXFwiXCJcbiAgICArIGVzY2FwZUV4cHJlc3Npb24oKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5uZXh0TGluayB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmV4dExpbmsgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IGZ1bmN0aW9uVHlwZSA/IGhlbHBlci5jYWxsKGRlcHRoMCwge1wibmFtZVwiOlwibmV4dExpbmtcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiZ28tbmV4dFxcXCIgXCI7XG59LFwiN1wiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgcmV0dXJuIFwiIGNsYXNzPVxcXCJnby1uZXh0IGhpZGVcXFwiXCI7XG4gIH0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgdmFyIHN0YWNrMSwgYnVmZmVyID0gXCI8ZGl2IGNsYXNzPVxcXCJsYW5kaW5nLWZvb3Rlci1jb250ZW50XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImljb24gbWVudVxcXCI+XFxuICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd24gZmEtMnggc2hvdy1jb250ZW50XFxcIj48L2k+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgIDxhIFwiO1xuICBzdGFjazEgPSBoZWxwZXJzWydpZiddLmNhbGwoZGVwdGgwLCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucHJldkxpbmsgOiBkZXB0aDApLCB7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjp0aGlzLnByb2dyYW0oMSwgZGF0YSksXCJpbnZlcnNlXCI6dGhpcy5wcm9ncmFtKDMsIGRhdGEpLFwiZGF0YVwiOmRhdGF9KTtcbiAgaWYgKHN0YWNrMSAhPSBudWxsKSB7IGJ1ZmZlciArPSBzdGFjazE7IH1cbiAgYnVmZmVyICs9IFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICAgIFxcbiAgICA8YSBocmVmPVxcXCIjXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpY29uIG1lbnVcXFwiPlxcbiAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWJhcnMgZmEtMnggc2hvdy1pbnRyb1xcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG4gICAgPGEgXCI7XG4gIHN0YWNrMSA9IGhlbHBlcnNbJ2lmJ10uY2FsbChkZXB0aDAsIChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uZXh0TGluayA6IGRlcHRoMCksIHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSg1LCBkYXRhKSxcImludmVyc2VcIjp0aGlzLnByb2dyYW0oNywgZGF0YSksXCJkYXRhXCI6ZGF0YX0pO1xuICBpZiAoc3RhY2sxICE9IG51bGwpIHsgYnVmZmVyICs9IHN0YWNrMTsgfVxuICByZXR1cm4gYnVmZmVyICsgXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2E+XFxuICBcXG48L2Rpdj5cXG48ZGl2PjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG4gcmV0dXJuIHRoaXNbJ0pTVCddO1xufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdhYm91dCcsXG5cdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXHR9LFxuXHRyZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXG5cdFx0Y29uc29sZS5sb2coJ3JlbmRlciBhYm91dCcpO1xuXG5cdFx0XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSApO1x0XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcnRpY2xlU3R1YnMgPSByZXF1aXJlKCcuLi9ibG9nLXBvc3Qtc3R1YnMuanMnKTtcbnZhciBBcnRpY2xlQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2NvbGxlY3Rpb25zL2Jsb2ctcG9zdHMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdibG9nJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb24gPSBuZXcgQXJ0aWNsZUNvbGxlY3Rpb24oKTtcblx0XHQvLyBjb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuXHRcdGlmIChmYWxzZSkge1xuXHRcdFx0Y29sbGVjdGlvbi5mZXRjaCh7XG4gIFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnN0b3BMb2FkaW5nSW5kaWNhdG9ycycpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c3RvcExvYWRpbmdJbmRpY2F0b3JzJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmFkZFN0dWJzKCk7XG5cdFx0fVxuXG5cdFx0d2luZG93LmJsb2dDID0gY29sbGVjdGlvbjtcblxuXHRcdGNvbnNvbGUubG9nKHtjb2xsZWN0aW9uOiBjb2xsZWN0aW9ufSk7XG5cdFx0XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cblxuXHRcdGlmICghdGhpcy5jaGVja1NsdWcob3B0aW9ucy5zbHVnKSkge1xuXHRcdFx0dmFyIGxhdGVzdCA9IGNvbGxlY3Rpb24uZmlyc3QoKTtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gbGF0ZXN0O1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IDA7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jdXJyZW50UmVjb3JkID0gY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gY29sbGVjdGlvbi5pbmRleE9mKHRoaXMuY3VycmVudFJlY29yZCk7XHRcdFx0XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHN0cmluZ1RvUmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlKHRoaXMuY3VycmVudFJlY29yZC5hdHRyaWJ1dGVzKTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHRpZiAob3B0aW9ucy5zbHVnICYmIHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkpIHtcblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcblx0XHR9XG5cdFxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jywge2xpbms6IHRoaXMucHJldlJvdXRlKCl9KTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlTmV4dCcsIHtsaW5rOiB0aGlzLm5leHRSb3V0ZSgpfSk7XG5cdFx0aWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdGhpcy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1x0XG5cdFx0fVxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMubmFtZXNwYWNlICk7XHRcblxuXHRcdFxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdH0sXG5cdGFkZFN0dWJzOiBmdW5jdGlvbigpe1xuXHRcdHZhciBjb2xsZWN0aW9uID0gdGhpcy5jb2xsZWN0aW9uO1xuXHRcdHZhciBpLHJlc3BvbnNlID0gYXJ0aWNsZVN0dWJzO1xuXHRcdGZvciAoaSA9IHJlc3BvbnNlLnBvc3RzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHR2YXIgcmVjb3JkID0gcmVzcG9uc2UucG9zdHNbaV07XG5cdFx0XHRpZiAoIWNvbGxlY3Rpb24ud2hlcmUoe0lEOiByZWNvcmQuSUR9KS5sZW5ndGgpIHtcblx0XHRcdFx0Y29sbGVjdGlvbi5hZGQocmVjb3JkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCgodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIGZhbHNlIDogdGhpcy5wb3NpdGlvbiArIDEpO1xuXHR9LFxuXHRnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uYXQoKHRoaXMucG9zaXRpb24gLTEgPCAwKSA/IGZhbHNlIDogdGhpcy5wb3NpdGlvbiAtIDEpO1xuXHR9LFxuXHRuZXh0Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5nZXROZXh0TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRwcmV2Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5nZXRQcmV2TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHJldHVybiAodGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBzbHVnfSkubGVuZ3RoID49IDEpO1xuXHR9LFxuXHRkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UmVjb3JkID8gdGhpcy5jdXJyZW50UmVjb3JkLmdldCgnc2x1ZycpIDogdGhpcy5jb2xsZWN0aW9uLmZpcnN0KCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJy9ibG9nLycgKyB0aGlzLmRlZmF1bHRTbHVnKCk7XG5cdH1cbn0pO1xuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuQmFja2JvbmUuVmlldy5leHRlbmQoe1xuXHRuYW1lc3BhY2U6ICdjb250YWN0Jyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6c2hvd0NvbnRlbnQnKTtcblxuXHRcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTp1cGRhdGVQcmV2Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdHNldExpc3RlbmVyczogZnVuY3Rpb24oKXtcblx0XHQvLyBcblx0fVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdG5hbWVzcGFjZTogJ2ludHJvJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5yZW5kZXIob3B0aW9ucyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0Y29uc29sZS5sb2coJ3JlbmRlcmluZyBpbnRybycpO1xuXHRcdHRoaXMuJGVsLmh0bWwodGhpcy50ZW1wbGF0ZSgpKTtcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncGFnZTpzZXROYW1lc3BhY2UnLCB0aGlzLm5hbWVzcGFjZSk7XG5cblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMuanMnKTtcbnZhciBoZWFkZXJWaWV3ID0gcmVxdWlyZSgnLi91aS9oZWFkZXIuanMnKTtcbnZhciB0cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvcGFnZS10cmFuc2l0aW9ucy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdGVsOiAnaHRtbCcsXG5cdGNvbnRlbnRFbDogJy5tYWluIC5jb250ZW50Jyxcblx0dHJhbnNpdGlvbkVsOiAnLm1haW4gLnRyYW5zaXRpb24tY29udGVudCcsXG5cdGhlYWRlcjogJy5oZWFkZXInLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbigpe1xuXG5cdFx0dmFyIHN0YXRlID0gKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+PSAxKSA/ICdjb250ZW50JyA6ICdpbnRybyc7XG5cdFx0dGhpcy5yZW5kZXIoe1xuXHRcdFx0c3RhdGU6IHN0YXRlLFxuXHRcdFx0aW50cm9Db250ZW50OiB0ZW1wbGF0ZXMuaW50cm8oKVxuXHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2l0aW9ucyA9IG5ldyB0cmFuc2l0aW9ucyh7XG5cdFx0XHRjb250YWluZXI6ICcucGFnZS13cmFwIC5tYWluJyxcblx0XHRcdGNvbnRlbnQ6ICcuY29udGVudCcsXG5cdFx0XHR0cmFuc2l0aW9uQ2xhc3M6ICcudHJhbnNpdGlvbmVyJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gdHJhbnNpdGlvbnMuaW5pdGlhbGl6ZSh7XG5cdFx0Ly8gXHRlbDogJy5wYWdlLXdyYXAgLm1haW4nLFxuXHRcdC8vIFx0bWFpbjogJy5jb250ZW50Jyxcblx0XHQvLyBcdHRyYW5zaXRpb25lcjogJy50cmFuc2l0aW9uLWNvbnRlbnQnXG5cdFx0Ly8gfSk7XG5cblx0XHR0aGlzLiRoZWFkZXIgPSAkKHRoaXMuaGVhZGVyKTtcblx0XHR0aGlzLmhlYWRlclZpZXcgPSBuZXcgaGVhZGVyVmlldyh7dGVtcGxhdGU6IHRlbXBsYXRlc1sndWkvaGVhZGVyJ119KTtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHR0aGlzLnNldExpc3RlbmVycygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnZ29Ub0N1cnJlbnRDb250ZW50Jyxcblx0XHQnY2xpY2sgLmdvLXByZXYnOiAncHJldkNvbnRlbnQnLFxuXHRcdCdjbGljayAuZ28tbmV4dCc6ICduZXh0Q29udGVudCdcblx0XHQvLyAnY2xpY2sgLnNob3ctaW50cm8nOiAnc2hvd0ludHJvJ1xuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBcdCQoJ2JvZHknKS5odG1sKHRlbXBsYXRlcy5tYXN0ZXIob3B0aW9ucykpO1xuICB9LFxuICBzaG93Q29udGVudDogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdjb250ZW50JykucmVtb3ZlQ2xhc3MoJ2ludHJvJyk7XG5cdH0sXG5cdHNob3dJbnRybzogZnVuY3Rpb24oKSB7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdpbnRybycpLnJlbW92ZUNsYXNzKCdjb250ZW50Jyk7XG5cdH0sXG5cdHNldE5hbWVzcGFjZTogZnVuY3Rpb24obmFtZXNwYWNlKSB7XHRcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9ICQudHJpbShcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uKGMpIHsgXG5cdFx0XHRcdHJldHVybiBjLmxhc3RJbmRleE9mKCdwYWdlLScsIDApICE9PSAwOyBcblx0XHRcdH0pLmpvaW4oJyAnKSArICcgcGFnZS0nICtuYW1lc3BhY2UgKTtcblx0fSxcblx0bmV4dENvbnRlbnQ6IGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnRyYW5zaXRpb25zLmRpcmVjdGlvbiA9ICduZXh0Jztcblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigncm91dGVyOm5leHRDb250ZW50Jyk7XG5cdH0sXG5cdHByZXZDb250ZW50OiBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy50cmFuc2l0aW9ucy5kaXJlY3Rpb24gPSAncHJldic7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpwcmV2Q29udGVudCcpO1xuXHR9LFxuICBnb1RvQ3VycmVudENvbnRlbnQ6IGZ1bmN0aW9uKCl7XG4gIFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3JvdXRlcjpnb1RvQ3VycmVudENvbnRlbnQnKTtcbiAgfSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdHZhciB0aGlzXyA9IHRoaXM7XG5cdFx0JCh3aW5kb3cpLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gMTE5KSB7XG5cdFx0XHRcdHRoaXNfLnRyYW5zaXRpb25zLm5leHQoKTtcblx0XHRcdH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAxMTMpIHtcblx0XHRcdFx0dGhpc18udHJhbnNpdGlvbnMucHJldigpO1x0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR2YXIgdHJhbnNpdGlvbnMgPSB0aGlzLnRyYW5zaXRpb25zO1xuXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRlbnQpe3RyYW5zaXRpb25zLnJlbmRlcihjb250ZW50KTt9XG5cblx0XHR0aGlzLmxpc3RlblRvKHdpbmRvdy5CYWNrYm9uZSwgJ3VpOnNob3dDb250ZW50JywgdGhpcy5zaG93Q29udGVudCk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTpzaG93SW50cm8nLCB0aGlzLnNob3dJbnRybyk7XG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICdwYWdlOnNldE5hbWVzcGFjZScsIHRoaXMuc2V0TmFtZXNwYWNlKTtcblxuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndHJhbnNpdGlvbjpyZW5kZXInLCByZW5kZXIpO1xuXG5cdH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHByb2plY3RTdHVicyA9IHJlcXVpcmUoJy4uL3Byb2plY3RzLXN0dWJzLmpzJyk7XG52YXIgUHJvamVjdENvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9jb2xsZWN0aW9ucy9wcm9qZWN0cy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5CYWNrYm9uZS5WaWV3LmV4dGVuZCh7XHRcblx0bmFtZXNwYWNlOiAncHJvamVjdHMnLFxuXHRpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbiA9IG5ldyBQcm9qZWN0Q29sbGVjdGlvbigpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG5cdFx0dGhpcy5hZGRTdHVicygpO1xuXHRcdHRoaXMudGVtcGxhdGUgPSBvcHRpb25zLnRlbXBsYXRlO1xuXG5cblx0XHRpZiAoIXRoaXMuY2hlY2tTbHVnKG9wdGlvbnMuc2x1ZykpIHtcblx0XHRcdHZhciBsYXRlc3QgPSBjb2xsZWN0aW9uLmZpcnN0KCk7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGxhdGVzdDtcblx0XHRcdHRoaXMucG9zaXRpb24gPSAwO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IGNvbGxlY3Rpb24ud2hlcmUoe3NsdWc6IG9wdGlvbnMuc2x1Z30pWzBdO1xuXHRcdFx0dGhpcy5wb3NpdGlvbiA9IGNvbGxlY3Rpb24uaW5kZXhPZih0aGlzLmN1cnJlbnRSZWNvcmQpO1x0XHRcdFxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRzdHJpbmdUb1JlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSh0aGlzLmN1cnJlbnRSZWNvcmQuYXR0cmlidXRlcyk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cblx0XHRpZiAob3B0aW9ucy5zbHVnICYmIHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSkpIHtcblx0XHRcdHRoaXMuY3VycmVudFJlY29yZCA9IHRoaXMuY29sbGVjdGlvbi53aGVyZSh7c2x1Zzogb3B0aW9ucy5zbHVnfSlbMF07XG5cdFx0XHR0aGlzLnBvc2l0aW9uID0gdGhpcy5jb2xsZWN0aW9uLmluZGV4T2YodGhpcy5jdXJyZW50UmVjb3JkKTtcblx0XHR9XG5cblx0XHR3aW5kb3cuQmFja2JvbmUudHJpZ2dlcigndWk6dXBkYXRlUHJldicsIHtsaW5rOiB0aGlzLnByZXZSb3V0ZSgpfSk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnVwZGF0ZU5leHQnLCB7bGluazogdGhpcy5uZXh0Um91dGUoKX0pO1xuXG5cdFx0aWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuXHRcdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3RyYW5zaXRpb246cmVuZGVyJywgdGhpcy5zdHJpbmdUb1JlbmRlcigpICk7XHRcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnN0cmluZ1RvUmVuZGVyKCkpO1x0XG5cdFx0fVxuXG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dDb250ZW50Jyk7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3BhZ2U6c2V0TmFtZXNwYWNlJywgdGhpcy5uYW1lc3BhY2UgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0c2V0TGlzdGVuZXJzOiBmdW5jdGlvbigpe1xuXHRcdC8vIFxuXHR9LFxuXHRhZGRTdHViczogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHR2YXIgaSxyZXNwb25zZSA9IHByb2plY3RTdHVicztcblx0XHRmb3IgKGkgPSByZXNwb25zZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0dmFyIHJlY29yZCA9IHJlc3BvbnNlW2ldO1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLndoZXJlKHtJRDogcmVjb3JkLklEfSkubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbGxlY3Rpb24uYWRkKHJlY29yZCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cdGdldE5leHRNb2RlbDogZnVuY3Rpb24oKXtcblx0XHR2YXIgY29sbGVjdGlvbiA9IHRoaXMuY29sbGVjdGlvbjtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5hdCgodGhpcy5wb3NpdGlvbiArMSA+IGNvbGxlY3Rpb24ubGVuZ3RoIC0xKT8gIGZhbHNlIDogdGhpcy5wb3NpdGlvbiArIDEpO1xuXHR9LFxuXHRnZXRQcmV2TW9kZWw6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIGNvbGxlY3Rpb24gPSB0aGlzLmNvbGxlY3Rpb247XG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uYXQoKHRoaXMucG9zaXRpb24gLTEgPCAwKSA/IGZhbHNlIDogdGhpcy5wb3NpdGlvbiAtIDEpO1xuXHR9LFxuXHRuZXh0Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5nZXROZXh0TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRwcmV2Um91dGU6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIG1vZGVsID0gdGhpcy5nZXRQcmV2TW9kZWwoKTtcblx0XHRyZXR1cm4gbW9kZWw/ICcjLycrIHRoaXMubmFtZXNwYWNlICsnLycgKyBtb2RlbC5nZXQoJ3NsdWcnKSA6IGZhbHNlO1xuXHR9LFxuXHRjaGVja1NsdWc6IGZ1bmN0aW9uKHNsdWcpe1xuXHRcdHJldHVybiAodGhpcy5jb2xsZWN0aW9uLndoZXJlKHtzbHVnOiBzbHVnfSkubGVuZ3RoID49IDEpO1xuXHR9LFxuXHRkZWZhdWx0U2x1ZzogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50UmVjb3JkID8gdGhpcy5jdXJyZW50UmVjb3JkLmdldCgnc2x1ZycpIDogdGhpcy5jb2xsZWN0aW9uLmZpcnN0KCkuZ2V0KCdzbHVnJyk7XG5cdH0sXG5cdGRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJy9wcm9qZWN0cy8nICsgdGhpcy5kZWZhdWx0U2x1ZygpO1xuXHR9XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gd2luZG93LkJhY2tib25lLlZpZXcuZXh0ZW5kKHtcblx0ZWw6ICcuaGVhZGVyJyxcblx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG5cdFx0dGhpcy5yZW5kZXIoe30pO1xuXHRcdHRoaXMuc2V0TGlzdGVuZXJzKCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24ob3B0aW9ucyl7XG5cdFx0dGhpcy4kZWwuaHRtbCh0aGlzLnRlbXBsYXRlKG9wdGlvbnMpKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdoZWFkZXIgcmVuZGVyZWQnKTtcblx0fSxcblx0ZXZlbnRzOiB7XG5cdFx0J2NsaWNrIC5zaG93LWNvbnRlbnQnOiAnc2hvd0NvbnRlbnQnLFxuXHRcdCdjbGljayAuc2hvdy1pbnRybyc6ICdzaG93SW50cm8nXG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbigpe1xuICBcdHdpbmRvdy5CYWNrYm9uZS50cmlnZ2VyKCd1aTpzaG93Q29udGVudCcpO1xuICB9LFxuICBzaG93SW50cm86IGZ1bmN0aW9uKCl7XG5cdFx0d2luZG93LkJhY2tib25lLnRyaWdnZXIoJ3VpOnNob3dJbnRybycpO1xuICB9LFxuICB1cGRhdGVVaVByZXY6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBwcmV2ID0gJy5nby1wcmV2JztcbiAgXHR2YXIgJHByZXYgPSB0aGlzLiRlbC5maW5kKHByZXYpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRwcmV2LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRwcmV2LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuICB1cGRhdGVVaU5leHQ6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBcdHZhciBuZXh0ID0gJy5nby1uZXh0JztcbiAgXHR2YXIgJG5leHQgPSB0aGlzLiRlbC5maW5kKG5leHQpO1xuICBcdGlmIChvcHRpb25zLmxpbmspIHtcbiAgXHRcdCRuZXh0LnJlbW92ZUNsYXNzKCdoaWRlJykuYXR0cignaHJlZicsIG9wdGlvbnMubGluayk7XG4gIFx0fSBlbHNlIHtcbiAgXHRcdCRuZXh0LmFkZENsYXNzKCdoaWRlJykuYXR0cignaHJlZicsICcjJyk7XG4gIFx0fVxuICB9LFxuXHRzZXRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXG5cdFx0dGhpcy5saXN0ZW5Ubyh3aW5kb3cuQmFja2JvbmUsICd1aTp1cGRhdGVQcmV2JywgdGhpcy51cGRhdGVVaVByZXYpO1xuXHRcdHRoaXMubGlzdGVuVG8od2luZG93LkJhY2tib25lLCAndWk6dXBkYXRlTmV4dCcsIHRoaXMudXBkYXRlVWlOZXh0KTtcblx0fVxufSk7Il19
