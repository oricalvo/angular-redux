export interface AppState {
  counter: number;
  contacts: ContactsState;
}

export interface ContactsState {
  all: Contact[];
  loading: boolean;
}

export interface Contact {
  id: number;
  name: string;
}
