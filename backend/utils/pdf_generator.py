from fpdf import FPDF

def generate_pdf(question_paper, output_path):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.cell(200, 10, txt="Question Paper", ln=True, align='C')

    for question in question_paper:
        pdf.multi_cell(0, 10, txt=question)

    pdf.output(output_path)