Ext.data.JsonP.core_event_emitter({"tagname":"class","name":"core.event.emitter","autodetected":{},"files":[{"filename":"emitter.js","href":"emitter.html#core-event-emitter"}],"extends":"core.mixin.base","members":[{"name":"displayName","tagname":"property","owner":"core.mixin.base","id":"property-displayName","meta":{"private":true,"readonly":true}},{"name":"handlers","tagname":"property","owner":"core.event.emitter","id":"property-handlers","meta":{"protected":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.mixin.base","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"constructor","tagname":"method","owner":"core.event.emitter","id":"method-constructor","meta":{}},{"name":"assert","tagname":"method","owner":"log.console","id":"method-assert","meta":{}},{"name":"debug","tagname":"method","owner":"log.console","id":"method-debug","meta":{"deprecated":{"text":"<p>An alias for <a href=\"#!/api/log.console-method-log\" rel=\"log.console-method-log\" class=\"docClass\">log</a>. This was added to improve compatibility with existing sites already using <code>debug()</code>. However, you should use <a href=\"#!/api/log.console-method-log\" rel=\"log.console-method-log\" class=\"docClass\">log</a> instead.</p>\n"}}},{"name":"dir","tagname":"method","owner":"log.console","id":"method-dir","meta":{}},{"name":"emit","tagname":"method","owner":"core.event.emitter","id":"method-emit","meta":{}},{"name":"error","tagname":"method","owner":"log.console","id":"method-error","meta":{}},{"name":"info","tagname":"method","owner":"log.console","id":"method-info","meta":{}},{"name":"log","tagname":"method","owner":"log.console","id":"method-log","meta":{}},{"name":"off","tagname":"method","owner":"core.event.emitter","id":"method-off","meta":{"chainable":true}},{"name":"on","tagname":"method","owner":"core.event.emitter","id":"method-on","meta":{"chainable":true}},{"name":"time","tagname":"method","owner":"log.console","id":"method-time","meta":{}},{"name":"timeEnd","tagname":"method","owner":"log.console","id":"method-timeEnd","meta":{}},{"name":"toString","tagname":"method","owner":"core.mixin.base","id":"method-toString","meta":{"protected":true}},{"name":"trace","tagname":"method","owner":"log.console","id":"method-trace","meta":{}},{"name":"warn","tagname":"method","owner":"log.console","id":"method-warn","meta":{}},{"name":"create","tagname":"method","owner":"core.mixin.base","id":"static-method-create","meta":{"static":true}},{"name":"extend","tagname":"method","owner":"core.mixin.base","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-core.event.emitter","short_doc":"This event module is heart of all TroopJS event-based whistles, from the API names it's aligned with Node's events mo...","classIcon":"icon-class","superclasses":["core.mixin.base"],"subclasses":["core.component.base","core.pubsub.hub"],"mixedInto":[],"implementedBy":[],"mixins":[],"implements":["compose.mixin"],"parentMixins":["log.logger"],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><strong>core.event.emitter</strong></div></div><h4>Implements</h4><div class='dependency'><a href='#!/api/compose.mixin' rel='compose.mixin' class='docClass'>compose.mixin</a></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/log.logger' rel='log.logger' class='docClass'>log.logger</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.component.base' rel='core.component.base' class='docClass'>core.component.base</a></div><div class='dependency'><a href='#!/api/core.pubsub.hub' rel='core.pubsub.hub' class='docClass'>core.pubsub.hub</a></div><h4>Files</h4><div class='dependency'><a href='source/emitter.html#core-event-emitter' target='_blank'>emitter.js</a></div></pre><div class='doc-contents'><p>This event module is heart of all TroopJS event-based whistles, from the API names it's aligned with Node's events module,\nwhile behind the regularity it's powered by a highly customizable <strong>event runner</strong> mechanism, which makes it supports for both:</p>\n\n<ul>\n<li><strong>synchronous event</strong>: all your event handlers are run in a single loop.</li>\n<li><strong>async event with promise</strong>: you can return a promise where the next handler will be called upon the\ncompletion of that promise.</li>\n</ul>\n\n\n<p>Event runner can even determinate the <strong>parameters passing</strong> strategy among handlers, which forms in two flavours:</p>\n\n<ul>\n<li>sequence: where each handler receives the arguments passed to <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a>.</li>\n<li>pipeline: where a handler receives the return value of the previous one.</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-displayName' class='name expandable'>displayName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/mixin/base&quot;</code></p></div></div></div><div id='property-handlers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-property-handlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-property-handlers' class='name expandable'>handlers</a> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Handlers attached to this component, addressable either by key or index</p>\n</div><div class='long'><p>Handlers attached to this component, addressable either by key or index</p>\n</div></div></div><div id='property-instanceCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-instanceCount' class='name expandable'>instanceCount</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-constructor' class='name expandable'>core.event.emitter</a>( <span class='pre'></span> ) : <a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new component instance ...</div><div class='long'><p>Creates a new component instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.mixin.base-method-constructor\" rel=\"core.mixin.base-method-constructor\" class=\"docClass\">core.mixin.base.constructor</a></p></div></div></div><div id='method-assert' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-assert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-assert' class='name expandable'>assert</a>( <span class='pre'>expression, payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message and stack trace to the log if first argument is false ...</div><div class='long'><p>Writes a message and stack trace to the log if first argument is false</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>Conditional expression</p>\n</div></li><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-debug' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-debug' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-debug' class='name expandable'>debug</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Writes a message to the log with level debug ...</div><div class='long'><p>Writes a message to the log with level <code>debug</code></p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>An alias for <a href=\"#!/api/log.console-method-log\" rel=\"log.console-method-log\" class=\"docClass\">log</a>. This was added to improve compatibility with existing sites already using <code>debug()</code>. However, you should use <a href=\"#!/api/log.console-method-log\" rel=\"log.console-method-log\" class=\"docClass\">log</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-dir' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-dir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-dir' class='name expandable'>dir</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Displays an interactive list of the properties of the specified JavaScript object. ...</div><div class='long'><p>Displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing that let you see the contents of child objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A JavaScript object whose properties should be output</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-error' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-error' class='name expandable'>error</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level error ...</div><div class='long'><p>Writes a message to the log with level <code>error</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-info' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-info' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-info' class='name expandable'>info</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level info. ...</div><div class='long'><p>Writes a message to the log with level <code>info</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-log' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-log' class='name expandable'>log</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level log ...</div><div class='long'><p>Writes a message to the log with level <code>log</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-off' class='name expandable'>off</a>( <span class='pre'>type, [context], [callback]</span> ) : <a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>context</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The context to scope the callback to remove</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The event listener function to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a></span><div class='sub-desc'><p>Instance of this class.</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-on' class='name expandable'>on</a>( <span class='pre'>type, context, callback, [data]</span> ) : <a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The context to scope the callback to.</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The event listener function.</p>\n</div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.event.emitter\" rel=\"core.event.emitter\" class=\"docClass\">core.event.emitter</a></span><div class='sub-desc'><p>Instance of this class.</p>\n</div></li></ul></div></div></div><div id='method-time' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-time' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-time' class='name expandable'>time</a>( <span class='pre'>timerName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a timer you can use to track how long an operation takes. ...</div><div class='long'><p>Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page.\nWhen you call <a href=\"#!/api/log.console-method-timeEnd\" rel=\"log.console-method-timeEnd\" class=\"docClass\">timeEnd</a> with the same name, the log will output the time, in milliseconds, that elapsed since the timer was started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name to give the new timer. This will identify the timer; use the same name when calling <a href=\"#!/api/log.console-method-timeEnd\" rel=\"log.console-method-timeEnd\" class=\"docClass\">timeEnd</a> to stop the timer and get the time written to the log</p>\n</div></li></ul></div></div></div><div id='method-timeEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-timeEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-timeEnd' class='name expandable'>timeEnd</a>( <span class='pre'>timerName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops a timer that was previously started by calling time. ...</div><div class='long'><p>Stops a timer that was previously started by calling <a href=\"#!/api/log.console-method-time\" rel=\"log.console-method-time\" class=\"docClass\">time</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the timer to stop. Once stopped, the elapsed time is automatically written to the log</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p><a href=\"#!/api/core.mixin.base-property-displayName\" rel=\"core.mixin.base-property-displayName\" class=\"docClass\">displayName</a><code>@</code><a href=\"#!/api/core.mixin.base-property-instanceCount\" rel=\"core.mixin.base-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div><div id='method-trace' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-trace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-trace' class='name expandable'>trace</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Outputs a stack trace to the log. ...</div><div class='long'><p>Outputs a stack trace to the log.</p>\n</div></div></div><div id='method-warn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.console' rel='log.console' class='defined-in docClass'>log.console</a><br/><a href='source/console.html#log-console-method-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.console-method-warn' class='name expandable'>warn</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level warn ...</div><div class='long'><p>Writes a message to the log with level <code>warn</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-create' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-static-method-create' class='name expandable'>create</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/core.mixin.base\" rel=\"core.mixin.base\" class=\"docClass\">core.mixin.base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.mixin.base\" rel=\"core.mixin.base\" class=\"docClass\">core.mixin.base</a></span><div class='sub-desc'><p>Instance of this class</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.mixin-static-method-create\" rel=\"compose.mixin-static-method-create\" class=\"docClass\">compose.mixin.create</a></p></div></div></div><div id='static-method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/core.mixin.base\" rel=\"core.mixin.base\" class=\"docClass\">core.mixin.base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extend this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Extend this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.mixin.base\" rel=\"core.mixin.base\" class=\"docClass\">core.mixin.base</a></span><div class='sub-desc'><p>The extended subclass</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.mixin-static-method-extend\" rel=\"compose.mixin-static-method-extend\" class=\"docClass\">compose.mixin.extend</a></p></div></div></div></div></div></div></div>","meta":{}});