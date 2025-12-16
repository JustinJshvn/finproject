(function () {
  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
  }

  window.toggleSidebar = function () {
    document.body.classList.toggle("sidebar-open");
  };

  // Close when tapping overlay
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("sidebar-open")) return;
    if (e.target && e.target.closest && e.target.closest(".sidebar")) return;
    if (e.target && e.target.closest && e.target.closest(".hamburger")) return;
    closeSidebar();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  // If resized to desktop, ensure sidebar state doesn't leave body stuck
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeSidebar();
  });
})();