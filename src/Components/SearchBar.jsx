import React from 'react'
import { useState } from 'react';
import { searchTerm, useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';



const SearchBar = () => {
    const [searchTerm, setsearchTerm] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            navigate(`/search/${searchTerm}`);

            setsearchTerm('');
        }
    }



    return (
        <Paper
            component='form'
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                mt: 2,
                boxShadow: 'none',
                mr: { sm: 5 }
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value= {searchTerm}
                onChange={((e) => setsearchTerm(e.target.value))}
            />
            <IconButton
                type="submit"
                sx={{
                    p: '8px',
                    color: 'red'
                }}
            >
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar