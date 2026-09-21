export type Enquiry = { name: string; email: string; message: string; topic?: string; language?: string; company?: string; source: string; website?: string };

/** true = delivered by the server; false = not available (fall back to a mailto draft). */
export async function sendEnquiry(data: Enquiry): Promise<boolean> {
  try {
    const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    return res.ok;
  } catch { return false; }
}
