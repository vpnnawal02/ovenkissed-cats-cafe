# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.message import EmailMessage
from fastapi.responses import RedirectResponse

app = FastAPI()

@app.get("/")
def go_to_github():
    return RedirectResponse(url="https://frabjous-elf-35e678.netlify.app/", status_code=307)

origins = [
    " https://frabjous-elf-35e678.netlify.app/", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Booking(BaseModel):
    name: str
    phone: str
    date: str
    time: str
    guests: int
    request: str | None = None

def send_booking_email(booking: Booking):
    msg = EmailMessage()
    msg["Subject"] = "New Table Booking"
    msg["From"] = "anms.creator02@gmail.com"
    msg["To"] = "vn.nawal02@gmail.com"

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

    msg.set_content("New booking received.")               # plain‑text fallback
    msg.add_alternative(html, subtype="html")              # HTML version

    # Example for Gmail SMTP with app password
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login("vn.nawal02@gmail.com", "ezxgtndjewflinya")
        smtp.send_message(msg)

@app.post("/api/book-table")
async def book_table(booking: Booking):
    print("New booking:", booking)
    send_booking_email(booking)
    return {"status": "ok"}


