
export interface IClient {
    id:number,
    name?: string;
    phone?: string
  }

  export interface IAddress {
    id:number,
    content?: string;
    postalCode?: string
  }
export const tableColumns: string[] = [
    'id', 
    'name', 
    'phone', 
];


export const dataSourceRaw: IClient[]=[
    {
      id:1, name:'wilson', phone:'example'
    },
   
  ];
  