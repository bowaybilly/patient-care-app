// src/services/bookingServiceEndpoints.js
import apiService from "./apiService";

// Fetch all bookings
export const getBookings = async () => {
  try {
    const response = await apiService.get("/booking");
    return response.data;
  } catch (error) {
    // Handle or rethrow the error as needed
    throw error;
  }
};

// Fetch a single booking by ID (optional)
export const getBookingById = async (id) => {
  try {
    const response = await apiService.get(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new booking (optional)
export const createBooking = async (bookingData) => {
  try {
    const response = await apiService.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an existing booking (optional)
export const updateBooking = async (id, bookingData) => {
  try {
    const response = await apiService.put(`/bookings/${id}`, bookingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a booking (optional)
export const deleteBooking = async (id) => {
  try {
    const response = await apiService.delete(`/bookings/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
