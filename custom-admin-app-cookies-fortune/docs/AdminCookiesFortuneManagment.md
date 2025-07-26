# Admin Cookies Fortune Management

A comprehensive admin interface component for managing fortune cookie messages in VTEX stores. This component provides a complete CRUD (Create, Read, Update, Delete) interface for administrators to manage fortune cookie phrases that will be displayed to customers.

#### Demo
![Admin Component](https://i.ibb.co/YFthpXq0/Demo-admin.gif)

#### Route and principal interface
- /admin/cookiesfortune

![Admin Interface](https://i.ibb.co/9mTTzCcd/ADMIN1.png)

#### Create interface
![Admin Interface create](https://i.ibb.co/d0Fd2SzF/ADMIN2.png)

## Configuration 

To use this component in your VTEX admin app, follow these steps:

1. Add the app as a dependency in your `manifest.json` file:
```json
{
  "dependencies": {
    "valtech.custom-admin-app-cookies-fortune": "0.x"
  }
}
```

This component doesn't accept any props as it's a self-contained admin interface that manages its own state and data operations.

| Prop name | Type | Description | Default value |
| --------- | ---- | ----------- | ------------- |
| N/A | N/A | This component doesn't accept props | N/A |

## Features

The Admin Cookies Fortune Management component provides the following functionality:

- **View Fortune Messages**: Display all existing fortune cookie messages in a structured table format
- **Add New Messages**: Create new fortune cookie phrases through a modal interface
- **Edit Existing Messages**: Modify existing fortune cookie messages inline
- **Delete Messages**: Remove unwanted fortune cookie phrases with confirmation
- **Real-time Updates**: Automatic refresh of the data after CRUD operations
- **Error Handling**: Comprehensive error handling with user-friendly notifications
- **Loading States**: Visual feedback during data operations

## Data Structure

The component manages fortune cookie data with the following structure:

```typescript
interface CookieFortuneDocument {
  documentId?: string;
  fields: CookieFortuneField[];
}

interface CookieFortuneField {
  key: string;
  value: string;
}
```

## Modus Operandi

### Data Storage
The component stores fortune cookie messages in VTEX's Master Data using the "CF" (Cookie Fortune) acronym. Each fortune is stored as a document with:
- `id`: Unique identifier for the fortune
- `CookieFortune`: The actual fortune message text

### User Interface Flow
1. **Loading State**: When the component mounts, it fetches existing fortune messages from Master Data
2. **Table Display**: All fortunes are displayed in a table with actions for edit and delete
3. **Add New Fortune**: Users can click "Add" to open a modal with a textarea for entering new fortunes
4. **Edit Fortune**: Clicking the edit icon allows inline editing of existing messages
5. **Delete Fortune**: Clicking the delete icon prompts for confirmation before removing the message
6. **Notifications**: Success and error notifications inform users of operation results

### GraphQL Operations
The component uses the following GraphQL operations:
- `GET_DOCUMENTS`: Retrieves all fortune cookie messages
- `CREATE_DOCUMENT`: Creates a new fortune message
- `UPDATE_DOCUMENT`: Updates an existing fortune message
- `DELETE_DOCUMENT`: Removes a fortune message

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- |
| `adminContainer` |
| `tableContainer` |
| `modalContainer` |
| `addButton` |
| `actionButtons` |
| `notification` |
| `loadingSpinner` |

## Dependencies

This component relies on the following VTEX dependencies:
- `vtex.styleguide`: For UI components (Table, Modal, Buttons, etc.)
- `vtex.store-graphql`: For GraphQL operations
- `react-apollo`: For GraphQL query and mutation hooks
- `react-intl`: For internationalization support

## Error Handling

The component includes comprehensive error handling for:
- Network connectivity issues
- GraphQL operation failures
- Invalid data validation
- User input validation
- Concurrent modification conflicts

All errors are displayed to users through notification alerts with appropriate messaging.
