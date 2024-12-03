import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { getBookings } from "../shared/services/bookingServiceEndpoints";

export function Home() {
  const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Fetch bookings from the backend using the booking service
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
        setFilteredBookings(data); // Initialize filteredBookings
      } catch (error) {
        console.error("Error fetching bookings:", error);
        // Optionally, set an error state to display to the user
      }
    };

    fetchBookings();
  }, []);

  // Handle search functionality
  useEffect(() => {
    const results = bookings.filter((booking) =>
      booking.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookings(results);
  }, [searchTerm, bookings]);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Booking List
      </Typography>

      {/* Search Field */}
      <TextField
        label="Search by Patient Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Booking Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Booking Date</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredBookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.id}</TableCell>
                <TableCell>{booking.patientName}</TableCell>
                <TableCell>
                  {new Date(booking.bookingDate).toLocaleString()}
                </TableCell>
                <TableCell>{booking.doctorName}</TableCell>
                <TableCell>{booking.department}</TableCell>
                <TableCell>{booking.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
