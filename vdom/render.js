const renderElem = ({ tagName, attrs, children }) => {
    const $el = document.createElement(tagName);

    // set attribute
    for (const [k, v] of Object.entries(attrs)) {
        $el.setAttribute(k, v);
    }
    // set h
    for (const child of children) {
        const $child = render(child);
        $el.appendChild($child);
    }
    return $el;
}

const render = (vNode) => {
    if (typeof(vNode) === 'string') {
        return document.createTextNode("Count: " + vNode);
    }
    return renderElem(vNode);
}

export default render;