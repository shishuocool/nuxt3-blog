import Viewer from "viewerjs";
import type { Ref } from "vue";
import { inBrowser, ViewerAttr } from "./constants";

function useMutationObserver (
  target: HTMLElement,
  callback: MutationCallback
) {
  let observer: MutationObserver | undefined;

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = undefined;
    }
  };
  if (window && "MutationObserver" in window && target) {
    observer = new MutationObserver(callback);
    observer.observe(target, { attributes: true, childList: true, characterData: true, subtree: true });
  }

  return cleanup;
}

/**
 * viewerjs
 */
export function initViewer (el?: Ref<HTMLElement>): Ref<HTMLElement> | void {
  if (!inBrowser) { return; }
  let viewerContainer;
  let viewer: Viewer;
  let stop = () => null;

  onMounted(() => {
    if (!el) {
      el = viewerContainer = ref<HTMLElement>(null);
    }
    viewer = new Viewer(el.value, {
      filter (image: HTMLImageElement) {
        return image.hasAttribute(ViewerAttr);
      }
    });
    stop = useMutationObserver(el.value, () => {
      nextTick(() => {
        viewer?.update();
      });
    });
  });

  onBeforeUnmount(() => {
    stop();
    viewer?.destroy();
  });
  return viewerContainer;
}
