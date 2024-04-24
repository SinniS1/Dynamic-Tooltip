## DynamicTooltip
[My widget description]

## Features
[feature highlights]

## Usage
[step by step instructions]

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]
## Dynamic Tooltip

Introducing the "Dynamic Tooltip" Mendix widget, built with React to jazz up your Mendix apps with smarter tooltip
features. This widget goes beyond the basics, offering cool tricks that developers can easily control.

Imagine having tooltips that pop up only when needed — like when text overflows its container. With our Dynamic Tooltip,
you can toggle a setting (we call it "Dynamic mode") so that tooltips show up automatically when content gets too long
for its space. No more cluttering the screen with tooltips when everything fits nicely!

Plus, we've added a neat trick to keep things tidy: if text does overflow, we'll snip it with an ellipsis (...). This
means your tooltips will always look slick and won't hog the layout.

## Features

-   Dynamic Visibility: You decide when the tooltip should appear. Turn on Dynamic mode, and it'll only show up when the
    content gets too big for its container.
-   Ellipsis Text: Long text? No problem. We'll trim it with an ellipsis, so your tooltips stay concise and stylish.
-   Easy Setup: It's super easy to use. Just drop the widget into your Mendix project, configure a few settings, and
    voila! Your tooltips are ready to impress.
-   Customizable Goodness: Tweak the settings to fit your app perfectly. Adjust when the tooltip should appear and how
    it should look to match your design.

## Usage

1. #### Open Marketplace and Search for "Dynamic Tooltip":
    - Open Mendix Studio or Studio Pro.
    - Navigate to the Marketplace section.
    - Use the search bar to look for "Dynamic Tooltip" and press enter to search.
    - Install the Dynamic Tooltip Widget:
    - Once you find the "Dynamic Tooltip" widget in the search results, click on it.
    - Click the "Install" button to add the widget to your Mendix project.
2. #### Drag and Drop the Dynamic Tooltip Widget onto a Page:
    - Open the Mendix app project where you want to use the Dynamic Tooltip.
    - Navigate to the page editor.
    - Drag the "Dynamic Tooltip" widget from the Mendix Toolbox onto the desired location on the page.
3. #### Configure the Dynamic Tooltip Widget:
    - Double-click on the placed Dynamic Tooltip widget to open its configuration.
    - In the widget General panel, find the "Dynamic" option.
    - Toggle the "Dynamic" option to enable or disable the dynamic functionality based on text overflow.
4. #### Add a Text Widget Inside the Dynamic Tooltip Container:
    - Within the Dynamic Tooltip widget's configuration, locate the content area or container.
    - Drag and drop a Text widget or other content widget inside this container.
5. #### Customize Widget Settings:
    - Adjust other widget properties such as tooltip content, appearance, delay settings, etc., based on your
      requirements.
6. #### Run and Preview Your Application:
    - Save your changes.
    - Run the Mendix application.
    - Open the page containing the Dynamic Tooltip widget in a web browser to see the widget's behavior based on your
      configured settings.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing
   `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
