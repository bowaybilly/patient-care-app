using Microsoft.AspNetCore.Mvc;
using PatientCareApi.Api.PatientCareApi.Api.Models;

namespace PatientCareApi.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private readonly ILogger<BookingController> _logger;

        public BookingController(ILogger<BookingController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBooking")]
        public IEnumerable<Booking> Get()
        {
            // Return 10 mock bookings
            return Enumerable.Range(1, 10).Select(index => new Booking
            {
                Id = index,
                PatientName = $"Patient {index}",
                BookingDate = DateTime.Now.AddDays(index),
                DoctorName = $"Doctor {index}",
                Department = index % 2 == 0 ? "Cardiology" : "Neurology",
                Status = index % 3 == 0 ? "Cancelled" : "Confirmed"
            })
            .ToArray();
        }
    }
}
