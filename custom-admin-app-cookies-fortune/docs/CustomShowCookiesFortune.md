# Custom Show Cookies Fortune

A delightful customer-facing component that displays random fortune cookie messages with lucky numbers in VTEX stores. This component provides an interactive fortune cookie experience where customers can get random inspirational messages along with generated lucky numbers.

#### Demo
![Fortune Cookie Component](https://i.ibb.co/99T1x7qW/Demo-1.gif)

#### First print
![Fortune Cookie Component](https://i.ibb.co/k637svdy/Show-Messagefrom-Cookie-Fortune-1.png)

#### Loading state
![Fortune Cookie Component](https://i.ibb.co/bMcmWj1W/Show-Messagefrom-Cookie-Fortune-2.png)

#### Display message and lookie number
![Fortune Cookie Component](https://i.ibb.co/CK9HwYxs/Show-Messagefrom-Cookie-Fortune-3.png)

## Configuration 

To use this component in your VTEX store theme, follow these steps:

1. Add the app as a theme dependency in your `manifest.json` file:
```json
{
  "dependencies": {
    "valtech.custom-admin-app-cookies-fortune": "0.x"
  }
}
```

2. Declare the component block in your store theme template or inside another block:
```json
{
  "CustomShowCookiesFortune": {
    "component": "CustomShowCookiesFortune"
  }
}
```

3. Use the block in your store templates:
```jsonc
{
  "flex-layout.row#fortune": {
    "children": ["CustomShowCookiesFortune"]
  }
}
```

### Available Blocks

| Block name | Description |
| ---------- | ----------- |
| `CustomShowCookiesFortune` | Interactive fortune cookie component that displays random messages and lucky numbers |

### `CustomShowCookiesFortune` props

This component doesn't require any configuration props as it's designed to work out of the box with your stored fortune messages.

| Prop name | Type | Description | Default value |
| --------- | ---- | ----------- | ------------- |
| N/A | N/A | This component works without props | N/A |

## Features

The Custom Show Cookies Fortune component provides the following functionality:

- **Random Fortune Display**: Shows random fortune messages from your configured database
- **Lucky Number Generation**: Generates unique lucky numbers in format "XX-XX-XXXX"
- **Interactive Button**: One-click action to get a new fortune and lucky number
- **Loading Animation**: Visual feedback during fortune generation
- **Error Handling**: Graceful handling of data loading errors
- **Responsive Design**: Adapts to different screen sizes
- **Fallback Messages**: Shows appropriate messages when no fortunes are available

## User Experience Flow

1. **Initial State**: Component loads with a button prompting users to get their fortune
2. **Loading State**: When clicked, shows loading animation for enhanced user experience
3. **Fortune Display**: Reveals a random fortune message and lucky number
4. **Get Another**: Users can click again to get a new fortune and lucky number
5. **Error State**: If no fortunes are available, shows appropriate message

## Technical Implementation

### Data Fetching
The component uses a custom hook `useGetCookiesFortune` that:
- Fetches fortune messages from the backend
- Handles loading states
- Manages error conditions
- Provides data refresh capabilities

### Random Generation
- **Fortune Selection**: Randomly selects from available fortune messages
- **Lucky Number**: Generates numbers in format "XX-XX-XXXX" using `Math.random()`
- **Filtering**: Excludes empty or invalid fortune messages

### Data Structure
```typescript
interface CookieFortune {
  CookieFortune: string;
  id: string;
  createdIn: string;
}
```

## Modus Operandi

### Fortune Selection Algorithm
1. Component fetches all available fortune messages from the database
2. Filters out empty or undefined messages
3. Uses `Math.random()` to select a random fortune from the valid list
4. If no valid fortunes exist, displays fallback message

### Lucky Number Generation
The lucky number follows the pattern "XX-XX-XXXX" where:
- First two digits: Random number 00-99
- Second two digits: Random number 00-99  
- Last four digits: Random number 0000-9999

### Performance Considerations
- Fortune data is fetched once on component mount
- Random selection happens client-side for instant response
- Loading animation provides user feedback during fortune generation

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- |
| `fortuneContainer` |
| `fortuneButton` |
| `fortuneDisplay` |
| `fortuneText` |
| `luckyNumber` |
| `loadingSpinner` |
| `errorMessage` |
| `noFortunesMessage` |

## Dependencies

This component relies on the following dependencies:
- `vtex.styleguide`: For UI components (Alert, buttons, etc.)
- `react`: For component lifecycle and state management
- Custom GraphQL queries for data fetching

## Error Handling

The component gracefully handles various error scenarios:
- **No Data Available**: Shows "No hay frases disponibles" message
- **Network Errors**: Displays user-friendly error messages
- **Empty Fortune List**: Provides fallback messaging
- **Loading Failures**: Shows appropriate error states

## Integration Examples

### Basic Implementation
```jsonc
{
  "flex-layout.row#home-fortune": {
    "children": ["CustomShowCookiesFortune"],
    "props": {
      "blockClass": "home-fortune-section"
    }
  }
}
```

### With Custom Styling
```jsonc
{
  "flex-layout.col#fortune-section": {
    "children": [
      "rich-text#fortune-title",
      "CustomShowCookiesFortune"
    ],
    "props": {
      "blockClass": "fortune-widget"
    }
  }
}
```

This component is perfect for adding an engaging, interactive element to your store that provides customers with daily inspiration and entertainment.
