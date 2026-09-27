import { useEffect, useState } from "react";

export function UtmHiddenFields() {
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || ""
    });
  }, []);

  return (
    <>
      <input type="hidden" name="utm_source" value={utmParams.utm_source} />
      <input type="hidden" name="utm_medium" value={utmParams.utm_medium} />
      <input type="hidden" name="utm_campaign" value={utmParams.utm_campaign} />
      <input type="hidden" name="utm_term" value={utmParams.utm_term} />
      <input type="hidden" name="utm_content" value={utmParams.utm_content} />
    </>
  );
}
