export const translatePosition = (tooltipPosition, arrowPosition) => {
    const placement = `${tooltipPosition}${arrowPosition === "none" ? "" : "-" + arrowPosition}`;
    return placement;
};
