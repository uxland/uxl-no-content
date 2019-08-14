# \<uxl-no-content\>

##### What is?

It is a web component that allows you to create a no content component.

##### How Install

```
npm i --save @uxland/no-content
```

##### How to use?

import the component and use it in the html with the `uxl-no-content` tag

```
import "@uxland/no-content";

<body>
    <uxl-no-content></uxl-no-content>
</body>
```

##### How customize

Its posible customize the icon & mesages

```
<body>
    <uxl-no-content>
        <div slot="icon">
            <iron-icon icon="custom-icon"></iron-icon>
        </div>
        <div slot="message">
            Custom text message
        </div>
    </uxl-no-content>
</body>

```

##### How Stylize

Its posible customize style with css shadow parts

```
uxl-no-content{

    &::part(icon__container){
        ...
    }

    &::part(icon__slot){
        ...
    }

    &::part(message__container){
        ...
    }

    &::part(message__slot){
        ...
    }
}

```
