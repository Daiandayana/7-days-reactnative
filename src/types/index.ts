// User types
export interface User {
  email: string;
  name?: string;
}

// Login form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

// Theme types (optional)
export interface ThemeColors {
  primary: string;
  secondary: string;
  error: string;
  success: string;
  background: string;
  text: string;
  textSecondary: string;
  border: string;
}
