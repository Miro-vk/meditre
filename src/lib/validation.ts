import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  destination: z.enum(["greece", "turkey", "italy", "multi-country", "not-sure-yet"], {
    message: "Please choose a destination of interest.",
  }),
  travelDates: z.string().min(2, "Please share your preferred travel dates."),
  travelers: z.enum(["1-2", "3-5", "6+"], {
    message: "Please choose your group size.",
  }),
  experience: z.enum([
    "cultural-heritage-history",
    "food-wine",
    "private-custom-itinerary",
    "island-coastal-travel",
    "hidden-gems",
    "relaxed-slow-travel",
  ], {
    message: "Please choose a travel style.",
  }),
  budget: z.enum(["under-1500", "1500-3000", "3000-5000", "5000-plus"], {
    message: "Please choose a budget range.",
  }),
  message: z.string().min(20, "Please tell us a little more about your ideal trip."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;