(function () {
  const modal = document.getElementById("contact-modal");
  if (!modal || modal.dataset.bound === "true") return;
  modal.dataset.bound = "true";

  const openers = document.querySelectorAll("[data-contact-open]");
  const closers = modal.querySelectorAll("[data-contact-close]");
  const form = modal.querySelector(".contact-form");
  let lastActive = null;

  function openModal() {
    lastActive = document.activeElement;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("contact-modal-open");
    const firstField = form?.querySelector("input, textarea");
    firstField?.focus();
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("contact-modal-open");
    lastActive?.focus?.();
  }

  openers.forEach((btn) => btn.addEventListener("click", openModal));
  closers.forEach((el) => el.addEventListener("click", closeModal));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
})();
