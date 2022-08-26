<p align="center">
<img width="130" alt="logo" src="https://user-images.githubusercontent.com/7442937/186945776-57eef137-98f6-411f-a33d-d8cb10dce8d8.png">
</p>

# Simply Modals
An implementation of a lightweight, foundational Modal component in React from scratch. The features include:
- Focus management
- Background `scroll-locking` when modal is opened
- Tab navigation
- Stacking modals
- Accessibility
- Mobile responsiveness

![modals](https://user-images.githubusercontent.com/7442937/183442595-45fed252-d08c-4a23-a516-1f2aa2134fef.gif)

### Please enjoy the [full demo here](https://www.loom.com/share/c708af13a2fb48798dfa8c3ba958827f).

## Available props
| Prop             | Type      | Required | Default Value | Description                                   |
|------------------|-----------|----------|---------------|-----------------------------------------------|
| animate          | boolean   | false    | true          | Should modal animate when opening and closing |
| cancelButtonText | string    | false    | `Cancel`      | Text for default cancel button                |
| desctroyOnClose  | boolean   | false    | false         | Should remove modal from dom when closed      |
| escapable        | boolean   | false    | true          | Should close modal when `ESC` key is pressed  |
| footer           | ReactNode | false    |               | Custom footer                                 |
| header           | ReactNode | false    |               | Custom Header                                 |
| lazy           | booleam | false    | false         | Only add modal to `DOM` when visible is `true`                  |
| maskClosable     | boolean   | false    | true          | Should close modal if the mask is clicked         |
| okButtonText     | string    | false    | `OK`          | Text for default `OK` button                  |
| title            | string    | false    |               | Title for header                              |
| visible          | boolean   | true     |               | Whether the modal is opened or not            |
| width            | string    | false    |               | Custom width for modal                        |

## Available Events
| Event    | Description                                           |
|----------|-------------------------------------------------------|
| onCancel | The modal is closed or the `Cancel` button is clicked |
| onOk     | The `OK` button is clicked                            |
| onOpened | The modal is opened                                   |

Running the app
```sh
yarn
yarn dev
```
