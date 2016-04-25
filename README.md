# jQuery.tabs.js
Simple but effective jQuery plugin to display tab navigation on custom markup

## Usage ##
Let's assume the following markup

    <div class="tabbed-content">
        <ul class="tab-nav">
            <li data-target="div.raw">Raw</li>
            <li data-target="div.html">HTML</li>
        </ul>
	<div class="raw tab-content">
          <!--Content-->
        </div>
        <div class="html tab-content">
          <!--Content-->
        </div>
     </div>

Then the following JavaScript code :

    $('div.tabbed-content').tabs();

And that's it! 

The only mandatory thing about the markup here is to have your DOM elements representing the tabs within the tab container (the element on which you initialize the plugin) plus an attribute named *data-target* on each tab element containing the  jQuery selector to it's target.

Everything else is pure HTML logic, you can use whatever markup, or tags you want for both tabs and tabs content containers, though tabs content containers should be block elements you can still put your tab content in a *span* element  and put a *display: block;* on it if that's the kind of things you're into.

### Credits ###

Inspired by http://red-team-design.com/google-play-minimal-tabs-with-css3-jquery/

#### Licence ####
[MIT](https://opensource.org/licenses/MIT)
