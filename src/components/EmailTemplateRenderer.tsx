interface EmailTemplateRendererProps {
  template: {
    id: string;
    name: string;
    archetype: string;
  };
  placeholders: {
    company_logo: string;
    headline: string;
    body_text: string;
    cta_link: string;
    cta_label: string;
  };
}

export const EmailTemplateRenderer = ({ template, placeholders }: EmailTemplateRendererProps) => {
  const renderTemplate = () => {
    switch (template.archetype) {
      case "Hero CTA":
        return (
          <div style={{ fontFamily: "'Open Sans', Arial, sans-serif", maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ padding: "40px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a", marginBottom: "10px" }}>
                {placeholders.company_logo}
              </div>
              <div style={{ width: "100%", height: "300px", backgroundColor: "#3b82f6", borderRadius: "8px", marginBottom: "30px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "18px" }}>
                Hero Image
              </div>
              <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#1e3a8a", marginBottom: "20px" }}>
                {placeholders.headline}
              </h1>
              <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "30px", lineHeight: "1.6" }}>
                {placeholders.body_text}
              </p>
              <a href={placeholders.cta_link} style={{ display: "inline-block", padding: "14px 32px", backgroundColor: "#f97316", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "600", fontSize: "16px" }}>
                {placeholders.cta_label}
              </a>
            </div>
          </div>
        );
      
      case "Product Grid":
        return (
          <div style={{ fontFamily: "'Open Sans', Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1e3a8a", marginBottom: "10px" }}>
                {placeholders.company_logo}
              </div>
              <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1e3a8a", marginBottom: "10px" }}>
                {placeholders.headline}
              </h1>
              <p style={{ fontSize: "16px", color: "#64748b" }}>
                {placeholders.body_text}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginBottom: "30px" }}>
              {[1, 2, 3, 4].map((item) => (
                <div key={item} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
                  <div style={{ width: "100%", height: "120px", backgroundColor: "#e0e7ff", borderRadius: "8px", marginBottom: "15px" }}></div>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: "#1e3a8a", marginBottom: "8px" }}>Product {item}</h3>
                  <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "12px" }}>Description</p>
                  <a href="#" style={{ display: "inline-block", padding: "8px 16px", backgroundColor: "#3b82f6", color: "white", textDecoration: "none", borderRadius: "6px", fontSize: "14px" }}>View</a>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href={placeholders.cta_link} style={{ display: "inline-block", padding: "14px 32px", backgroundColor: "#f97316", color: "white", textDecoration: "none", borderRadius: "8px", fontWeight: "600", fontSize: "16px" }}>
                {placeholders.cta_label}
              </a>
            </div>
          </div>
        );
      
      case "Minimal Text":
        return (
          <div style={{ fontFamily: "'Open Sans', Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold", color: "#1e3a8a", marginBottom: "30px" }}>
              {placeholders.company_logo}
            </div>
            <h1 style={{ fontSize: "24px", fontWeight: "600", color: "#1e3a8a", marginBottom: "20px" }}>
              {placeholders.headline}
            </h1>
            <div style={{ fontSize: "16px", color: "#475569", lineHeight: "1.7", marginBottom: "30px" }}>
              <p style={{ marginBottom: "16px" }}>{placeholders.body_text}</p>
              <p style={{ marginBottom: "16px" }}>This is a clean, text-focused template perfect for transactional emails, legal notices, or important announcements where clarity and readability are paramount.</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <a href={placeholders.cta_link} style={{ display: "inline-block", padding: "12px 28px", backgroundColor: "#3b82f6", color: "white", textDecoration: "none", borderRadius: "6px", fontWeight: "500", fontSize: "15px" }}>
                {placeholders.cta_label}
              </a>
            </div>
            <div style={{ fontSize: "14px", color: "#94a3b8", paddingTop: "20px", borderTop: "1px solid #e2e8f0" }}>
              <p>This email was sent to you by {placeholders.company_logo}</p>
            </div>
          </div>
        );
      
      default:
        return (
          <div style={{ fontFamily: "'Open Sans', Arial, sans-serif", maxWidth: "600px", margin: "0 auto", padding: "40px 20px", textAlign: "center" }}>
            <h2 style={{ color: "#64748b" }}>Template preview will appear here</h2>
          </div>
        );
    }
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", padding: "20px" }}>
      {renderTemplate()}
    </div>
  );
};
