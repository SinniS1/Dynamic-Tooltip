import { createElement } from "react";
import { translatePosition } from "./utils";
import "./ui/Tooltip.scss";
import Tooltip from "./components/Tooltip";

export function DynamicTooltip(props) {
    return (
        <Tooltip
            class={props.class}
            htmlMessage={props.htmlMessage}
            name={props.name}
            openOn={props.openOn}
            position={translatePosition(props.tooltipPosition, props.arrowPosition)}
            renderMethod={props.renderMethod}
            style={props.style}
            trigger={props.trigger}
            textMessage={props.textMessage?.value}
            tabIndex={props.tabIndex}
            dynamic={props.dynamic}
        />
    );
}
