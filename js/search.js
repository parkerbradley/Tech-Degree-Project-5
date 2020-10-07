function getUserSearch() {
// captures the user's search query and stores it in a normalized variable
  let searchInput = document.getElementById('search').value;
  let searchNormalized = searchInput.toLowerCase();

//captures the caption and stores it in a normalized variable
  let gallery = document.querySelectorAll(".gallery a");
  for (i = 0; i < gallery.length; i++) {
    let imageCaptionText = gallery[i].getAttribute('data-caption');
    let captionTextNormalized = imageCaptionText.toLowerCase();
//checks if user's search query is in the data-caption and hides the <a> if it does not
    if (captionTextNormalized.includes(searchInput)) {
      gallery[i].style.display = '';
    } else {
      gallery[i].style.display = 'none';
    }
  }
}
