namespace PatientCareApi.Api
{
    namespace PatientCareApi.Api.Models
    {
        public class Booking
        {
            public int Id { get; set; }
            public string PatientName { get; set; }
            public DateTime BookingDate { get; set; }
            public string DoctorName { get; set; }
            public string Department { get; set; }
            public string Status { get; set; } // e.g., "Confirmed", "Pending", "Cancelled"
        }
    }

}