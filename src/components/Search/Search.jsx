import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { collection, getDocs, query } from 'firebase/firestore';
import debounce from 'lodash.debounce'
import { db } from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid #F9BE32',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '70%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
            '&::placeholder': {
                color: 'gray',
                opacity: 1, 
            },
        },
    },
}));

const SearchAppBar = ({ onSearch }) => {
    const { t } = useTranslation();
    const handleSearch = async (searchQuery) => {
        const lowercaseQuery = searchQuery.toLowerCase();
        const ticketsCollection = collection(db, 'ticket');
        const q = query(ticketsCollection);
        const querySnapshot = await getDocs(q);
        const searchResult = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(ticket =>
                ticket.title.toLowerCase().includes(lowercaseQuery)
            );
        onSearch(searchResult);
    };


    const updateQuery = e => handleSearch(e?.target?.value)
    const debounceOnChange = debounce(updateQuery, 200)
    return (
        <Search style={{ width: '40%' }}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={t('search')}
                inputProps={{ 'aria-label': 'search' }}
                onChange={debounceOnChange}
            />
        </Search>
    );
}


export default SearchAppBar;
