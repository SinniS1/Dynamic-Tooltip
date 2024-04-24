import { createElement, useEffect } from "react";
import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import classNames from "classnames";
// import { useOnClickOutside } from "@mendix/piw-utils-internal/components/web";

const Tooltip = props => {
    const { trigger, htmlMessage, textMessage, openOn, position, preview, renderMethod, dynamic } = props;
    const componentReference = useRef(null);
    const [showTooltip, setShowTooltip] = useState(preview ?? false);
    const [triggerElement, setTriggerElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(triggerElement, popperElement, {
        placement: position,
        modifiers: [
            {
                name: "arrow",
                options: {
                    element: arrowElement,
                    padding: 5
                }
            },
            {
                name: "flip",
                options: {
                    fallbackPlacements: ["top", "right", "bottom", "left"]
                }
            },
            { name: "offset", options: { offset: [0, 8] } }
        ]
    });

    const handleClickOutside = event => {
        if (componentReference.current && !componentReference.current.contains(event.target)) {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const onShow = () => setShowTooltip(true);
    const onHide = () => setShowTooltip(false);
    const onToggle = () => setShowTooltip(showTooltip => !showTooltip);

    let tooltipRendering = false;
    const renderTrigger = () => {
        // Get the Content Width inside the html element
        function getContentWidth(element) {
            const wrapperElement = document.createElement("div");
            wrapperElement.style.display = "inline-block";
            wrapperElement.style.visibility = "hidden";
            document.body.appendChild(wrapperElement);

            wrapperElement.textContent = element.textContent;
            const textContentWidth = wrapperElement.clientWidth;
            document.body.removeChild(wrapperElement);
            return textContentWidth;
        }
        if (dynamic) {
            if (triggerElement) {
                const ParentWidth = triggerElement.clientWidth;
                const ChildElement = triggerElement.querySelector("span");
                const ChildWidth = getContentWidth(ChildElement);
                if (ChildWidth >= ParentWidth) {
                    tooltipRendering = true;
                } else {
                    tooltipRendering = false;
                }
            }
        }

        // Event Trigger on the Trigger element
        let eventContainer;
        switch (openOn) {
            case "click":
                eventContainer = {
                    onClick: onToggle,
                    onFocusOut: onToggle
                };
                break;
            case "hover":
                eventContainer = {
                    onMouseEnter: onShow,
                    onMouseLeave: onHide
                };
                break;
            case "hoverFocus":
                eventContainer = {
                    onMouseEnter: onShow,
                    onMouseLeave: onHide,
                    onFocus: onShow,
                    onBlur: onHide
                };
                break;
            default:
                break;
        }
        return (
            <div
                className={`widget-tooltip-trigger ${dynamic ? "dynamicTooltip" : ""}`}
                ref={setTriggerElement}
                {...(preview ? undefined : eventContainer)}
            >
                {trigger}
            </div>
        );
    };

    const renderTooltip = () => {
        return showTooltip ? (
            <div
                {...attributes.popper}
                className="widget-tooltip-content"
                ref={setPopperElement}
                style={styles.popper}
                role="tooltip"
            >
                {renderMethod === "text" ? textMessage : htmlMessage}
                <div
                    {...attributes.arrow}
                    className="widget-tooltip-arrow"
                    ref={setArrowElement}
                    style={styles.arrow}
                />
            </div>
        ) : null;
    };

    return (
        <div
            className={classNames(props.class, "widget-tooltip", `widget-tooltip-${position}`)}
            ref={componentReference}
        >
            {renderTrigger()}
            {dynamic ? tooltipRendering && renderTooltip() : renderTooltip()}
        </div>
    );
};

export default Tooltip;
