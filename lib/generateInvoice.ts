import PDFDocument from "pdfkit";

interface InvoiceItem {
    name: string;
    price: number;
    qty: number;
}

interface InvoiceData {
    orderNumber: string;
    date: string;
    customerName: string;
    customerEmail?: string;
    shippingAddress?: {
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        postal_code?: string | null;
        country?: string | null;
    } | null;
    items: InvoiceItem[];
    totalAmount: number;
}

export function generateInvoice(data: InvoiceData): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ margin: 50, size: "A4" });
        const chunks: Buffer[] = [];

        doc.on("data", chunk => chunks.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(chunks)));
        doc.on("error", reject);

        const BLACK = "#0A0A0A";
        const MUTED = "#6B7280";
        const ACCENT = "#3DDC84";
        const BORDER = "#E5E7EB";
        const W = 595 - 100; // page width minus margins

        // ── Header ──────────────────────────────────────────────────
        doc.fontSize(22).font("Helvetica-Bold").fillColor(BLACK).text("AD BOOTS", 50, 50);
        doc.fontSize(9).font("Helvetica").fillColor(MUTED).text("ad-boots.com · contact@ad-boots.com", 50, 78);

        doc.fontSize(22).font("Helvetica-Bold").fillColor(BLACK)
            .text("FACTURE", 50, 50, { align: "right" });
        doc.fontSize(9).font("Helvetica").fillColor(MUTED)
            .text(`N° ${data.orderNumber}`, 50, 78, { align: "right" });
        doc.fontSize(9).fillColor(MUTED)
            .text(`Date : ${data.date}`, 50, 92, { align: "right" });

        // ── Divider ──────────────────────────────────────────────────
        doc.moveTo(50, 115).lineTo(545, 115).strokeColor(BORDER).lineWidth(1).stroke();

        // ── Billing info ─────────────────────────────────────────────
        doc.fontSize(8).font("Helvetica-Bold").fillColor(MUTED)
            .text("FACTURÉ À", 50, 130);
        doc.fontSize(10).font("Helvetica-Bold").fillColor(BLACK)
            .text(data.customerName, 50, 145);
        if (data.customerEmail) {
            doc.fontSize(9).font("Helvetica").fillColor(MUTED)
                .text(data.customerEmail, 50, 160);
        }

        if (data.shippingAddress) {
            const addr = data.shippingAddress;
            let y = 175;
            if (addr.line1) { doc.text(addr.line1, 50, y); y += 14; }
            if (addr.line2) { doc.text(addr.line2, 50, y); y += 14; }
            if (addr.postal_code || addr.city) {
                doc.text(`${addr.postal_code || ""} ${addr.city || ""}`.trim(), 50, y);
                y += 14;
            }
            if (addr.country) doc.text(addr.country, 50, y);
        }

        // ── Items table ──────────────────────────────────────────────
        const tableTop = 270;

        // Table header
        doc.rect(50, tableTop, W, 26).fill("#F9FAFB");
        doc.fontSize(8).font("Helvetica-Bold").fillColor(MUTED);
        doc.text("DÉSIGNATION", 60, tableTop + 9);
        doc.text("QTÉ", 370, tableTop + 9, { width: 50, align: "center" });
        doc.text("P.U.", 420, tableTop + 9, { width: 70, align: "right" });
        doc.text("TOTAL", 490, tableTop + 9, { width: 55, align: "right" });

        // Table rows
        let y = tableTop + 26;
        data.items.forEach((item, i) => {
            const rowBg = i % 2 === 0 ? "#FFFFFF" : "#F9FAFB";
            doc.rect(50, y, W, 28).fill(rowBg);

            doc.fontSize(9).font("Helvetica").fillColor(BLACK);
            doc.text(item.name, 60, y + 9, { width: 300 });
            doc.text(String(item.qty), 370, y + 9, { width: 50, align: "center" });
            doc.text(`${item.price.toFixed(2)} €`, 420, y + 9, { width: 70, align: "right" });
            doc.text(`${(item.price * item.qty).toFixed(2)} €`, 490, y + 9, { width: 55, align: "right" });

            y += 28;
        });

        // Table border
        doc.rect(50, tableTop, W, y - tableTop).strokeColor(BORDER).lineWidth(0.5).stroke();

        // ── Total ────────────────────────────────────────────────────
        y += 12;
        doc.rect(390, y, W - 340, 36).fill(BLACK);
        doc.fontSize(10).font("Helvetica-Bold").fillColor("#FFFFFF");
        doc.text("TOTAL TTC", 400, y + 12);
        doc.text(`${data.totalAmount.toFixed(2)} €`, 400, y + 12, { width: 145, align: "right" });

        // ── Footer ───────────────────────────────────────────────────
        const footerY = 750;
        doc.moveTo(50, footerY).lineTo(545, footerY).strokeColor(BORDER).lineWidth(0.5).stroke();
        doc.fontSize(8).font("Helvetica").fillColor(MUTED)
            .text("AD Boots · contact@ad-boots.com · ad-boots.com", 50, footerY + 10, { align: "center", width: W });
        doc.text("TVA non applicable — Article 293B du CGI", 50, footerY + 22, { align: "center", width: W });

        doc.end();
    });
}
