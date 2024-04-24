import {
    hidePropertiesIn,
    Problem,
    Properties
} from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultValues) {
    if (values.renderMethod === "text") {
        hidePropertiesIn(defaultValues, values, ["htmlMessage"]);
    } else {
        hidePropertiesIn(defaultValues, values, ["textMessage"]);
    }
    return defaultValues;
}

export function check(values) {
    const errors = [];
    if (values.renderMethod === "text" && !values.textMessage) {
        errors.push({
            property: "textMessage",
            message: "For render method Text, a Tooltip message is required"
        });
    }
    if (values.renderMethod === "custom" && values.htmlMessage?.widgetCount === 0) {
        errors.push({
            property: "htmlMessage",
            message: "For render method custom, a Content is required"
        });
    }
    return errors;
}

export function getPreview(values, isDarkMode) {
    const centerLayout = (props) => ({
        type: "RowLayout",
        columnSize: "grow",
        padding: 0,
        children: [
            {
                type: "Container",
                grow: 99,
                children: []
            },
            {
                type: "Container",
                grow: 1,
                children: [props]
            },
            {
                type: "Container",
                grow: 99,
                children: []
            }
        ]
    });

    const titleHeader = {
        type: "RowLayout",
        columnSize: "grow",
        backgroundColor: isDarkMode ? "#4F4F4F" : "#F5F5F5",
        borders: true,
        borderWidth: 1,
        children: [
            {
                type: "Container",
                padding: 4,
                children: [
                    {
                        type: "Text",
                        content: "Dynamic Tooltip",
                        fontColor: isDarkMode ? "#DEDEDE" : "#6B707B"
                    }
                ]
            }
        ]
    };

    const messageContent = {
        type: "RowLayout",
        columnSize: "grow",
        borders: true,
        padding: 0,
        children: [
            {
                type: "Container",
                padding: 6,
                children: [
                    values.renderMethod === "text"
                        ? centerLayout({
                            type: "Text",
                            content: values.textMessage ? values.textMessage : "Place your tooltip message",
                            fontSize: values.textMessage ? 14 : undefined,
                            fontColor: values.textMessage ? (isDarkMode ? "#DEDEDE" : "#000000") : (isDarkMode ? "#A4A4A4" : "#6B707B"),
                            bold: !!values.textMessage
                        })
                        : ({
                            type: "DropZone",
                            property: values.htmlMessage,
                            placeholder: "Place your tooltip widget"
                        })
                ]
            }
        ]
    };

    const triggerContent = {
        type: "DropZone",
        property: values.trigger,
        placeholder: "Place widget(s) here",
        grow: 1
    };

    return {
        type: "Container",
        borders: true,
        children: [titleHeader, messageContent, triggerContent]
    };
}
