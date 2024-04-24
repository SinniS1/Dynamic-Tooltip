import { createElement } from "react";
import Tooltip from "./components/Tooltip";
import { translatePosition } from "./utils";

// Define the preview function using named export
export function preview(props) {
    return createElement(Tooltip, {
        className: props.className,
        htmlMessage: createElement(props.htmlMessage.renderer, { caption: "Place widgets here" }, createElement("div")),
        trigger: createElement(props.trigger.renderer, { caption: "Place widgets here" }, createElement("div")),
        openOn: props.openOn,
        position: translatePosition(props.tooltipPosition, props.arrowPosition),
        preview: true,
        renderMethod: props.renderMethod,
        style: props.style,
        textMessage: props.textMessage
    });
}

// Define the getPreviewCss function using named export
export function getPreviewCss() {
    return require("./ui/Tooltip.scss").default; // For CSS import in JavaScript
}
