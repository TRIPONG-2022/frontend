export interface ManagedUserData {
  id: number;
  name: string;
  loginId: string;
  nickName: string;
  createdDate: string;
  roles: { roleName: string }[];
  reportType?: string;
  reporterName?: string;
}

export interface ManagedUserPageData {
  content: ManagedUserData[];
  totalPages: number;
  totalElements: number;
}
