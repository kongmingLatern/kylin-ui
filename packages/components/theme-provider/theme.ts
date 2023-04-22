// theme.ts
export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  dangerColor: string;
  warningColor: string;
  infoColor: string;
}

export const defaultTheme: Theme = {
  primaryColor: '#007aff',
  secondaryColor: '#6c757d',
  successColor: '#28a745',
  dangerColor: '#dc3545',
  warningColor: '#ffc107',
  infoColor: '#17a2b8',
};
