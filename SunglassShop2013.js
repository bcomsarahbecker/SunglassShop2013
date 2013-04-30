/**
 * User: u029337
 * Date: 4/18/13
 * Time: 5:29 PM
 * Sunglass Shop 2013 jquery/javascript file
 */

var CatEyeIMALink = baseServerURL + '/shop/jewelry-accessories/cat-eye?id=20024';
var ShieldIMAIMALink = baseServerURL + '/shop/jewelry-accessories/shield?id=20025';
var OversizedIMALink = baseServerURL + '/shop/jewelry-accessories/oversized?id=21104';
var WayfarerIMALink = baseServerURL + '/shop/jewelry-accessories/wayfarer?id=1000091';
var PolarizedIMALink = baseServerURL + '/shop/jewelry-accessories/all-sunglasses?id=4520#!fn=LENS_TYPE%3DPolarized%26sortBy%3DORIGINAL%26productsPerPage%3D96';
var AviatorIMALink = baseServerURL + '/shop/jewelry-accessories/aviator?id=4522';

mapDomCmArray = [];



$(function() {
    initCoremetrics();

    $('#SunglassShop2013 map .sun_bottommenu').mouseover(function(){
        if ($('.imageoverlay').length != 0)
            $('.imageoverlay').remove();

        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();

        var divid = this.id + 'OverlayDiv';
        var classid = this.id + 'hover';

        var insertDiv = '<div id="';
        insertDiv += divid;
        insertDiv += '" class="menuoverlay ' + classid + '"></div>';

        $('#SunglassShop2013').append(insertDiv);
    });

    $('#SunglassShop2013 map .sun_bottommenu').mouseout(function(evt){
        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();
        evt.stopImmediatePropagation();
        return false;
    });

    $('#SunglassShop2013 map .sun_bottomimage').mouseover(function(evt){
        if ($('.menuoverlay').length != 0)
            $('.menuoverlay').remove();

        if ($('.imageoverlay').length != 0)
            $('.imageoverlay').remove();

        var odiv = this.id + 'OverlayDiv';
        var oclass = this.id + 'Overlay';
        var tlink = this.id + 'Link';

        var insertDiv = '<a href="' + window[tlink] + '">';
        insertDiv += '<div id="' + odiv;
        insertDiv += '" class="' + 'imageoverlay ' + oclass + '"></div></a>';

        $('#SunglassShop2013').append(insertDiv);
        evt.stopImmediatePropagation();
        return false;
    });

    function mapDomToCoremetricsTags(){
        mapDomCmArray.push(new mapDomCmItem('SunglassShop2013', 'spring13_sunglass_shop--hp'));
        mapDomCmArray.push(new mapDomCmItem('DiorIMA', 'top_nav--dior'));
        mapDomCmArray.push(new mapDomCmItem('GucciIMA', 'top_nav--gucci'));
        mapDomCmArray.push(new mapDomCmItem('PradaIMA', 'top_nav--prada'));
        mapDomCmArray.push(new mapDomCmItem('RayBanIMA', 'top_nav--rayban'));
        mapDomCmArray.push(new mapDomCmItem('TomFordIMA', 'top_nav--tomford'));

        mapDomCmArray.push(new mapDomCmItem('CatEyeIMA', 'cat-eye'));
        mapDomCmArray.push(new mapDomCmItem('ShieldIMA', 'shield'));
        mapDomCmArray.push(new mapDomCmItem('OversizedIMA', 'oversized'));
        mapDomCmArray.push(new mapDomCmItem('WayfarerIMA', 'wayfarer'));
        mapDomCmArray.push(new mapDomCmItem('PolarizedIMA', 'polarized'));
        mapDomCmArray.push(new mapDomCmItem('AviatorIMA', 'aviator'));
    };

    function initCoremetrics (){
        mapDomToCoremetricsTags();
        BLOOMIES.coremetrics.cmCreatePageviewTag('spring13_sunglass_shop--hp', 'spring13_sunglass_shop', '', '');

        $('#map1 area').click (function(event){
            BLOOMIES.coremetrics.cmCreatePageElementTag(mapDomToCoremetricksLookup(this.id), 'spring13_sunglass_shop');
        });

        $('#map2 area').click (function(event){
            BLOOMIES.coremetrics.cmCreatePageElementTag(mapDomToCoremetricksLookup(this.id), 'spring13_sunglass_shop--hp');
        });
    };
});

