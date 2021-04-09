$(document).ready(function () {
  // FETCHING DATA FROM JSON FILE
  $.getJSON("https://2tihub.xyz/json/linux.json",
  function (data) {
    var fetchJSON = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {

      // CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      fetchJSON += '<div class="row">';
      fetchJSON += '<div class="col-lg-8 col-md-10 mx-auto">';
      fetchJSON += '<div class="post-preview">';
      fetchJSON += '<a href="https://linux.2tihub.xyz/' + value.referral + '">';
      fetchJSON += '<h2 class="post-title"><i class="' + value.icon + '"></i> ' + value.subject + '</h2>';
      fetchJSON += '<h3 class="post-subtitle">' + value.description + '</h3>';
      fetchJSON += '</a>';
      fetchJSON += '<p class="post-meta">' + value.date + '</p>';
      fetchJSON += '</div>';
      fetchJSON += '</div>';
      fetchJSON += '</div>';
      fetchJSON += '<hr>';
    });
    // INSERTING ROWS INTO CONTAINER 
    $('#kontener').append(fetchJSON);
  });
});
