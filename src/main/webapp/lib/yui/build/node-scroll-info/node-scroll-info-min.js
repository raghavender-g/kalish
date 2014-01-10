/*
YUI 3.7.2 (build 5639)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("node-scroll-info",function(e,t){var n="scroll",r="scrollDown",i="scrollLeft",s="scrollRight",o="scrollUp",u="scrollToBottom",a="scrollToLeft",f="scrollToRight",l="scrollToTop";e.Plugin.ScrollInfo=e.Base.create("scrollInfoPlugin",e.Plugin.Base,[],{initializer:function(e){this._host=e.host,this._hostIsBody=this._host.get("nodeName").toLowerCase()==="body",this._scrollDelay=this.get("scrollDelay"),this._scrollMargin=this.get("scrollMargin"),this._scrollNode=this._getScrollNode(),this.refreshDimensions(),this._lastScroll=this.getScrollInfo(),this._bind()},destructor:function(){(new e.EventHandle(this._events)).detach(),delete this._events},getOffscreenNodes:function(t,n){typeof n=="undefined"&&(n=this._scrollMargin);var r=this._lastScroll,i=this._host.all(t||"*"),s=r.scrollBottom+n,o=r.scrollLeft-n,u=r.scrollRight+n,a=r.scrollTop-n,f=this;return i.filter(function(t){var n=e.DOM.getXY(t),r=n[0]-f._left,i=n[1]-f._top,l,c;return r>=o&&r<u&&i>=a&&i<s?!1:(l=i+t.offsetHeight,c=r+t.offsetWidth,c<u&&c>=o&&l<s&&l>=a?!1:!0)})},getOnscreenNodes:function(t,n){typeof n=="undefined"&&(n=this._scrollMargin);var r=this._lastScroll,i=this._host.all(t||"*"),s=r.scrollBottom+n,o=r.scrollLeft-n,u=r.scrollRight+n,a=r.scrollTop-n,f=this;return i.filter(function(t){var n=e.DOM.getXY(t),r=n[0]-f._left,i=n[1]-f._top,l,c;return r>=o&&r<u&&i>=a&&i<s?!0:(l=i+t.offsetHeight,c=r+t.offsetWidth,c<u&&c>=o&&l<s&&l>=a?!0:!1)})},getScrollInfo:function(){var e=this._scrollNode,t=this._lastScroll,n=this._scrollMargin,r=e.scrollLeft,i=e.scrollHeight,s=e.scrollTop,o=e.scrollWidth,u=s+this._height,a=r+this._width;return{atBottom:u>i-n,atLeft:r<n,atRight:a>o-n,atTop:s<n,isScrollDown:t&&s>t.scrollTop,isScrollLeft:t&&r<t.scrollLeft,isScrollRight:t&&r>t.scrollLeft,isScrollUp:t&&s<t.scrollTop,scrollBottom:u,scrollHeight:i,scrollLeft:r,scrollRight:a,scrollTop:s,scrollWidth:o}},refreshDimensions:function(){var t=this._hostIsBody,n=t&&e.UA.ios,r=e.config.win,i;t&&e.UA.webkit?i=e.config.doc.documentElement:i=this._scrollNode,this._height=n?r.innerHeight:i.clientHeight,this._left=i.offsetLeft,this._top=i.offsetTop,this._width=n?r.innerWidth:i.clientWidth},_bind:function(){var t=e.one("win");this._events=[this.after({scrollDelayChange:this._afterScrollDelayChange,scrollMarginChange:this._afterScrollMarginChange}),t.on("windowresize",this._afterResize,this),(this._hostIsBody?t:this._host).after("scroll",this._afterScroll,this)]},_getScrollNode:function(){return this._hostIsBody&&!e.UA.webkit?e.config.doc.documentElement:e.Node.getDOMNode(this._host)},_triggerScroll:function(t){var c=this.getScrollInfo(),h=e.merge(t,c),p=this._lastScroll;this._lastScroll=c,this.fire(n,h),c.isScrollLeft?this.fire(i,h):c.isScrollRight&&this.fire(s,h),c.isScrollUp?this.fire(o,h):c.isScrollDown&&this.fire(r,h),c.atBottom&&(!p.atBottom||c.scrollHeight>p.scrollHeight)&&this.fire(u,h),c.atLeft&&!p.atLeft&&this.fire(a,h),c.atRight&&(!p.atRight||c.scrollWidth>p.scrollWidth)&&this.fire(f,h),c.atTop&&!p.atTop&&this.fire(l,h)},_afterResize:function(e){this.refreshDimensions()},_afterScroll:function(e){var t=this;clearTimeout(this._scrollTimeout),this._scrollTimeout=setTimeout(function(){t._triggerScroll(e)},this._scrollDelay)},_afterScrollDelayChange:function(e){this._scrollDelay=e.newVal},_afterScrollMarginChange:function(e){this._scrollMargin=e.newVal}},{NS:"scrollInfo",ATTRS:{scrollDelay:{value:50},scrollMargin:{value:50}}})},"3.7.2",{requires:["base-build","dom-screen","event-resize","node-pluginhost","plugin"]});
