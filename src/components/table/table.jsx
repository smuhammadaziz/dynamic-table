import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { data } from './makeData';
import './style.css';

const Table = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
      },
      {
        accessorKey: 'name',
        header: 'F.I.O',
      },
      {
        accessorKey: 'age',
        header: 'Yosh',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'phone',
        header: 'Telefon nomer',
      },
      {
        accessorKey: 'city',
        header: 'Shahar',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
      {
        accessorKey: 'country',
        header: 'Davlat',
      },
      {
        accessorKey: 'zipcode',
        header: 'Zipcode',
      },
      {
        accessorKey: 'occupation',
        enableColumnOrdering: true, //disable column ordering for this column,
        header: 'Kasbi',
      },
    ],
    []
  );

  return (
    <div className='dynamic-table'>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enablePinning
      />
    </div>
  );
};

export default Table;
