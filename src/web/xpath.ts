const buildXpath = (element: Element): string => {
  if (!element || element.nodeType !== 1) return "";

  if (element.id) return "//*[@id='" + element.id + "']";

  const children = element.parentNode ? element.parentNode.children : [];
  const sames = [].filter.call(children, (x: Element) => {
    return x.tagName === element.tagName;
  });

  const result =
    buildXpath(element.parentNode as Element) +
    "/" +
    element.tagName.toLowerCase() +
    (sames.length > 1
      ? "[" + ([].indexOf.call(sames, element as never) + 1) + "]"
      : "");

  return result;
};

export const getXpath = (element: Element): string => {
  const result = buildXpath(element);

  return result
    .replace("svg", "*[name()='svg']")
    .replace("path", "*[name()='path']");
};
