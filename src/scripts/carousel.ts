// Carrusel horizontal con scroll orgánico: flechas con easing suave,
// arrastre con el mouse e inercia al soltar (en táctil se usa el momentum nativo).
export interface CarouselControls {
  prevBtn?: HTMLElement | null;
  nextBtn?: HTMLElement | null;
}

export function initOrganicCarousel(
  container: HTMLElement,
  { prevBtn, nextBtn }: CarouselControls = {},
) {
  let animationId = 0;

  // Desplazamiento animado con ease-out cúbico para las flechas
  function glideTo(target: number) {
    cancelAnimationFrame(animationId);
    const start = container.scrollLeft;
    const max = container.scrollWidth - container.clientWidth;
    const distance = Math.max(0, Math.min(target, max)) - start;
    if (Math.abs(distance) < 1) return;

    const duration = 700;
    const startTime = performance.now();

    function frame(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      container.scrollLeft = start + distance * eased;
      if (progress < 1) animationId = requestAnimationFrame(frame);
    }
    animationId = requestAnimationFrame(frame);
  }

  const stepSize = () => container.clientWidth * 0.75;
  prevBtn?.addEventListener("click", () => glideTo(container.scrollLeft - stepSize()));
  nextBtn?.addEventListener("click", () => glideTo(container.scrollLeft + stepSize()));

  // Arrastre con inercia (solo mouse: el touch ya tiene momentum nativo)
  let dragging = false;
  let dragged = false;
  let startX = 0;
  let lastX = 0;
  let lastTime = 0;
  let velocity = 0; // px/s

  container.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    cancelAnimationFrame(animationId);
    dragging = true;
    dragged = false;
    startX = lastX = e.clientX;
    lastTime = performance.now();
    velocity = 0;
    container.setPointerCapture(e.pointerId);
    container.classList.add("dragging");
  });

  container.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const now = performance.now();
    const dx = e.clientX - lastX;
    const dt = now - lastTime || 16;
    if (Math.abs(e.clientX - startX) > 5) dragged = true;
    container.scrollLeft -= dx;
    // Velocidad suavizada para que la inercia refleje el gesto reciente
    velocity = velocity * 0.8 + (-dx / dt) * 1000 * 0.2;
    lastX = e.clientX;
    lastTime = now;
  });

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    container.classList.remove("dragging");

    let v = velocity;
    if (Math.abs(v) < 100) return;
    let last = performance.now();

    function momentum(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      container.scrollLeft += v * dt;
      v *= Math.pow(0.05, dt); // fricción exponencial
      if (Math.abs(v) > 40) animationId = requestAnimationFrame(momentum);
    }
    animationId = requestAnimationFrame(momentum);
  }

  container.addEventListener("pointerup", endDrag);
  container.addEventListener("pointercancel", endDrag);

  // Tras un arrastre real, evitar que el click abra el enlace de una tarjeta
  container.addEventListener(
    "click",
    (e) => {
      if (dragged) {
        e.preventDefault();
        e.stopPropagation();
        dragged = false;
      }
    },
    true,
  );
  container.addEventListener("dragstart", (e) => e.preventDefault());
}
