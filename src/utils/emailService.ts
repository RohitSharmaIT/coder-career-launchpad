
export const sendConfirmationEmail = async (
  serviceName: string, 
  bookingId: string, 
  bookingDate: Date,
  userEmail: string,
  userName: string,
  notes?: string
) => {
  console.log("Sending confirmation email to:", userEmail);
  
  // Format the date for email
  const formattedDate = bookingDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const formattedTime = bookingDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  // Email template parameters
  const emailParams = {
    to_email: userEmail,
    from_email: "bhai565665@gmail.com",
    to_name: userName,
    service_name: serviceName,
    booking_date: formattedDate,
    booking_time: formattedTime,
    booking_id: bookingId,
    notes: notes || 'No additional notes'
  };
  
  try {
    // In a real implementation, you would call your email service here
    // For demonstration purposes, we're logging the email content
    console.log("Email would be sent with these parameters:", emailParams);
    console.log(`
Subject: Booking Confirmation - ${serviceName}

To: ${userEmail}
From: bhai565665@gmail.com

Dear ${emailParams.to_name},

Thank you for booking your slot with Apne Wale Coders!

Your booking has been successfully confirmed. Please save this email for your records.

BOOKING DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service: ${serviceName}
Date: ${formattedDate}
Time: ${formattedTime}
Booking ID: ${bookingId}
${notes ? `Notes: ${notes}` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WHAT'S NEXT?
• You will receive a calendar invite shortly
• Our team will contact you 24 hours before your appointment
• Please join the session 5 minutes early
• Have any relevant documents ready (resume, portfolio, etc.)

If you need to reschedule or cancel, please contact us at least 24 hours in advance.

Questions? Feel free to reach out to us at bhai565665@gmail.com

Best regards,
Apne Wale Coders Team
📧 bhai565665@gmail.com
🌐 www.apnewalecoders.com
    `);
    
    // Log admin notification
    console.log("Admin notification would be sent to: bhai565665@gmail.com");
    console.log(`New booking received: ${serviceName} on ${formattedDate} at ${formattedTime} for ${emailParams.to_name}`);
    
    return true;
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return false;
  }
};
