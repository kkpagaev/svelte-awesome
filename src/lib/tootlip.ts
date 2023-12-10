import { computePosition, offset } from "@floating-ui/dom";

export function tooltip(targetEl: HTMLButtonElement) {
  const tooltipElement = createTooltipElement(targetEl);
  function createTooltipElement(targetEl: HTMLButtonElement) {
    const tooltipElement = document.createElement("div");
    tooltipElement.innerHTML = "title";
    tooltipElement.className = "absolute hidden top-0 left-0 none flex-col gap-4 p-8 bg-black text-white";
    targetEl.after(tooltipElement);

    return tooltipElement;
  }
  async function showTooltip() {
    const { x, y } = await computePosition(targetEl, tooltipElement, {
      placement: "bottom-start",
      middleware: [offset(8)],
    });

    tooltipElement.style.display = "block";
    tooltipElement.style.left = `${x}px`;
    tooltipElement.style.top = `${y}px`;
  }

  function hideTooltip() {
    tooltipElement.style.display = "none";
  }

  targetEl.addEventListener("mouseenter", showTooltip);
  targetEl.addEventListener("mouseleave", hideTooltip);

  return {
    destroy() {
      targetEl.removeEventListener("mouseenter", showTooltip);
      targetEl.removeEventListener("mouseleave", hideTooltip);
    }
  }
}
