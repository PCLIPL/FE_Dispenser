import React, { useState, useMemo } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Box, TextField } from '@mui/material';
import { useNavigation } from '@refinedev/core';
import {EditButton,
  DeleteButton,
  ShowButton} from "@refinedev/mui"

// Static data for demonstration
const staticPosts = [
  { id: 1, title: 'First Post', publishedAt: '2024-08-20', category: 'Tech', commentable: true },
  { id: 2, title: 'Second Post', publishedAt: '2024-08-19', category: 'Lifestyle', commentable: false },
  { id: 3, title: 'Third Post', publishedAt: '2024-08-18', category: 'Business', commentable: true },
  // Add more dummy data as needed
];

export const ListBugReport: React.FC = () => {
  const { push } = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered data based on the search term
  const filteredPosts = useMemo(() => {
    return staticPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        minWidth: 50,
      },
      {
        field: 'title',
        flex: 1,
        headerName: 'Title',
        minWidth: 200,
      },
      {
        field: 'publishedAt',
        headerName: 'Published at',
        minWidth: 150,
        renderCell: ({ value }) => <span>{new Date(value).toLocaleDateString()}</span>,
      },
      {
        field: 'category',
        headerName: 'Category',
        minWidth: 150,
      },
      {
        field: 'commentable',
        headerName: 'Commentable',
        minWidth: 100,
        renderCell: ({ value }) => (value ? '✔️' : '✖️'),
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        renderCell: ({ row }) => (
          <>
            <EditButton hideText recordItemId={row.id} />
            <ShowButton hideText recordItemId={row.id} />
            <DeleteButton hideText recordItemId={row.id} />
          </>
        ),
        align: 'center',
        headerAlign: 'center',
        minWidth: 150,
      },
    ],
    [push]
  );

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <TextField
          placeholder="Search by title..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => push('/bugreport/create')}
        >
          + Create
        </Button>
      </Box>
      <DataGrid rows={filteredPosts} columns={columns} autoHeight />
    </Box>
  );
};
