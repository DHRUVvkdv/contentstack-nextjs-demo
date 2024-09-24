export interface Author {
    uid: string;
    _content_type_uid: string;
  }
  
  export interface BodyChild {
    type: string;
    attrs: Record<string, unknown>;
    children: Array<{ text: string; bold?: boolean }>;
    uid: string;
  }
  
  export interface BlogPost {
    _version: number;
    locale: string;
    uid: string;
    ACL: Record<string, unknown>;
    _in_progress: boolean;
    author: Author[];
    body: {
      attrs: Record<string, unknown>;
      children: BodyChild[];
    };
    // Add other fields as necessary
  }