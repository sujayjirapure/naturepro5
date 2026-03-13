import { Resend } from "resend";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      name,
      company,
      email,
      phone,
      wasteType,
      quantity,
      message
    } = req.body;

    const response = await resend.emails.send({
      from: "ATIN <onboarding@resend.dev>",
      to: "natureprocreators@gmail.com",
      subject: "New Plastic Waste Inquiry",
      html: `
        <h2>New Inquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Waste Type:</b> ${wasteType}</p>
        <p><b>Quantity:</b> ${quantity}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Email sent:", response);

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("Resend error:", error);

    return res.status(500).json({
      error: error.message
    });

  }
}