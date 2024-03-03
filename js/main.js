document.addEventListener("DOMContentLoaded", () => {
  // Load initial content for header, aside, and footer
  loadContent("includes/top-cta.html", "topCtaContent");
  loadContent("includes/header.html", "headerContent");
  loadContent("includes/footer.html", "footerContent");
  loadContent("includes/cards.html", "get-started");
  loadContent("includes/map.html", "map");

  // You can add event listeners or additional functionality here
});

const loadContent = async (page, targetElementId) => {
  const targetElement = document.getElementById(targetElementId);

  try {
    // Fetch and load content dynamically
    const response = await fetch(page);
    const html = await response.text();
    targetElement.innerHTML = html;
  } catch (error) {
    console.error(`Error loading content for ${targetElementId}:`, error);
  }
};
