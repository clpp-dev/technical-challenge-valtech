export interface CookieFortuneField {
  key: string;
  value: string;
}

export interface CookieFortuneDocument {
  documentId?: string;
  fields: CookieFortuneField[];
}

export interface CookieFortuneData {
  documents: CookieFortuneDocument[];
}

export interface NewFortuneState {
  CookieFortune: string;
  id: string;
}

export interface NotificationState {
  active: boolean;
  type: "error" | "success";
  text: string;
}

export interface TableDataItem {
  id: string;
  phrase: string;
  actions: React.ReactElement;
}

export interface TableSchema {
  properties: {
    phrase: {
      title: React.ReactElement;
    };
    actions: {
      title: React.ReactElement;
      width: number;
    };
  };
}

export interface GraphQLQueryVariables {
  acronym: string;
  fields: string[];
  sort: string;
  pageSize: string;
}

export interface CreateDocumentVariables {
  acronym: string;
  document: {
    fields: {
      key: string;
      value: string;
    }[];
  };
}

export interface UpdateDocumentVariables {
  acronym: string;
  documentId: string;
  document: {
    fields: {
      key: string;
      value: string;
    }[];
  };
}

export interface DeleteDocumentVariables {
  acronym: string;
  documentId: string;
}

declare module 'vtex.styleguide' {
  export const Spinner: React.ComponentType<any>;
  export const Table: React.ComponentType<any>;
  export const Alert: React.ComponentType<any>;
  export const ModalDialog: React.ComponentType<any>;
  export const IconDelete: React.ComponentType<any>;
  export const IconEdit: React.ComponentType<any>;
  export const ButtonWithIcon: React.ComponentType<any>;
  export const Button: React.ComponentType<any>;
  export const Textarea: React.ComponentType<any>;
}
