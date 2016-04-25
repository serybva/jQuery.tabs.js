
/*
* Simple jQuery plugin to display tab navigation on targeted element.
*
* Inspired by http://red-team-design.com/google-play-minimal-tabs-with-css3-jquery/
*
* Author Sébastien Vray <sebastien@serybva.com>
*
* Copyright (c) 2016 Sébastien Vray <sebastien@serybva.com> https://github.com/serybva
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"),
* to deal in the Software without restriction, including without
* limitation the rights to use, copy, modify, merge, publish, distribute,
* sublicense, and/or sell copies of the Software,
* and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
* PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
*/
(function($, window) {

    function Tabs(target, options) {
        options = options || {};
        this.$target = $(target);
        this.$buttons = this.$target.find('[data-target]');
        this.hideAll();
        if (this.$buttons.filter('[data-on]').length === 0) {
            $(this.$buttons.filter(':first-child').attr('data-target')).show().addClass('on');
            this.$buttons.filter(':first-child').addClass('on');
        }
        this.$buttons.each(function(index, button) {
            $button = $(button);
            $button.on('click', function(e) {
                this.$buttons.filter('[data-on]').removeProp('data-on');
                this.hideAll();
                this.$buttons.removeClass('on');
                $(e.currentTarget).addClass('on');
                this.$target.find($(e.currentTarget).attr('data-target')).fadeIn().removeClass('on').addClass('on');
            }.bind(this));
        }.bind(this));
    }

    Tabs.prototype.hash = function() {
        this.$buttons.each(function(index, button) {
            $button = $(button);
            hash = parseInt(Math.random() * Math.pow(10, 18));
            while (this.$buttons.filter('[data-hash="'+hash+'"]').length > 0) {
                hash = parseInt(Math.random() * Math.pow(10, 18));
            }
            $button.attr('data-hash', hash);
        }.bind(this));
    }

    Tabs.prototype.hideAll = function() {
        if (typeof(this.$buttons) !== 'undefined') {
            this.$buttons.each(function(index, button) {
                $button = $(button);
                if (!$button.prop('data-on')) {
                    this.$target.find($button.attr('data-target')).hide();
                } else {
                    $button.removeClass('on').addClass('on');
                }
            }.bind(this));
        }
    }

    $.fn.tabs = function(options) {
        $(this).each(function() {//Loop on each tav navigation targeted element
            //One instance per target so it will act as a namespace
            new Tabs(this, options);
        });
    };

    window.jQueryTabs = Tabs;
})($, window);
