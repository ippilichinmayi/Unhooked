
function hideDistractions() {
  const selectors = [
    'ytd-comments',
    'ytd-item-section-renderer#comments',
    'ytm-comment-section-renderer',
    '#secondary-inner',
    'ytd-watch-next-secondary-results-renderer'
  ];

  selectors.forEach((selector) => {
    const item = document.querySelector(selector);
    if (item) {
      item.style.display = 'none';
    }
  });
}

hideDistractions();

const observer = new MutationObserver(() => {
  hideDistractions();
});

if (document.body) {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

