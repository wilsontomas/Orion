
export interface IClient {
    id:number,
    name?: string;
  }

  export interface IAddress {
    id:number,
    content?: string;
    postalCode?: string
  }
export const tableColumns: string[] = [
    'id', 
    'name', 
    'action'
];


// export const dataSourceRaw: IClient[]=[
//     {
//       id:1, name:'wilson',
//     },
   
//   ];
  