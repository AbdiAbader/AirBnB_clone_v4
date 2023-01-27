$(function () {
    const amenityDict = {};
    $('input[type="checkbox"]').change(function () {
        if (this.checked) {
        amenityDict[$(this).data('id')] = $(this).data('name');
        } else {
        delete amenityDict[$(this).data('id')];
        }
        const amenityList = Object.values(amenityDict);
        if (amenityList.length > 0) {
        $('.amenities h4').text(amenityList.join(', '));
        } else {
        $('.amenities h4').html('&nbsp;');
        }
    });
    $.get('http://0.0.0.0:5000/api/v1/status/', function (data, textStatus) {
        if (textStatus === 'success') {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
        }
    }
    );
    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5000/api/v1/status/',
        data: '{}',
        contentType: 'application/json',
        success: function (data) {
        if (data.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
        }
    }
    ); 
}
);
