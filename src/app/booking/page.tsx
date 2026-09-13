import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="w-full max-w-4xl p-5">
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>
      <Box component="form" className="flex flex-col gap-4">
        <DateReserve />
        <Button name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
