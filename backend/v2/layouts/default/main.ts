// import NotificationCenter from "../../client/NotificationCenter";
require('framework7')
declare var Dom7:any
declare var Framework7:any
declare var Template7:any
declare var myApp:any
declare var mainViewProps:any
declare var appProps:any
declare var fireEvent:any




var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

Template7.global = {
    android: isAndroid,
    ios: isIos
};

var $$ = Dom7;

appProps = {
    template7Pages: true,
    debug:false
};

mainViewProps = {domCache: true}

if (isIos) {

    var elements =  Dom7('head').children("link[device-type='material']")
    for(var i = 0 ; i<elements.length;i++){
        elements[i].parentNode.removeChild(elements[i])
    }
    mainViewProps["dynamicNavbar"] = true;
    $$(".navbar.android .navbar-inner").each(function() {
        $$(this).closest(".view").find(".navbar.ios").append($$(this));
    });
    $$(".navbar.android").remove();
    $$(".navbar.ios").show();
    $$('body').addClass('ios')
} else {
    var elements =  Dom7('head').children("link[device-type='ios']")
    for(var i = 0 ; i<elements.length;i++){
        elements[i].parentNode.removeChild(elements[i])
    }
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    $$('.view .page').addClass('toolbar-fixed');
    appProps["material"] = true;
    mainViewProps["dynamicNavbar"] = false;
    $$(".navbar.android .navbar-inner.cached").removeClass("cached")
    $$('body').addClass('android')
}


Framework7.prototype.plugins.debug = function (app, params) {
    // exit if not enabled
    if (!params) return;

    return {
        hooks: {
            appInit: function () {
                console.log ('appInit');
            },
            navbarInit: function (navbar, pageData) {
                console.log('navbarInit', navbar, pageData);
            },
            pageInit: function (pageData) {
                console.log('pageInit', pageData);
            },
            pageBeforeInit: function (pageData) {
                console.log('pageBeforeInit', pageData);
            },
            pageBeforeAnimation: function (pageData) {
                console.log('pageBeforeAnimation', pageData);
            },
            pageAfterAnimation: function (pageData) {
                console.log('pageAfterAnimation', pageData);
                // NotificationCenter.sharedInstance.emit('pageAfterAnimation',pageData)
            },
            pageBeforeRemove: function (pageData) {
                console.log('pageBeforeRemove', pageData);
            },
            addView: function (view) {
                console.log('addView', view);
            },
            loadPage: function (view, url, content) {
                console.log('loadPage', view, url, content);
            },
            goBack: function (view, url, preloadOnly) {
                console.log('goBack', view, url, preloadOnly);
            },
            swipePanelSetTransform: function (views, panel, percentage) {
                console.log('swipePanelSetTransform', views, panel, percentage);
            }
        }
    };
};

myApp = new Framework7(appProps);

// let eventHandler:{[key:string]:CommandProtocol} = {
//     "push": new PushReceiver()
// }

fireEvent =  function (event:string,args:any){
    // eventHandler[event] ? eventHandler[event].execute(args) : null
    // NotificationCenter.sharedInstance.emit(event,args)
    return {ok:"true"}
}


// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});