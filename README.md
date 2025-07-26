# Technical Challenge - Valtech By Cristian Leandro Perez Pelaez

> **VTEX IO Technical Test** - Full-stack development with backend services and admin application

This repository contains a complete VTEX IO application developed as a technical challenge for **Valtech**. The project demonstrates full-stack development capabilities including custom admin interfaces, customer-facing components, backend services, and theme integration.

## Oficial Documentation in Vtex App Developers
- [Main documentation componenets](https://developers.vtex.com/docs/apps/valtech.custom-admin-app-cookies-fortune)
- [Documentation AdminCookiesFortuneManagment](https://developers.vtex.com/docs/apps/valtech.custom-admin-app-cookies-fortune/AdminCookiesFortuneManagment)
- [Documentation CustomShowCookiesFortune](https://developers.vtex.com/docs/apps/valtech.custom-admin-app-cookies-fortune/CustomShowCookiesFortune)

## Project Overview

The application is a **Fortune Cookie Management System** that allows administrators to manage inspirational messages and provides customers with an interactive fortune cookie experience. The system consists of two main applications working together:

1. **Custom Admin App** - Backend management interface
2. **Store Theme** - Customer-facing implementation

## Architecture

```
technical-challenge-valtech/
├── custom-admin-app-cookies-fortune/    # Admin App & Backend Services
│   ├── admin/                           # Admin interface configuration
│   ├── node/                            # Backend services (GraphQL, APIs)
│   ├── react/                           # Admin UI components
│   ├── store/                           # Store interface definitions
│   ├── messages/                        # Internationalization
│   └── docs/                            # Component documentation
└── store-theme/                         # VTEX Store Theme
    ├── store/                           # Theme blocks and routes
    ├── styles/                          # CSS customizations
    └── docs/                            # Theme documentation
```

## Features

### Admin Application (`custom-admin-app-cookies-fortune`)
- **Complete CRUD Interface**: Create, read, update, and delete fortune messages
- **Master Data Integration**: Stores data in VTEX Master Data with "CF" acronym
- **GraphQL API**: RESTful backend services for data management
- **Admin UI**: Professional interface using VTEX Styleguide components
- **Real-time Updates**: Instant refresh after data operations
- **Error Handling**: Comprehensive error management and user notifications
- **Internationalization**: Multi-language support (EN, ES, PT)

### Store Theme Integration
- **Interactive Component**: Customer-facing fortune cookie experience
- **Random Fortune Display**: Shows random inspirational messages
- **Lucky Number Generation**: Creates unique lucky numbers (XX-XX-XXXX format)
- **Responsive Design**: Mobile-friendly interface
- **Custom Landing Page**: Dedicated `/cookies-fortune` route
- **Theme Integration**: Seamlessly integrated with VTEX Store Framework

## Applications

### 1. Custom Admin App Cookies Fortune
**Vendor**: `valtech`  
**Name**: `custom-admin-app-cookies-fortune`  
**Version**: `0.x`

#### Key Components:
- `AdminCookiesFortuneManagment` - Complete admin interface for managing fortunes
- `CustomShowCookiesFortune` - Customer-facing interactive component
- GraphQL resolvers for CRUD operations
- Master Data integration middleware

#### Technologies:
- **React 18+** with TypeScript
- **GraphQL** with Apollo Client
- **VTEX Styleguide** for UI components
- **VTEX Master Data** for persistence
- **Node.js** backend services

### 2. Store Theme Valtech
**Vendor**: `valtech`  
**Name**: `store-theme-valtech-cristian-perez`  
**Version**: `0.x`

#### Implementation:
- Custom landing page at `/cookies-fortune`
- Integration of fortune cookie component
- Custom CSS styling for the fortune experience
- Responsive design implementation

## 🛠️ Installation & Setup

### Prerequisites
- VTEX IO CLI installed
- VTEX workspace access
- Node.js 16+ (for development)

### Admin App Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/clpp-dev/technical-challenge-valtech.git
   cd technical-challenge-valtech
   ```

2. **Install and link the admin app**:
   ```bash
   cd custom-admin-app-cookies-fortune
   vtex install
   vtex link
   ```

3. **Configure Master Data**:
   - The app automatically creates the "CF" data entity
   - Permissions are configured in the manifest.json

### Store Theme Installation

1. **Install and link the store theme**:
   ```bash
   cd store-theme
   vtex install
   vtex link
   ```

2. **Access the fortune page**:
   - Navigate to `https://your-workspace--your-account.myvtex.com/cookies-fortune`

## Usage

### Admin Interface
1. Access VTEX Admin Panel
2. Navigate to "Apps" → Custom Admin App "Cookies Fortune"
3. Use the interface to:
   - View all existing fortune messages
   - Add new inspirational messages
   - Edit existing fortunes
   - Delete unwanted messages

### Customer Experience
1. Visit the `/cookies-fortune` page in your store
2. Click "Get My Fortune" button
3. Receive a random inspirational message
4. Get a unique lucky number
5. Click again for a new fortune

## Development

### Backend Services
The Node.js backend provides:
- **GraphQL resolvers** for data operations
- **Master Data integration** for persistence
- **Error handling** and validation
- **Performance optimization**

### Frontend Components
Built with modern React patterns:
- **Hooks** for state management
- **TypeScript** for type safety
- **Custom hooks** for data fetching
- **Responsive design** principles

### Styling
- **CSS Handles** for customization
- **VTEX Styleguide** components
- **Responsive design** patterns
- **Custom CSS** for unique styling

## Documentation

Comprehensive documentation is available for all components:

- **[Admin Component Documentation](./custom-admin-app-cookies-fortune/docs/AdminCookiesFortuneManagment.md)** - Complete admin interface guide
- **[Customer Component Documentation](./custom-admin-app-cookies-fortune/docs/CustomShowCookiesFortune.md)** - Customer-facing component guide

## API Endpoints

### GraphQL Operations
- `getCookiesFortune` - Retrieve all fortune messages
- `createDocument` - Create new fortune message
- `updateDocument` - Update existing fortune message  
- `deleteDocument` - Delete fortune message

### Master Data Schema
```json
{
  "acronym": "CF",
  "fields": [
    {
      "key": "id",
      "type": "string"
    },
    {
      "key": "CookieFortune", 
      "type": "string"
    }
  ]
}
```

## Customization

### CSS Handles Available
#### Admin Interface:
- `adminContainer`, `tableContainer`, `modalContainer`
- `addButton`, `actionButtons`, `notification`

#### Customer Component:
- `fortuneContainer`, `fortuneButton`, `fortuneDisplay`
- `fortuneText`, `luckyNumber`, `loadingSpinner`

### Theme Customization
Custom CSS files are located in:
- `store-theme/styles/css/landingCookiesFortune/`

## Security & Permissions

The application includes proper security configurations:
- **Outbound access** policies for external APIs
- **Master Data** read/write permissions
- **Admin interface** access controls
- **Input validation** and sanitization

## Internationalization

Multi-language support for:
- **English** (en.json)
- **Spanish** (es.json) 
- **Portuguese** (pt.json)

## Testing

The application includes:
- **Component testing** setup
- **GraphQL resolver testing**
- **Integration testing** capabilities
- **Error handling validation**

## 👨‍💻 Technical Challenge Requirements

This project demonstrates proficiency in:
- ✅ **VTEX IO Development** - Complete app development
- ✅ **React/TypeScript** - Modern frontend development
- ✅ **GraphQL APIs** - Backend service development
- ✅ **Master Data Integration** - VTEX platform expertise
- ✅ **Admin Interface Development** - Professional UI/UX
- ✅ **Theme Integration** - Store customization
- ✅ **Documentation** - Comprehensive technical writing
- ✅ **Best Practices** - Code quality and architecture

## Challenge by Cristian Leandro Perez Pelaez

- **Developer**: Cristian Leandro Perez Pelaez
- **Company**: Valtech Technical Challenge
- **Platform**: VTEX IO
