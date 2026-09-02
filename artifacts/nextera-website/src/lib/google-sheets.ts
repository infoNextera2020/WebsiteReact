/**
 * Utility to submit form data to Google Sheets via Google Apps Script Web App
 */

export const GOOGLE_SHEETS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz4b7rv0byjsncTyaJIIdIOlhYmJpQ6tf_Ksupwhz2YuefgpSMF4EWw1havRQHblyzr7w/exec";

export interface FormSubmissionData {
  [key: string]: string | number | boolean | null | undefined;
}

export async function submitToGoogleSheets(
  data: FormSubmissionData,
  formName: string = "Form Submission"
): Promise<{ success: boolean; error?: string }> {
  const payload = {
    ...data,
    form_source: formName,
    submitted_at: new Date().toISOString(),
    formatted_date: new Date().toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
    }),
  };

  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== null) {
      formData.append(key, String(value));
    }
  }

  try {
    // Mode 'no-cors' is required for Google Apps Script Web App endpoints
    // because Google redirects POST requests to script.googleusercontent.com
    await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
