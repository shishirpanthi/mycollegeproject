import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import Pagination from '../../components/Pagination/Pagination';
import useStyles from './styles';
import {getPostsBySearch} from '../../actions/posts';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

function Home() {
    const classes = useStyles();
    const query = useQuery();
    const history = useHistory();
    const dispatch = useDispatch();


    const page = query.get('page') || 1;
    const [search, setSearch] = useState();
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if (search?.trim() || tags?.length > 0) {
            dispatch(getPostsBySearch({search: search, tags: tags.join(',')}));
            history.push(`/posts/search?search=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }
    
    const handlekeyPress = (event) => {
        if(event.keyCode === 13) {
            searchPost();
        }
    }

    const SearchPostsInput = () => {
        return (
            <TextField 
                name="search"
                variant="outlined"
                label="Search Posts"
                fullWidth
                autoFocus
                value={search}
                onKeyPress={handlekeyPress}
                onChange={(event) => setSearch(event.target.value)}
            />
        )
    }

    const SearchTagsInput = () => {
        return (
            <ChipInput
                style={{margin: '10px 0'}}
                value={tags}
                onAdd={(tag) => setTags([...tags, tag])}
                onDelete={(deleteTag) => setTags(tags.filter((tag) => tag !== deleteTag))}
                label="Search Tags"
                variant="outlined"
            />
        )
    }

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <SearchPostsInput />
                            <SearchTagsInput />
                            <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search </Button>
                        </AppBar>
                        <Form />
                        
                        {(!search && !tags.length) && (
                            <Paper elevation={6} className={classes.pagination}>
                                <Pagination page={page}/>
                            </Paper>
                        )}            
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;