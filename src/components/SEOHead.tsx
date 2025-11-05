import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function SEOHead({ title, description, image, url }: SEOHeadProps) {
  const siteUrl = 'https://infratechmaterials.com'; // Replace with your actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/logo.png`; // Replace with your actual default image path

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{`${title} | InfraTech - Premium ReadyMix Plaster & Brick Adhesive Manufacturer`}</title>
      <meta name="description" content={`${description} Leading manufacturer of ReadyMix Plaster and Brick Adhesive in Hyderabad. High-quality construction materials for professional builders and contractors.`} />
      <link rel="canonical" href={fullUrl} />

      {/* Keywords and topic relevance */}
      <meta name="keywords" content="readymix plaster, ready mix plaster, brick adhesive, construction materials, building materials, plaster manufacturer, Hyderabad construction, wall plaster, premium plaster, construction supplies, building supplies, masonry products, construction chemicals, wall putty" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <meta name="geo.position" content="17.448523;78.38871" />
      <meta name="ICBM" content="17.448523, 78.38871" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | Premium ReadyMix Plaster & Construction Materials`} />
      <meta property="og:description" content={`${description} Top manufacturer of ReadyMix Plaster and Brick Adhesive in Hyderabad.`} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="InfraTech Construction Materials" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={`${title} | Premium ReadyMix Plaster Manufacturer`} />
      <meta name="twitter:description" content={`${description} Leading supplier of construction materials in Hyderabad.`} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1BAB83" />
      
      {/* Language and region */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="alternate" hrefLang="en-IN" href={fullUrl} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "InfraTech Construction Materials",
          "url": "${siteUrl}",
          "logo": "${defaultImage}",
          "description": "Leading manufacturer of ReadyMix Plaster and Brick Adhesive in Hyderabad",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Madhapur, Hitech City",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.448523",
            "longitude": "78.38871"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9052555510",
            "contactType": "sales",
            "email": "infratechmaterials@gmail.com",
            "areaServed": "IN"
          },
          "sameAs": [
            "${siteUrl}"
          ]
        }`}
      </script>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "ReadyMix Plaster",
          "description": "High-quality ReadyMix Plaster for professional construction projects. Pre-mixed, easy to apply, and superior finish.",
          "brand": {
            "@type": "Brand",
            "name": "InfraTech"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "InfraTech Construction Materials"
          },
          "category": "Construction Materials > Plaster",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "areaServed": "IN"
          }
        }`}
      </script>
    </Helmet>
  );
}