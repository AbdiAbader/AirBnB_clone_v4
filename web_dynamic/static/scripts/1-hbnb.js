#!/usr/bin/node

const $ = window.$;
$(document).ready(function () {
    const amenities = {};
    $('input[type=checkbox]').click(function () {
        if ($(this).is(':checked')) {
        amenities[$(this).data('id')] = $(this).data('name');
        } else {
        delete amenities[$(this).data('id')];
        }
        if (Object.values(amenities).length > 0) {
        $('div.amenities h4').text(Object.values(amenities).join(', '));
        } else {
        $('div.amenities h4').html('&nbsp;');
        }
    });
    }
);
