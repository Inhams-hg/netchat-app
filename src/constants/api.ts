export const API_ROUTES = {
  // Auth
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  VERIFY_EMAIL: '/auth/verify-email',
  VERIFY_PHONE: '/auth/verify-phone',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',

  // Users
  GET_USER_PROFILE: '/users/:userId',
  UPDATE_USER_PROFILE: '/users/:userId',
  SEARCH_USERS: '/users/search',
  GET_SUGGESTED_USERS: '/users/suggested',
  GET_USER_FRIENDS: '/users/:userId/friends',

  // Conversations
  GET_CONVERSATIONS: '/conversations',
  GET_CONVERSATION: '/conversations/:conversationId',
  CREATE_CONVERSATION: '/conversations',
  UPDATE_CONVERSATION: '/conversations/:conversationId',
  DELETE_CONVERSATION: '/conversations/:conversationId',
  ARCHIVE_CONVERSATION: '/conversations/:conversationId/archive',
  MUTE_CONVERSATION: '/conversations/:conversationId/mute',

  // Messages
  GET_MESSAGES: '/conversations/:conversationId/messages',
  GET_MESSAGE: '/messages/:messageId',
  SEND_MESSAGE: '/messages',
  UPDATE_MESSAGE: '/messages/:messageId',
  DELETE_MESSAGE: '/messages/:messageId',
  SEARCH_MESSAGES: '/messages/search',
  PIN_MESSAGE: '/messages/:messageId/pin',
  REACT_TO_MESSAGE: '/messages/:messageId/react',

  // Groups
  GET_GROUPS: '/groups',
  GET_GROUP: '/groups/:groupId',
  CREATE_GROUP: '/groups',
  UPDATE_GROUP: '/groups/:groupId',
  DELETE_GROUP: '/groups/:groupId',
  ADD_GROUP_MEMBER: '/groups/:groupId/members',
  REMOVE_GROUP_MEMBER: '/groups/:groupId/members/:memberId',
  PROMOTE_ADMIN: '/groups/:groupId/admins',
  LEAVE_GROUP: '/groups/:groupId/leave',

  // Calls
  GET_CALLS: '/calls',
  GET_CALL: '/calls/:callId',
  INITIATE_CALL: '/calls',
  UPDATE_CALL_STATUS: '/calls/:callId/status',
  END_CALL: '/calls/:callId/end',

  // Stories
  GET_STORIES: '/stories',
  GET_STORY: '/stories/:storyId',
  CREATE_STORY: '/stories',
  DELETE_STORY: '/stories/:storyId',
  VIEW_STORY: '/stories/:storyId/view',
  REACT_TO_STORY: '/stories/:storyId/react',

  // Friends
  SEND_FRIEND_REQUEST: '/friends/request',
  GET_FRIEND_REQUESTS: '/friends/requests',
  ACCEPT_FRIEND_REQUEST: '/friends/request/:requestId/accept',
  REJECT_FRIEND_REQUEST: '/friends/request/:requestId/reject',
  GET_FRIENDS: '/friends',
  UNFRIEND: '/friends/:friendId',

  // Notifications
  GET_NOTIFICATIONS: '/notifications',
  MARK_NOTIFICATION_READ: '/notifications/:notificationId/read',
  MARK_ALL_NOTIFICATIONS_READ: '/notifications/read-all',
  DELETE_NOTIFICATION: '/notifications/:notificationId',

  // Settings
  GET_SETTINGS: '/settings',
  UPDATE_SETTINGS: '/settings',

  // Block
  BLOCK_USER: '/blocks',
  UNBLOCK_USER: '/blocks/:blockedUserId',
  GET_BLOCKED_USERS: '/blocks',

  // Report
  REPORT_USER: '/reports/user',
  REPORT_MESSAGE: '/reports/message',
  REPORT_STORY: '/reports/story',
  GET_REPORTS: '/reports',

  // Media
  UPLOAD_MEDIA: '/media/upload',
  DELETE_MEDIA: '/media/:mediaId',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  AUTHENTICATION_FAILED: 'Authentication failed. Please try again.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  USER_NOT_FOUND: 'User not found.',
  EMAIL_ALREADY_USED: 'This email is already in use.',
  PHONE_ALREADY_USED: 'This phone number is already in use.',
  WEAK_PASSWORD: 'Password is too weak. Use at least 8 characters.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PHONE: 'Invalid phone number.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
  PERMISSION_DENIED: 'Permission denied.',
  NOT_FOUND: 'Not found.',
  ALREADY_EXISTS: 'Already exists.',
  INVALID_REQUEST: 'Invalid request.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unknown error occurred.',
};

export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_RESET_SENT: 'Password reset link sent to your email.',
  EMAIL_VERIFIED: 'Email verified successfully.',
  PHONE_VERIFIED: 'Phone verified successfully.',
  MESSAGE_SENT: 'Message sent successfully.',
  GROUP_CREATED: 'Group created successfully.',
  FRIEND_REQUEST_SENT: 'Friend request sent.',
  FRIEND_REQUEST_ACCEPTED: 'Friend request accepted.',
};

export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: 'This field is required.',
  INVALID_EMAIL: 'Invalid email address.',
  INVALID_PHONE: 'Invalid phone number.',
  MIN_LENGTH: 'Minimum {min} characters required.',
  MAX_LENGTH: 'Maximum {max} characters allowed.',
  PASSWORDS_NOT_MATCH: 'Passwords do not match.',
  USERNAME_TAKEN: 'Username already taken.',
  INVALID_URL: 'Invalid URL.',
};

export const COLLECTION_NAMES = {
  USERS: 'users',
  CONVERSATIONS: 'conversations',
  MESSAGES: 'messages',
  GROUPS: 'groups',
  CALLS: 'calls',
  STORIES: 'stories',
  FRIEND_REQUESTS: 'friendRequests',
  FRIENDSHIPS: 'friendships',
  NOTIFICATIONS: 'notifications',
  BLOCKS: 'blocks',
  REPORTS: 'reports',
  SETTINGS: 'settings',
  ACTIVITY_LOGS: 'activityLogs',
};

export const FIRESTORE_PATHS = {
  getUserProfile: (uid: string) => `/users/${uid}`,
  getConversation: (conversationId: string) => `/conversations/${conversationId}`,
  getConversationMessages: (conversationId: string) => `/conversations/${conversationId}/messages`,
  getGroupMembers: (groupId: string) => `/groups/${groupId}/members`,
  getUserNotifications: (uid: string) => `/users/${uid}/notifications`,
  getUserSettings: (uid: string) => `/users/${uid}/settings`,
  getUserBlocks: (uid: string) => `/users/${uid}/blocks`,
};

export const STORAGE_PATHS = {
  getProfilePhotoPath: (uid: string) => `profiles/${uid}/photo`,
  getCoverPhotoPath: (uid: string) => `profiles/${uid}/cover`,
  getGroupPhotoPath: (groupId: string) => `groups/${groupId}/photo`,
  getMessageMediaPath: (conversationId: string, messageId: string) =>
    `messages/${conversationId}/${messageId}`,
  getStoryPath: (userId: string, storyId: string) => `stories/${userId}/${storyId}`,
};
