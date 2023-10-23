type User = {
  id: number,
  kind: string;
}

function makeCustomer<T extends User>(u:T): T {
  let obj = {
    id: u.id,
    kind: 'customr'
  }
  return obj as T;
}