const renderElem = ({ tagName, attrs, children }) => {
    const $el = document.createElement(tagName);

    // set attribute
    for (const [k, v] of Object.entries(attrs)) {
        $el.setAttribute(k, v);
    }
    // set h
    for (const child of children) {
        $el.appendChild(render(child));
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