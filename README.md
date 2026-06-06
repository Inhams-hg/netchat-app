# NetChat - Connect. Chat. Share Moments.

A production-ready React Native Expo application for real-time messaging, calling, and social interaction.

## Features

### Authentication
- Splash Screen & Onboarding
- Email/Password Login & Registration
- Phone Number Authentication
- Google Sign-In
- Forgot Password & Email Verification
- Session Management & Auto Login
- Secure Token Storage

### User Profile System
- Complete User Model (UID, Username, Bio, Avatar, etc.)
- Profile Editing
- Privacy Settings
- Block/Report Users

### Chat System
- One-to-One Real-Time Messaging
- Group Chat
- Message Types: Text, Images, Videos, Audio, Voice Notes, GIFs, Documents, Location
- Message Features: Read Receipts, Typing Indicators, Reactions, Replies, Forwarding, Pinning
- Search Messages

### Calling
- Voice Calls
- Video Calls
- Call History
- Incoming/Outgoing Call UI

### Social Features
- Friends System
- Friend Requests
- Followers/Following
- Suggested Users
- Global Search

### Stories/Status
- Image & Video Stories
- 24-Hour Auto Expiration
- Story Reactions & Views

### Notifications
- Firebase Cloud Messaging (FCM)
- Push Notifications
- In-App Notifications

### Media
- Firebase Storage Integration
- Image/Video Upload with Compression
- Upload Progress Tracking
- Media Caching

### Performance
- FlashList for Optimized Rendering
- Pagination & Lazy Loading
- Infinite Scrolling
- Query Caching
- Offline Support

### Security
- Firebase Security Rules
- Input Validation (Zod)
- Rate Limiting Architecture
- Secure Storage
- Anti-Spam Logic

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **Notifications**: Firebase Cloud Messaging
- **UI**: Material Design 3, React Native Reanimated
- **Forms**: React Hook Form + Zod Validation
- **Language**: TypeScript

## Project Structure

```
src/
├── app/                    # Expo Router
├── screens/               # Screen components
├── components/            # Reusable components
├── navigation/            # Navigation stacks
├── hooks/                 # Custom hooks
├── services/              # API & business logic
├── firebase/              # Firebase initialization
├── store/                 # Zustand stores
├── types/                 # TypeScript types
├── utils/                 # Utility functions
├── constants/             # App constants
├── theme/                 # Theme & styles
└── assets/                # Images, icons, fonts
```

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI
- iOS/Android development environment

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on Web
npm run web
```

## Environment Setup

Create `.env` file:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

## Development

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test
```

## Building for Production

```bash
# Android
npm run build:android

# iOS
npm run build:ios

# Web
npm run build:web
```

## License

MIT
