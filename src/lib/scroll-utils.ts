
/**
 * Smoothly scrolls to a specific element by ID
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top (default: 80px for header)
 */
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/**
 * Sets up listeners for scroll-to links that use the format href="#section-id"
 */
export const setupScrollListeners = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href')?.substring(1);
      if (targetId) {
        scrollToElement(targetId);
      }
    });
  });
};
