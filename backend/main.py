# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import RedirectResponse
import os
from dotenv import load_dotenv
import resend

load_dotenv()  # loads .env into environment

app = FastAPI()

resend.api_key = os.getenv("RESEND_API_KEY")
FROM_EMAIL = os.getenv("FROM_EMAIL")
TO_EMAIL = os.getenv("TO_EMAIL")

origins = [
    "https://frabjous-elf-35e678.netlify.app", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def go_to_github():
    return RedirectResponse(url="https://frabjous-elf-35e678.netlify.app/", status_code=307)

class Booking(BaseModel):
    name: str
    phone: str
    date: str
    time: str
    guests: int
    request: str | None = None

def send_booking_email(booking:Booking):
    html = f"""
    <html>
      <body style="font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:8px; padding:20px;">
          <h2 style="color:#b45309; margin-top:0;">New Table Reservation</h2>
          <p>You have received a new booking from your website.</p>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px; font-weight:bold;">Name</td>
              <td style="padding:8px;">{booking.name}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:8px; font-weight:bold;">Phone</td>
              <td style="padding:8px;">{booking.phone}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold;">Date</td>
              <td style="padding:8px;">{booking.date}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:8px; font-weight:bold;">Time</td>
              <td style="padding:8px;">{booking.time}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:bold;">Guests</td>
              <td style="padding:8px;">{booking.guests}</td>
            </tr>
            <tr style="background:#f9fafb;">
              <td style="padding:8px; font-weight:bold;">Special Request</td>
              <td style="padding:8px;">{booking.request or "—"}</td>
            </tr>
          </table>

          <p style="margin-top:20px; font-size:12px; color:#6b7280;">
            Sent automatically from your Ovenkissed - Cats Cafe booking form.
          </p>
        </div>
      </body>
    </html>
    """

    resend.Emails.send({
        "from": FROM_EMAIL,
        "to": TO_EMAIL,
        "subject": "New Table Booking – Ovenkissed Cats Cafe",
        "html": html,
    })

@app.post("/booktable")
async def book_table(booking: Booking):
    print("New booking:", booking)

    try:
        send_booking_email(booking)
    except Exception as e:
        print("Email failed:", e)

    return {"status": "ok"}