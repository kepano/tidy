javascript:(function(){
  const url = window.location.href;
  const tidyUrl = url.split('?')[0];
  navigator.clipboard.writeText(tidyUrl).then(function() {
    window.location.href = tidyUrl;
  }).catch(function() {
    window.location.href = tidyUrl;
  });
})();