import { getXpath } from './serialize';

export const isVisible = (
  element: Element,
  computedStyle?: CSSStyleDeclaration,
): boolean => {
  const htmlElement = element as HTMLElement;
  if (htmlElement.offsetWidth <= 0 || htmlElement.offsetHeight <= 0) {
    return false;
  }

  if (computedStyle && computedStyle.visibility === 'hidden') {
    return false;
  }

  if (computedStyle && computedStyle.display === 'none') {
    return false;
  }

  return true;
};

export const isClickable = (
  element: HTMLElement,
  computedStyle: CSSStyleDeclaration,
): boolean => {
  // assume it is clickable if the cursor is a pointer
  const clickable = computedStyle.cursor === 'pointer';

  return clickable && isVisible(element, computedStyle);
};

export const getClickableAncestor = (element: HTMLElement): HTMLElement => {
  /**
   * Crawl up until we reach the top "clickable" ancestor.
   * If the target is the descendant of "a"/"button"/"input" or a clickable element choose it.
   * Otherwise choose the original element as the target.
   */
  let ancestor = element;
  console.debug('qawolf: get clickable ancestor for', getXpath(element));

  while (ancestor.parentElement) {
    if (['a', 'button', 'input'].includes(ancestor.tagName.toLowerCase())) {
      // stop crawling when the ancestor is a good clickable tag
      console.debug(
        `qawolf: found clickable ancestor: ${ancestor.tagName}`,
        getXpath(ancestor),
      );
      return ancestor;
    }

    if (
      !isClickable(
        ancestor.parentElement,
        window.getComputedStyle(ancestor.parentElement),
      )
    ) {
      // stop crawling at the first non-clickable element
      console.debug('qawolf: found clickable ancestor', getXpath(ancestor));
      return ancestor;
    }

    ancestor = ancestor.parentElement;
  }

  // stop crawling at the root
  console.debug('qawolf: found clickable ancestor', getXpath(ancestor));

  return ancestor;
};

/**
 * @summary Returns the topmost isContentEditable ancestor. Editable areas can
 *   have HTML elements in them, and these elements emit events, but in general
 *   I don't think we want to keep track of anything within the editable area.
 *   For example, if you click a particular paragraph in a `contenteditable`
 *   div, we should just record it as a click/focus of the editable div.
 */
export const getTopmostEditableElement = (
  element: HTMLElement,
): HTMLElement => {
  if (!element.isContentEditable) return element;

  console.debug('qawolf: get editable ancestor for', getXpath(element));

  let ancestor = element;
  do {
    if (!ancestor.parentElement || !ancestor.parentElement.isContentEditable) {
      console.debug(
        `qawolf: found editable ancestor: ${ancestor.tagName}`,
        getXpath(ancestor),
      );
      return ancestor;
    }

    ancestor = ancestor.parentElement;
  } while (ancestor);

  // This should never be hit, but here as a safety
  return element;
};

export const getElementText = (element: HTMLElement): string | null => {
  let text = (element.innerText || '').trim();

  if (
    element instanceof HTMLInputElement &&
    ['button', 'submit'].includes(element.type)
  ) {
    text = element.value;
  }

  if (
    !text ||
    text.length > 200 ||
    text.match(/[\n\r\t]+/) ||
    // ignore invisible characters which look like an empty string but have a length
    // https://www.w3resource.com/javascript-exercises/javascript-string-exercise-32.php
    // https://stackoverflow.com/a/21797208/230462
    text.match(/[^\x20-\x7E]/g)
  )
    return null;

  console.debug(`qawolf: found text="${text}" for element`, element);

  return text;
};
