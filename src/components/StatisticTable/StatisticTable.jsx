import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StatisticTable = () => {
    const [tickets, setTickets] = useState([]);
    const [favoriteCounts, setFavoriteCounts] = useState({});
    const [cartCounts, setCartCounts] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ticketsCollection = collection(db, 'ticket');
                const ticketSnapshot = await getDocs(ticketsCollection);
                const ticketList = ticketSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTickets(ticketList);

                const usersCollection = collection(db, 'users');
                const usersSnapshot = await getDocs(usersCollection);
                const ticketCounts = {};
                const cartCount = {};

                for (const userDoc of usersSnapshot.docs) {
                    const favoritesCollection = collection(db, `users/${userDoc.id}/favorites`);
                    const favoritesSnapshot = await getDocs(favoritesCollection);

                    favoritesSnapshot.docs.forEach(favoriteDoc => {
                        const ticketId = favoriteDoc.id;
                        ticketCounts[ticketId] = (ticketCounts[ticketId] || 0) + 1;
                    });
                }

                for (const userDoc of usersSnapshot.docs) {
                    const cartCollection = collection(db, `users/${userDoc.id}/cart`);
                    const cartSnapshot = await getDocs(cartCollection);

                    cartSnapshot.docs.forEach(cartDoc => {
                        const ticketId = cartDoc.id;
                        cartCount[ticketId] = (cartCount[ticketId] || 0) + 1;
                    });
                }

                setFavoriteCounts(ticketCounts);
                setCartCounts(cartCount);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Event Title</StyledTableCell>
                        <StyledTableCell align="right">Favorites</StyledTableCell>
                        <StyledTableCell align="right">Added to Cart</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickets.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.title || 'No Title'}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {favoriteCounts[row.id] || 0}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {cartCounts[row.id] || 0}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default StatisticTable;
