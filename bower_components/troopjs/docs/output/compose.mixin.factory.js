Ext.data.JsonP.compose_mixin_factory({"tagname":"class","name":"compose.mixin.factory","autodetected":{},"files":[{"filename":"factory.js","href":"factory.html#compose-mixin-factory"}],"mixins":["compose.mixin.config"],"static":true,"members":[{"name":"pragmas","tagname":"cfg","owner":"compose.mixin.config","id":"cfg-pragmas","meta":{"protected":true}},{"name":"constructor","tagname":"method","owner":"compose.mixin.factory","id":"static-method-constructor","meta":{"static":true}},{"name":"create","tagname":"method","owner":"compose.mixin.factory","id":"static-method-create","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"static-class-compose.mixin.factory","short_doc":"The factory module establishes the fundamental object composition in TroopJS:\n\n\nFirst-class mixin based on prototype,...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"implementedBy":[],"implements":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/compose.mixin.config' rel='compose.mixin.config' class='docClass'>compose.mixin.config</a></div><h4>Files</h4><div class='dependency'><a href='source/factory.html#compose-mixin-factory' target='_blank'>factory.js</a></div></pre><div class='doc-contents'><p>The factory module establishes the fundamental object composition in TroopJS:</p>\n\n<ul>\n<li><strong>First-class mixin</strong> based on prototype, that supports deterministic multiple inheritance that:\n\n<ul>\n<li>Eliminating the frustrating issues from multi-tiered, single-rooted ancestry;</li>\n<li>Avoid occasionally unexpected modification from prototype chain, from the prototype-based inheritance;</li>\n<li>Reduced the function creation overhead in classical inheritance pattern;</li>\n</ul>\n</li>\n<li><strong>Advice decorator</strong> for method overriding without the need for super call;</li>\n<li><strong>Declarative</strong> \"special\" functions preserved for sending messages to object, that never overrides parent ones.</li>\n</ul>\n\n\n<p>Basically Factory takes objects or constructors as arguments and returns a new constructor, the arguments are\ncomposed from left to right, later arguments taken precedence (overriding) former arguments,\nand any functions be executed on construction from left to right.</p>\n\n<pre><code>    // Define the constructor.\n    var MyClass = Factory(function() {\n        // initialize the object...\n        this.baz = \"quz\";\n    },\n    {\n        foo: \"bar\",\n        do: function(){\n            return \"work\";\n        },\n\n        // a special handler for \"signal\" type with value \"foo\".\n        \"signal/foo\": function() {}\n\n    });\n\n    var MyBehavior =  Factory({\n        somethingElse: function(){}\n    });\n\n    // SubClass extends from MyClass and mixin MyBehavior\n    var SubClass = MyClass.extend(function() {\n        // initialize the object...\n    },\n\n    MyBehavior,\n    {\n        // Overwrite parent.\n        foo: \"baz\",\n\n        // Override parent with after call.\n        do: Factory.after(function(retval) {\n            return retval + \",\" + \"play\";\n        }),\n\n        move: function(){}\n    });\n\n    // Instantiate the subClass.\n    var instance = SubClass.create({\n        evenMore: function(){}\n    });\n\n    // \"baz\"\n    instance.foo;\n\n    // \"quz\"\n    instance.baz;\n\n    // \"work play\"\n    instance.do();\n\n    instance.somethingElse();\n    instance.evenMore();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-pragmas' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/compose.mixin.config' rel='compose.mixin.config' class='defined-in docClass'>compose.mixin.config</a><br/><a href='source/config.html#compose-mixin-config-cfg-pragmas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.mixin.config-cfg-pragmas' class='name expandable'>pragmas</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Pragmas used to rewrite methods before processing ...</div><div class='long'><p>Pragmas used to rewrite methods before processing</p>\n<p>Defaults to: <code>[]</code></p><ul><li><span class='pre'>pattern</span> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><div class='sub-desc'><p>Matching pattern</p>\n</div></li><li><span class='pre'>replace</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Replacement String or function</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='compose.mixin.factory'>compose.mixin.factory</span><br/><a href='source/factory.html#compose-mixin-factory-static-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.mixin.factory-static-method-constructor' class='name expandable'>compose.mixin.factory</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/compose.mixin\" rel=\"compose.mixin\" class=\"docClass\">compose.mixin</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a new constructor or to extend an existing one from multiple others constructors/objects. ...</div><div class='long'><p>Create a new constructor or to extend an existing one from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/compose.mixin\" rel=\"compose.mixin\" class=\"docClass\">compose.mixin</a></span><div class='sub-desc'><p>Object class created out of the mixin of constructors and objects.</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='compose.mixin.factory'>compose.mixin.factory</span><br/><a href='source/factory.html#compose-mixin-factory-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.mixin.factory-static-method-create' class='name expandable'>create</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Object instance created out of the mixin of constructors and objects.</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"static":true}});