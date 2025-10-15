export interface CrumbHandle {
  crumb?: (data?: any) => { label: string; path: string };
}
