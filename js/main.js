// Function to update viewport dimensions
function updateViewportDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById("viewport").textContent = `Viewport Width: ${width}px, Height: ${height}px`;
}

// Initial display of viewport dimensions
updateViewportDimensions();

// Add an event listener for window resize to update dimensions dynamically
window.addEventListener("resize", updateViewportDimensions);
