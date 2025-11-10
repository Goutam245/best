export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  archetype: string;
  useCases: string[];
  mjml?: string;
  html?: string;
  notes?: string;
}

export const templates: Template[] = [
  {
    id: "hero-cta-promo",
    name: "Hero CTA Promotional",
    description: "Large hero image with prominent call-to-action button. Perfect for product launches and major announcements.",
    category: "promotional",
    archetype: "Hero CTA",
    useCases: ["Product Launch", "Sale Event", "Campaign"],
    notes: "Use high-quality hero images. Keep headline concise and action-oriented. Single strong CTA works best.",
  },
  {
    id: "product-grid",
    name: "Product Showcase Grid",
    description: "2x2 grid layout showcasing multiple products or services with individual CTAs.",
    category: "promotional",
    archetype: "Product Grid",
    useCases: ["Ecommerce", "Service Menu", "Multi-offer"],
    notes: "Ensure images are same aspect ratio. Keep product names short. Use consistent pricing format.",
  },
  {
    id: "minimal-transactional",
    name: "Minimal Transactional",
    description: "Clean, text-focused design for important notifications and confirmations.",
    category: "transactional",
    archetype: "Minimal Text",
    useCases: ["Order Confirmation", "Password Reset", "Legal Notice"],
    notes: "Prioritize readability. Use clear hierarchy. Avoid heavy styling that might distract from content.",
  },
  {
    id: "newsletter-digest",
    name: "Newsletter Digest",
    description: "Multi-card layout perfect for content roundups and regular updates.",
    category: "newsletter",
    archetype: "Multi-card Digest",
    useCases: ["Weekly Newsletter", "Blog Roundup", "News Updates"],
    notes: "Keep card content concise. Use compelling thumbnails. Maintain consistent card sizing.",
  },
  {
    id: "welcome-onboarding",
    name: "Welcome Onboarding",
    description: "Friendly welcome email with step-by-step guidance for new users.",
    category: "engagement",
    archetype: "Step-by-step",
    useCases: ["User Onboarding", "Getting Started", "Tutorial"],
    notes: "Number steps clearly. Use icons for visual guidance. Include support contact information.",
  },
  {
    id: "split-image-text",
    name: "Split Layout Announcement",
    description: "Image and text side-by-side for balanced visual storytelling.",
    category: "promotional",
    archetype: "Text + Visual Split",
    useCases: ["Feature Announcement", "Company News", "Event Invitation"],
    notes: "Balance image and text weight. Ensure mobile responsiveness. Use high-contrast images.",
  },
  {
    id: "double-cta",
    name: "Double CTA Focus",
    description: "Two prominent CTAs for compare/choose scenarios.",
    category: "promotional",
    archetype: "Double CTA",
    useCases: ["Plan Comparison", "Upsell", "A/B Choice"],
    notes: "Make CTAs equally prominent. Clear differentiation between options. Use contrasting colors.",
  },
  {
    id: "feedback-review",
    name: "Feedback Request",
    description: "Customer feedback and review collection template.",
    category: "engagement",
    archetype: "Review / Feedback",
    useCases: ["Survey", "Review Request", "NPS Score"],
    notes: "Keep survey short. Offer incentive if applicable. Make submission easy and quick.",
  },
  {
    id: "appointment-reminder",
    name: "Appointment Reminder",
    description: "Compact reminder format with key details front and center.",
    category: "reminder",
    archetype: "Compact Reminder",
    useCases: ["Appointment", "Deadline", "Renewal"],
    notes: "Display date/time prominently. Include calendar add option. Provide cancellation/reschedule link.",
  },
  {
    id: "order-confirmation",
    name: "Order Confirmation",
    description: "Detailed confirmation with order summary and tracking information.",
    category: "transactional",
    archetype: "Confirmation",
    useCases: ["Order Confirmation", "Booking", "Reservation"],
    notes: "Include order number prominently. Show itemized list. Provide customer support contact.",
  },
  {
    id: "story-narrative",
    name: "Brand Story",
    description: "Visual narrative template for brand storytelling and content marketing.",
    category: "newsletter",
    archetype: "Storytelling Block",
    useCases: ["Brand Story", "Case Study", "Customer Journey"],
    notes: "Use compelling visuals throughout. Maintain narrative flow. Include social proof where relevant.",
  },
  {
    id: "coupon-offer",
    name: "Coupon & Special Offer",
    description: "Eye-catching promotional template with highlighted discount code.",
    category: "promotional",
    archetype: "Offer Highlight",
    useCases: ["Discount Code", "Limited Offer", "Loyalty Reward"],
    notes: "Make coupon code easy to copy. Show expiration clearly. Create urgency with countdown if applicable.",
  },
];
