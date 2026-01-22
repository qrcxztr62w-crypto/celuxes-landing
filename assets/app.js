const toast = document.querySelector(".toast");
const toastTriggers = document.querySelectorAll("[data-toast]");
let toastTimeout;

const showToast = () => {
  if (!toast) return;
  toast.classList.add("is-visible");
  toast.setAttribute("aria-hidden", "false");
  clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    toast.setAttribute("aria-hidden", "true");
  }, 2400);
};

toastTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    showToast();
  });
});
