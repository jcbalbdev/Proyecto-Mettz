// Toast global reutilizable (estilos en global.css → .site-toast)
let toastEl: HTMLDivElement | null = null;
let hideTimeout: ReturnType<typeof setTimeout>;

export function showToast(message: string) {
  if (!toastEl) {
    toastEl = document.createElement("div");
    toastEl.className = "site-toast";
    toastEl.setAttribute("role", "status");
    toastEl.setAttribute("aria-live", "polite");
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  // Reinicia la transición si el toast ya está visible
  toastEl.classList.remove("visible");
  void toastEl.offsetWidth;
  toastEl.classList.add("visible");
  clearTimeout(hideTimeout);
  hideTimeout = setTimeout(() => toastEl?.classList.remove("visible"), 2800);
}
